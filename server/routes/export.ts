import { Router } from "express";
import fs from "fs";

const router = Router();

router.get("/excel", async (req, res) => {
  console.log('🚀 Début de la requête Excel');
  
  try {
    // Chemin absolu direct vers le fichier
    const filePath = "C:/Users/AX261LC/Desktop/Plateform/Plateform/data/Automated-Excel.xlsm";
    
    console.log('🔍 Chemin du fichier:', filePath);
    console.log('📁 Fichier existe:', fs.existsSync(filePath));
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(filePath)) {
      console.log('❌ FICHIER NON TROUVÉ !');
      return res.status(404).json({ 
        message: "Fichier Excel non trouvé",
        error: `Le fichier n'existe pas à: ${filePath}`
      });
    }
    
    // Obtenir les stats du fichier
    const stats = fs.statSync(filePath);
    console.log('📊 Stats du fichier:', {
      size: stats.size,
      created: stats.birthtime,
      modified: stats.mtime
    });
    
    console.log('✅ Fichier trouvé, lecture en cours...');
    
    // Lire le fichier
    const fileBuffer = fs.readFileSync(filePath);
    
    console.log('📊 Buffer créé, taille:', fileBuffer.length, 'bytes');
    console.log('🔍 Premiers bytes:', fileBuffer.slice(0, 20));
    
    // Définir les headers de réponse
    res.setHeader('Content-Type', 'application/vnd.ms-excel.sheet.macroEnabled.12');
    res.setHeader('Content-Disposition', `attachment; filename=Automated-Excel.xlsm`);
    res.setHeader('Content-Length', fileBuffer.length);
    res.setHeader('Cache-Control', 'no-cache');
    
    console.log('📤 Envoi du fichier...');
    
    // Envoyer le fichier
    res.send(fileBuffer);
    
    console.log('✅ Fichier envoyé avec succès !');
    
  } catch (error) {
    console.error('❌ Erreur lors du téléchargement Excel:', error);
    res.status(500).json({ 
      message: "Erreur lors du téléchargement du fichier Excel",
      error: error instanceof Error ? error.message : String(error)
    });
  }
});

export default router; 