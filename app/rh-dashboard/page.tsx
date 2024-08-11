

// // export default RHDashboard;
// 'use client';

// import React, { useState } from 'react';
// import axios from 'axios';

// function RHDashboard() {
//   const [searchCriteria, setSearchCriteria] = useState({
//     mission: '',
//     competence: '',
//     nomSuperieur: '',
//   });

//   const [fichesDePoste, setFichesDePoste] = useState([]);
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSearchCriteria({ ...searchCriteria, [name]: value });
//   };

  
//   const handleSearch = async () => {
//     try {
//       const token = localStorage.getItem('token');
  
//       // Build the query string with non-empty parameters
//       const params = new URLSearchParams();
//       if (searchCriteria.mission) {
//         params.append('mission', searchCriteria.mission);
//       }
//       if (searchCriteria.competence) {
//         params.append('competence', searchCriteria.competence);
//       }
//       if (searchCriteria.nomSuperieur) {
//         params.append('nomSuperieur', searchCriteria.nomSuperieur);
//       }
  
//       const queryString = params.toString();
//       console.log(queryString);
  
//       // Make the GET request with the constructed query string
//       const response = await axios.get(
//         `http://localhost:8080/api/ficheDePoste/search?${queryString}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
  
//       setFichesDePoste(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error); // Log error to console
//       setError('Failed to search fiches de poste.');
//     }
//   };
  

//   return (
//     <section className="bg-gray-900 text-white min-h-screen p-8">
//       <div className="max-w-3xl mx-auto text-center">
//         <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
//           Welcome to the RH Dashboard.
//           <span className="sm:block"> Streamline Your HR Functions. </span>
//         </h1>
//         <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
//           Leverage our tools to manage recruitment, optimize employee onboarding, and ensure seamless communication across departments. Your HR management, simplified.
//         </p>
//       </div>

//       <div className="max-w-2xl mx-auto mt-8">
//         <h2 className="text-xl font-bold mb-4">Search Fiche de Poste</h2>
//         <div className="mb-4">
//           <input
//             type="text"
//             name="mission"
//             value={searchCriteria.mission}
//             onChange={handleInputChange}
//             placeholder="Search by Mission"
//             className="w-full px-4 py-2 mb-2 text-black rounded"
//           />
//           <input
//             type="text"
//             name="competence"
//             value={searchCriteria.competence}
//             onChange={handleInputChange}
//             placeholder="Search by Competence"
//             className="w-full px-4 py-2 mb-2 text-black rounded"
//           />
//           <input
//             type="text"
//             name="nomSuperieur"
//             value={searchCriteria.nomSuperieur}
//             onChange={handleInputChange}
//             placeholder="Search by Nom Superieur"
//             className="w-full px-4 py-2 mb-2 text-black rounded"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             Search
//           </button>
//         </div>

//         {error && <div className="text-red-500">{error}</div>}

//         {fichesDePoste.length > 0 && (
//           <div className="mt-4">
//             <h3 className="text-lg font-semibold">Search Results:</h3>
//             <ul className="mt-2 space-y-2">
//               {fichesDePoste.map((fiche) => (
//                 <li key={fiche.id} className="p-4 bg-gray-800 rounded">
//                   <h4 className="font-bold">{fiche.mission}</h4>
//                   <p>Nature du Poste: {fiche.natureDuPoste}</p>
//                   <p>Superieur Hierarchique: {fiche.superieurHierarchique}</p>
//                   <p>Supervision: {fiche.supervision}</p>
//                   <p>Competences Techniques: {fiche.competencesTechniques.join(', ')}</p>
//                   <p>Aptitudes Professionnelles: {fiche.aptitudesProfessionnelles.join(', ')}</p>
//                   {/* Add more fields as needed */}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default RHDashboard;
'use client'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Search from './search/Search';
import FicheDePosteList from './fichedeposte/FicheDePosteList';
import Associate from './associate/Associate';



function App() {
  return (
    <Router>
      <NavBar />
      <div className="bg-gray-900 text-white min-h-screen p-8">
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/fichedeposte" element={<FicheDePosteList />} />
          
          <Route path="/associate" element={<Associate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
