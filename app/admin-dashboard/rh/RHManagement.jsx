'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RHManagement() {
  const [rhs, setRhs] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setError('You must be logged in to view this page.');
      return;
    }

    fetchRhs();
  }, [token]);

  const fetchRhs = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/rhs', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRhs(response.data);
    } catch (error) {
      console.error('Error fetching RHs:', error);
      setError('Failed to fetch RHs.');
    }
  };

  const handleDeleteRh = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/rhs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchRhs(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting RH:', error);
      setError('Failed to delete RH.');
    }
  };

  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold">RH Management</h1>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">RHs</h2>
            <ul>
              {rhs.map((rh) => (
                <li key={rh.id} className="flex justify-between mt-2">
                  {rh.nom} {rh.prenom}
                  <button
                    onClick={() => handleDeleteRh(rh.id)}
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

export default RHManagement;
