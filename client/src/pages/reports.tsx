import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, FileSpreadsheet, Download } from "lucide-react";
import { Mission } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function Reports() {
  const { toast } = useToast();
  const [selectedMissionId, setSelectedMissionId] = useState<string>("");
  const [generatingType, setGeneratingType] = useState<string | null>(null);

  const { data: missions, isLoading } = useQuery<Mission[]>({
    queryKey: ['/api/missions']
  });

  const handleExport = async () => {
    if (!selectedMissionId) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner une mission pour générer un rapport.",
        variant: "destructive",
      });
      return;
    }

    try {
      setGeneratingType("excel");
      
      // Fetch and trigger download from server export route
      const response = await fetch(`/api/missions/${selectedMissionId}/export/excel`, {
        credentials: "include"
      });
      
      if (!response.ok) {
        throw new Error(`Erreur lors de la génération du fichier (${response.status})`);
      }
      
      // Get the blob and create download link
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      // Use a friendlier default filename; server also sets Content-Disposition
      a.download = `Audit_Complet_${selectedMissionId}.xlsx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
      
      toast({
        title: "Rapport généré",
        description: "Le rapport Excel a été généré avec succès.",
      });
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: `Erreur lors de la génération du rapport: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setGeneratingType(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Rapports</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Générer un rapport</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Mission d'audit</label>
              <Select value={selectedMissionId} onValueChange={setSelectedMissionId}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une mission" />
                </SelectTrigger>
                <SelectContent>
                  {isLoading ? (
                    <div className="flex items-center justify-center p-4">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Chargement...
                    </div>
                  ) : missions && missions.length > 0 ? (
                    missions.map((mission) => (
                      <SelectItem key={mission.id} value={mission.id.toString()}>
                        {mission.title} - {mission.companyName}
                      </SelectItem>
                    ))
                  ) : (
                    <div className="p-2 text-sm text-muted-foreground">
                      Aucune mission disponible
                    </div>
                  )}
                </SelectContent>
              </Select>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <FileSpreadsheet className="h-5 w-5 mr-2 text-green-600" />
                  Excel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={handleExport} 
                  disabled={!selectedMissionId || Boolean(generatingType)}
                  className="w-full"
                >
                  {generatingType === "excel" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Génération...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Excel
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
