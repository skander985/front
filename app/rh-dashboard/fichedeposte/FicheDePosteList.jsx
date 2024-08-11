'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import AddFicheDePoste from '../../add/page'
import UpdateFicheDePoste from '../../update/[id]/page'

function FicheDePosteList() {
  const [fichesDePoste, setFichesDePoste] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();
  var i;
  useEffect(() => {
    
    const fetchFichesDePoste = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/ficheDePoste', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFichesDePoste(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch fiches de poste.');
      }
    };
    
    if(i==2){router.push('page');}
    fetchFichesDePoste();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/api/ficheDePoste/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFichesDePoste(fichesDePoste.filter((fiche) => fiche.id !== id));
    } catch (error) {
      console.error(error);
      setError('Failed to delete fiche de poste.');
    }
  };

  // const handleUpdate = (id) => {
  //   // Implement the logic for updating a fiche de poste
  //   // You might want to redirect to an update form or open a modal for updating
  //   i=1;
  //   console.log(`Update fiche de poste with id: ${id}`);
  //   router.push('')
  // };
  const handleUpdate = (id) => {
    // Redirect to update page with the ficheDePoste id
    router.push(`update/${id}`);
  };
  const handleAdd = () => {
    // Redirect to add new ficheDePoste page
    i=2;
    router.push('add')
    
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">All Fiches de Poste</h2>
      {error && <div className="text-red-500">{error}</div>}
      <ul className="mt-2 space-y-2">
        {fichesDePoste.map((fiche) => (
          <li key={fiche.id} className="p-4 bg-gray-800 rounded">
            <h4 className="font-bold">{fiche.mission}</h4>
            <p>Nature du Poste: {fiche.natureDuPoste}</p>
            <p>Superieur Hierarchique: {fiche.superieurHierarchique}</p>
            <p>Supervision: {fiche.supervision}</p>
            <p>Competences Techniques: {fiche.competencesTechniques.join(', ')}</p>
            <p>Aptitudes Professionnelles: {fiche.aptitudesProfessionnelles.join(', ')}</p>
            <button
              onClick={() => handleDelete(fiche.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-2 mr-2"
            >
              Delete
            </button>
            <button
              onClick={() => handleUpdate(fiche.id)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mt-2"
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleAdd}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Add Fiche De Poste
      </button>
    </div>
  );
}

export default FicheDePosteList;
// 'use client';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';

// function FicheDePosteList() {
//   const [fichesDePoste, setFichesDePoste] = useState([]);
//   const [error, setError] = useState('');
//   const router = useRouter(); // Using useRouter for navigation

//   useEffect(() => {
//     const fetchFichesDePoste = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:8080/api/ficheDePoste', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setFichesDePoste(response.data);
//       } catch (error) {
//         console.error(error);
//         setError('Failed to fetch fiches de poste.');
//       }
//     };

//     fetchFichesDePoste();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:8080/api/ficheDePoste/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setFichesDePoste(fichesDePoste.filter((fiche) => fiche.id !== id));
//     } catch (error) {
//       console.error(error);
//       setError('Failed to delete fiche de poste.');
//     }
//   };

  // const handleUpdate = (id) => {
  //   // Redirect to update page with the ficheDePoste id
  //   router.push(`/ficheDePoste/update/${id}`);
  // };

//   const handleAdd = () => {
//     // Redirect to add new ficheDePoste page
//     router.push('/ficheDePoste/add');
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-8">
//       <h2 className="text-xl font-bold mb-4">All Fiches de Poste</h2>
//       {error && <div className="text-red-500">{error}</div>}
//       <button
//         onClick={handleAdd}
//         className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4"
//       >
//         Add Fiche De Poste
//       </button>
//       <ul className="mt-2 space-y-2">
//         {fichesDePoste.map((fiche) => (
//           <li key={fiche.id} className="p-4 bg-gray-800 rounded">
//             <h4 className="font-bold">{fiche.mission}</h4>
//             <p>Nature du Poste: {fiche.natureDuPoste}</p>
//             <p>Superieur Hierarchique: {fiche.superieurHierarchique}</p>
//             <p>Supervision: {fiche.supervision}</p>
//             <p>Competences Techniques: {fiche.competencesTechniques.join(', ')}</p>
//             <p>Aptitudes Professionnelles: {fiche.aptitudesProfessionnelles.join(', ')}</p>
//             <button
//               onClick={() => handleDelete(fiche.id)}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-2 mr-2"
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => handleUpdate(fiche.id)}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mt-2"
//             >
//               Update
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FicheDePosteList;
