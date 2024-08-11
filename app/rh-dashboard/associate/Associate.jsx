// 'use client'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Associate() {
//   const [employes, setEmployes] = useState([]);
//   const [fichesDePoste, setFichesDePoste] = useState([]);
//   const [selectedEmploye, setSelectedEmploye] = useState('');
//   const [selectedFicheDePoste, setSelectedFicheDePoste] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');

//         const employesResponse = await axios.get('http://localhost:8080/api/employe', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const fichesDePosteResponse = await axios.get('http://localhost:8080/api/ficheDePoste', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setEmployes(employesResponse.data);
//         setFichesDePoste(fichesDePosteResponse.data);
//       } catch (error) {
//         console.error(error);
//         setError('Failed to fetch data.');
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAssociation = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         `http://localhost:8080/api/associate`,
//         {
//           employeId: selectedEmploye,
//           ficheDePosteId: selectedFicheDePoste,
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setSuccessMessage('Fiche de Poste successfully associated with Employe.');
//     } catch (error) {
//       console.error(error);
//       setError('Failed to associate Fiche de Poste.');
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-8">
//       <h2 className="text-xl font-bold mb-4">Associate Fiche de Poste to Employe</h2>
//       {error && <div className="text-red-500">{error}</div>}
//       {successMessage && <div className="text-green-500">{successMessage}</div>}
//       <div className="mb-4">
//         <select
//           value={selectedEmploye}
//           onChange={(e) => setSelectedEmploye(e.target.value)}
//           className="w-full px-4 py-2 mb-2 text-black rounded"
//         >
//           <option value="">Select Employe</option>
//           {employes.map((employe) => (
//             <option key={employe.id} value={employe.id}>
//               {employe.name} {/* Assuming employe object has a 'name' property */}
//             </option>
//           ))}
//         </select>
//         <select
//           value={selectedFicheDePoste}
//           onChange={(e) => setSelectedFicheDePoste(e.target.value)}
//           className="w-full px-4 py-2 mb-2 text-black rounded"
//         >
//           <option value="">Select Fiche de Poste</option>
//           {fichesDePoste.map((fiche) => (
//             <option key={fiche.id} value={fiche.id}>
//               {fiche.mission}
//             </option>
//           ))}
//         </select>
//         <button
//           onClick={handleAssociation}
//           className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Associate
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Associate;
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Associate() {
  const [employes, setEmployes] = useState([]);
  const [fichesDePoste, setFichesDePoste] = useState([]);
  const [selectedEmploye, setSelectedEmploye] = useState('');
  const [selectedFicheDePoste, setSelectedFicheDePoste] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        const employesResponse = await axios.get('http://localhost:8080/api/employes', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const fichesDePosteResponse = await axios.get('http://localhost:8080/api/ficheDePoste', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setEmployes(employesResponse.data);
        setFichesDePoste(fichesDePosteResponse.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch data.');
      }
    };

    fetchData();
  }, []);

  const handleAssociation = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:8080/api/ficheDePoste/associer`,
        null,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            employeId: selectedEmploye,
            ficheDePosteId: selectedFicheDePoste,
          },
        }
      );
      setSuccessMessage('Fiche de Poste successfully associated with Employe.');
      setError(''); // Clear any previous error message
    } catch (error) {
      console.error(error);
      setError('Failed to associate Fiche de Poste.');
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Associate Fiche de Poste to Employe</h2>
      {error && <div className="text-red-500">{error}</div>}
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      <div className="mb-4">
        <select
          value={selectedEmploye}
          onChange={(e) => setSelectedEmploye(e.target.value)}
          className="w-full px-4 py-2 mb-2 text-black rounded"
        >
          <option value="">Select Employe</option>
          {employes.map((employe) => (
            <option key={employe.id} value={employe.id}>
              {employe.nom} {employe.prenom} {/* Assuming employe object has a 'name' property */}
            </option>
          ))}
        </select>
        <select
          value={selectedFicheDePoste}
          onChange={(e) => setSelectedFicheDePoste(e.target.value)}
          className="w-full px-4 py-2 mb-2 text-black rounded"
        >
          <option value="">Select Fiche de Poste</option>
          {fichesDePoste.map((fiche) => (
            <option key={fiche.id} value={fiche.id}>
              {fiche.mission}
            </option>
          ))}
        </select>
        <button
          onClick={handleAssociation}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Associate
        </button>
      </div>
    </div>
  );
}

export default Associate;
