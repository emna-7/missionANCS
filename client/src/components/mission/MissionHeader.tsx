import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Save, ArrowLeft } from "lucide-react";
import { ExportMenu } from "./ExportMenu";
import { Loader2 } from "lucide-react";

interface MissionHeaderProps {
  isEdit: boolean;
  title: string;
  companyName: string;
  progress: number;
  status: string;
  saving: boolean;
  onSave: () => void;
  onNavigateToMissions?: () => void;
  missionId?: number;
  currentSection?: number;
}

export function MissionHeader({
  isEdit,
  title,
  companyName,
  progress,
  status,
  saving,
  onSave,
  onNavigateToMissions,
  missionId,
  currentSection = 0
}: MissionHeaderProps) {
  const [createdDate] = useState(new Date());
  
  const getStatusBadge = () => {
    if (progress === 100) return <Badge className="bg-ey-yellow bg-opacity-20 text-ey-yellow-dark border border-ey-yellow border-opacity-30">Complété</Badge>;
    if (progress > 0) return <Badge className="bg-ey-gray-200 text-ey-gray-700 border border-ey-gray-300">En cours</Badge>;
    return <Badge className="bg-ey-gray-100 text-ey-gray-600 border border-ey-gray-200">Brouillon</Badge>;
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ey-gray-900">
            {title || "Nouvelle mission d'audit"}
            {companyName && ` - ${companyName}`}
          </h1>
          <p className="mt-1 text-ey-gray-500">
            {isEdit
              ? `Créée le ${createdDate.toLocaleDateString()} • Dernière modification ${formatDistanceToNow(new Date(), { addSuffix: true, locale: fr })}`
              : "Nouvelle mission d'audit"
            }
          </p>
          <div className="mt-2 flex items-center">
            {getStatusBadge()}
            <span className="ml-4 text-sm text-ey-gray-500">Progression: {progress}%</span>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-2">
          {onNavigateToMissions && (
            <Button
              variant="outline"
              onClick={onNavigateToMissions}
              className="flex items-center justify-center border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux missions
            </Button>
          )}

          <Button
            variant="outline"
            onClick={onSave}
            disabled={saving}
            className="flex items-center justify-center border-ey-yellow text-ey-yellow hover:bg-ey-yellow hover:text-ey-gray-900"
          >
            {saving ? (
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            ) : (
              <Save className="h-5 w-5 mr-2" />
            )}
            Sauvegarder
          </Button>
        </div>
      </div>
    </Card>
  );
}
