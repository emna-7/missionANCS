import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export default function AssistantIA() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Bonjour ! Je suis votre assistant IA pour les audits de sécurité. Comment puis-je vous aider aujourd\'hui ?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Réponses prédéfinies pour simuler l'IA
  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('audit') || message.includes('sécurité')) {
      return 'Pour un audit de sécurité efficace, je recommande de suivre la méthodologie ANCS. Voulez-vous que je vous guide à travers les étapes principales ?';
    }

    if (message.includes('ancs') || message.includes('référentiel')) {
      return 'Le référentiel ANCS (Agence Nationale de la Cybersécurité) comprend 93 contrôles répartis en 18 domaines. Souhaitez-vous des détails sur un domaine spécifique ?';
    }

    if (message.includes('risque') || message.includes('vulnérabilité')) {
      return 'L\'évaluation des risques suit une approche structurée : identification, analyse, évaluation et traitement. Je peux vous aider à classifier vos risques selon leur criticité.';
    }

    if (message.includes('rapport') || message.includes('export')) {
      return 'Pour générer un rapport d\'audit complet, utilisez la fonction d\'export Excel. Le rapport inclura automatiquement tous vos indicateurs de sécurité et recommandations.';
    }

    if (message.includes('maturité')) {
      return 'L\'évaluation de maturité utilise une échelle de 0 à 3 : 0=Inexistant, 1=Initial, 2=Reproductible, 3=Défini. Chaque contrôle ANCS est évalué selon cette grille.';
    }

    if (message.includes('bonjour') || message.includes('salut')) {
      return 'Bonjour ! Je suis là pour vous accompagner dans vos missions d\'audit de sécurité. Que souhaitez-vous savoir ?';
    }

    if (message.includes('aide') || message.includes('help')) {
      return 'Je peux vous aider avec :\n• Méthodologie d\'audit ANCS\n• Évaluation des risques\n• Classification des vulnérabilités\n• Génération de rapports\n• Recommandations de sécurité\n\nQue voulez-vous explorer ?';
    }

    return 'C\'est une excellente question ! Basé sur mon expertise en audit de sécurité, je vous recommande de consulter la section méthodologie de votre mission pour plus de détails. Avez-vous des questions spécifiques sur les contrôles ANCS ?';
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simuler un délai de réponse de l'IA
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputMessage),
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Assistant IA</h1>
        <p className="text-muted-foreground">
          Assistant intelligent pour vous aider dans vos missions d'audit de sécurité.
        </p>
      </div>

      <Card className="h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            Assistant Audit de Sécurité
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-blue-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="flex gap-2 mt-4">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Posez votre question sur l'audit de sécurité..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={isLoading || !inputMessage.trim()}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
