// import React, { useEffect, useState } from 'react';

// function AdminDashboard() {
//   return (
//     <section className="bg-gray-900 text-white">
//       <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
//         <div className="mx-auto max-w-3xl text-center">
//           <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
//             Welcome to the Admin Dashboard.
//             <span className="sm:block"> Manage Your HR Resources Efficiently. </span>
//           </h1>

//           <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
//             Access all the tools you need to oversee employee management, track performance metrics, and streamline administrative tasks. Ensure your organization runs smoothly with our comprehensive admin suite.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
//from here it work
// export default AdminDashboard;
// 'use client'
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AdminDashboard() {
//   const [employes, setEmployes] = useState([]);
//   const [rhs, setRhs] = useState([]);
//   const token = localStorage.getItem('token'); // Assuming the JWT is stored in local storage

//   useEffect(() => {
//     fetchEmployes();
//     fetchRhs();
//   }, []);

//   const fetchEmployes = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/employes', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setEmployes(response.data);
//     } catch (error) {
//       console.error('Error fetching employes:', error);
//     }
//   };

//   const fetchRhs = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/rhs', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setRhs(response.data);
//     } catch (error) {
//       console.error('Error fetching RHs:', error);
//     }
//   };

//   const handleDeleteEmploye = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/employes/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       fetchEmployes(); // Refresh the list after deletion
//     } catch (error) {
//       console.error('Error deleting employe:', error);
//     }
//   };

//   const handleDeleteRh = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/rhs/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       fetchRhs(); // Refresh the list after deletion
//     } catch (error) {
//       console.error('Error deleting RH:', error);
//     }
//   };

//   return (
//     <section className="bg-gray-900 text-white">
//       <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
//         <div className="mx-auto max-w-3xl text-center">
//           <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
//             Welcome to the Admin Dashboard.
//             <span className="sm:block"> Manage Your HR Resources Efficiently. </span>
//           </h1>

//           <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
//             Access all the tools you need to oversee employee management, track performance metrics, and streamline administrative tasks. Ensure your organization runs smoothly with our comprehensive admin suite.
//           </p>

//           {/* Display Employes */}
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold">Employes</h2>
//             <ul>
//               {employes.map((employe) => (
//                 <li key={employe.id} className="flex justify-between mt-2">
//                   {employe.nom} {employe.prenom}
//                   <button
//                     onClick={() => handleDeleteEmploye(employe.id)}
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                   >
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Display RHs */}
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold">RHs</h2>
//             <ul>
//               {rhs.map((rh) => (
//                 <li key={rh.id} className="flex justify-between mt-2">
//                   {rh.nom} {rh.prenom}
//                   <button
//                     onClick={() => handleDeleteRh(rh.id)}
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                   >
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

// }
// export default AdminDashboard;
// 'use client';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AdminDashboard() {
//   const [administrators, setAdministrators] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch the JWT token from local storage
//     const token = localStorage.getItem('token');

//     if (!token) {
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

//     // Fetch all administrators
//     api.get('/administrateurs')
//       .then(response => {
//         setAdministrators(response.data);
//       })
//       .catch(error => {
//         setError('Failed to fetch administrators.');
//       });
//   }, []);

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   if (administrators.length === 0) {
//     return <div>Loading administrators...</div>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">Administrators List</h2>
//         {administrators.length > 0 ? (
//           <ul>
//             {administrators.map(admin => (
//               <li key={admin.id} className="mb-2">
//                 <p><strong>Name:</strong> {admin.nom} {admin.prenom}</p>
//                 <p><strong>Email:</strong> {admin.email}</p>
//                 <p><strong>Role:</strong> {admin.role}</p>
//                 {/* Add more fields as needed */}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No administrators found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

'use client'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AdminManagement from './admin/AdminManagement';
import RHManagement from './rh/RHManagement';
import EmployeeManagement from './employe/EmployeeManagement';



function App() {
  return (
    <Router>
      <NavBar />
      <div className="bg-gray-900 text-white min-h-screen p-8">
        <Routes>
          <Route path="/admin" element={<AdminManagement />} />
          <Route path="/rh" element={<RHManagement />} />
          
          <Route path="/employe" element={<EmployeeManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
