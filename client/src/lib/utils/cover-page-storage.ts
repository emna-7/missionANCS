/**
 * Utilitaires pour gérer le stockage local des données de page de couverture
 */

interface CoverPageData {
  auditeeLogo?: string;
  auditorSignature?: string;
  companyLogo?: string;
  [key: string]: any;
}

/**
 * Récupère les données de page de couverture depuis le localStorage
 */
export function getCoverPageData(missionId: number): CoverPageData {
  try {
    const key = `coverPage_${missionId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error("Erreur lors de la récupération des données de page de couverture:", error);
    return {};
  }
}

/**
 * Sauvegarde les données de page de couverture dans le localStorage
 */
export function saveCoverPageData(missionId: number, data: CoverPageData): void {
  try {
    const key = `coverPage_${missionId}`;
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Erreur lors de la sauvegarde des données de page de couverture:", error);
  }
}

/**
 * Supprime les données de page de couverture du localStorage
 */
export function removeCoverPageData(missionId: number): void {
  try {
    const key = `coverPage_${missionId}`;
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Erreur lors de la suppression des données de page de couverture:", error);
  }
}
