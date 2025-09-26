import { Router } from "express";
import { spawn } from "child_process";
import path from "path";

const router = Router();

// Interface pour les requêtes du chatbot
interface ChatRequest {
  query: string;
  max_context_length?: number;
}

interface ChatResponse {
  response: string;
  confidence: number;
  sources: Array<{
    file: string;
    score: number;
    preview: string;
  }>;
  intent: string;
  entities: {
    standards: string[];
    controls: string[];
    domains: string[];
  };
  processing_time: number;
  timestamp: string;
}

// Fonction pour appeler le chatbot Gemini DIRECTEMENT
async function callGeminiChatbot(query: string, maxContextLength: number = 2000): Promise<ChatResponse> {
  return new Promise((resolve, reject) => {
    // Use gemini_chatbot.py directly - the main Gemini implementation
    const geminiChatbotScript = path.resolve(process.cwd(), 'ai-chatbot/api/gemini_chatbot.py');

    console.log(`Calling Gemini chatbot directly: ${geminiChatbotScript}`);

    // Launch Gemini chatbot directly with arguments and UTF-8 encoding
    const pythonProcess = spawn('python', [geminiChatbotScript, query, maxContextLength.toString()], {
      stdio: ['pipe', 'pipe', 'pipe'],
      encoding: 'utf8',
      env: { ...process.env, PYTHONIOENCODING: 'utf-8' }
    });

    let output = '';
    let errorOutput = '';

    pythonProcess.stdout.on('data', (data) => {
      output += data.toString('utf8');
    });

    pythonProcess.stderr.on('data', (data) => {
      errorOutput += data.toString('utf8');
    });

    pythonProcess.on('close', (code) => {
      console.log(`Script Python terminé avec le code: ${code}`);
      console.log(`Output: ${output}`);
      if (errorOutput) console.log(`Error: ${errorOutput}`);

      if (code === 0) {
        try {
          const result = JSON.parse(output);
          resolve(result);
        } catch (error) {
          reject(new Error(`Erreur parsing JSON: ${error}`));
        }
      } else {
        reject(new Error(`Script Python échoué (code ${code}): ${errorOutput}`));
      }
    });

    pythonProcess.on('error', (error) => {
      console.log(`Erreur lancement Python: ${error.message}`);
      reject(new Error(`Erreur lancement Python: ${error.message}`));
    });
  });
}

// Route pour le chat - GEMINI ONLY
router.post("/chat", async (req, res) => {
  try {
    const { query, max_context_length = 2000 }: ChatRequest = req.body;

    if (!query || query.trim().length === 0) {
      return res.status(400).json({
        error: "La requête ne peut pas être vide"
      });
    }

    console.log(`Gemini Chatbot query: ${query}`);

    // ONLY use Gemini chatbot - no fallbacks
    try {
      const result = await callGeminiChatbot(query, max_context_length);
      console.log(`Gemini response confidence: ${result.confidence}`);
      res.json(result);
    } catch (geminiError) {
      console.error('Erreur Gemini chatbot:', geminiError);

      // Return professional error message
      const errorResponse: ChatResponse = {
        response: "Je rencontre actuellement des difficultés techniques avec le service Gemini. Veuillez réessayer dans quelques instants ou vérifier que le service est correctement configuré.",
        confidence: 0.0,
        sources: [],
        intent: "technical_error",
        entities: {},
        processing_time: 0.001,
        timestamp: new Date().toISOString()
      };

      res.json(errorResponse);
    }

  } catch (error) {
    console.error('Erreur chatbot:', error);
    res.status(500).json({
      error: "Erreur interne du chatbot Gemini",
      message: error instanceof Error ? error.message : String(error)
    });
  }
});

// Route pour obtenir des suggestions
router.get("/suggestions", async (req, res) => {
  try {
    const suggestions = [
      "Quels sont les contrôles de la famille A.8 de l'ISO 27001 ?",
      "Comment mettre en place une gestion des risques selon l'ISO 27005 ?",
      "Quelles sont les exigences de l'ANCS pour l'audit de sécurité ?",
      "Comment évaluer l'efficacité des contrôles de sécurité ?",
      "Quels sont les objectifs de contrôle de l'ISO 27002 ?",
      "Comment documenter un audit de sécurité ?",
      "Quelles sont les phases d'un audit ISO 27001 ?",
      "Comment traiter les non-conformités lors d'un audit ?"
    ];
    
    res.json({ suggestions });
  } catch (error) {
    console.error('Erreur suggestions:', error);
    res.status(500).json({
      error: "Erreur lors de la récupération des suggestions"
    });
  }
});

// Route pour rechercher dans les documents
router.get("/search", async (req, res) => {
  try {
    const { query, top_k = 5 } = req.query;
    
    if (!query || typeof query !== 'string') {
      return res.status(400).json({
        error: "Paramètre 'query' requis"
      });
    }
    
    // Appeler le script de recherche Python
    const pythonScript = path.join(__dirname, '../../ai-chatbot/utils/search_cli.py');
    const result = await new Promise<any>((resolve, reject) => {
      const pythonProcess = spawn('python', [pythonScript, query, top_k.toString()]);
      
      let output = '';
      let errorOutput = '';
      
      pythonProcess.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      pythonProcess.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });
      
      pythonProcess.on('close', (code) => {
        if (code === 0) {
          try {
            resolve(JSON.parse(output));
          } catch (error) {
            reject(new Error(`Erreur parsing JSON: ${error}`));
          }
        } else {
          reject(new Error(`Script Python échoué: ${errorOutput}`));
        }
      });
    });
    
    res.json(result);
    
  } catch (error) {
    console.error('Erreur recherche:', error);
    res.status(500).json({
      error: "Erreur lors de la recherche"
    });
  }
});

// Route pour les statistiques du chatbot
router.get("/stats", async (req, res) => {
  try {
    try {
      // Appeler le script de stats Python
      const pythonScript = path.join(__dirname, '../../ai-chatbot/utils/stats_cli.py');
      const result = await new Promise<any>((resolve, reject) => {
        const pythonProcess = spawn('python', [pythonScript]);

        let output = '';
        let errorOutput = '';

        pythonProcess.stdout.on('data', (data) => {
          output += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
          errorOutput += data.toString();
        });

        pythonProcess.on('close', (code) => {
          if (code === 0) {
            try {
              resolve(JSON.parse(output));
            } catch (error) {
              reject(new Error(`Erreur parsing JSON: ${error}`));
            }
          } else {
            reject(new Error(`Script Python échoué: ${errorOutput}`));
          }
        });
      });

      res.json(result);
    } catch (pythonError) {
      // Mode fallback
      const fallbackStats = {
        status: "demo_mode",
        message: "Mode de démonstration - Configuration Python requise",
        total_documents: 0,
        total_chunks: 0,
        embedding_dimension: 0,
        model_name: "Configuration requise",
        documents: [],
        settings: {
          chunk_size: 512,
          chunk_overlap: 50,
          top_k_results: 5,
          similarity_threshold: 0.7
        }
      };

      res.json(fallbackStats);
    }

  } catch (error) {
    console.error('Erreur stats:', error);
    res.status(500).json({
      error: "Erreur lors de la récupération des statistiques"
    });
  }
});

export default router;
