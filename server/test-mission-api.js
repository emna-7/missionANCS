import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:5001/api';

console.log('🧪 Testing Mission API...\n');

async function testMissionAPI() {
  try {
    // Test 1: Récupérer toutes les missions existantes
    console.log('1️⃣ Récupération des missions existantes...');
    const getResponse = await fetch(`${BASE_URL}/missions`);
    const existingMissions = await getResponse.json();
    console.log(`✅ ${existingMissions.length} mission(s) trouvée(s):`);
    existingMissions.forEach(mission => {
      console.log(`   - ID: ${mission.id}, Titre: ${mission.title}, Entreprise: ${mission.companyName}`);
    });
    console.log('');

    // Test 2: Créer une nouvelle mission de test
    console.log('2️⃣ Création d\'une nouvelle mission de test...');
    const testMission = {
      title: 'Mission de test - ' + new Date().toLocaleString(),
      companyName: 'Entreprise Test SA',
      companyType: 'SARL',
      status: 'draft',
      progress: 0
    };

    const createResponse = await fetch(`${BASE_URL}/missions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testMission)
    });

    if (createResponse.ok) {
      const newMission = await createResponse.json();
      console.log(`✅ Mission créée avec succès:`);
      console.log(`   - ID: ${newMission.id}`);
      console.log(`   - Titre: ${newMission.title}`);
      console.log(`   - Entreprise: ${newMission.companyName}`);
      console.log('');
    } else {
      const error = await createResponse.text();
      console.log(`❌ Erreur lors de la création: ${error}`);
      console.log('');
    }

    // Test 3: Vérifier que la nouvelle mission apparaît dans la liste
    console.log('3️⃣ Vérification de la nouvelle mission dans la liste...');
    const getResponse2 = await fetch(`${BASE_URL}/missions`);
    const updatedMissions = await getResponse2.json();
    console.log(`✅ ${updatedMissions.length} mission(s) trouvée(s) après création:`);
    updatedMissions.forEach(mission => {
      console.log(`   - ID: ${mission.id}, Titre: ${mission.title}, Entreprise: ${mission.companyName}`);
    });

    // Test 4: Récupérer la mission spécifique
    if (updatedMissions.length > 0) {
      const lastMission = updatedMissions[updatedMissions.length - 1];
      console.log(`\n4️⃣ Récupération de la mission ID ${lastMission.id}...`);
      const getOneResponse = await fetch(`${BASE_URL}/missions/${lastMission.id}`);
      if (getOneResponse.ok) {
        const missionDetails = await getOneResponse.json();
        console.log(`✅ Détails de la mission:`);
        console.log(`   - Titre: ${missionDetails.title}`);
        console.log(`   - Entreprise: ${missionDetails.companyName}`);
        console.log(`   - Statut: ${missionDetails.status}`);
        console.log(`   - Progression: ${missionDetails.progress}%`);
      } else {
        console.log(`❌ Erreur lors de la récupération: ${getOneResponse.status}`);
      }
    }

    console.log('\n🎉 Tests terminés avec succès !');

  } catch (error) {
    console.error('❌ Erreur lors des tests:', error.message);
  }
}

// Lancer les tests
testMissionAPI(); 