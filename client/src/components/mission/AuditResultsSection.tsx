import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Plus,
  Trash2,
  BookOpen,
  Scale,
  ClipboardList,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  BarChart2,
  PieChart,
  FileSearch,
  Download,
  FileText,
  Shield,
  Activity,
  LineChart,
  CheckSquare,
  XSquare,
  BarChart,
  Gauge,
  Info,
  Settings,
  Clock,
  Users,
  Search,
  XCircle

} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { ActionPlanTable } from "./ActionPlanTable";
import { cn } from "@/lib/utils";

interface AuditResultsSectionProps {
  form: any;
}

// Composant pour le tableau des indicateurs de sécurité
function SecurityAssessmentTable() {
  return (
    <div className="border rounded-lg overflow-hidden max-h-[600px] overflow-y-auto">
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-[30%]">Classe/Indicateur</TableHead>
            <TableHead className="w-[30%]">Valeur</TableHead>
            <TableHead className="w-[40%]">Commentaires</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Section: Organisation */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#B4D098'}}>
              Organisation
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Nomination officielle RSSI</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Fiche de poste RSSI</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rattachement RSSI</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DG">DG</SelectItem>
                  <SelectItem value="DSI">DSI</SelectItem>
                  <SelectItem value="Direction Administrative">Direction Administrative</SelectItem>
                  <SelectItem value="Direction Audit Interne">Direction Audit Interne</SelectItem>
                  <SelectItem value="Direction Risques">Direction Risques</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence officielle Cellule Sécurité</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence officielle Comité Sécurité</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: PSSI */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#B4D098'}}>
              PSSI
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence formelle PSSI</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Portée</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Communication</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Maintien de la PSSI</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Gestion de la continuité d'activité */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#B4D098'}}>
              Gestion de la continuité d'activité
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence formelle PCA</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence formelle PRA</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Maintien du PCA</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Maintien du PRA</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Organisation de crise en cas de sinistre</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Site Secours</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Gestion des actifs */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#B4D098'}}>
              Gestion des actifs
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Inventaire complet</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Procédure formelle de classification</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mise en place de la classification</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Gestion des risques SI Métier */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#B4D098'}}>
              Gestion des risques SI Métier
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence formelle de la gestion des risques</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture totale du Métier</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Réalisée une seule fois</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Fréquence Réalisation Périodique</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>En cas de changement majeur</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Gestion des incidents */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#B4D098'}}>
              Gestion des incidents
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Procédure formelle de gestion des incidents</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence d'une cellule de gestion des incidents</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Gestion des sauvegardes */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#B4D098'}}>
              Gestion des sauvegardes
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Politique formelle de sauvegarde</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des données métier</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des données de serveurs de support</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des données des PCs</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des running-config des équipements de sécurité &réseau</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture Clonage OS des serveurs</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des codes sources et des paramètres de configuration des applications et des logiciels de base</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Maintien de la solution de sauvegarde</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tests de restauration périodiques</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sécurité physique des copies de sauvegarde</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence des copies à un site distant</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Contrôle d'accès */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#B4D098'}}>
              Contrôle d'accès
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Politique formelle de contrôle d'accès</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: TdB SSI */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#B4D098'}}>
              TdB SSI
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence d'un Tableau de bord SSI</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Portée : indicateurs opérationnels</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Portée : indicateurs stratégiques</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Audit interne de la sécurité */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#B4D098'}}>
              Audit interne de la sécurité
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence de l'Audit interne de la sécurité</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Réalisation périodique de l'Audit interne</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Réalisation suite à un incident</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Réalisation suite à la mise en place d'un nouveau système</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Portée: uniquement aspects techniques</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Portée: aspects tech, org et phys</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Démarche de conformité */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#B4D098'}}>
              Démarche de conformité
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence d'une démarche de conf</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Nature</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="exemples: ANCS/PCI/DSS" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ANCS">ANCS</SelectItem>
                  <SelectItem value="PCI/DSS">PCI/DSS</SelectItem>
                  {/* Ajouter d'autres normes ici si nécessaire */}
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Etape</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="certifié">certifié</SelectItem>
                  <SelectItem value="projet en cours">projet en cours</SelectItem>
                  <SelectItem value="planifié">planifié</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Protection antivirale */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#5B9BD5'}}>
              Protection antivirale
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence d'une solution antivirale</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>MAJ périodique de la Sol Antivirale</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des serveurs</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des PCs</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>



          {/* Section: Processus MAJ des firmwares Equips Sécurité */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#5B9BD5'}}>
              Processus MAJ des firmwares Equips Sécurité
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Processus MAJ des firmwares Equips Réseau */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#5B9BD5'}}>
              Processus MAJ des firmwares Equips Réseau
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Remplacement des produits dont la date EoL ou EoS expiré */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#5B9BD5'}}>
              Remplacement des produits dont la date EoL ou EoS expiré
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Remp OS Serveurs EoL EoS</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Total">Total</SelectItem>
                  <SelectItem value="Partie">Partie</SelectItem>
                  <SelectItem value="Planifié">Planifié</SelectItem>
                  <SelectItem value="Absence">Absence</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Remp OS PCs EoL EoS</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Total">Total</SelectItem>
                  <SelectItem value="Partie">Partie</SelectItem>
                  <SelectItem value="Planifié">Planifié</SelectItem>
                  <SelectItem value="Absence">Absence</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Remp Produits Sécurité EoL EoS</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Total">Total</SelectItem>
                  <SelectItem value="Partie">Partie</SelectItem>
                  <SelectItem value="Planifié">Planifié</SelectItem>
                  <SelectItem value="Absence">Absence</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Remp Produits Réseau EoL EoS</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Total">Total</SelectItem>
                  <SelectItem value="Partie">Partie</SelectItem>
                  <SelectItem value="Planifié">Planifié</SelectItem>
                  <SelectItem value="Absence">Absence</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Contrôle d'accès logique */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#5B9BD5'}}>
              Contrôle d'accès logique
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Utilisation Contrôleur de domaines</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Utilisation d'une Solution IAM</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Utilisation Proxy Accès Internet</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Matrice de Flux Réseau MFR formelle</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Implementation règles de filtr - Equips frontaux- cf MFR</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Implementation Filtrage inter-VLAN cf MFR</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Réseau d'administration */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#5B9BD5'}}>
              Réseau d'administration
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence d'un réseau d'admin</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Isolé du réseau production et Internet</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Admin qu'à partir des machines de ce réseau</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Utilisation protocoles admin chiffrés</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Séparation des environnements */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#5B9BD5'}}>
              Séparation des environnements
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sép infras dév, test et exploitation</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Sécurité des partages */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#5B9BD5'}}>
              Sécurité des partages
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Désactiv des partages rés sur les serveurs</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Désactiv des partages rés sur les PCs</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Utilisation des serveurs de fichier</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Système de détection/Prévention d'intrusion */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#5B9BD5'}}>
              Système de détection/Prévention d'intrusion
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Déf politique de détection et de prévention d'intrusion</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Configuration par défaut des alertes</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Configuration cf à la politique des IDS/IPS</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Processus de suivi des alertes générées</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Solution SIEM */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#5B9BD5'}}>
              Solution SIEM
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Portée: Serveurs</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Portée: Equips Séc</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Portée: Equips Rés</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Synchronisation des horloges</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Contrats de maintenance */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#5B9BD5'}}>
              Contrats de maintenance
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des Serveurs</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des applications métier</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des SGBDs</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des équips sécurité</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture des équips réseau</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Local Data-center */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#FFB366'}}>
              Local Data-center
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Classification</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Non-classé">Non-classé</SelectItem>
                  <SelectItem value="Tier1">Tier1</SelectItem>
                  <SelectItem value="Tier2">Tier2</SelectItem>
                  <SelectItem value="Tier3">Tier3</SelectItem>
                  <SelectItem value="Tier4">Tier4</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Zones d'emplacement</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Forts Risques">Forts Risques</SelectItem>
                  <SelectItem value="Faibles">Faibles</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Risques</TableCell>
            <TableCell>
              {/* Champ vide comme dans l'image */}
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Contrôle d'accès au Data-Center</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Exemples: Clé/Carte magnétique/Biométrie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Clé">Clé</SelectItem>
                  <SelectItem value="Carte magnétique">Carte magnétique</SelectItem>
                  <SelectItem value="Biométrie">Biométrie</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Secours électrique */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#FFB366'}}>
              Secours électrique
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture onduleurs Serveurs</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture onduleurs Equips rés & séc</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Couverture onduleurs PCs</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Absence">Absence</SelectItem>
                  <SelectItem value="Partielle">Partielle</SelectItem>
                  <SelectItem value="Totale">Totale</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Existence Groupe électrogène</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Test régulier du groupe électrogène</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Sécurité de la climatisation DC */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#FFB366'}}>
              Sécurité de la climatisation DC
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Système de climatisation adéquate</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Redondance</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Contrat de maintenance</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Sécurité Câblage */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#FFB366'}}>
              Sécurité Câblage
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Chemins de câbles dédiés et séparés</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Etiquetage</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Plans de chemins de câblage</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Sécurité périmétrique DC */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#FFB366'}}>
              Sécurité périmétrique DC
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Solution de détection d'intrusion</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Système de vidéo-surveillance</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Murs résistants aux intrusions physiques et aux incendies et dépourvus de fenêtres</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Sécurité Incendie DC */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#FFB366'}}>
              Sécurité Incendie DC
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Détecteurs de fumée</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Extincteurs automatiques</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Porte Data Center Coupe-feu</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Sécurité contre les dégâts des eaux */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#FFB366'}}>
              Sécurité contre les dégâts des eaux
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Détecteurs d'humidité</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Système d'alerte</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>

          {/* Section: Dispositif Anti-foudre */}
          <TableRow className="bg-gray-50">
            <TableCell colSpan={3} className="font-semibold" style={{backgroundColor: '#FFB366'}}>
              Dispositif Anti-foudre
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dispositif Anti-foudre</TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Input placeholder="Commentaire..." className="w-full" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export function AuditResultsSection({ form }: AuditResultsSectionProps) {
  const [activeTab, setActiveTab] = useState("standards");
  const [showVulnerabilityTable, setShowVulnerabilityTable] = useState(false);

  const [previousYear, setPreviousYear] = useState("2023");
  const [followingYear] = useState(new Date().getFullYear().toString());

  // État pour gérer les indicateurs d'évolution
  const [indicators, setIndicators] = useState([
    {
      id: 1,
      name: "Taux de vulnérabilités corrigées",
      previousValue: 70,
      followingValue: 85,
      unit: "%"
    },
    {
      id: 2,
      name: "Temps moyen de résolution des incidents",
      previousValue: 48,
      followingValue: 24,
      unit: "h"
    },
    {
      id: 3,
      name: "Nombre d'utilisateurs formés à la sécurité",
      previousValue: 150,
      followingValue: 280,
      unit: ""
    },
    {
      id: 4,
      name: "Score de conformité réglementaire",
      previousValue: 75,
      followingValue: 92,
      unit: "%"
    },
    {
      id: 5,
      name: "Nombre de tests de pénétration réalisés",
      previousValue: 2,
      followingValue: 4,
      unit: ""
    }
  ]);



  // Structure de données pour les projets et leurs actions
  const [projects, setProjects] = useState([
    {
      id: "projet-1",
      name: "Projet 1",
      description: "Sécurité des Accès",
      icon: "Shield",
      actions: [
        {
          id: "action-1-1",
          description: "Action 1.1 : Mise à jour des contrôles d'accès et révision des permissions utilisateurs",
          criticality: "Haute",
          responsible: "Équipe SI",
          workload: "10",
          completion: "100",
          evaluation: "Action complétée avec succès. Tous les contrôles d'accès ont été mis à jour selon les nouvelles procédures."
        },
        {
          id: "action-1-2",
          description: "Action 1.2 : Formation à la sécurité informatique pour tous les utilisateurs",
          criticality: "Moyenne",
          responsible: "Responsable sécurité",
          workload: "5",
          completion: "100",
          evaluation: "Formation dispensée à 95% du personnel. Excellente participation et retours positifs."
        },
        {
          id: "action-1-3",
          description: "Action 1.3 : Audit complet des vulnérabilités système et réseau",
          criticality: "Haute",
          responsible: "Équipe sécurité",
          workload: "8",
          completion: "75",
          evaluation: "Un audit des vulnérabilités a été effectué, mais des lacunes ont été identifiées."
        }
      ]
    },
    {
      id: "projet-2",
      name: "Projet 2",
      description: "Infrastructure & Réseau",
      icon: "Settings",
      actions: [
        {
          id: "action-2-1",
          description: "Action 2.1 : Mise en place de pare-feu nouvelle génération avec filtrage avancé",
          criticality: "Haute",
          responsible: "Responsable infrastructure",
          workload: "15",
          completion: "100",
          evaluation: "Pare-feu installé et configuré avec succès."
        },
        {
          id: "action-2-2",
          description: "Action 2.2 : Sauvegarde des données critiques et mise en place de procédures",
          criticality: "Moyenne",
          responsible: "Équipe IT",
          workload: "6",
          completion: "85",
          evaluation: "La sauvegarde est partiellement automatisée."
        },
        {
          id: "action-2-3",
          description: "Action 2.3 : Révision des accès aux systèmes",
          criticality: "Faible",
          responsible: "Responsable sécurité",
          workload: "3",
          completion: "90",
          evaluation: "Les révisions des accès ont été effectuées."
        }
      ]
    }
  ]);

  // État pour gérer les référentiels
  const [referentials, setReferentials] = useState([
    {
      id: 1,
      name: "Référentiel ANCS",
      description: "Basé sur le référentiel d'audit de la sécurité des systèmes d'information établi par l'ANCS."
    },
    {
      id: 2,
      name: "ANCS-27002",
      description: ""
    }
  ]);
  const [newReferentialName, setNewReferentialName] = useState("");
  const [newReferentialDescription, setNewReferentialDescription] = useState("");
  const [isAddingReferential, setIsAddingReferential] = useState(false);

  // États pour gérer les responsabilités
  const [responsibilities, setResponsibilities] = useState([
    {
      id: 1,
      responsibility: "L'auditeur évalue la sécurité du SI en fonction des référentiels définis.",
      limit: "L'audit a été réalisé sur un périmètre limité par échantillonnage."
    },
    {
      id: 2,
      responsibility: "L'auditeur doit identifier les risques de sécurité et proposer des recommandations.",
      limit: "Les changements après l'audit ne sont pas inclus."
    },
    {
      id: 3,
      responsibility: "Assurer la conformité aux normes et standards de sécurité.",
      limit: "Certaines parties du SI n'ont pas été auditées en raison de contraintes de temps ou de ressources."
    }
  ]);
  const [newResponsibility, setNewResponsibility] = useState("");
  const [newLimit, setNewLimit] = useState("");
  const [isAddingResponsibility, setIsAddingResponsibility] = useState(false);

  // États pour gérer les tests
  const [tests, setTests] = useState([
    {
      id: 1,
      type: "Revue documentaire",
      nature: "Examen des politiques, procédures, registres, PVs de réunion et documents techniques.",
      objective: "Vérifier l'existence et la qualité de la documentation de sécurité",
      justification: "Page 5 : 'Revue des documents de la PSI et des politiques spécifiques' (Contrôle 5.1). Page 7 : 'Revue des fiches de poste, des décisions et notes internes' (Contrôle 5.2)."
    },
    {
      id: 2,
      type: "Entretiens/Interviews",
      nature: "Discussions individuelles avec le personnel (DG, RSSI, administrateurs, utilisateurs).",
      objective: "Évaluer la compréhension et l'application des politiques de sécurité",
      justification: "Page 5 : 'Entretien avec le DG, Interviews d'un échantillon des utilisateurs' (Contrôle 5.1). Page 14 : 'Interview du RSI, des administrateurs systèmes et BD' (Contrôle 5.15)."
    },
    {
      id: 3,
      type: "Ateliers/Réunions",
      nature: "Sessions collaboratives pour valider les processus, responsabilités et plans (ex: comités de sécurité).",
      objective: "Valider les processus et responsabilités de sécurité",
      justification: "Page 5 : 'Revue des PVs de réunion du comité de sécurité' (Contrôle 5.1). Page 9 : 'Revue des PVs des réunions des équipes de projets' (Contrôle 5.8)."
    },
    {
      id: 4,
      type: "Vérification technique",
      nature: "Tests d'accès, contrôle des configurations, scans de vulnérabilités, tests de restauration.",
      objective: "Identifier les points faibles dans la sécurité technique",
      justification: "Page 15 : 'Vérification des droits d'accès sur les serveurs' (Contrôle 5.15). Page 68 : 'Tests de résistance des systèmes' (Contrôle 8.6). Page 75 : 'Tests de restauration des sauvegardes' (Contrôle 8.13)."
    },
    {
      id: 5,
      type: "Inspection physique",
      nature: "Contrôle visuel des périmètres de sécurité, équipements et conformité environnementale.",
      objective: "Vérifier la sécurité physique des installations",
      justification: "Page 43 : 'Inspection visuelle des périmètres de sécurité' (Contrôle 7.1). Page 52 : 'Vérification des conditions ambiantes (température, humidité)' (Contrôle 7.8)."
    },
    {
      id: 6,
      type: "Analyse de logs",
      nature: "Examen des journaux d'activité, accès et alertes pour détecter des anomalies.",
      objective: "Identifier des comportements anormaux ou non autorisés",
      justification: "Page 78 : 'Revue des enregistrements de surveillance' (Contrôle 8.15). Page 79 : 'Analyse des événements menés avec des droits d'administration' (Contrôle 8.15)."
    },
    {
      id: 7,
      type: "Test de vulnérabilité",
      nature: "Analyse des vulnérabilités des systèmes",
      objective: "Identifier les points faibles dans la sécurité",
      justification: ""
    },
    {
      id: 8,
      type: "Test de pénétration",
      nature: "Simulation d'attaque pour vérifier la sécurité",
      objective: "Tester la résistance du SI contre les intrusions",
      justification: ""
    },
    {
      id: 9,
      type: "Audit de conformité",
      nature: "Vérification de la conformité aux normes",
      objective: "Assurer que le SI respecte les référentiels de sécurité",
      justification: ""
    }
  ]);
  const [newTestType, setNewTestType] = useState("");
  const [newTestNature, setNewTestNature] = useState("");
  const [newTestObjective, setNewTestObjective] = useState("");
  const [newTestJustification, setNewTestJustification] = useState("");
  const [isAddingTest, setIsAddingTest] = useState(false);
  // Fonctions pour gérer les référentiels
  const addReferential = () => {
    if (newReferentialName.trim()) {
      const newReferential = {
        id: referentials.length > 0 ? Math.max(...referentials.map(r => r.id)) + 1 : 1,
        name: newReferentialName.trim(),
        description: newReferentialDescription.trim()
      };
      setReferentials([...referentials, newReferential]);
      setNewReferentialName("");
      setNewReferentialDescription("");
      setIsAddingReferential(false);
      console.log("Référentiel ajouté:", newReferential);
    } else {
      alert("Veuillez saisir un nom pour le référentiel");
    }
  };

  const cancelAddReferential = () => {
    setNewReferentialName("");
    setNewReferentialDescription("");
    setIsAddingReferential(false);
  };

  const startAddingReferential = () => {
    console.log("Démarrage de l'ajout d'un référentiel");
    console.log("État actuel isAddingReferential:", isAddingReferential);
    setIsAddingReferential(true);
    console.log("État après setIsAddingReferential(true)");
  };

  const removeReferential = (id: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce référentiel ?")) {
      setReferentials(referentials.filter(r => r.id !== id));
    }
  };

  const updateReferential = (id: number, field: string, value: string) => {
    setReferentials(referentials.map(r =>
      r.id === id ? { ...r, [field]: value } : r
    ));
  };

  // Fonctions pour gérer les responsabilités
  const addResponsibility = () => {
    if (newResponsibility.trim()) {
      const newResp = {
        id: responsibilities.length > 0 ? Math.max(...responsibilities.map(r => r.id)) + 1 : 1,
        responsibility: newResponsibility.trim(),
        limit: newLimit.trim()
      };
      setResponsibilities([...responsibilities, newResp]);
      setNewResponsibility("");
      setNewLimit("");
      setIsAddingResponsibility(false);
      console.log("Responsabilité ajoutée:", newResp);
    } else {
      alert("Veuillez saisir une responsabilité");
    }
  };

  const cancelAddResponsibility = () => {
    setNewResponsibility("");
    setNewLimit("");
    setIsAddingResponsibility(false);
  };

  const startAddingResponsibility = () => {
    console.log("Démarrage de l'ajout d'une responsabilité");
    setIsAddingResponsibility(true);
  };

  const removeResponsibility = (id: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette responsabilité ?")) {
      setResponsibilities(responsibilities.filter(r => r.id !== id));
    }
  };

  const updateResponsibility = (id: number, field: string, value: string) => {
    setResponsibilities(responsibilities.map(r =>
      r.id === id ? { ...r, [field]: value } : r
    ));
  };

  // Fonctions pour gérer les tests
  const addTest = () => {
    if (newTestType.trim()) {
      const newTest = {
        id: tests.length > 0 ? Math.max(...tests.map(t => t.id)) + 1 : 1,
        type: newTestType.trim(),
        nature: newTestNature.trim(),
        objective: newTestObjective.trim(),
        justification: newTestJustification.trim()
      };
      setTests([...tests, newTest]);
      setNewTestType("");
      setNewTestNature("");
      setNewTestObjective("");
      setNewTestJustification("");
      setIsAddingTest(false);
      console.log("Test ajouté:", newTest);
    } else {
      alert("Veuillez saisir un type de test");
    }
  };

  const cancelAddTest = () => {
    setNewTestType("");
    setNewTestNature("");
    setNewTestObjective("");
    setNewTestJustification("");
    setIsAddingTest(false);
  };

  const startAddingTest = () => {
    console.log("Démarrage de l'ajout d'un test");
    setIsAddingTest(true);
  };

  const removeTest = (id: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce test ?")) {
      setTests(tests.filter(t => t.id !== id));
    }
  };

  const updateTest = (id: number, field: string, value: string) => {
    setTests(tests.map(t =>
      t.id === id ? { ...t, [field]: value } : t
    ));
  };





  // États pour les constats synchronisés
  const [goodPractices, setGoodPractices] = useState<Array<{
    controlId: string;
    description: string;
    level: string;
    recommendation: string;
  }>>([]);

  const [deficiencies, setDeficiencies] = useState<Array<{
    controlId: string;
    description: string;
    level: string;
    correctiveAction: string;
  }>>([]);

  // Ajoutons un état pour suivre les valeurs sélectionnées
  const [maturityValues, setMaturityValues] = useState({
    "A5.1": "5",
    "A5.2": "4",
    "A5.3": "5",
    "A5.4": "4",
    "A5.5": "5",
    "A5.6": "0", // Exemple de vulnérabilité
    "A5.7": "2",
    "A5.8": "0", // Exemple de vulnérabilité
    "A5.9": "4",
    "A5.10": "5",
    "A5.11": "5",
    "A5.12": "4",
    "A5.13": "5",
    "A5.14": "4",
    "A5.15": "4",
    "A5.16": "4",
    "A5.17": "4",
    "A5.18": "4",
    "A5.19": "4",
    "A5.20": "4",
    "A5.21": "4",
    "A5.22": "4",
    "A5.23": "4",
    "A5.24": "4",
    "A5.25": "4",
    "A5.26": "4",
    "A5.27": "4",
    "A5.28": "4",
    "A5.29": "4",
    "A5.30": "4",
    "A5.31": "4",
    "A5.32": "4",
    "A5.33": "4",
    "A5.34": "4",
    "A5.35": "4",
    "A5.36": "4",
    "A5.37": "4",
    // Ajout des nouvelles clés pour la section Personnel
    "A6.1": "5",
    "A6.2": "5",
    "A6.3": "3",
    "A6.4": "0",
    "A6.5": "0",
    "A6.6": "4",
    "A6.7": "N/A",
    "A6.8": "5",
    // Nouvelles clés pour la section Sécurité physique
    "A7.1": "5",
    "A7.2": "5",
    "A7.3": "4",
    "A7.4": "3",
    "A7.5": "2",
    "A7.6": "0",
    "A7.7": "5",
    "A7.8": "4",
    "A7.9": "3",
    "A7.10": "2",
    "A7.11": "0",
    "A7.12": "5",
    "A7.13": "4",
    "A7.14": "5",
    // Nouvelles clés pour la section Sécurité technologique
    "A8.1": "4",
    "A8.2": "5",
    "A8.3": "3",
    "A8.4": "0",
    "A8.5": "5",
    "A8.6": "4",
    "A8.7": "5",
    "A8.8": "3",
    "A8.9": "4",
    "A8.10": "5",
    "A8.11": "2",
    "A8.12": "3",
    "A8.13": "5",
    "A8.14": "4",
    "A8.15": "5",
    "A8.16": "4",
    "A8.17": "5",
    "A8.18": "0",
    "A8.19": "3",
    "A8.20": "5",
    "A8.21": "4",
    "A8.22": "4",
    "A8.23": "5",
    "A8.24": "5",
    "A8.25": "3",
    "A8.26": "4",
    "A8.27": "5",
    "A8.28": "5",
    "A8.29": "4",
    "A8.30": "3",
    "A8.31": "4",
    "A8.32": "5",
    "A8.33": "3",
    "A8.34": "4"
  });

  // Fonction pour obtenir la couleur de fond en fonction de la valeur
  const getMaturityColor = (value: string) => {
    switch(value) {
      case "N/A": return "bg-gray-100 text-gray-500";
      case "0": return "bg-red-600 text-white";
      case "1": return "bg-red-400 text-white";
      case "2": return "bg-orange-400 text-white";
      case "3": return "bg-yellow-500 text-white";
      case "4": return "bg-green-400 text-white";
      case "5": return "bg-green-600 text-white";
      default: return "";
    }
  };

  // Fonction pour obtenir la couleur du SelectTrigger
  const getSelectTriggerClass = (value: string) => {
    switch(value) {
      case "N/A": return "border-gray-300 bg-gray-100 text-gray-500";
      case "0": return "border-red-600 bg-red-50 text-red-600";
      case "1": return "border-red-400 bg-red-50 text-red-500";
      case "2": return "border-orange-400 bg-orange-50 text-orange-500";
      case "3": return "border-yellow-500 bg-yellow-50 text-yellow-600";
      case "4": return "border-green-400 bg-green-50 text-green-500";
      case "5": return "border-green-600 bg-green-50 text-green-600";
      default: return "";
    }
  };

  // Fonction pour mettre à jour la valeur de maturité
  const handleMaturityChange = (key: string, value: string) => {
    setMaturityValues(prev => ({
      ...prev,
      [key]: value
    }));
  };



  // Fonctions pour gérer les projets
  const handleAddNewProject = () => {
    // Calculer le prochain numéro de projet en analysant les noms existants
    const existingProjectNumbers = projects
      .map(project => {
        // Chercher les patterns "Projet X" dans les noms
        const match = project.name.match(/Projet\s+(\d+)/i);
        return match ? parseInt(match[1]) : 0;
      })
      .filter(num => num > 0);

    // Déterminer le prochain numéro
    let nextProjectNumber;
    if (existingProjectNumbers.length > 0) {
      nextProjectNumber = Math.max(...existingProjectNumbers) + 1;
    } else {
      // Si aucun projet avec numérotation n'existe, commencer à 1 ou continuer la séquence
      nextProjectNumber = projects.length + 1;
    }

    // Créer automatiquement un nouveau projet avec la même structure que les autres
    const newProject = {
      id: `projet-${Date.now()}`,
      name: `Projet ${nextProjectNumber}`,
      description: `Description du projet ${nextProjectNumber}`,
      icon: "Settings",
      actions: [
        {
          id: `action-${Date.now()}-1`,
          description: `Action ${nextProjectNumber}.1 : Première action du projet ${nextProjectNumber}`,
          criticality: "Moyenne",
          responsible: "À définir",
          workload: "0",
          completion: "0",
          evaluation: "Action à planifier et réaliser."
        }
      ]
    };

    setProjects(prevProjects => [...prevProjects, newProject]);

    // Message de confirmation
    console.log(`✅ Nouveau projet créé automatiquement: ${newProject.name}`);

    // Optionnel : Afficher une notification à l'utilisateur
    // alert(`Projet "${newProject.name}" créé avec succès !`);
  };

  // Fonction pour créer un nouveau projet depuis le tableau
  const addProject = () => {
    // Calculer le prochain numéro de projet
    const existingProjectNumbers = projects
      .map(project => {
        const match = project.name.match(/Projet\s+(\d+)/i);
        return match ? parseInt(match[1]) : 0;
      })
      .filter(num => num > 0);

    let nextProjectNumber;
    if (existingProjectNumbers.length > 0) {
      nextProjectNumber = Math.max(...existingProjectNumbers) + 1;
    } else {
      nextProjectNumber = projects.length + 1;
    }

    const newProject = {
      id: `projet-${Date.now()}`,
      name: `Projet ${nextProjectNumber}`,
      description: `Description du projet ${nextProjectNumber}`,
      icon: "Settings",
      actions: [
        {
          id: `action-${Date.now()}-1`,
          description: `Action ${nextProjectNumber}.1 : Première action du projet ${nextProjectNumber}`,
          criticality: "Moyenne",
          responsible: "À définir",
          workload: "0",
          completion: "0",
          evaluation: ""
        }
      ]
    };

    setProjects(prevProjects => [...prevProjects, newProject]);
    console.log(`✅ Nouveau projet créé: ${newProject.name}`);
  };







  // Fonctions pour gérer les indicateurs
  const addNewIndicator = () => {
    const newIndicator = {
      id: indicators.length > 0 ? Math.max(...indicators.map(i => i.id)) + 1 : 1,
      name: "Nouvel indicateur",
      previousValue: 0,
      followingValue: 0,
      unit: "%"
    };
    setIndicators([...indicators, newIndicator]);
  };

  const removeIndicator = (id: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet indicateur ?")) {
      setIndicators(indicators.filter(i => i.id !== id));
    }
  };

  const updateIndicator = (id: number, field: string, value: any) => {
    setIndicators(indicators.map(i =>
      i.id === id ? { ...i, [field]: value } : i
    ));
  };

  const calculateVariation = (previousValue: number, followingValue: number) => {
    if (previousValue === 0) return followingValue > 0 ? 100 : 0;
    return Math.round(((followingValue - previousValue) / previousValue) * 100);
  };



  // Fonctions pour gérer les années
  const handlePreviousYearChange = (year: string) => {
    const yearNum = parseInt(year);
    const followingYearNum = parseInt(followingYear);

    // Validation : année précédente doit être valide et inférieure à l'année suivante
    if (yearNum >= 2000 && yearNum < followingYearNum) {
      setPreviousYear(year);
    }
  };

  // L'année suivante est fixe (année actuelle), pas besoin de fonction de changement

  // Fonctions pour gérer les constats d'audit
  const handleEditFinding = (findingId: number) => {
    console.log("Modifier le constat:", findingId);
    // Ici vous pouvez ajouter la logique pour modifier un constat
    // Par exemple, ouvrir un modal d'édition
  };

  const handleDeleteFinding = (findingId: number) => {
    console.log("Supprimer le constat:", findingId);
    // Ici vous pouvez ajouter la logique pour supprimer un constat
    // Par exemple, afficher une confirmation puis supprimer
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce constat ?")) {
      // Logique de suppression
      console.log("Constat supprimé:", findingId);
    }
  };

  // Fonctions pour calculer les statistiques automatiquement
  const calculateImprovements = () => {
    return indicators.filter(indicator =>
      calculateVariation(indicator.previousValue, indicator.followingValue) > 0
    ).length;
  };

  const calculateAverageVariation = () => {
    if (indicators.length === 0) return 0;
    const totalVariation = indicators.reduce((sum, indicator) =>
      sum + calculateVariation(indicator.previousValue, indicator.followingValue), 0
    );
    return Math.round(totalVariation / indicators.length);
  };

  const calculateGlobalPerformance = () => {
    if (indicators.length === 0) return 0;
    const totalCurrentValue = indicators.reduce((sum, indicator) => sum + indicator.followingValue, 0);
    const totalPossibleValue = indicators.length * 100; // Assumant que 100 est la valeur maximale
    return Math.round((totalCurrentValue / totalPossibleValue) * 100);
  };

  const getVariationTrend = (variation: number) => {
    if (variation > 0) return "tendance positive";
    if (variation < 0) return "tendance négative";
    return "stable";
  };

  const getPerformanceLevel = (performance: number) => {
    if (performance >= 80) return "très bon niveau";
    if (performance >= 60) return "bon niveau";
    if (performance >= 40) return "niveau moyen";
    return "niveau faible";
  };



  // Base de données complète des contrôles ANCS:2022
  const getControlDatabase = (): { [key: string]: { name: string, category: string } } => ({
    // A5 - Mesures de sécurité organisationnelles
    "A5.1": { name: "Politiques de sécurité de l'information", category: "Gouvernance" },
    "A5.2": { name: "Politiques spécifiques de sécurité de l'information", category: "Gouvernance" },
    "A5.3": { name: "Fonctions et responsabilités liées à la sécurité de l'information", category: "Gouvernance" },
    "A5.4": { name: "Séparation des tâches", category: "Gouvernance" },
    "A5.5": { name: "Responsabilités de la direction", category: "Gouvernance" },
    "A5.6": { name: "Contacts avec les autorités", category: "Gouvernance" },
    "A5.7": { name: "Contacts avec des groupes d'intérêt spécifiques", category: "Gouvernance" },
    "A5.8": { name: "Renseignement sur les menaces", category: "Gestion des menaces et des vulnérabilités" },
    "A5.9": { name: "Sécurité de l'information dans la gestion de projet", category: "Gouvernance" },
    "A5.10": { name: "Inventaire des informations et autres actifs associés", category: "Gestion des actifs" },
    "A5.11": { name: "Utilisation correcte des informations et autres actifs associés", category: "Gestion des actifs et Protection des informations" },
    "A5.12": { name: "Restitution des actifs", category: "Gestion des actifs" },
    "A5.13": { name: "Classification des informations", category: "Protection des informations" },
    "A5.14": { name: "Marquage des informations", category: "Protection des informations" },
    "A5.15": { name: "Transfert des informations", category: "Gestion des actifs et Protection des informations" },
    "A5.16": { name: "Étiquetage et manipulation des informations", category: "Protection des informations" },
    "A5.17": { name: "Authentification des informations", category: "Protection des informations" },
    "A5.18": { name: "Droits d'accès", category: "Contrôle d'accès" },
    "A5.19": { name: "Sécurité de l'information dans les relations avec les fournisseurs", category: "Relations avec les fournisseurs" },
    "A5.20": { name: "Traitement de la sécurité de l'information dans les accords avec les fournisseurs", category: "Relations avec les fournisseurs" },
    "A5.21": { name: "Gestion de la sécurité de l'information dans la chaîne d'approvisionnement des TIC", category: "Relations avec les fournisseurs" },
    "A5.22": { name: "Surveillance, révision et gestion des changements des services de fournisseurs", category: "Relations avec les fournisseurs" },
    "A5.23": { name: "Sécurité de l'information pour l'utilisation de services cloud", category: "Relations avec les fournisseurs" },
    "A5.24": { name: "Planification et préparation de la gestion des incidents de sécurité de l'information", category: "Gestion des incidents de sécurité de l'information" },
    "A5.25": { name: "Évaluation et décision concernant les événements de sécurité de l'information", category: "Gestion des incidents de sécurité de l'information" },
    "A5.26": { name: "Réponse aux incidents de sécurité de l'information", category: "Gestion des incidents de sécurité de l'information" },
    "A5.27": { name: "Apprentissage à partir des incidents de sécurité de l'information", category: "Gestion des incidents de sécurité de l'information" },
    "A5.28": { name: "Collecte de preuves", category: "Gestion des incidents de sécurité de l'information" },
    "A5.29": { name: "Sécurité de l'information pendant la perturbation", category: "Gestion de la continuité de l'activité de sécurité de l'information" },
    "A5.30": { name: "Préparation des TIC pour la continuité de l'activité", category: "Gestion de la continuité de l'activité de sécurité de l'information" },
    "A5.31": { name: "Exigences légales, statutaires, réglementaires et contractuelles", category: "Conformité" },
    "A5.32": { name: "Droits de propriété intellectuelle", category: "Conformité" },
    "A5.33": { name: "Protection des enregistrements", category: "Conformité" },
    "A5.34": { name: "Confidentialité et protection des informations à caractère personnel", category: "Conformité" },
    "A5.35": { name: "Révision indépendante de la sécurité de l'information", category: "Conformité" },
    "A5.36": { name: "Conformité aux politiques, règles et normes de sécurité de l'information", category: "Conformité" },
    "A5.37": { name: "Procédures d'exploitation documentées", category: "Conformité" },

    // A6 - Mesures liées aux personnes
    "A6.1": { name: "Sélection", category: "Contrôles internes" },
    "A6.2": { name: "Conditions d'emploi", category: "Contrôles internes" },
    "A6.3": { name: "Sensibilisation, éducation et formation à la sécurité de l'information", category: "Contrôles internes" },
    "A6.4": { name: "Processus disciplinaire", category: "Contrôles internes" },
    "A6.5": { name: "Responsabilités de sécurité de l'information dans le télétravail", category: "Contrôles internes" },
    "A6.6": { name: "Accords de confidentialité ou de non-divulgation", category: "Contrôles internes" },
    "A6.7": { name: "Travail à distance", category: "Contrôles internes" },
    "A6.8": { name: "Signalement des événements de sécurité de l'information", category: "Contrôles internes" },

    // A7 - Mesures d'ordre physique et environnemental
    "A7.1": { name: "Périmètres de sécurité physique", category: "Zones sécurisées" },
    "A7.2": { name: "Contrôles d'accès physique", category: "Zones sécurisées" },
    "A7.3": { name: "Protection contre les menaces environnementales", category: "Zones sécurisées" },
    "A7.4": { name: "Travail dans les zones sécurisées", category: "Zones sécurisées" },
    "A7.5": { name: "Protection contre l'accès physique et environnemental", category: "Zones sécurisées" },
    "A7.6": { name: "Travail dans les zones sécurisées", category: "Zones sécurisées" },
    "A7.7": { name: "Bureau propre et écran propre", category: "Zones sécurisées" },
    "A7.8": { name: "Emplacement et protection des équipements", category: "Équipements" },
    "A7.9": { name: "Sécurité des équipements hors des locaux", category: "Équipements" },
    "A7.10": { name: "Support de stockage", category: "Équipements" },
    "A7.11": { name: "Services publics de soutien", category: "Équipements" },
    "A7.12": { name: "Sécurité du câblage", category: "Équipements" },
    "A7.13": { name: "Maintenance des équipements", category: "Équipements" },
    "A7.14": { name: "Élimination ou réutilisation sécurisée des équipements", category: "Équipements" },

    // A8 - Mesures technologiques
    "A8.1": { name: "Dispositifs de point de terminaison des utilisateurs", category: "Dispositifs de point de terminaison des utilisateurs" },
    "A8.2": { name: "Droits d'accès privilégiés", category: "Gestion des identités et des accès" },
    "A8.3": { name: "Restriction de l'accès aux informations", category: "Gestion des identités et des accès" },
    "A8.4": { name: "Accès au code source", category: "Gestion des identités et des accès" },
    "A8.5": { name: "Authentification sécurisée", category: "Gestion des identités et des accès" },
    "A8.6": { name: "Gestion des capacités", category: "Gestion des identités et des accès" },
    "A8.7": { name: "Protection contre les logiciels malveillants", category: "Protection contre les logiciels malveillants" },
    "A8.8": { name: "Gestion des vulnérabilités techniques", category: "Gestion des vulnérabilités techniques" },
    "A8.9": { name: "Gestion de la configuration", category: "Gestion de la configuration" },
    "A8.10": { name: "Suppression d'informations", category: "Suppression d'informations" },
    "A8.11": { name: "Masquage des données", category: "Masquage des données" },
    "A8.12": { name: "Prévention des fuites de données", category: "Prévention des fuites de données" },
    "A8.13": { name: "Sauvegarde d'informations", category: "Sauvegarde d'informations" },
    "A8.14": { name: "Redondance des installations de traitement de l'information", category: "Redondance des installations de traitement de l'information" },
    "A8.15": { name: "Journalisation", category: "Journalisation" },
    "A8.16": { name: "Activités de surveillance", category: "Activités de surveillance" },
    "A8.17": { name: "Synchronisation des horloges", category: "Synchronisation des horloges" },
    "A8.18": { name: "Utilisation de programmes utilitaires privilégiés", category: "Utilisation de programmes utilitaires privilégiés" },
    "A8.19": { name: "Installation de logiciels sur les systèmes opérationnels", category: "Installation de logiciels sur les systèmes opérationnels" },
    "A8.20": { name: "Sécurité des réseaux", category: "Sécurité des réseaux" },
    "A8.21": { name: "Sécurité des services de réseau", category: "Sécurité des services de réseau" },
    "A8.22": { name: "Ségrégation des réseaux", category: "Ségrégation des réseaux" },
    "A8.23": { name: "Filtrage web", category: "Filtrage web" },
    "A8.24": { name: "Utilisation de la cryptographie", category: "Utilisation de la cryptographie" },
    "A8.25": { name: "Cycle de vie de développement sécurisé", category: "Cycle de vie de développement sécurisé" },
    "A8.26": { name: "Exigences de sécurité des applications", category: "Exigences de sécurité des applications" },
    "A8.27": { name: "Architecture de système sécurisée et principes d'ingénierie", category: "Architecture de système sécurisée et principes d'ingénierie" },
    "A8.28": { name: "Codage sécurisé", category: "Codage sécurisé" },
    "A8.29": { name: "Tests de sécurité dans le développement et l'acceptation", category: "Tests de sécurité dans le développement et l'acceptation" },
    "A8.30": { name: "Développement externalisé", category: "Développement externalisé" },
    "A8.31": { name: "Séparation des environnements de développement, de test et de production", category: "Séparation des environnements de développement, de test et de production" },
    "A8.32": { name: "Gestion des changements", category: "Gestion des changements" },
    "A8.33": { name: "Informations d'essai", category: "Informations d'essai" },
    "A8.34": { name: "Protection des systèmes d'information lors des tests d'audit", category: "Protection des systèmes d'information lors des tests d'audit" }
  });

  // Fonction pour extraire les constats depuis l'onglet maturité
  const extractFindingsFromMaturity = (): {
    deficiencies: Array<{controlId: string, description: string, level: string, correctiveAction: string}>,
    goodPractices: Array<{controlId: string, description: string, level: string, recommendation: string}>
  } => {
    const deficiencies: Array<{controlId: string, description: string, level: string, correctiveAction: string}> = [];
    const goodPractices: Array<{controlId: string, description: string, level: string, recommendation: string}> = [];
    const controlDatabase = getControlDatabase();

    // Parcourir TOUTES les valeurs de maturité
    Object.entries(maturityValues).forEach(([controlId, level]) => {
      // Récupérer les informations du contrôle
      const controlInfo = controlDatabase[controlId];
      if (!controlInfo) {
        console.warn(`Contrôle ${controlId} non trouvé dans la base de données`);
        return;
      }

      // Générer des actions correctrices et recommandations automatiques
      const generateCorrectiveAction = (controlId: string, level: string): string => {
        const actions: { [key: string]: string } = {
          "0": "Mettre en place immédiatement ce contrôle de sécurité",
          "1": "Formaliser et documenter les pratiques existantes",
          "2": "Améliorer la répétabilité et le suivi des processus",
          "3": "Renforcer les contrôles et la mesure de performance"
        };
        return actions[level] || `Améliorer l'implémentation du contrôle ${controlId}`;
      };

      const generateRecommendation = (controlId: string, level: string): string => {
        const recommendations: { [key: string]: string } = {
          "4": "Maintenir le niveau actuel et surveiller l'efficacité",
          "5": "Continuer l'optimisation et partager les bonnes pratiques"
        };
        return recommendations[level] || `Continuer à optimiser le contrôle ${controlId}`;
      };

      // Classification selon le niveau de maturité
      if (["0", "1", "2", "3"].includes(level)) {
        deficiencies.push({
          controlId: controlId,
          description: controlInfo.name,
          level: level,
          correctiveAction: generateCorrectiveAction(controlId, level)
        });
      } else if (["4", "5"].includes(level)) {
        goodPractices.push({
          controlId: controlId,
          description: controlInfo.name,
          level: level,
          recommendation: generateRecommendation(controlId, level)
        });
      }
    });

    console.log("Défaillances extraites (niveaux 0-3):", deficiencies);
    console.log("Bonnes pratiques extraites (niveaux 4-5):", goodPractices);
    return { deficiencies, goodPractices };
  };

  // Fonction pour synchroniser les constats
  const handleSyncDeficiencies = () => {
    const { deficiencies: extractedDeficiencies, goodPractices: extractedGoodPractices } = extractFindingsFromMaturity();

    // Mettre à jour les états avec les nouveaux constats
    setDeficiencies(extractedDeficiencies);
    setGoodPractices(extractedGoodPractices);

    // Afficher un message de confirmation
    alert(`Synchronisation réussie !\n${extractedDeficiencies.length} défaillances et ${extractedGoodPractices.length} bonnes pratiques extraites depuis l'onglet Maturité SI.`);

    console.log(`${extractedDeficiencies.length} défaillances et ${extractedGoodPractices.length} bonnes pratiques synchronisées depuis l'onglet Maturité SI`);
  };

  // Fonction pour calculer les moyennes par domaine (comme dans le VBA)
  const calculateDomainAverages = () => {
    // Définir les domaines avec leurs plages de contrôles (comme dans le VBA)
    const domains = [
      { name: "Mesures organisationnelles", startControl: "A5.1", endControl: "A5.37" },
      { name: "Mesures liées aux personnes", startControl: "A6.1", endControl: "A6.8" },
      { name: "Mesures d'ordre physique", startControl: "A7.1", endControl: "A7.14" },
      { name: "Mesures technologiques", startControl: "A8.1", endControl: "A8.34" }
    ];

    const results = domains.map(domain => {
      // Extraire les contrôles pour ce domaine
      const domainControls = Object.entries(maturityValues).filter(([key, value]) => {
        // Logique pour déterminer si le contrôle appartient au domaine
        const controlNumber = key.replace(/[A-Z]/g, '');
        const [section, control] = controlNumber.split('.');
        const sectionNum = parseInt(section);
        const controlNum = parseInt(control);

        // Mapper les sections aux domaines
        if (domain.name === "Mesures organisationnelles") {
          return sectionNum === 5;
        } else if (domain.name === "Mesures liées aux personnes") {
          return sectionNum === 6;
        } else if (domain.name === "Mesures d'ordre physique") {
          return sectionNum === 7;
        } else if (domain.name === "Mesures technologiques") {
          return sectionNum === 8;
        }
        return false;
      });

      // Calculer la moyenne pour ce domaine
      const validValues = domainControls
        .map(([, value]) => value)
        .filter(value => value && value !== 'N/A' && value !== '')
        .map(value => parseInt(value));

      let average = 0;
      let percentage = 0;
      let category = "Faible";

      if (validValues.length > 0) {
        average = validValues.reduce((sum, val) => sum + val, 0) / validValues.length;
        percentage = average / 5;

        // Déterminer la catégorie de maturité (comme dans le VBA)
        if (percentage > 0.61) {
          category = "Élevé";
        } else if (percentage >= 0.21) {
          category = "Moyen";
        } else {
          category = "Faible";
        }
      }

      return {
        domain: domain.name,
        average: average.toFixed(2),
        percentage: (percentage * 100).toFixed(1),
        category,
        controlsCount: domainControls.length,
        evaluatedCount: validValues.length
      };
    });

    // Sauvegarder les résultats dans localStorage pour les transmettre à AuditMethodologySection
    localStorage.setItem('domainMaturityResults', JSON.stringify(results));

    // Déclencher un événement personnalisé pour notifier AuditMethodologySection
    window.dispatchEvent(new CustomEvent('maturityCalculated', { detail: results }));

    // Afficher un message de succès (comme dans le VBA)
    alert("Tableau de maturité généré avec succès!");

    console.log("Moyennes par domaine calculées:", results);
    return results;
  };



  // Fonction pour obtenir la couleur du badge selon la variation
  const getVariationBadgeClass = (variation: number) => {
    if (variation < 0) {
      return "bg-red-100 text-red-800 border-red-300";
    } else {
      return "bg-green-100 text-green-800 border-green-300";
    }
  };

  // Fonction pour obtenir l'icône selon la variation
  const getVariationIcon = (variation: number) => {
    if (variation < 0) {
      return <TrendingUp className="h-3 w-3 mr-1 rotate-180" />;
    } else {
      return <TrendingUp className="h-3 w-3 mr-1" />;
    }
  };

  // Fonction pour obtenir la description du niveau de maturité
  const getMaturityDescription = (level: string) => {
    switch (level) {
      case "N/A":
        return "Non applicable";
      case "0":
        return "Pratique inexistante";
      case "1":
        return "Pratique informelle : Actions isolées";
      case "2":
        return "Pratique répétable et suivie : Actions reproductibles";
      case "3":
        return "Processus définis : Standardisation des pratiques";
      case "4":
        return "Processus contrôlés : des mesures quantitatives";
      case "5":
        return "Processus continuellement optimisés";
      default:
        return "";
    }
  };

  // Fonction pour générer le tableau des vulnérabilités
  const generateVulnerabilityTable = () => {
    setShowVulnerabilityTable(true);
  };

  // Interface pour les vulnérabilités
  interface Vulnerability {
    id: number;
    reference: string;
    name: string;
    category: string;
    description: string;
    evidence: string;
    impactedAssets: string;
    exploitationImpact: string;
    exploitationProbability: string;
    recommendation: string;
  }

  // Fonction pour obtenir les vulnérabilités (contrôles avec niveau 0)
  const getVulnerabilities = (): Vulnerability[] => {
    const vulnerabilities: Vulnerability[] = [];
    let vulnCount = 1;

    // Parcourir tous les contrôles pour trouver ceux avec niveau 0
    Object.entries(maturityValues).forEach(([key, value]) => {
      if (value === "0") {
        // Trouver les informations du contrôle
        vulnerabilities.push({
          id: vulnCount,
          reference: key,
          name: getControlName(key),
          category: getControlCategory(key),
          description: "",
          evidence: "",
          impactedAssets: "",
          exploitationImpact: "",
          exploitationProbability: "",
          recommendation: ""
        });
        vulnCount++;
      }
    });

    return vulnerabilities;
  };

  // Fonctions utilitaires pour obtenir les informations des contrôles
  const getControlName = (reference: string): string => {
    // Mapping des références vers les noms
    const controlNames: { [key: string]: string } = {
      "A5.1": "Politiques de sécurité de l'information",
      "A5.2": "Politiques spécifiques de sécurité de l'information",
      "A5.3": "Fonctions et responsabilités liées à la sécurité de l'information",
      "A5.4": "Séparation des tâches",
      "A5.5": "Responsabilités de la direction",
      "A5.6": "Contacts avec les autorités",
      "A5.7": "Contacts avec des groupes d'intérêt spécifiques",
      "A5.8": "Renseignement sur les menaces",
      "A5.9": "Sécurité de l'information dans la gestion de projet",
      "A5.10": "Inventaire des informations et autres actifs associés",
      "A5.11": "Utilisation correcte des informations et autres actifs associés",
      "A5.12": "Restitution des actifs",
      "A5.13": "Classification des informations",
      "A5.14": "Marquage des informations",
      "A5.15": "Transfert des informations",
      "A5.16": "Contrôle d'accès",
      "A5.17": "Gestion des identités",
      "A8.32": "Gestion des changements",
      "A8.33": "Informations de test",
      "A8.34": "Protection des systèmes d'information pendant les tests d'audit",
      // Ajouter d'autres contrôles selon vos besoins...
    };
    return controlNames[reference] || "Nom du contrôle non défini";
  };

  const getControlCategory = (reference: string): string => {
    // Mapping des références vers les catégories
    const controlCategories: { [key: string]: string } = {
      "A5.1": "Gouvernance",
      "A5.2": "Gouvernance",
      "A5.3": "Gouvernance",
      "A5.4": "Gouvernance",
      "A5.5": "Gouvernance",
      "A5.6": "Gouvernance",
      "A5.7": "Gouvernance",
      "A5.8": "Gestion des menaces et des vulnérabilités",
      "A5.9": "Gouvernance",
      "A5.10": "Gestion des actifs",
      "A5.11": "Gestion des actifs et Protection des informations",
      "A5.12": "Gestion des actifs",
      "A5.13": "Protection des informations",
      "A5.14": "Protection des informations",
      "A5.15": "Gestion des actifs et Protection des informations",
      "A5.16": "Gestion des identités et des accès",
      "A5.17": "Gestion des identités et des accès",
      "A8.32": "Sécurité des applications, Sécurité système et réseau",
      "A8.33": "Protection des informations",
      "A8.34": "Sécurité système et réseau, Protection des informations",
      // Ajouter d'autres contrôles selon vos besoins...
    };
    return controlCategories[reference] || "Catégorie non définie";
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="mb-6 border-b">
          <TabsList className="h-auto p-0 bg-transparent w-full">
            <div className="flex w-full overflow-x-auto pb-2">
              <div className="flex min-w-max w-full">
                <TabsTrigger
                  value="standards"
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <FileText className="h-4 w-4" />
                  <span>Référentiels</span>
                </TabsTrigger>
                <TabsTrigger
                  value="responsibility"
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <Scale className="h-4 w-4" />
                  <span>Responsabilités</span>
                </TabsTrigger>
                <TabsTrigger
                  value="tests"
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <ClipboardList className="h-4 w-4" />
                  <span>Tests</span>
                </TabsTrigger>
                <TabsTrigger
                  value="action-plan"
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Plan d'action</span>
                </TabsTrigger>
                <TabsTrigger
                  value="indicators"
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <Activity className="h-4 w-4" />
                  <span>Évolution</span>
                </TabsTrigger>
                <TabsTrigger
                  value="findings"
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <AlertTriangle className="h-4 w-4" />
                  <span>Constats</span>
                </TabsTrigger>
                <TabsTrigger
                  value="maturity"
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <TrendingUp className="h-4 w-4" />
                  <span>Maturité SI</span>
                </TabsTrigger>
                <TabsTrigger
                  value="security-indicators"
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <Shield className="h-4 w-4" />
                  <span>Indicateurs</span>
                </TabsTrigger>

                <TabsTrigger
                  value="dashboard"
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none bg-transparent"
                >
                  <Gauge className="h-4 w-4" />
                  <span>Tableau de bord</span>
                </TabsTrigger>
              </div>
            </div>
          </TabsList>
        </div>

        {/* Référentiels */}
        <TabsContent value="standards">
          <div className="space-y-6">
            {/* Section descriptive */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Critères et référentiels d'audit
                </CardTitle>
                <CardDescription>
                  Standards et référentiels par rapport auxquels l'audit a été réalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description générale des critères et standards/référentiels
                    </label>
                    <Textarea
                      placeholder="Décrivez les critères et les standards/référentiels par rapport auxquels l'audit a été réalisé..."
                      className="min-h-[120px] w-full resize-y"
                      defaultValue="Les critères et les standards/référentiels par rapport auxquels l'audit a été réalisé"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tableau des référentiels */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Tableau des référentiels utilisés
                </CardTitle>
                <CardDescription>
                  Détail des référentiels et standards appliqués lors de l'audit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table className="border-collapse border border-gray-200">
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="border border-gray-200 font-bold w-[200px]">Critère/Référentiel</TableHead>
                        <TableHead className="border border-gray-200 font-bold">Description</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[120px] text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {referentials.map((referential) => (
                        <TableRow key={referential.id} className="hover:bg-gray-50 transition-colors">
                          <TableCell className="border border-gray-200 font-medium bg-gray-100">
                            <div className="flex items-center gap-2">
                              {referential.name === "Référentiel ANCS" ? (
                                <Shield className="h-4 w-4 text-gray-600" />
                              ) : (
                                <CheckCircle className="h-4 w-4 text-gray-600" />
                              )}
                              <Input
                                value={referential.name}
                                onChange={(e) => updateReferential(referential.id, 'name', e.target.value)}
                                className="border-0 bg-transparent font-medium p-0 h-auto"
                              />
                            </div>
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              className="min-h-[80px] w-full resize-y border-0 bg-transparent"
                              value={referential.description}
                              onChange={(e) => updateReferential(referential.id, 'description', e.target.value)}
                              placeholder="Description du référentiel..."
                            />
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <div className="flex items-center justify-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-red-600 hover:text-red-800 hover:bg-red-100"
                                onClick={() => removeReferential(referential.id)}
                                title="Supprimer"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {/* Ligne pour ajouter d'autres référentiels */}
                      {isAddingReferential && (
                      <TableRow className="hover:bg-gray-50 transition-colors">
                        <TableCell className="border border-gray-200">
                          <div className="flex items-center gap-2">
                            <Plus className="h-4 w-4 text-gray-400" />
                            <Input
                              placeholder="Nom du référentiel..."
                              value={newReferentialName}
                              onChange={(e) => setNewReferentialName(e.target.value)}
                              className="w-full border-0 bg-transparent focus:ring-0 focus:border-0"
                            />
                          </div>
                        </TableCell>
                        <TableCell className="border border-gray-200">
                          <Textarea
                            className="min-h-[80px] w-full resize-y border-0 bg-transparent"
                            placeholder="Description du référentiel..."
                            value={newReferentialDescription}
                            onChange={(e) => setNewReferentialDescription(e.target.value)}
                          />
                        </TableCell>
                        <TableCell className="border border-gray-200">
                          <div className="flex items-center justify-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 text-ey-yellow hover:text-ey-yellow-dark hover:bg-ey-yellow-light"
                              onClick={addReferential}
                              title="Ajouter"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                              onClick={cancelAddReferential}
                              title="Annuler"
                            >
                              <XSquare className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Actions du tableau */}
                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Utilisez les icônes pour modifier ou supprimer les référentiels
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      className="flex items-center gap-2"
                      onClick={startAddingReferential}
                    >
                      <Plus className="h-4 w-4" />
                      Ajouter un référentiel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section détaillée pour le référentiel ANCS */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-700">
                  <Shield className="h-5 w-5" />
                  Référentiel ANCS utilisé pour la mission d'audit
                </CardTitle>
                <CardDescription>
                  Description détaillée du cadre de référence principal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <Textarea
                    className="min-h-[200px] w-full resize-y border-0 bg-transparent text-sm leading-relaxed"
                    defaultValue="La présente mission d'audit a été réalisée en référence au référentiel de sécurité des systèmes d'information publié par l'Agence Nationale de la Cybersécurité (ANCS). Ce référentiel constitue un cadre de bonnes pratiques et de normes adapté au contexte tunisien, couvrant les exigences essentielles de confidentialité, d'intégrité, de disponibilité, ainsi que la gestion des risques liés aux systèmes d'information. L'audit s'est appuyé sur ces critères pour évaluer la conformité des contrôles de sécurité en place, identifier les vulnérabilités et proposer des recommandations pertinentes, garantissant ainsi une démarche conforme aux standards nationaux en matière de cybersécurité."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Responsabilités */}
        <TabsContent value="responsibility">
          <div className="space-y-6">
            {/* En-tête de section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Responsabilités de l'Auditeur et Limites de l'Audit
                </CardTitle>
                <CardDescription>
                  Définition claire des responsabilités de l'auditeur et des limites du périmètre d'audit
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Tableau des responsabilités et limites */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Tableau des Responsabilités et Limites
                </CardTitle>
                <CardDescription>
                  Responsabilités de l'auditeur et limites identifiées de l'audit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table className="border-collapse border border-gray-200">
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="border border-gray-200 font-bold w-[45%]">Responsabilité de l'Auditeur</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[45%]">Limites de l'Audit</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[10%] text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {responsibilities.map((resp) => (
                        <TableRow key={resp.id} className="hover:bg-gray-50 transition-colors">
                          <TableCell className="border border-gray-200 bg-gray-100">
                            <div className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-gray-600 mt-1 flex-shrink-0" />
                              <Textarea
                                className="min-h-[80px] w-full resize-y border-0 bg-transparent text-sm"
                                value={resp.responsibility}
                                onChange={(e) => updateResponsibility(resp.id, 'responsibility', e.target.value)}
                                placeholder="Responsabilité de l'auditeur..."
                              />
                            </div>
                          </TableCell>
                          <TableCell className="border border-gray-200 bg-gray-100">
                            <div className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-gray-600 mt-1 flex-shrink-0" />
                              <Textarea
                                className="min-h-[80px] w-full resize-y border-0 bg-transparent text-sm"
                                value={resp.limit}
                                onChange={(e) => updateResponsibility(resp.id, 'limit', e.target.value)}
                                placeholder="Limite de l'audit..."
                              />
                            </div>
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <div className="flex items-center justify-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-red-600 hover:text-red-800 hover:bg-red-100"
                                onClick={() => removeResponsibility(resp.id)}
                                title="Supprimer"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}

                      {/* Ligne d'ajout conditionnelle */}
                      {isAddingResponsibility && (
                        <TableRow className="hover:bg-gray-50 transition-colors">
                          <TableCell className="border border-gray-200">
                            <div className="flex items-start gap-2">
                              <Plus className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                              <Textarea
                                className="min-h-[80px] w-full resize-y border-0 bg-transparent text-sm"
                                placeholder="Nouvelle responsabilité de l'auditeur..."
                                value={newResponsibility}
                                onChange={(e) => setNewResponsibility(e.target.value)}
                              />
                            </div>
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <div className="flex items-start gap-2">
                              <Plus className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                              <Textarea
                                className="min-h-[80px] w-full resize-y border-0 bg-transparent text-sm"
                                placeholder="Nouvelle limite de l'audit..."
                                value={newLimit}
                                onChange={(e) => setNewLimit(e.target.value)}
                              />
                            </div>
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <div className="flex items-center justify-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-ey-yellow hover:text-ey-yellow-dark hover:bg-ey-yellow-light"
                                onClick={addResponsibility}
                                title="Ajouter"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                                onClick={cancelAddResponsibility}
                                title="Annuler"
                              >
                                <XSquare className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Actions du tableau */}
                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <Scale className="h-4 w-4" />
                      Utilisez les icônes pour modifier ou supprimer les responsabilités et limites
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      className="flex items-center gap-2"
                      onClick={startAddingResponsibility}
                    >
                      <Plus className="h-4 w-4" />
                      Ajouter une ligne
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section informative */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-700">
                  <AlertTriangle className="h-5 w-5" />
                  Informations Importantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Responsabilités de l'Auditeur</h4>
                        <p className="text-sm text-gray-700">
                          L'auditeur s'engage à conduire l'audit selon les standards professionnels et à fournir une évaluation objective de la sécurité du système d'information.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Limites de l'Audit</h4>
                        <p className="text-sm text-gray-700">
                          Les limites identifiées définissent le périmètre et les contraintes de l'audit, permettant une interprétation appropriée des résultats.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tests */}
        <TabsContent value="tests">
          <div className="space-y-6">
            {/* En-tête de section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5" />
                  Types et Nature des Tests Réalisés
                </CardTitle>
                <CardDescription>
                  Méthodologie détaillée et types de tests appliqués lors de l'audit de sécurité
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Tableau principal des tests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSearch className="h-5 w-5" />
                  Tableau des Tests d'Audit
                </CardTitle>
                <CardDescription>
                  Description complète des tests réalisés avec justifications et objectifs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table className="border-collapse border border-gray-200">
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="border border-gray-200 font-bold w-[20%]">Type de Test</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[35%]">Nature du Test</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[25%]">Objectif</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[15%]">Justification (Source R-ANCS)</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[5%] text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tests.map((test) => (
                        <TableRow key={test.id} className="hover:bg-gray-50 transition-colors">
                          <TableCell className="border border-gray-200 bg-gray-100">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-gray-600" />
                              <Input
                                className="font-medium border-0 bg-transparent focus:ring-0 focus:border-0"
                                value={test.type}
                                onChange={(e) => updateTest(test.id, 'type', e.target.value)}
                                placeholder="Type de test..."
                              />
                            </div>
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              className="min-h-[80px] w-full resize-y border-0 bg-transparent text-sm"
                              value={test.nature}
                              onChange={(e) => updateTest(test.id, 'nature', e.target.value)}
                              placeholder="Nature du test..."
                            />
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              className="min-h-[80px] w-full resize-y border-0 bg-transparent text-sm"
                              value={test.objective}
                              onChange={(e) => updateTest(test.id, 'objective', e.target.value)}
                              placeholder="Objectif du test..."
                            />
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              className="min-h-[60px] w-full resize-y border-0 bg-transparent text-xs"
                              value={test.justification}
                              onChange={(e) => updateTest(test.id, 'justification', e.target.value)}
                              placeholder="Justification R-ANCS..."
                            />
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <div className="flex items-center justify-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-red-600 hover:text-red-800 hover:bg-red-100"
                                onClick={() => removeTest(test.id)}
                                title="Supprimer"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}





                      {/* Ligne d'ajout conditionnelle */}
                      {isAddingTest && (
                        <TableRow className="hover:bg-gray-50 transition-colors">
                          <TableCell className="border border-gray-200">
                            <div className="flex items-center gap-2">
                              <Plus className="h-4 w-4 text-gray-400" />
                              <Input
                                placeholder="Nouveau type de test..."
                                className="w-full border-0 bg-transparent focus:ring-0 focus:border-0"
                                value={newTestType}
                                onChange={(e) => setNewTestType(e.target.value)}
                              />
                            </div>
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              className="min-h-[80px] w-full resize-y border-0 bg-transparent text-sm"
                              placeholder="Nature du nouveau test..."
                              value={newTestNature}
                              onChange={(e) => setNewTestNature(e.target.value)}
                            />
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              className="min-h-[80px] w-full resize-y border-0 bg-transparent text-sm"
                              placeholder="Objectif du test..."
                              value={newTestObjective}
                              onChange={(e) => setNewTestObjective(e.target.value)}
                            />
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              className="min-h-[60px] w-full resize-y border-0 bg-transparent text-xs"
                              placeholder="Justification R-ANCS..."
                              value={newTestJustification}
                              onChange={(e) => setNewTestJustification(e.target.value)}
                            />
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <div className="flex items-center justify-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-ey-yellow hover:text-ey-yellow-dark hover:bg-ey-yellow-light"
                                onClick={addTest}
                                title="Ajouter"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                                onClick={cancelAddTest}
                                title="Annuler"
                              >
                                <XSquare className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Actions du tableau */}
                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <ClipboardList className="h-4 w-4" />
                      Utilisez les icônes pour modifier ou supprimer les types de tests
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      className="flex items-center gap-2"
                      onClick={startAddingTest}
                    >
                      <Plus className="h-4 w-4" />
                      Ajouter un test
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section informative */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-700">
                  <Info className="h-5 w-5" />
                  Approches de Vérification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FileSearch className="h-4 w-4" />
                        Tests Documentaires
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Revue documentaire approfondie</li>
                        <li>• Entretiens avec les parties prenantes</li>
                        <li>• Ateliers de validation collaborative</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Tests Techniques
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Vérifications techniques approfondies</li>
                        <li>• Inspections physiques des installations</li>
                        <li>• Analyse des logs et événements système</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Plan d'action */}
        <TabsContent value="action-plan">
          <div className="space-y-6">
            {/* En-tête de section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Suivi du Plan d'Action
                </CardTitle>
                <CardDescription>
                  Évaluation du plan d'action issu de la dernière mission d'audit avec suivi des réalisations
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Tableau du plan d'action */}
            <ActionPlanTable projects={projects} setProjects={setProjects} />





          </div>
        </TabsContent>

        {/* Évolution */}
        <TabsContent value="indicators">
          <div className="space-y-6">
            {/* En-tête de section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Évolution des Indicateurs de Sécurité
                </CardTitle>
                <CardDescription>
                  Comparaison annuelle des indicateurs clés de sécurité avec calcul automatique des variations
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Section de statistiques visuelles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-gray-200 bg-gray-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-700">
                    <TrendingUp className="h-5 w-5 text-[#FFC000]" />
                    Améliorations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FFC000]">{calculateImprovements()}</div>
                    <p className="text-sm text-gray-600">indicateurs en hausse</p>
                    <div className="mt-2">
                      <Progress
                        value={indicators.length > 0 ? (calculateImprovements() / indicators.length) * 100 : 0}
                        className="h-2 bg-gray-200 [&>div]:bg-[#FFC000]"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {indicators.length > 0 ? Math.round((calculateImprovements() / indicators.length) * 100) : 0}% d'amélioration
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gray-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-700">
                    <BarChart className="h-5 w-5 text-[#FFC000]" />
                    Variation Moyenne
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${calculateAverageVariation() >= 0 ? 'text-[#FFC000]' : 'text-gray-600'}`}>
                      {calculateAverageVariation() > 0 ? '+' : ''}{calculateAverageVariation()}%
                    </div>
                    <p className="text-sm text-gray-600">variation globale</p>
                    <div className="mt-2">
                      <Progress
                        value={Math.abs(calculateAverageVariation())}
                        className={`h-2 bg-gray-200 ${calculateAverageVariation() >= 0 ? '[&>div]:bg-[#FFC000]' : '[&>div]:bg-gray-500'}`}
                      />
                      <p className="text-xs text-gray-500 mt-1">{getVariationTrend(calculateAverageVariation())}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gray-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-700">
                    <Gauge className="h-5 w-5 text-[#FFC000]" />
                    Performance Globale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FFC000]">{calculateGlobalPerformance()}%</div>
                    <p className="text-sm text-gray-600">niveau de sécurité</p>
                    <div className="mt-2">
                      <Progress value={calculateGlobalPerformance()} className="h-2 bg-gray-200 [&>div]:bg-[#FFC000]" />
                      <p className="text-xs text-gray-500 mt-1">{getPerformanceLevel(calculateGlobalPerformance())}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tableau d'évolution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Tableau d'Évolution Annuelle
                </CardTitle>
                <CardDescription>
                  Suivi des performances de sécurité avec validation automatique des données
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table className="border-collapse border border-gray-200">
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="border border-gray-200 font-bold w-[40%]">Indicateur de sécurité</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[20%] text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Input
                              value={previousYear}
                              onChange={(e) => handlePreviousYearChange(e.target.value)}
                              className="w-24 text-center text-sm font-bold border border-gray-300 bg-white focus:bg-white focus:border-[#FFC000] focus:ring-2 focus:ring-yellow-100 rounded-md px-2 py-1"
                              type="number"
                              min="2000"
                              max={parseInt(followingYear) - 1}
                              placeholder="Année"
                            />
                          </div>
                        </TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[20%] text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm font-bold text-gray-700">{followingYear}</span>
                          </div>
                        </TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[20%] text-center">Variation (%)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {indicators.map((indicator) => {
                        const variation = calculateVariation(indicator.previousValue, indicator.followingValue);
                        return (
                          <TableRow key={indicator.id} className="hover:bg-gray-50 transition-colors">
                            <TableCell className="border border-gray-200 font-medium">
                              <div className="flex items-center gap-2">
                                <Input
                                  value={indicator.name}
                                  onChange={(e) => updateIndicator(indicator.id, "name", e.target.value)}
                                  className="border-0 bg-transparent focus:ring-0 focus:border-0 font-medium"
                                />
                              </div>
                            </TableCell>
                            <TableCell className="border border-gray-200 text-center">
                              <div className="flex items-center justify-center">
                                <Input
                                  value={indicator.previousValue}
                                  onChange={(e) => updateIndicator(indicator.id, "previousValue", parseFloat(e.target.value) || 0)}
                                  className="w-16 text-center"
                                  type="number"
                                  min="0"
                                />
                              </div>
                            </TableCell>
                            <TableCell className="border border-gray-200 text-center">
                              <div className="flex items-center justify-center">
                                <Input
                                  value={indicator.followingValue}
                                  onChange={(e) => updateIndicator(indicator.id, "followingValue", parseFloat(e.target.value) || 0)}
                                  className="w-16 text-center"
                                  type="number"
                                  min="0"
                                />
                              </div>
                            </TableCell>
                            <TableCell className="border border-gray-200 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <Badge variant="outline" className={`${variation >= 0 ? 'bg-green-100 text-green-800 border-green-300' : 'bg-red-100 text-red-800 border-red-300'}`}>
                                  <TrendingUp className={`h-3 w-3 mr-1 ${variation < 0 ? 'rotate-180' : ''}`} />
                                  {variation > 0 ? '+' : ''}{variation}%
                                </Badge>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeIndicator(indicator.id)}
                                  className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-100"
                                  title="Supprimer"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>

                {/* Actions du tableau */}
                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center gap-2">
                        <Activity className="h-4 w-4" />
                        Comparaison entre {previousYear} et {followingYear} pour analyser l'évolution sur {parseInt(followingYear) - parseInt(previousYear)} ans
                      </span>
                      <span className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Les variations sont calculées automatiquement : ({followingYear} - {previousYear}) / {previousYear} × 100
                      </span>
                      <span className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Couleurs automatiques : Vert pour positif, Rouge pour négatif
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex items-center gap-2 text-[#FFC000] border-[#FFC000] hover:bg-[#FFC000] hover:text-white transition-colors"
                      onClick={addNewIndicator}
                    >
                      <Plus className="h-4 w-4" />
                      Ajouter un indicateur
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>




          </div>
        </TabsContent>

        {/* Constats */}
        <TabsContent value="findings">
          <div className="space-y-8">
            {/* En-tête simplifié */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Constats d'Audit</h2>
                <p className="text-gray-600 mt-1">Bonnes pratiques et défaillances identifiées</p>
              </div>
              <Button
                onClick={handleSyncDeficiencies}
                className="flex items-center gap-2"
              >
                <Activity className="h-4 w-4" />
                Synchroniser
              </Button>
            </div>

            {/* Premier tableau : Bonnes Pratiques et Recommandations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  Bonnes Pratiques Identifiées
                </CardTitle>
                <CardDescription>
                  Points forts et recommandations d'amélioration
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="overflow-x-auto overflow-y-auto max-h-[400px] border rounded-lg">
                  <Table className="border-collapse border border-gray-200">
                    <TableHeader>
                      <TableRow className="bg-green-50">
                        <TableHead className="border border-gray-200 font-semibold text-gray-700 p-3 w-[50%]">
                          Bonnes Pratiques
                        </TableHead>
                        <TableHead className="border border-gray-200 font-semibold text-gray-700 p-3 w-[50%]">
                          Recommandations
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {goodPractices.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={2} className="border border-gray-200 p-6 text-center text-gray-500">
                            <div className="flex flex-col items-center gap-2">
                              <CheckCircle className="h-8 w-8 text-gray-300" />
                              <p>Aucune bonne pratique synchronisée</p>
                              <p className="text-sm">Cliquez sur "Synchroniser" pour extraire les bonnes pratiques depuis l'onglet Maturité SI</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        goodPractices.map((practice, index) => (
                          <TableRow key={`${practice.controlId}-${index}`} className="hover:bg-gray-50">
                            <TableCell className="border border-gray-200 p-3 align-top">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                                    practice.level === "5"
                                      ? "bg-green-600 text-white"
                                      : "bg-green-100 text-green-800"
                                  }`}>
                                    {practice.controlId} - Niveau {practice.level}
                                  </span>
                                </div>
                                <Textarea
                                  className="min-h-[80px] w-full resize-none border-0 bg-transparent text-sm p-0"
                                  value={practice.description}
                                  readOnly
                                />
                              </div>
                            </TableCell>
                            <TableCell className="border border-gray-200 p-3 align-top">
                              <Textarea
                                className="min-h-[80px] w-full resize-none border-0 bg-transparent text-sm p-0"
                                placeholder="Recommandations..."
                                defaultValue={practice.recommendation}
                              />
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>


              </CardContent>
            </Card>

            {/* Deuxième tableau : Défaillances et Actions Correctrices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <XCircle className="h-5 w-5" />
                  Défaillances Identifiées
                </CardTitle>
                <CardDescription>
                  Points faibles et actions correctrices nécessaires
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="overflow-x-auto overflow-y-auto max-h-[400px] border rounded-lg">
                  <Table className="border-collapse border border-gray-200">
                    <TableHeader>
                      <TableRow className="bg-red-50">
                        <TableHead className="border border-gray-200 font-semibold text-gray-700 p-3 w-[50%]">
                          Défaillances
                        </TableHead>
                        <TableHead className="border border-gray-200 font-semibold text-gray-700 p-3 w-[50%]">
                          Actions Correctrices
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {deficiencies.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={2} className="border border-gray-200 p-6 text-center text-gray-500">
                            <div className="flex flex-col items-center gap-2">
                              <XCircle className="h-8 w-8 text-gray-300" />
                              <p>Aucune défaillance synchronisée</p>
                              <p className="text-sm">Cliquez sur "Synchroniser" pour extraire les défaillances depuis l'onglet Maturité SI</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        deficiencies.map((deficiency, index) => {
                          const getBadgeClass = (level: string) => {
                            switch(level) {
                              case "0": return "bg-red-600 text-white";
                              case "1": return "bg-red-400 text-white";
                              case "2": return "bg-orange-400 text-white";
                              case "3": return "bg-yellow-500 text-white";
                              default: return "bg-gray-100 text-gray-800";
                            }
                          };

                          return (
                            <TableRow key={`${deficiency.controlId}-${index}`} className="hover:bg-gray-50">
                              <TableCell className="border border-gray-200 p-3 align-top">
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getBadgeClass(deficiency.level)}`}>
                                      {deficiency.controlId} - Niveau {deficiency.level}
                                    </span>
                                  </div>
                                  <Textarea
                                    className="min-h-[80px] w-full resize-none border-0 bg-transparent text-sm p-0"
                                    value={deficiency.description}
                                    readOnly
                                  />
                                </div>
                              </TableCell>
                              <TableCell className="border border-gray-200 p-3 align-top">
                                <Textarea
                                  className="min-h-[80px] w-full resize-none border-0 bg-transparent text-sm p-0"
                                  placeholder="Actions correctrices..."
                                  defaultValue={deficiency.correctiveAction}
                                />
                              </TableCell>
                            </TableRow>
                          );
                        })
                      )}
                    </TableBody>
                  </Table>
                </div>


              </CardContent>
            </Card>




          </div>
        </TabsContent>


        {/* Maturité SI */}
        <TabsContent value="maturity">
          <Card>
            <CardHeader>
              <CardTitle>État de maturité de la sécurité</CardTitle>
              <CardDescription>
                Évaluation de la maturité de la sécurité du système d'information selon les contrôles ANCS:2022
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Ajout d'une div avec une hauteur maximale et défilement vertical et horizontal */}
              <div className="overflow-x-auto overflow-y-auto max-h-[600px] w-full">
                <Table className="border-collapse border border-gray-200 min-w-[1500px]">
                  <TableHeader className="sticky top-0 bg-white z-10">
                    <TableRow>
                      <TableHead className="border border-gray-200 font-bold w-[180px]">Domaine</TableHead>
                      <TableHead className="border border-gray-200 font-bold w-[120px]">Référence du contrôle</TableHead>
                      <TableHead className="border border-gray-200 font-bold w-[300px]">Nom du contrôle</TableHead>
                      <TableHead className="border border-gray-200 font-bold w-[200px]">Catégorie</TableHead>
                      <TableHead className="border border-gray-200 font-bold w-[150px]">Niveau de maturité</TableHead>
                      <TableHead className="border border-gray-200 font-bold w-[300px]">Description du niveau</TableHead>
                      <TableHead className="border border-gray-200 font-bold w-[400px]">Commentaires</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Première section: Mesures de sécurité organisationnelles */}
                    <TableRow>
                      <TableCell rowSpan={37} className="border border-gray-200 font-medium bg-gray-50">
                        Mesures de sécurité organisationnelles (37)
                      </TableCell>
                      <TableCell className="border border-gray-200">A 5.1</TableCell>
                      <TableCell className="border border-gray-200">Politiques de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">Gouvernance</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.1"]}
                          onValueChange={(value) => handleMaturityChange("A5.1", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.1"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.1"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.2</TableCell>
                      <TableCell className="border border-gray-200">Politiques spécifiques de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">Gouvernance</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.2"]}
                          onValueChange={(value) => handleMaturityChange("A5.2", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.2"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.2"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    {/* Lignes A5.3 à A5.7 (vous pouvez les ajouter de la même manière) */}
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.3</TableCell>
                      <TableCell className="border border-gray-200">Fonctions et responsabilités liées à la sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">Gouvernance</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.3"]}
                          onValueChange={(value) => handleMaturityChange("A5.3", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.3"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.3"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.4</TableCell>
                      <TableCell className="border border-gray-200">Séparation des tâches</TableCell>
                      <TableCell className="border border-gray-200">Gouvernance</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.4"]}
                          onValueChange={(value) => handleMaturityChange("A5.4", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.4"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.4"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.5</TableCell>
                      <TableCell className="border border-gray-200">Responsabilités de la direction</TableCell>
                      <TableCell className="border border-gray-200">Gouvernance</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.5"]}
                          onValueChange={(value) => handleMaturityChange("A5.5", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.5"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.5"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.6</TableCell>
                      <TableCell className="border border-gray-200">Contacts avec les autorités</TableCell>
                      <TableCell className="border border-gray-200">Gouvernance</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.6"]}
                          onValueChange={(value) => handleMaturityChange("A5.6", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.6"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.6"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.7</TableCell>
                      <TableCell className="border border-gray-200">Contacts avec des groupes d'intérêt spécifiques</TableCell>
                      <TableCell className="border border-gray-200">Gouvernance</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.7"]}
                          onValueChange={(value) => handleMaturityChange("A5.7", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.7"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.7"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    {/* Nouvelles lignes A5.8 à A5.15 */}
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.8</TableCell>
                      <TableCell className="border border-gray-200">Renseignement sur les menaces</TableCell>
                      <TableCell className="border border-gray-200">Gestion des menaces et des vulnérabilités</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.8"]}
                          onValueChange={(value) => handleMaturityChange("A5.8", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.8"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.8"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.9</TableCell>
                      <TableCell className="border border-gray-200">Sécurité de l'information dans la gestion de projet</TableCell>
                      <TableCell className="border border-gray-200">Gouvernance</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.9"]}
                          onValueChange={(value) => handleMaturityChange("A5.9", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.9"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.9"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.10</TableCell>
                      <TableCell className="border border-gray-200">Inventaire des informations et autres actifs associés</TableCell>
                      <TableCell className="border border-gray-200">Gestion des actifs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.10"]}
                          onValueChange={(value) => handleMaturityChange("A5.10", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.10"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.10"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.11</TableCell>
                      <TableCell className="border border-gray-200">Utilisation correcte des informations et autres actifs associés</TableCell>
                      <TableCell className="border border-gray-200">Gestion des actifs et Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.11"]}
                          onValueChange={(value) => handleMaturityChange("A5.11", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.11"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.11"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.12</TableCell>
                      <TableCell className="border border-gray-200">Restitution des actifs</TableCell>
                      <TableCell className="border border-gray-200">Gestion des actifs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.12"]}
                          onValueChange={(value) => handleMaturityChange("A5.12", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.12"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.12"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.13</TableCell>
                      <TableCell className="border border-gray-200">Classification des informations</TableCell>
                      <TableCell className="border border-gray-200">Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.13"]}
                          onValueChange={(value) => handleMaturityChange("A5.13", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.13"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.13"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.14</TableCell>
                      <TableCell className="border border-gray-200">Marquage des informations</TableCell>
                      <TableCell className="border border-gray-200">Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.14"]}
                          onValueChange={(value) => handleMaturityChange("A5.14", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.14"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.14"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.15</TableCell>
                      <TableCell className="border border-gray-200">Transfert des informations</TableCell>
                      <TableCell className="border border-gray-200">Gestion des actifs et Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.15"]}
                          onValueChange={(value) => handleMaturityChange("A5.15", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.15"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.15"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.16</TableCell>
                      <TableCell className="border border-gray-200">Contrôle d'accès</TableCell>
                      <TableCell className="border border-gray-200">Gestion des identités et des accès</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.16"]}
                          onValueChange={(value) => handleMaturityChange("A5.16", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.16"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.16"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.17</TableCell>
                      <TableCell className="border border-gray-200">Gestion des identités</TableCell>
                      <TableCell className="border border-gray-200">Gestion des identités et des accès</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.17"]}
                          onValueChange={(value) => handleMaturityChange("A5.17", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.17"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.17"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.18</TableCell>
                      <TableCell className="border border-gray-200">Informations d'authentification</TableCell>
                      <TableCell className="border border-gray-200">Gestion des identités et des accès</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.18"]}
                          onValueChange={(value) => handleMaturityChange("A5.18", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.18"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.18"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.19</TableCell>
                      <TableCell className="border border-gray-200">Droits d'accès</TableCell>
                      <TableCell className="border border-gray-200">Gestion des identités et des accès</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.19"]}
                          onValueChange={(value) => handleMaturityChange("A5.19", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.19"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.19"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.20</TableCell>
                      <TableCell className="border border-gray-200">Sécurité de l'information dans les relations avec les fournisseurs</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des relations fournisseurs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.20"]}
                          onValueChange={(value) => handleMaturityChange("A5.20", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.20"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.20"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.21</TableCell>
                      <TableCell className="border border-gray-200">La sécurité de l'information dans les accords conclus avec les fournisseurs</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des relations fournisseurs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.21"]}
                          onValueChange={(value) => handleMaturityChange("A5.21", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.21"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.21"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.22</TableCell>
                      <TableCell className="border border-gray-200">Gestion de la sécurité de l'information dans la chaîne d'approvisionnement des TIC</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des relations fournisseurs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.22"]}
                          onValueChange={(value) => handleMaturityChange("A5.22", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.22"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.22"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.23</TableCell>
                      <TableCell className="border border-gray-200">Surveillance, révision et gestion des changements des services fournisseurs</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des relations fournisseurs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.23"]}
                          onValueChange={(value) => handleMaturityChange("A5.23", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.23"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.23"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.24</TableCell>
                      <TableCell className="border border-gray-200">Sécurité de l'information dans l'utilisation de services en nuage</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des relations fournisseurs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.24"]}
                          onValueChange={(value) => handleMaturityChange("A5.24", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.24"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.24"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.25</TableCell>
                      <TableCell className="border border-gray-200">Planification et préparation de la gestion des incidents de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">Gestion des événements de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.25"]}
                          onValueChange={(value) => handleMaturityChange("A5.25", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.25"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.25"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.26</TableCell>
                      <TableCell className="border border-gray-200">Évaluation des événements de sécurité de l'information et prise de décision</TableCell>
                      <TableCell className="border border-gray-200">Gestion des événements de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.26"]}
                          onValueChange={(value) => handleMaturityChange("A5.26", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.26"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.26"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.27</TableCell>
                      <TableCell className="border border-gray-200">Réponse aux incidents de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">Gestion des événements de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.27"]}
                          onValueChange={(value) => handleMaturityChange("A5.27", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.27"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.27"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.28</TableCell>
                      <TableCell className="border border-gray-200">Tirer des enseignements des incidents de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">Gestion des événements de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.28"]}
                          onValueChange={(value) => handleMaturityChange("A5.28", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.28"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.28"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.29</TableCell>
                      <TableCell className="border border-gray-200">Collecte de preuves</TableCell>
                      <TableCell className="border border-gray-200">Gestion des événements de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.29"]}
                          onValueChange={(value) => handleMaturityChange("A5.29", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.29"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.29"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.3O</TableCell>
                      <TableCell className="border border-gray-200">Sécurité de l'information pendant une perturbation</TableCell>
                      <TableCell className="border border-gray-200">Continuité</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.30"]}
                          onValueChange={(value) => handleMaturityChange("A5.30", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.30"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.30"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.31</TableCell>
                      <TableCell className="border border-gray-200">Préparation des TIC pour la continuité d'activité</TableCell>
                      <TableCell className="border border-gray-200">Continuité</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.31"]}
                          onValueChange={(value) => handleMaturityChange("A5.31", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.31"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.31"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.32</TableCell>
                      <TableCell className="border border-gray-200">Exigences légales, statutaires, réglementaires et contractuelles</TableCell>
                      <TableCell className="border border-gray-200">Législation et conformité</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.32"]}
                          onValueChange={(value) => handleMaturityChange("A5.32", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.32"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.32"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.33</TableCell>
                      <TableCell className="border border-gray-200">Droits de propriété intellectuelle</TableCell>
                      <TableCell className="border border-gray-200">Législation et conformité</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.33"]}
                          onValueChange={(value) => handleMaturityChange("A5.33", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.33"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.33"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.34</TableCell>
                      <TableCell className="border border-gray-200">Protection des enregistrements</TableCell>
                      <TableCell className="border border-gray-200">Législation et conformité, Gestion des actifs, Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.34"]}
                          onValueChange={(value) => handleMaturityChange("A5.34", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.34"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.34"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.35</TableCell>
                      <TableCell className="border border-gray-200">Protection de la vie privée et des données à caractère personnel (DCP)</TableCell>
                      <TableCell className="border border-gray-200">Législation et conformité, Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.35"]}
                          onValueChange={(value) => handleMaturityChange("A5.35", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.35"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.35"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.36</TableCell>
                      <TableCell className="border border-gray-200">Révision indépendante de la sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">Assurance de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.36"]}
                          onValueChange={(value) => handleMaturityChange("A5.36", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.36"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.36"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 5.37</TableCell>
                      <TableCell className="border border-gray-200">Conformité aux politiques, règles et normes de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">Législation et conformité</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A5.37"]}
                          onValueChange={(value) => handleMaturityChange("A5.37", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A5.37"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A5.37"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    {/* Nouvelle section: Mesures de sécurité applicables au personnel */}
                    <TableRow>
                      <TableCell rowSpan={8} className="border border-gray-200 font-medium bg-gray-50">
                        Mesures de sécurité applicables au personnel (8)
                      </TableCell>
                      <TableCell className="border border-gray-200">A 6.1</TableCell>
                      <TableCell className="border border-gray-200">Sélection des candidats</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des ressources humaines</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A6.1"]}
                          onValueChange={(value) => handleMaturityChange("A6.1", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A6.1"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A6.1"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 6.2</TableCell>
                      <TableCell className="border border-gray-200">Termes et conditions du contrat de travail</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des ressources humaines</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A6.2"]}
                          onValueChange={(value) => handleMaturityChange("A6.2", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A6.2"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A6.2"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 6.3</TableCell>
                      <TableCell className="border border-gray-200">Sensibilisation, enseignement et formation en sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des ressources humaines</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A6.3"]}
                          onValueChange={(value) => handleMaturityChange("A6.3", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A6.3"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A6.3"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 6.4</TableCell>
                      <TableCell className="border border-gray-200">Processus disciplinaire</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des ressources humaines</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A6.4"]}
                          onValueChange={(value) => handleMaturityChange("A6.4", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A6.4"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A6.4"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 6.5</TableCell>
                      <TableCell className="border border-gray-200">Responsabilités après la fin ou le changement d'un emploi</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des ressources humaines, Gestion des actifs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A6.5"]}
                          onValueChange={(value) => handleMaturityChange("A6.5", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A6.5"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A6.5"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 6.6</TableCell>
                      <TableCell className="border border-gray-200">Accords de confidentialité ou de non-divulgation</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des ressources humaines, Protection des informations, Sécurité des relations fournisseurs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A6.6"]}
                          onValueChange={(value) => handleMaturityChange("A6.6", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A6.6"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A6.6"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 6.7</TableCell>
                      <TableCell className="border border-gray-200">Travail à distance</TableCell>
                      <TableCell className="border border-gray-200">Gestion des actifs, Sécurité système et réseau, Sécurité physique</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A6.7"]}
                          onValueChange={(value) => handleMaturityChange("A6.7", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A6.7"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A6.7"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 6.8</TableCell>
                      <TableCell className="border border-gray-200">Déclaration des événements de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">Gestion des événements de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A6.8"]}
                          onValueChange={(value) => handleMaturityChange("A6.8", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A6.8"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A6.8"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    {/* Nouvelle section: Mesures de sécurité physique */}
                    <TableRow>
                      <TableCell rowSpan={14} className="border border-gray-200 font-medium bg-gray-50">
                        Mesures de sécurité physique (14)
                      </TableCell>
                      <TableCell className="border border-gray-200">A 7.1</TableCell>
                      <TableCell className="border border-gray-200">Périmètres de sécurité physique</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.1"]}
                          onValueChange={(value) => handleMaturityChange("A7.1", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.1"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.1"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.2</TableCell>
                      <TableCell className="border border-gray-200">Les entrées physiques</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.2"]}
                          onValueChange={(value) => handleMaturityChange("A7.2", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.2"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.2"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.3</TableCell>
                      <TableCell className="border border-gray-200">Sécurisation des bureaux, des salles et des installations</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique, Gestion des actifs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.3"]}
                          onValueChange={(value) => handleMaturityChange("A7.3", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.3"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.3"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.4</TableCell>
                      <TableCell className="border border-gray-200">Surveillance de la sécurité physique</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.4"]}
                          onValueChange={(value) => handleMaturityChange("A7.4", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.4"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.4"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.5</TableCell>
                      <TableCell className="border border-gray-200">Protection contre les menaces physiques et environnementales</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.5"]}
                          onValueChange={(value) => handleMaturityChange("A7.5", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.5"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.5"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.6</TableCell>
                      <TableCell className="border border-gray-200">Travail dans les zones sécurisées</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.6"]}
                          onValueChange={(value) => handleMaturityChange("A7.6", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.6"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.6"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.7</TableCell>
                      <TableCell className="border border-gray-200">Bureau propre et écran vide</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.7"]}
                          onValueChange={(value) => handleMaturityChange("A7.7", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.7"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.7"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.8</TableCell>
                      <TableCell className="border border-gray-200">Emplacement et protection du matériel</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique, Gestion des actifs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.8"]}
                          onValueChange={(value) => handleMaturityChange("A7.8", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.8"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.8"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.9</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des actifs hors des locaux</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique, Gestion des actifs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.9"]}
                          onValueChange={(value) => handleMaturityChange("A7.9", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.9"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.9"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.10</TableCell>
                      <TableCell className="border border-gray-200">Supports de stockage</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique, Gestion des actifs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.10"]}
                          onValueChange={(value) => handleMaturityChange("A7.10", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.10"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.10"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.11</TableCell>
                      <TableCell className="border border-gray-200">Services supports</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.11"]}
                          onValueChange={(value) => handleMaturityChange("A7.11", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.11"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.11"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.12</TableCell>
                      <TableCell className="border border-gray-200">Sécurité du câblage</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.12"]}
                          onValueChange={(value) => handleMaturityChange("A7.12", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.12"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.12"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.13</TableCell>
                      <TableCell className="border border-gray-200">Maintenance du matériel</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique, Gestion des actifs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.13"]}
                          onValueChange={(value) => handleMaturityChange("A7.13", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.13"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.13"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 7.14</TableCell>
                      <TableCell className="border border-gray-200">Élimination ou recyclage sécurisé(e) du matériel</TableCell>
                      <TableCell className="border border-gray-200">Sécurité physique, Gestion des actifs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A7.14"]}
                          onValueChange={(value) => handleMaturityChange("A7.14", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A7.14"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A7.14"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    {/* Nouvelle section: Mesures de sécurité applicables au personnel */}
                    <TableRow>
                      <TableCell rowSpan={34} className="border border-gray-200 font-medium bg-gray-50">
                        Mesures de sécurité technologiques  (34 )
                      </TableCell>
                      <TableCell className="border border-gray-200">A 8.1</TableCell>
                      <TableCell className="border border-gray-200">Terminaux finaux des utilisateurs</TableCell>
                      <TableCell className="border border-gray-200">Gestion des actifs, Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.1"]}
                          onValueChange={(value) => handleMaturityChange("A8.1", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.1"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.1"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.2</TableCell>
                      <TableCell className="border border-gray-200">Droits d'accès privilégiés</TableCell>
                      <TableCell className="border border-gray-200">Gestion des identités et des accès</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.2"]}
                          onValueChange={(value) => handleMaturityChange("A8.2", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.2"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.2"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.3</TableCell>
                      <TableCell className="border border-gray-200">Restriction d'accès aux informations</TableCell>
                      <TableCell className="border border-gray-200">Gestion des identités et des accès</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.3"]}
                          onValueChange={(value) => handleMaturityChange("A8.3", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.3"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.3"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.4</TableCell>
                      <TableCell className="border border-gray-200">Accès aux codes source</TableCell>
                      <TableCell className="border border-gray-200">Gestion des identités et des accès, Sécurité des applications</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.4"]}
                          onValueChange={(value) => handleMaturityChange("A8.4", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.4"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.4"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.5</TableCell>
                      <TableCell className="border border-gray-200">Authentification sécurisée</TableCell>
                      <TableCell className="border border-gray-200">Gestion des identités et des accès</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.5"]}
                          onValueChange={(value) => handleMaturityChange("A8.5", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.5"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.5"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.6</TableCell>
                      <TableCell className="border border-gray-200">Dimensionnement</TableCell>
                      <TableCell className="border border-gray-200">Continuité</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.6"]}
                          onValueChange={(value) => handleMaturityChange("A8.6", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.6"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.6"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.7</TableCell>
                      <TableCell className="border border-gray-200">Protection contre les programmes malveillants (malware)</TableCell>
                      <TableCell className="border border-gray-200">Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.7"]}
                          onValueChange={(value) => handleMaturityChange("A8.7", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.7"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.7"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.8</TableCell>
                      <TableCell className="border border-gray-200">Gestion des vulnérabilités techniques</TableCell>
                      <TableCell className="border border-gray-200">Gestion des menaces et des vulnérabilités</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.8"]}
                          onValueChange={(value) => handleMaturityChange("A8.8", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.8"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.8"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.9</TableCell>
                      <TableCell className="border border-gray-200">Gestion des configurations</TableCell>
                      <TableCell className="border border-gray-200">Configuration sécurisée</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.9"]}
                          onValueChange={(value) => handleMaturityChange("A8.9", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.9"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.9"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.10</TableCell>
                      <TableCell className="border border-gray-200">Suppression des informations</TableCell>
                      <TableCell className="border border-gray-200">Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.10"]}
                          onValueChange={(value) => handleMaturityChange("A8.10", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.10"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.10"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.11</TableCell>
                      <TableCell className="border border-gray-200">Masquage des données</TableCell>
                      <TableCell className="border border-gray-200">Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.11"]}
                          onValueChange={(value) => handleMaturityChange("A8.11", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.11"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.11"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.12</TableCell>
                      <TableCell className="border border-gray-200">Prévention de la fuite de données</TableCell>
                      <TableCell className="border border-gray-200">Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.12"]}
                          onValueChange={(value) => handleMaturityChange("A8.12", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.12"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.12"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.13</TableCell>
                      <TableCell className="border border-gray-200">Sauvegarde des informations</TableCell>
                      <TableCell className="border border-gray-200">Continuité</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.13"]}
                          onValueChange={(value) => handleMaturityChange("A8.13", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.13"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.13"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.14</TableCell>
                      <TableCell className="border border-gray-200">Redondance des moyens de traitement de l'information</TableCell>
                      <TableCell className="border border-gray-200">Continuité, Gestion des actifs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.14"]}
                          onValueChange={(value) => handleMaturityChange("A8.14", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.14"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.14"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.15</TableCell>
                      <TableCell className="border border-gray-200">Journalisation</TableCell>
                      <TableCell className="border border-gray-200">Gestion des événements de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.15"]}
                          onValueChange={(value) => handleMaturityChange("A8.15", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.15"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.15"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.16</TableCell>
                      <TableCell className="border border-gray-200">Activités de surveillance</TableCell>
                      <TableCell className="border border-gray-200">Gestion des événements de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.16"]}
                          onValueChange={(value) => handleMaturityChange("A8.16", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.16"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.16"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.17</TableCell>
                      <TableCell className="border border-gray-200">Synchronisation des horloges</TableCell>
                      <TableCell className="border border-gray-200">Gestion des événements de sécurité de l'information</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.17"]}
                          onValueChange={(value) => handleMaturityChange("A8.17", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.17"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.17"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.18</TableCell>
                      <TableCell className="border border-gray-200">Utilisation de programmes utilitaires à privilèges</TableCell>
                      <TableCell className="border border-gray-200">Gestion des événements de sécurité de l'information, Configuration sécurisée</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.18"]}
                          onValueChange={(value) => handleMaturityChange("A8.18", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.18"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.18"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.19</TableCell>
                      <TableCell className="border border-gray-200">Installation de logiciels sur des systèmes opérationnels</TableCell>
                      <TableCell className="border border-gray-200">Configuration sécurisée</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.19"]}
                          onValueChange={(value) => handleMaturityChange("A8.19", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.19"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.19"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.20</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des réseaux</TableCell>
                      <TableCell className="border border-gray-200">Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.20"]}
                          onValueChange={(value) => handleMaturityChange("A8.20", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.20"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.20"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.21</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des réseaux</TableCell>
                      <TableCell className="border border-gray-200">Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.21"]}
                          onValueChange={(value) => handleMaturityChange("A8.21", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.21"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.21"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.22</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des réseaux</TableCell>
                      <TableCell className="border border-gray-200">Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.22"]}
                          onValueChange={(value) => handleMaturityChange("A8.22", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.22"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.22"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.21</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des services réseau</TableCell>
                      <TableCell className="border border-gray-200">Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.21"]}
                          onValueChange={(value) => handleMaturityChange("A8.21", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.21"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.21"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.22</TableCell>
                      <TableCell className="border border-gray-200">Cloisonnement des réseaux</TableCell>
                      <TableCell className="border border-gray-200">Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.22"]}
                          onValueChange={(value) => handleMaturityChange("A8.22", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.22"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.22"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.23</TableCell>
                      <TableCell className="border border-gray-200">Filtrage web</TableCell>
                      <TableCell className="border border-gray-200">Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.23"]}
                          onValueChange={(value) => handleMaturityChange("A8.23", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.23"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.23"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.24</TableCell>
                      <TableCell className="border border-gray-200">Utilisation de la cryptographie</TableCell>
                      <TableCell className="border border-gray-200">Configuration sécurisée</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.24"]}
                          onValueChange={(value) => handleMaturityChange("A8.24", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.24"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.24"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.25</TableCell>
                      <TableCell className="border border-gray-200">Cycle de vie de développement sécurisé</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des applications, Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.25"]}
                          onValueChange={(value) => handleMaturityChange("A8.25", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.25"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.25"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.26</TableCell>
                      <TableCell className="border border-gray-200">Exigences de sécurité des applications</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des applications, Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.26"]}
                          onValueChange={(value) => handleMaturityChange("A8.26", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.26"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.26"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.27</TableCell>
                      <TableCell className="border border-gray-200">Principes d'ingénierie et d'architecture des systèmes sécurisés</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des applications, Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.27"]}
                          onValueChange={(value) => handleMaturityChange("A8.27", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.27"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.27"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.28</TableCell>
                      <TableCell className="border border-gray-200">Codage sécurisé</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des applications, Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.28"]}
                          onValueChange={(value) => handleMaturityChange("A8.28", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.28"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.28"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.29</TableCell>
                      <TableCell className="border border-gray-200">Tests de sécurité dans le développement et l'acceptation</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des applications, Assurance de sécurité de l'information, Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.29"]}
                          onValueChange={(value) => handleMaturityChange("A8.29", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.29"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.29"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.30</TableCell>
                      <TableCell className="border border-gray-200">Développement externalisé</TableCell>
                      <TableCell className="border border-gray-200">Sécurité système et réseau, Sécurité des applications, Sécurité des relations fournisseurs</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.30"]}
                          onValueChange={(value) => handleMaturityChange("A8.30", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.30"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.30"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.31</TableCell>
                      <TableCell className="border border-gray-200">Séparation des environnements de développement, de test et opérationnels</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des applications, Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.31"]}
                          onValueChange={(value) => handleMaturityChange("A8.31", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.31"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.31"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200">A 8.32</TableCell>
                      <TableCell className="border border-gray-200">Gestion des changements</TableCell>
                      <TableCell className="border border-gray-200">Sécurité des applications, Sécurité système et réseau</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.32"]}
                          onValueChange={(value) => handleMaturityChange("A8.32", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.32"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.32"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200"></TableCell>
                      <TableCell className="border border-gray-200">A 8.33</TableCell>
                      <TableCell className="border border-gray-200">Informations de test</TableCell>
                      <TableCell className="border border-gray-200">Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.33"]}
                          onValueChange={(value) => handleMaturityChange("A8.33", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.33"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.33"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border border-gray-200"></TableCell>
                      <TableCell className="border border-gray-200">A 8.34</TableCell>
                      <TableCell className="border border-gray-200">Protection des systèmes d'information pendant les tests d'audit</TableCell>
                      <TableCell className="border border-gray-200">Sécurité système et réseau, Protection des informations</TableCell>
                      <TableCell className="border border-gray-200">
                        <Select
                          value={maturityValues["A8.34"]}
                          onValueChange={(value) => handleMaturityChange("A8.34", value)}
                        >
                          <SelectTrigger className={cn("w-full", getSelectTriggerClass(maturityValues["A8.34"]))}>
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="N/A" className="bg-gray-100 text-gray-500">N/A</SelectItem>
                            <SelectItem value="0" className="bg-red-600 text-white">0</SelectItem>
                            <SelectItem value="1" className="bg-red-400 text-white">1</SelectItem>
                            <SelectItem value="2" className="bg-orange-400 text-white">2</SelectItem>
                            <SelectItem value="3" className="bg-yellow-500 text-white">3</SelectItem>
                            <SelectItem value="4" className="bg-green-400 text-white">4</SelectItem>
                            <SelectItem value="5" className="bg-green-600 text-white">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-200 text-sm text-gray-700 italic">
                        {getMaturityDescription(maturityValues["A8.34"])}
                      </TableCell>
                      <TableCell className="border border-gray-200">
                        <Textarea placeholder="Commentaire de l'auditeur..." className="min-h-[80px] w-full resize-y" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-gray-100">
                  Échelle: 0 (Non-existant) à 5 (Optimisé)
                </Badge>
                <Badge variant="outline" className="bg-gray-100">
                  N/A: Non applicable
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  onClick={calculateDomainAverages}
                  className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  Calculer Maturité
                </Button>
                <Button
                  variant="outline"
                  onClick={generateVulnerabilityTable}
                  className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
                >
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Générer Tableau des Vulnérabilités
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Exporter
                </Button>
              </div>
            </CardFooter>
          </Card>



          {/* Tableau des vulnérabilités */}
          {showVulnerabilityTable && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  TABLEAU DES VULNÉRABILITÉS IDENTIFIÉES
                </CardTitle>
                <CardDescription>
                  Contrôles avec un niveau de maturité de 0 (Pratique inexistante)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table className="border-collapse border border-gray-200 min-w-[1400px]">
                    <TableHeader>
                      <TableRow className="bg-red-50">
                        <TableHead className="border border-gray-200 font-bold w-[120px]">Vulnérabilité</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[140px]">Référence du Contrôle</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[250px]">Nom du Contrôle</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[200px]">Description des Vulnérabilités</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[180px]">Preuve(s) d'audit</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[150px]">Actifs impactés</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[150px]">Impact d'exploitation</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[160px]">Probabilité d'exploitation</TableHead>
                        <TableHead className="border border-gray-200 font-bold w-[250px]">Recommandation / Mesure de traitement</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getVulnerabilities().map((vuln, index) => (
                        <TableRow key={vuln.reference} className={index % 2 === 0 ? "bg-red-25" : "bg-white"}>
                          <TableCell className="border border-gray-200 font-medium">
                            Vulnérabilité {vuln.id}
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            {vuln.reference}
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            {vuln.name}
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              placeholder="Description des vulnérabilités..."
                              className="min-h-[60px] w-full resize-y border-0 bg-transparent"
                            />
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              placeholder="Preuve(s) d'audit..."
                              className="min-h-[60px] w-full resize-y border-0 bg-transparent"
                            />
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              placeholder="Actifs impactés..."
                              className="min-h-[60px] w-full resize-y border-0 bg-transparent"
                            />
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              placeholder="Impact d'exploitation..."
                              className="min-h-[60px] w-full resize-y border-0 bg-transparent"
                            />
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Sélectionner" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="très-faible">Très faible</SelectItem>
                                <SelectItem value="faible">Faible</SelectItem>
                                <SelectItem value="moyenne">Moyenne</SelectItem>
                                <SelectItem value="élevée">Élevée</SelectItem>
                                <SelectItem value="très-élevée">Très élevée</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell className="border border-gray-200">
                            <Textarea
                              placeholder="Recommandation / Mesure de traitement..."
                              className="min-h-[60px] w-full resize-y border-0 bg-transparent"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                {getVulnerabilities().length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <AlertTriangle className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                    <p className="text-lg font-medium">Aucune vulnérabilité détectée</p>
                    <p className="text-sm">Aucun contrôle n'a un niveau de maturité de 0 (Pratique inexistante)</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                  {getVulnerabilities().length} vulnérabilité(s) identifiée(s)
                </Badge>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowVulnerabilityTable(false)}
                    className="text-gray-600"
                  >
                    Masquer le tableau
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Exporter les vulnérabilités
                  </Button>
                </div>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        {/* Indicateurs */}
        <TabsContent value="security-indicators">
          <Card>
            <CardHeader>
              <CardTitle>Indicateurs de sécurité</CardTitle>
              <CardDescription>
                Mesures quantitatives de la sécurité du système d'information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SecurityAssessmentTable />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tableau de bord */}
        <TabsContent value="dashboard">
          <div className="space-y-8 p-1">
            {/* En-tête du dashboard */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de Bord Sécurité</h1>
              <p className="text-lg text-gray-600">Analyse de la maturité des contrôles ANCS</p>
              <div className="w-24 h-1 bg-[#FFC000] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Vue d'ensemble - KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Total Contrôles */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">TOTAL CONTRÔLES</p>
                    <p className="text-4xl font-bold text-gray-900 mb-1">93</p>
                    <p className="text-sm text-gray-500">Contrôles ANCS</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Maturité Moyenne */}
              <div className="bg-green-50 rounded-lg shadow-md border border-green-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-green-600 uppercase tracking-wide mb-2">MATURITÉ MOYENNE</p>
                    <p className="text-4xl font-bold text-green-700 mb-1">
                      {(() => {
                        const values = Object.values(maturityValues).filter(v => v && v !== 'N/A' && v !== '');
                        const avg = values.length > 0 ? values.reduce((sum, val) => sum + parseInt(val), 0) / values.length : 0;
                        return avg.toFixed(1);
                      })()}
                    </p>
                    <p className="text-sm text-green-600">Sur une échelle de 0-5</p>
                  </div>
                  <div className="bg-green-200 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-700" />
                  </div>
                </div>
              </div>

              {/* Contrôles Critiques */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">CONTRÔLES CRITIQUES</p>
                    <p className="text-4xl font-bold text-red-600 mb-1">
                      {Object.values(maturityValues).filter(v => v === '0').length}
                    </p>
                    <p className="text-sm text-gray-500">Niveau 0 - Action requise</p>
                  </div>
                  <div className="bg-red-100 p-3 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Taux d'Évaluation */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">TAUX D'ÉVALUATION</p>
                    <p className="text-4xl font-bold text-gray-900 mb-1">
                      {(() => {
                        const evaluated = Object.values(maturityValues).filter(v => v && v !== '').length;
                        return Math.round((evaluated / 93) * 100);
                      })()}%
                    </p>
                    <p className="text-sm text-gray-500">Contrôles évalués</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <BarChart className="h-6 w-6 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Répartition par domaine et distribution des niveaux */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Répartition par domaine */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#FFC000] p-2 rounded-lg">
                    <PieChart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Répartition par Domaine</h3>
                    <p className="text-sm text-gray-500">Distribution des contrôles par catégorie</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {(() => {
                    const domains = [
                      {
                        name: 'Organisationnelles',
                        fullName: 'Mesures de sécurité organisationnelles',
                        count: 37,
                        color: 'from-gray-400 to-gray-600',
                        bgColor: 'bg-gray-50',
                        textColor: 'text-gray-700',
                        icon: '🏢'
                      },
                      {
                        name: 'Personnel',
                        fullName: 'Mesures de sécurité applicables au personnel',
                        count: 8,
                        color: 'from-gray-500 to-gray-700',
                        bgColor: 'bg-gray-50',
                        textColor: 'text-gray-700',
                        icon: '👥'
                      },
                      {
                        name: 'Physiques',
                        fullName: 'Mesures de sécurité physique',
                        count: 14,
                        color: 'from-gray-400 to-gray-600',
                        bgColor: 'bg-gray-50',
                        textColor: 'text-gray-700',
                        icon: '🏗️'
                      },
                      {
                        name: 'Technologiques',
                        fullName: 'Mesures de sécurité technologiques',
                        count: 34,
                        color: 'from-gray-500 to-gray-700',
                        bgColor: 'bg-gray-50',
                        textColor: 'text-gray-700',
                        icon: '💻'
                      }
                    ];

                    return domains.map((domain) => {
                      const percentage = (domain.count / 93) * 100;
                      return (
                        <div key={domain.name} className={`${domain.bgColor} p-4 rounded-lg border border-gray-100`}>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{domain.icon}</span>
                              <div>
                                <h4 className={`font-semibold ${domain.textColor}`}>{domain.name}</h4>
                                <p className="text-xs text-gray-600">{domain.fullName}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className={`text-lg font-bold ${domain.textColor}`}>{domain.count}</span>
                              <p className="text-xs text-gray-500">contrôles</p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progression</span>
                              <span className={`font-medium ${domain.textColor}`}>{percentage.toFixed(1)}%</span>
                            </div>
                            <div className="w-full bg-white rounded-full h-3 shadow-inner">
                              <div
                                className={`h-3 rounded-full bg-gradient-to-r ${domain.color} shadow-sm transition-all duration-500 ease-out`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>

              {/* Distribution des niveaux */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gray-700 p-2 rounded-lg">
                    <BarChart2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Distribution des Niveaux</h3>
                    <p className="text-sm text-gray-500">Répartition des contrôles par niveau de maturité</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {(() => {
                    const levels = [
                      { value: 'N/A', label: 'Non applicable', color: 'from-gray-400 to-gray-500', bgColor: 'bg-gray-50', textColor: 'text-gray-700' },
                      { value: '0', label: 'Pratique inexistante', color: 'from-red-500 to-red-600', bgColor: 'bg-red-50', textColor: 'text-red-700' },
                      { value: '1', label: 'Pratique informelle', color: 'from-red-400 to-red-500', bgColor: 'bg-red-50', textColor: 'text-red-600' },
                      { value: '2', label: 'Pratique répétable', color: 'from-orange-400 to-orange-500', bgColor: 'bg-orange-50', textColor: 'text-orange-700' },
                      { value: '3', label: 'Processus définis', color: 'from-yellow-400 to-yellow-500', bgColor: 'bg-yellow-50', textColor: 'text-yellow-700' },
                      { value: '4', label: 'Processus contrôlés', color: 'from-green-300 to-green-400', bgColor: 'bg-green-50', textColor: 'text-green-600' },
                      { value: '5', label: 'Processus optimisés', color: 'from-green-600 to-green-700', bgColor: 'bg-green-50', textColor: 'text-green-800' }
                    ];

                    return levels.map(level => {
                      const count = Object.values(maturityValues).filter(v => v === level.value).length;
                      const percentage = count > 0 ? (count / 93) * 100 : 0;

                      return (
                        <div key={level.value} className={`${level.bgColor} p-3 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${level.color}`}></div>
                              <div>
                                <span className={`font-semibold ${level.textColor}`}>Niveau {level.value}</span>
                                <p className="text-xs text-gray-600">{level.label}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className={`text-lg font-bold ${level.textColor}`}>{count}</span>
                              <p className="text-xs text-gray-500">contrôles</p>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">Pourcentage</span>
                              <span className={`font-medium ${level.textColor}`}>{percentage.toFixed(1)}%</span>
                            </div>
                            <div className="w-full bg-white rounded-full h-2 shadow-inner">
                              <div
                                className={`h-2 rounded-full bg-gradient-to-r ${level.color} transition-all duration-500 ease-out`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>
            </div>

            {/* Analyse détaillée par domaine */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gray-700 p-2 rounded-lg">
                  <LineChart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Analyse Détaillée par Domaine</h3>
                  <p className="text-sm text-gray-500">Performance et statistiques par catégorie de contrôles</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {(() => {
                  const domainAnalysis = [
                    {
                      name: 'Organisationnelles',
                      prefix: 'A5.',
                      range: [1, 37],
                      color: 'from-gray-400 to-gray-600',
                      bgColor: 'bg-gray-50',
                      textColor: 'text-gray-700',
                      borderColor: 'border-gray-200',
                      icon: '🏢',
                      description: 'Mesures de sécurité organisationnelles'
                    },
                    {
                      name: 'Personnel',
                      prefix: 'A6.',
                      range: [1, 8],
                      color: 'from-gray-500 to-gray-700',
                      bgColor: 'bg-gray-50',
                      textColor: 'text-gray-700',
                      borderColor: 'border-gray-200',
                      icon: '👥',
                      description: 'Mesures de sécurité applicables au personnel'
                    },
                    {
                      name: 'Physiques',
                      prefix: 'A7.',
                      range: [1, 14],
                      color: 'from-gray-400 to-gray-600',
                      bgColor: 'bg-gray-50',
                      textColor: 'text-gray-700',
                      borderColor: 'border-gray-200',
                      icon: '🏗️',
                      description: 'Mesures de sécurité physique'
                    },
                    {
                      name: 'Technologiques',
                      prefix: 'A8.',
                      range: [1, 34],
                      color: 'from-gray-500 to-gray-700',
                      bgColor: 'bg-gray-50',
                      textColor: 'text-gray-700',
                      borderColor: 'border-gray-200',
                      icon: '💻',
                      description: 'Mesures de sécurité technologiques'
                    }
                  ];

                  return domainAnalysis.map((domain) => {
                    // Calculer les statistiques pour ce domaine
                    const domainValues: number[] = [];
                    for (let i = domain.range[0]; i <= domain.range[1]; i++) {
                      const key = `${domain.prefix}${i}`;
                      const value = maturityValues[key as keyof typeof maturityValues];
                      if (value && value !== 'N/A' && value !== '') {
                        domainValues.push(parseInt(value));
                      }
                    }

                    const average = domainValues.length > 0 ?
                      (domainValues.reduce((sum, val) => sum + val, 0) / domainValues.length).toFixed(1) : 'N/A';
                    const criticalCount = domainValues.filter(v => v === 0).length;
                    const evaluatedCount = domainValues.length;
                    const totalCount = domain.range[1] - domain.range[0] + 1;
                    const progressPercentage = Math.round((evaluatedCount / totalCount) * 100);

                    return (
                      <div key={domain.name} className={`${domain.bgColor} p-5 rounded-xl border ${domain.borderColor} hover:shadow-lg transition-all duration-300`}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{domain.icon}</span>
                          <div>
                            <h4 className={`font-bold ${domain.textColor} text-lg`}>{domain.name}</h4>
                            <p className="text-xs text-gray-600">{domain.description}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-xs text-gray-500 mb-1">Évalués</p>
                            <p className="text-lg font-bold text-gray-900">{evaluatedCount}/{totalCount}</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-xs text-gray-500 mb-1">Maturité Moy.</p>
                            <p className="text-lg font-bold text-gray-900">{average}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="text-sm font-medium text-gray-700 cursor-help border-b border-dotted border-gray-400">
                                    Contrôles critiques
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="max-w-sm">
                                    <p className="font-semibold text-red-700 mb-2">Contrôles Critiques - {domain.name}</p>
                                    <p className="text-sm text-gray-600 mb-3">Contrôles de niveau 0 nécessitant une action immédiate</p>
                                    {(() => {
                                      // Récupérer les contrôles critiques pour ce domaine
                                      const domainCriticalControls = [];
                                      for (let i = domain.range[0]; i <= domain.range[1]; i++) {
                                        const key = `${domain.prefix}${i}`;
                                        const value = maturityValues[key as keyof typeof maturityValues];
                                        if (value === '0') {
                                          domainCriticalControls.push(key);
                                        }
                                      }

                                      if (domainCriticalControls.length === 0) {
                                        return (
                                          <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                                            <p className="text-sm text-green-700 font-medium">✅ Aucun contrôle critique</p>
                                            <p className="text-xs text-green-600">Tous les contrôles évalués ont un niveau supérieur à 0</p>
                                          </div>
                                        );
                                      }

                                      return (
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                                          <p className="text-xs text-red-600 mb-2 font-medium">
                                            {domainCriticalControls.length} contrôle(s) critique(s) :
                                          </p>
                                          <div className="space-y-1">
                                            {domainCriticalControls.map(controlId => (
                                              <div key={controlId} className="flex items-center gap-2">
                                                <span className="text-xs font-mono bg-red-100 text-red-700 px-1 py-0.5 rounded">
                                                  {controlId}
                                                </span>
                                                <span className="text-xs text-red-600">Pratique inexistante</span>
                                              </div>
                                            ))}
                                          </div>
                                          <p className="text-xs text-red-600 mt-2 italic">
                                            Action immédiate requise pour ces contrôles
                                          </p>
                                        </div>
                                      );
                                    })()}
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                              criticalCount > 0 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                            }`}>
                              {criticalCount}
                            </span>
                          </div>

                          <div>
                            <div className="flex justify-between text-xs mb-2">
                              <span className="text-gray-600">Progression d'évaluation</span>
                              <span className={`font-bold ${domain.textColor}`}>{progressPercentage}%</span>
                            </div>
                            <div className="w-full bg-white rounded-full h-3 shadow-inner">
                              <div
                                className={`h-3 rounded-full bg-gradient-to-r ${domain.color} shadow-sm transition-all duration-700 ease-out`}
                                style={{ width: `${progressPercentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>




          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}