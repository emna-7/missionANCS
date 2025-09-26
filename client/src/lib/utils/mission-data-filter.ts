import { MissionFormData } from "@shared/schema";

/**
 * Filtre les données de mission pour exclure les champs non supportés par le serveur
 */
export function filterMissionDataForServer(data: MissionFormData): Partial<MissionFormData> {
  // Pour l'instant, on retourne toutes les données
  // Cette fonction peut être étendue pour filtrer des champs spécifiques si nécessaire
  const {
    // Exclure les champs qui pourraient causer des problèmes
    ...filteredData
  } = data;

  return filteredData;
}
