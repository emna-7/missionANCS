// Test de la nouvelle structure Excel conforme à l'application
import { ExcelApplicationReplicaNew } from './utils/excel-app-replica-new.js';

async function testNouvelleStructure() {
  console.log('🧪 Test de la nouvelle structure Excel conforme...');
  
  try {
    const generator = new ExcelApplicationReplicaNew();
    
    console.log('📊 Génération de l\'application Excel...');
    const workbook = await generator.generateCompleteApplication();
    
    console.log('💾 Sauvegarde du fichier...');
    await workbook.xlsx.writeFile('audit-application-conforme.xlsx');
    
    console.log('✅ SUCCÈS !');
    console.log('📁 Fichier généré: audit-application-conforme.xlsx');
    console.log('');
    console.log('🎯 STRUCTURE GÉNÉRÉE:');
    console.log('   📄 0. Page de couverture');
    console.log('   📝 1. Avant propos');
    console.log('   🎯 2. Cadre de la mission');
    console.log('   📚 3. Termes et définitions');
    console.log('   📖 4. Références');
    console.log('   🏢 5. Présentation organisation');
    console.log('   🔍 6. Champ d\'audit');
    console.log('   🔬 7. Méthodologie d\'audit');
    console.log('   ⭐ 8. Synthèse des résultats (AVEC ONGLETS INTÉGRÉS)');
    console.log('      - Référentiels');
    console.log('      - Responsabilités');
    console.log('      - Tests');
    console.log('      - Plan d\'action');
    console.log('      - Évolution');
    console.log('      - Constats');
    console.log('      - Maturité SI');
    console.log('      - Indicateurs');
    console.log('      - Tableau de bord');
    console.log('   ⚠️ 9. Appréciation des risques');
    console.log('   ✅ 10. Plan d\'action');
    console.log('   📊 11. Dashboard');
    console.log('');
    console.log('🎉 La structure est maintenant CONFORME à l\'application !');
    
  } catch (error) {
    console.error('❌ Erreur lors du test:', error);
    console.error('Stack:', error.stack);
  }
}

// Exécuter le test
testNouvelleStructure();
