'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminManagement() {
  const [administrators, setAdministrators] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setError('You must be logged in to view this page.');
      return;
    }

    fetchAdministrators();
  }, [token]);

  const fetchAdministrators = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/administrateurs', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdministrators(response.data);
    } catch (error) {
      console.error('Error fetching administrators:', error);
      setError('Failed to fetch administrators.');
    }
  };

  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold">Administrator Management</h1>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Administrators</h2>
            {administrators.length > 0 ? (
              <ul>
                {administrators.map((admin) => (
                  <li key={admin.id} className="mb-2">
                    <p><strong>Name:</strong> {admin.nom} {admin.prenom}</p>
                    <p><strong>Email:</strong> {admin.email}</p>
                    <p><strong>Role:</strong> {admin.role}</p>
                    {/* Add more fields as needed */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No administrators found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminManagement;
