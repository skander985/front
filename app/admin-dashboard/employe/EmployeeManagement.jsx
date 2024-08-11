'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeManagement() {
  const [employes, setEmployes] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setError('You must be logged in to view this page.');
      return;
    }

    fetchEmployes();
  }, [token]);

  const fetchEmployes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/employes', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployes(response.data);
    } catch (error) {
      console.error('Error fetching employes:', error);
      setError('Failed to fetch employees.');
    }
  };

  const handleDeleteEmploye = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/employes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchEmployes(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting employe:', error);
      setError('Failed to delete employee.');
    }
  };

  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold">Employee Management</h1>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Employees</h2>
            <ul>
              {employes.map((employe) => (
                <li key={employe.id} className="flex justify-between mt-2">
                  {employe.nom} {employe.prenom}
                  <button
                    onClick={() => handleDeleteEmploye(employe.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmployeeManagement;
