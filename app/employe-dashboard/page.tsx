// 'use client';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function EmployeDashboard() {
//   const [employe, setEmploye] = useState(null);
//   const [ficheDePoste, setFicheDePoste] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch the JWT token and email from local storage
//     const token = localStorage.getItem('token');
//     const email = localStorage.getItem('email');

//     if (!token || !email) {
//       setError('You must be logged in to view this page.');
//       return;
//     }

//     // Set up Axios with the JWT token
//     const api = axios.create({
//       baseURL: 'http://localhost:8080/api', // Adjust the base URL as needed
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     // Fetch employee details by email
//     api.get(`/employes/email/${email}`)
//       .then(response => {
//         setEmploye(response.data);
//       })
//       .catch(error => {
//         setError('Failed to fetch employee details.');
//       });

//     // Fetch the fiche de poste for the employee
//     if (employe?.id) {
//       api.get(`/ficheDePoste/voir/${employe.id}`)
//         .then(response => {
//           setFicheDePoste(response.data);
//         })
//         .catch(error => {
//           setError('Failed to fetch fiche de poste.');
//         });
//     }
//   }, [employe?.id]);

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!employe || !ficheDePoste) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">Employee Details</h2>
//         <p><strong>Name:</strong> {employe.nom} {employe.prenom}</p>
//         <p><strong>Email:</strong> {employe.email}</p>
//         {/* Add more fields as needed */}
//       </div>
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">Fiche de Poste</h2>
//         <p><strong>Job Title:</strong> {ficheDePoste.jobTitle}</p>
//         <p><strong>Description:</strong> {ficheDePoste.description}</p>
//         {/* Add more fields as needed */}
//       </div>
//     </div>
//   );
// }

// export default EmployeDashboard;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function EmployeDashboard() {
//   const [employe, setEmploye] = useState(null);
//   const [ficheDePoste, setFicheDePoste] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch the JWT token and employee ID from local storage
//     const token = localStorage.getItem('token');
//     const id = localStorage.getItem('id'); // Assuming you store the ID

//     if (!token || !id) {
//       setError('You must be logged in to view this page.');
//       return;
//     }

//     // Set up Axios with the JWT token
//     const api = axios.create({
//       baseURL: 'http://localhost:8080/api', // Adjust the base URL as needed
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     // Fetch employee details by ID
//     api.get(`/employes/${id}`)
//       .then(response => {
//         setEmploye(response.data);
//       })
//       .catch(error => {
//         setError('Failed to fetch employee details.');
//       });

//     // Fetch the fiche de poste for the employee
//     api.get(`/ficheDePoste/voir/${id}`)
//       .then(response => {
//         setFicheDePoste(response.data);
//         console.log(response.data);
//       })
//       .catch(error => {
//         // If ficheDePoste is not found, continue without setting it
//         if (error.response?.status === 404) {
//           setFicheDePoste(null);
//         } else {
//           setError('Failed to fetch fiche de poste.');
//         }
//       });
//   }, []);

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (!employe) {
//     return <div>Loading employee details...</div>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">Employee Details</h2>
//         <p><strong>Name:</strong> {employe.nom} {employe.prenom}</p>
//         <p><strong>Email:</strong> {employe.email}</p>
//         {/* Add more fields as needed */}
//       </div>
//       {ficheDePoste ? (
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold">Fiche de Poste</h2>
//           <p><strong>Job Title:</strong> {ficheDePoste.jobTitle}</p>
//           <p><strong>Description:</strong> {ficheDePoste.description}</p>
//           {/* Add more fields as needed */}
//         </div>
//       ) : (
//         <div className="mb-6">
//           <p>No fiche de poste available for this employee.</p>
//         </div>
//       )}
//     </div>
//   );
// }
////from here it work
// export default EmployeDashboard;
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeDashboard() {
  const [employe, setEmploye] = useState(null);
  const [ficheDePoste, setFicheDePoste] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the JWT token and employee ID from local storage
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id'); // Assuming you store the ID

    if (!token || !id) {
      setError('You must be logged in to view this page.');
      return;
    }

    // Set up Axios with the JWT token
    const api = axios.create({
      baseURL: 'http://localhost:8080/api', // Adjust the base URL as needed
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Fetch employee details by ID
    api.get(`/employes/${id}`)
      .then(response => {
        setEmploye(response.data);
      })
      .catch(error => {
        setError('Failed to fetch employee details.');
      });

    // Fetch the fiche de poste for the employee
    api.get(`/ficheDePoste/voir/${id}`)
      .then(response => {
        setFicheDePoste(response.data);
      })
      .catch(error => {
        // If ficheDePoste is not found, continue without setting it
        if (error.response?.status === 404) {
          setFicheDePoste(null);
        } else {
          setError('Failed to fetch fiche de poste.');
        }
      });
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!employe) {
    return <div>Loading employee details...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Employee Details</h2>
        <p><strong>Name:</strong> {employe.nom} {employe.prenom}</p>
        <p><strong>Email:</strong> {employe.email}</p>
        <p><strong>Role:</strong> {employe.role}</p>
        {/* Add more fields as needed */}
      </div>
      {ficheDePoste ? (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Fiche de Poste</h2>
          <p><strong>Mission:</strong> {ficheDePoste.mission}</p>
          <p><strong>Nature of the Position:</strong> {ficheDePoste.natureDuPoste}</p>
          <p><strong>Hierarchical Superior:</strong> {ficheDePoste.superieurHierarchique}</p>
          <p><strong>Supervision:</strong> {ficheDePoste.supervision}</p>
          <p><strong>Activities and Tasks:</strong> {ficheDePoste.activitesEtTaches.join(', ')}</p>
          <p><strong>Technical Skills:</strong> {ficheDePoste.competencesTechniques.join(', ')}</p>
          <p><strong>Professional Skills:</strong> {ficheDePoste.aptitudesProfessionnelles.join(', ')}</p>
          <p><strong>Special Working Conditions:</strong> {ficheDePoste.conditionsParticulieresExercice}</p>
          <p><strong>Previous Positions:</strong> {ficheDePoste.postesPrecedents.join(', ')}</p>
          <p><strong>Professional Evolution:</strong> {ficheDePoste.evolutionProfessionnelle.join(', ')}</p>
          <p><strong>Required Diploma:</strong> {ficheDePoste.diplomeRequis}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <div className="mb-6">
          <p>No fiche de poste available for this employee.</p>
        </div>
      )}
    </div>
  );
}

export default EmployeDashboard;
// 'use client'
// import React, { useState } from 'react';
// import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// function AddFicheDePoste() {
//   const [mission, setMission] = useState('');
//   const [natureDuPoste, setNatureDuPoste] = useState('');
//   const [superieurHierarchique, setSuperieurHierarchique] = useState('');
//   const [supervision, setSupervision] = useState('');
//   const [activitesEtTaches, setActivitesEtTaches] = useState(['']);
//   const [competencesTechniques, setCompetencesTechniques] = useState(['']);
//   const [aptitudesProfessionnelles, setAptitudesProfessionnelles] = useState(['']);
//   const [conditionsParticulieresExercice, setConditionsParticulieresExercice] = useState('');
//   const [postesPrecedents, setPostesPrecedents] = useState(['']);
//   const [evolutionProfessionnelle, setEvolutionProfessionnelle] = useState(['']);
//   const [diplomeRequis, setDiplomeRequis] = useState('');
//   const [error, setError] = useState('');

//   // const navigate = useNavigate();
//   const responsableId = localStorage.getItem('rhId'); // Assuming 'rhId' is the key where the current RH ID is stored

//   const handleAddFicheDePoste = async (e) => {
//     e.preventDefault();

//     const newFicheDePoste = {
//       mission,
//       natureDuPoste,
//       superieurHierarchique,
//       supervision,
//       activitesEtTaches,
//       competencesTechniques,
//       aptitudesProfessionnelles,
//       conditionsParticulieresExercice,
//       postesPrecedents,
//       evolutionProfessionnelle,
//       diplomeRequis,
//       responsable: {
//         type: 'RH',
//         id: parseInt(responsableId, 10), // Ensure the ID is a number
//       },
//     };

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:8080/api/ficheDePoste', newFicheDePoste, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       // navigate('/ficheDePosteList'); // Redirect to the list page or any other page
//     } catch (error) {
//       console.error(error);
//       setError('Failed to add fiche de poste.');
//     }
//   };

//   const addField = (setter) => {
//     setter((prev) => [...prev, '']);
//   };

//   const updateField = (setter, index, value) => {
//     setter((prev) => {
//       const newValues = [...prev];
//       newValues[index] = value;
//       return newValues;
//     });
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-8">
//       <h2 className="text-xl font-bold mb-4">Add New Fiche de Poste</h2>
//       {error && <div className="text-red-500">{error}</div>}
//       <form onSubmit={handleAddFicheDePoste}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Mission</label>
//           <input
//             type="text"
//             value={mission}
//             onChange={(e) => setMission(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Nature du Poste</label>
//           <input
//             type="text"
//             value={natureDuPoste}
//             onChange={(e) => setNatureDuPoste(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Superieur Hierarchique</label>
//           <input
//             type="text"
//             value={superieurHierarchique}
//             onChange={(e) => setSuperieurHierarchique(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Supervision</label>
//           <input
//             type="text"
//             value={supervision}
//             onChange={(e) => setSupervision(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//             required
//           />
//         </div>
//         {/* Repeat for Activites et Taches */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Activites et Taches</label>
//           {activitesEtTaches.map((activity, index) => (
//             <input
//               key={index}
//               type="text"
//               value={activity}
//               onChange={(e) => updateField(setActivitesEtTaches, index, e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => addField(setActivitesEtTaches)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
//           >
//             Add Another Activity
//           </button>
//         </div>
//         {/* Repeat for Competences Techniques */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Competences Techniques</label>
//           {competencesTechniques.map((competence, index) => (
//             <input
//               key={index}
//               type="text"
//               value={competence}
//               onChange={(e) => updateField(setCompetencesTechniques, index, e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => addField(setCompetencesTechniques)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
//           >
//             Add Another Competence
//           </button>
//         </div>
//         {/* Repeat for Aptitudes Professionnelles */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Aptitudes Professionnelles</label>
//           {aptitudesProfessionnelles.map((aptitude, index) => (
//             <input
//               key={index}
//               type="text"
//               value={aptitude}
//               onChange={(e) => updateField(setAptitudesProfessionnelles, index, e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => addField(setAptitudesProfessionnelles)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
//           >
//             Add Another Aptitude
//           </button>
//         </div>
//         {/* Additional Fields */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Conditions Particulieres d'Exercice</label>
//           <input
//             type="text"
//             value={conditionsParticulieresExercice}
//             onChange={(e) => setConditionsParticulieresExercice(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Postes Precedents</label>
//           {postesPrecedents.map((poste, index) => (
//             <input
//               key={index}
//               type="text"
//               value={poste}
//               onChange={(e) => updateField(setPostesPrecedents, index, e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => addField(setPostesPrecedents)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
//           >
//             Add Another Previous Post
//           </button>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Evolution Professionnelle</label>
//           {evolutionProfessionnelle.map((evolution, index) => (
//             <input
//               key={index}
//               type="text"
//               value={evolution}
//               onChange={(e) => updateField(setEvolutionProfessionnelle, index, e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => addField(setEvolutionProfessionnelle)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
//           >
//             Add Another Evolution
//           </button>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Diplome Requis</label>
//           <input
//             type="text"
//             value={diplomeRequis}
//             onChange={(e) => setDiplomeRequis(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//             required
//           />
//         </div>
//         <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
//           Add Fiche de Poste
//         </button>
//       </form>
//     </div>
//   );
// }


// 'use client'
// import React, { useState } from 'react';
// import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// function AddFicheDePoste() {
//   const [mission, setMission] = useState('');
//   const [natureDuPoste, setNatureDuPoste] = useState('');
//   const [superieurHierarchique, setSuperieurHierarchique] = useState('');
//   const [supervision, setSupervision] = useState('');
//   const [activitesEtTaches, setActivitesEtTaches] = useState(['']);
//   const [competencesTechniques, setCompetencesTechniques] = useState(['']);
//   const [aptitudesProfessionnelles, setAptitudesProfessionnelles] = useState(['']);
//   const [conditionsParticulieresExercice, setConditionsParticulieresExercice] = useState('');
//   const [postesPrecedents, setPostesPrecedents] = useState(['']);
//   const [evolutionProfessionnelle, setEvolutionProfessionnelle] = useState(['']);
//   const [diplomeRequis, setDiplomeRequis] = useState('');
//   const [error, setError] = useState('');

//   // const navigate = useNavigate();
//   const responsableId = localStorage.getItem('rhId'); // Assuming 'rhId' is the key where the current RH ID is stored

//   const handleAddFicheDePoste = async (e) => {
//     e.preventDefault();

//     const newFicheDePoste = {
//       mission,
//       natureDuPoste,
//       superieurHierarchique,
//       supervision,
//       activitesEtTaches,
//       competencesTechniques,
//       aptitudesProfessionnelles,
//       conditionsParticulieresExercice,
//       postesPrecedents,
//       evolutionProfessionnelle,
//       diplomeRequis,
//       responsable: {
//         type: 'RH',
//         id: parseInt(responsableId, 10), // Ensure the ID is a number
//       },
//     };

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:8080/api/ficheDePoste', newFicheDePoste, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       // navigate('/ficheDePosteList'); // Redirect to the list page or any other page
//     } catch (error) {
//       console.error(error);
//       setError('Failed to add fiche de poste.');
//     }
//   };

//   const addField = (setter) => {
//     setter((prev) => [...prev, '']);
//   };

//   const updateField = (setter, index, value) => {
//     setter((prev) => {
//       const newValues = [...prev];
//       newValues[index] = value;
//       return newValues;
//     });
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-8">
//       <h2 className="text-xl font-bold mb-4">Add New Fiche de Poste</h2>
//       {error && <div className="text-red-500">{error}</div>}
//       <form onSubmit={handleAddFicheDePoste}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Mission</label>
//           <input
//             type="text"
//             value={mission}
//             onChange={(e) => setMission(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Nature du Poste</label>
//           <input
//             type="text"
//             value={natureDuPoste}
//             onChange={(e) => setNatureDuPoste(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Superieur Hierarchique</label>
//           <input
//             type="text"
//             value={superieurHierarchique}
//             onChange={(e) => setSuperieurHierarchique(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Supervision</label>
//           <input
//             type="text"
//             value={supervision}
//             onChange={(e) => setSupervision(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//             required
//           />
//         </div>
//         {/* Repeat for Activites et Taches */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Activites et Taches</label>
//           {activitesEtTaches.map((activity, index) => (
//             <input
//               key={index}
//               type="text"
//               value={activity}
//               onChange={(e) => updateField(setActivitesEtTaches, index, e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => addField(setActivitesEtTaches)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
//           >
//             Add Another Activity
//           </button>
//         </div>
//         {/* Repeat for Competences Techniques */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Competences Techniques</label>
//           {competencesTechniques.map((competence, index) => (
//             <input
//               key={index}
//               type="text"
//               value={competence}
//               onChange={(e) => updateField(setCompetencesTechniques, index, e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => addField(setCompetencesTechniques)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
//           >
//             Add Another Competence
//           </button>
//         </div>
//         {/* Repeat for Aptitudes Professionnelles */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Aptitudes Professionnelles</label>
//           {aptitudesProfessionnelles.map((aptitude, index) => (
//             <input
//               key={index}
//               type="text"
//               value={aptitude}
//               onChange={(e) => updateField(setAptitudesProfessionnelles, index, e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => addField(setAptitudesProfessionnelles)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
//           >
//             Add Another Aptitude
//           </button>
//         </div>
//         {/* Additional Fields */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Conditions Particulieres d'Exercice</label>
//           <input
//             type="text"
//             value={conditionsParticulieresExercice}
//             onChange={(e) => setConditionsParticulieresExercice(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Postes Precedents</label>
//           {postesPrecedents.map((poste, index) => (
//             <input
//               key={index}
//               type="text"
//               value={poste}
//               onChange={(e) => updateField(setPostesPrecedents, index, e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => addField(setPostesPrecedents)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
//           >
//             Add Another Previous Post
//           </button>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Evolution Professionnelle</label>
//           {evolutionProfessionnelle.map((evolution, index) => (
//             <input
//               key={index}
//               type="text"
//               value={evolution}
//               onChange={(e) => updateField(setEvolutionProfessionnelle, index, e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => addField(setEvolutionProfessionnelle)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
//           >
//             Add Another Evolution
//           </button>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Diplome Requis</label>
//           <input
//             type="text"
//             value={diplomeRequis}
//             onChange={(e) => setDiplomeRequis(e.target.value)}
//             className="mt-1 p-2 border border-gray-300 rounded w-full"
//             required
//           />
//         </div>
//         <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
//           Add Fiche de Poste
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddFicheDePoste;
