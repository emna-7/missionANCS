import ExcelJS from 'exceljs';
import { Mission, Contact, Risk, Recommendation } from '@shared/schema';

interface MissionWithRelations extends Mission {
  contacts: Contact[];
  risks: Risk[];
  recommendations: Recommendation[];
}

export async function generateExcel(mission: MissionWithRelations): Promise<Buffer> {
  // Create a new Excel workbook
  const workbook = new ExcelJS.Workbook();
  
  // Set workbook properties
  workbook.creator = 'Audit Mission Platform';
  workbook.lastModifiedBy = 'Audit Mission Platform';
  workbook.created = new Date();
  workbook.modified = new Date();
  
  // Add a general info worksheet
  const generalSheet = workbook.addWorksheet('Informations générales');
  
  // Add title
  generalSheet.mergeCells('A1:F1');
  const titleRow = generalSheet.getRow(1);
  titleRow.getCell(1).value = `RAPPORT D'AUDIT - ${mission.companyName}`;
  titleRow.getCell(1).font = { size: 16, bold: true, color: { argb: '0070C0' } };
  titleRow.getCell(1).alignment = { horizontal: 'center' };
  
  // Add company information
  generalSheet.getColumn(1).width = 25;
  generalSheet.getColumn(2).width = 35;

  generalSheet.addRow([]);
  generalSheet.addRow(['Informations de l\'entreprise', '']);
  const headerRow = generalSheet.lastRow;
  headerRow!.getCell(1).font = { bold: true, size: 14 };
  
  generalSheet.addRow(['Nom de l\'entreprise', mission.companyName]);
  generalSheet.addRow(['Type d\'entreprise', mission.companyType]);
  generalSheet.addRow(['Numéro SIRET', mission.registrationNumber]);
  generalSheet.addRow(['Date de création', mission.creationDate]);
  generalSheet.addRow(['Adresse', mission.address]);
  generalSheet.addRow(['Secteur d\'activité', mission.activitySector]);
  
  // Add contacts information
  generalSheet.addRow([]);
  generalSheet.addRow(['Contacts principaux', '']);
  const contactsHeader = generalSheet.lastRow;
  contactsHeader!.getCell(1).font = { bold: true, size: 14 };
  
  // Add headers for contacts
  generalSheet.addRow(['Nom', 'Poste', 'Email']);
  const contactHeaderRow = generalSheet.lastRow;
  for (let i = 1; i <= 3; i++) {
    contactHeaderRow!.getCell(i).font = { bold: true };
    contactHeaderRow!.getCell(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'E6E6E6' }
    };
    contactHeaderRow!.getCell(i).border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  }
  
  // Add contact data
  for (const contact of mission.contacts) {
    generalSheet.addRow([contact.name, contact.position, contact.email]);
  }
  
  // Add financial analysis worksheet
  const financialSheet = workbook.addWorksheet('Analyse financière');
  
  financialSheet.getColumn(1).width = 25;
  financialSheet.getColumn(2).width = 15;
  financialSheet.getColumn(3).width = 25;
  
  // Add title
  financialSheet.mergeCells('A1:C1');
  const finTitleRow = financialSheet.getRow(1);
  finTitleRow.getCell(1).value = 'ANALYSE FINANCIÈRE';
  finTitleRow.getCell(1).font = { size: 16, bold: true, color: { argb: '0070C0' } };
  finTitleRow.getCell(1).alignment = { horizontal: 'center' };
  
  financialSheet.addRow([]);
  financialSheet.addRow(['Chiffre d\'affaires annuel (€)', mission.annualRevenue?.toString()]);
  financialSheet.addRow(['Marge bénéficiaire (%)', mission.profitMargin?.toString()]);
  financialSheet.addRow(['Total des actifs (€)', mission.totalAssets?.toString()]);
  financialSheet.addRow(['Total des dettes (€)', mission.totalDebts?.toString()]);
  
  // Add ratios
  financialSheet.addRow([]);
  financialSheet.addRow(['Ratios financiers', '', '']);
  const ratiosHeader = financialSheet.lastRow;
  ratiosHeader!.getCell(1).font = { bold: true, size: 14 };
  
  financialSheet.addRow(['Ratio', 'Valeur', 'Évaluation']);
  const ratioHeaderRow = financialSheet.lastRow;
  for (let i = 1; i <= 3; i++) {
    ratioHeaderRow!.getCell(i).font = { bold: true };
    ratioHeaderRow!.getCell(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'E6E6E6' }
    };
    ratioHeaderRow!.getCell(i).border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  }
  
  // Add ratio data
  if (mission.financialRatios) {
    const { financialRatios } = mission;
    
    financialSheet.addRow(['Ratio de liquidité', 
      financialRatios.liquidity?.toString(), 
      financialRatios.liquidityEvaluation]);
      
    financialSheet.addRow(['Ratio d\'endettement', 
      financialRatios.debt?.toString(), 
      financialRatios.debtEvaluation]);
      
    financialSheet.addRow(['Rentabilité des capitaux propres (ROE)', 
      financialRatios.roe?.toString(), 
      financialRatios.roeEvaluation]);
  }
  
  // Add comments
  financialSheet.addRow([]);
  financialSheet.addRow(['Commentaires sur la situation financière']);
  const commentsHeader = financialSheet.lastRow;
  commentsHeader!.getCell(1).font = { bold: true };
  
  financialSheet.addRow([mission.financialComments || '']);
  
  // Add risks worksheet
  const risksSheet = workbook.addWorksheet('Évaluation des risques');
  
  risksSheet.getColumn(1).width = 20;
  risksSheet.getColumn(2).width = 15;
  risksSheet.getColumn(3).width = 15;
  risksSheet.getColumn(4).width = 40;
  risksSheet.getColumn(5).width = 40;
  
  // Add title
  risksSheet.mergeCells('A1:E1');
  const risksTitleRow = risksSheet.getRow(1);
  risksTitleRow.getCell(1).value = 'ÉVALUATION DES RISQUES';
  risksTitleRow.getCell(1).font = { size: 16, bold: true, color: { argb: '0070C0' } };
  risksTitleRow.getCell(1).alignment = { horizontal: 'center' };
  
  risksSheet.addRow([]);
  risksSheet.addRow(['Type de risque', 'Probabilité', 'Impact', 'Description', 'Mesures de mitigation']);
  const risksHeaderRow = risksSheet.lastRow;
  for (let i = 1; i <= 5; i++) {
    risksHeaderRow!.getCell(i).font = { bold: true };
    risksHeaderRow!.getCell(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'E6E6E6' }
    };
    risksHeaderRow!.getCell(i).border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  }
  
  // Add risk data
  for (const risk of mission.risks) {
    risksSheet.addRow([
      risk.riskType, 
      risk.probability, 
      risk.impact, 
      risk.description, 
      risk.mitigation
    ]);
  }
  
  // Add compliance worksheet
  const complianceSheet = workbook.addWorksheet('Conformité et gouvernance');
  
  complianceSheet.getColumn(1).width = 25;
  complianceSheet.getColumn(2).width = 20;
  complianceSheet.getColumn(3).width = 40;
  
  // Add title
  complianceSheet.mergeCells('A1:C1');
  const complianceTitleRow = complianceSheet.getRow(1);
  complianceTitleRow.getCell(1).value = 'CONFORMITÉ ET GOUVERNANCE';
  complianceTitleRow.getCell(1).font = { size: 16, bold: true, color: { argb: '0070C0' } };
  complianceTitleRow.getCell(1).alignment = { horizontal: 'center' };
  
  complianceSheet.addRow([]);
  complianceSheet.addRow(['Conformité réglementaire', '', '']);
  const complianceHeader = complianceSheet.lastRow;
  complianceHeader!.getCell(1).font = { bold: true, size: 14 };
  
  complianceSheet.addRow(['Domaine réglementaire', 'Statut', 'Commentaires']);
  const compHeaderRow = complianceSheet.lastRow;
  for (let i = 1; i <= 3; i++) {
    compHeaderRow!.getCell(i).font = { bold: true };
    compHeaderRow!.getCell(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'E6E6E6' }
    };
    compHeaderRow!.getCell(i).border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  }
  
  // Add compliance data
  if (mission.complianceStatus) {
    const { complianceStatus } = mission;
    
    complianceSheet.addRow([
      'RGPD / Protection des données', 
      complianceStatus.gdpr, 
      complianceStatus.gdprComments
    ]);
    
    complianceSheet.addRow([
      'Droit du travail', 
      complianceStatus.laborLaw, 
      complianceStatus.laborLawComments
    ]);
    
    complianceSheet.addRow([
      'Normes sectorielles', 
      complianceStatus.industryStandards, 
      complianceStatus.industryStandardsComments
    ]);
  }
  
  // Add governance structure
  complianceSheet.addRow([]);
  complianceSheet.addRow(['Structure de gouvernance', '', '']);
  const govHeader = complianceSheet.lastRow;
  govHeader!.getCell(1).font = { bold: true, size: 14 };
  
  if (mission.governanceStructure) {
    const { governanceStructure } = mission;
    
    complianceSheet.addRow(['Structure de l\'actionnariat', governanceStructure.shareholderStructure, '']);
    complianceSheet.addRow(['Fréquence des réunions du conseil', governanceStructure.boardMeetings, '']);
    
    complianceSheet.addRow(['Comités spécialisés', '', '']);
    if (governanceStructure.committees && Array.isArray(governanceStructure.committees)) {
      for (const committee of governanceStructure.committees) {
        complianceSheet.addRow(['- ' + committee, '', '']);
      }
    }
  }
  
  // Add recommendations worksheet
  const recommendationsSheet = workbook.addWorksheet('Recommandations');
  
  recommendationsSheet.getColumn(1).width = 40;
  recommendationsSheet.getColumn(2).width = 15;
  recommendationsSheet.getColumn(3).width = 20;
  recommendationsSheet.getColumn(4).width = 15;
  
  // Add title
  recommendationsSheet.mergeCells('A1:D1');
  const recTitleRow = recommendationsSheet.getRow(1);
  recTitleRow.getCell(1).value = 'RECOMMANDATIONS ET PLAN D\'ACTION';
  recTitleRow.getCell(1).font = { size: 16, bold: true, color: { argb: '0070C0' } };
  recTitleRow.getCell(1).alignment = { horizontal: 'center' };
  
  recommendationsSheet.addRow([]);
  recommendationsSheet.addRow(['Synthèse des observations']);
  const obsHeader = recommendationsSheet.lastRow;
  obsHeader!.getCell(1).font = { bold: true };
  
  recommendationsSheet.addRow([mission.observations || '']);
  
  recommendationsSheet.addRow([]);
  recommendationsSheet.addRow(['Recommandations', '', '', '']);
  const recHeader = recommendationsSheet.lastRow;
  recHeader!.getCell(1).font = { bold: true, size: 14 };
  
  recommendationsSheet.addRow(['Description', 'Priorité', 'Responsable', 'Échéance']);
  const recHeaderRow = recommendationsSheet.lastRow;
  for (let i = 1; i <= 4; i++) {
    recHeaderRow!.getCell(i).font = { bold: true };
    recHeaderRow!.getCell(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'E6E6E6' }
    };
    recHeaderRow!.getCell(i).border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  }
  
  // Add recommendation data
  for (const recommendation of mission.recommendations) {
    recommendationsSheet.addRow([
      recommendation.description,
      recommendation.priority,
      recommendation.responsible,
      recommendation.deadline
    ]);
  }
  
  // Add follow-up plan
  recommendationsSheet.addRow([]);
  recommendationsSheet.addRow(['Plan de suivi', '', '', '']);
  const followUpHeader = recommendationsSheet.lastRow;
  followUpHeader!.getCell(1).font = { bold: true, size: 14 };
  
  recommendationsSheet.addRow(['Date de la prochaine revue', mission.followUpDate || '', '', '']);
  recommendationsSheet.addRow(['Responsable du suivi', mission.followUpResponsible || '', '', '']);
  recommendationsSheet.addRow(['Modalités de suivi', '', '', '']);
  recommendationsSheet.addRow([mission.followUpDetails || '', '', '', '']);
  
  // Generate buffer
  return await workbook.xlsx.writeBuffer();
}
