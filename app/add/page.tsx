

// export default AddFicheDePoste;
'use client'
import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function AddFicheDePoste() {
  const [mission, setMission] = useState('');
  const [natureDuPoste, setNatureDuPoste] = useState('');
  const [superieurHierarchique, setSuperieurHierarchique] = useState('');
  const [supervision, setSupervision] = useState('');
  const [activitesEtTaches, setActivitesEtTaches] = useState(['']);
  const [competencesTechniques, setCompetencesTechniques] = useState(['']);
  const [aptitudesProfessionnelles, setAptitudesProfessionnelles] = useState(['']);
  const [conditionsParticulieresExercice, setConditionsParticulieresExercice] = useState('');
  const [postesPrecedents, setPostesPrecedents] = useState(['']);
  const [evolutionProfessionnelle, setEvolutionProfessionnelle] = useState(['']);
  const [diplomeRequis, setDiplomeRequis] = useState('');
  const [error, setError] = useState('');

  // const navigate = useNavigate();
  const responsableId = localStorage.getItem('id'); // Assuming 'rhId' is the key where the current RH ID is stored

  const handleAddFicheDePoste = async (e) => {
    e.preventDefault();

    const newFicheDePoste = {
      mission,
      natureDuPoste,
      superieurHierarchique,
      supervision,
      activitesEtTaches,
      competencesTechniques,
      aptitudesProfessionnelles,
      conditionsParticulieresExercice,
      postesPrecedents,
      evolutionProfessionnelle,
      diplomeRequis,
      responsable: {
        type: 'RH',
        id: parseInt(responsableId, 10), // Ensure the ID is a number
      },
    };

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8080/api/ficheDePoste', newFicheDePoste, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // navigate('/ficheDePosteList'); // Redirect to the list page or any other page
      console.log("done succssefully")
    } catch (error) {
      console.error(error);
      setError('Failed to add fiche de poste.');
    }
  };

  const addField = (setter) => {
    setter((prev) => [...prev, '']);
  };

  const updateField = (setter, index, value) => {
    setter((prev) => {
      const newValues = [...prev];
      newValues[index] = value;
      return newValues;
    });
  };

  return (
   <div className='bg-gray-900 text-white min-h-screen p-8'>
    <div className="max-w-2xl mx-auto mt-8 bg-gray-900 text-black min-h-screen p-8">
      <h2 className="text-xl font-bold mb-4 text-white">Add New Fiche de Poste</h2>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={handleAddFicheDePoste}>
        <div className="mb-4">
          <label className="block text-gray-700">Mission</label>
          <input
            type="text"
            value={mission}
            onChange={(e) => setMission(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nature du Poste</label>
          <input
            type="text"
            value={natureDuPoste}
            onChange={(e) => setNatureDuPoste(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Superieur Hierarchique</label>
          <input
            type="text"
            value={superieurHierarchique}
            onChange={(e) => setSuperieurHierarchique(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Supervision</label>
          <input
            type="text"
            value={supervision}
            onChange={(e) => setSupervision(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        {/* Repeat for Activites et Taches */}
        <div className="mb-4">
          <label className="block text-gray-700">Activites et Taches</label>
          {activitesEtTaches.map((activity, index) => (
            <input
              key={index}
              type="text"
              value={activity}
              onChange={(e) => updateField(setActivitesEtTaches, index, e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => addField(setActivitesEtTaches)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
          >
            Add Another Activity
          </button>
        </div>
        {/* Repeat for Competences Techniques */}
        <div className="mb-4">
          <label className="block text-gray-700">Competences Techniques</label>
          {competencesTechniques.map((competence, index) => (
            <input
              key={index}
              type="text"
              value={competence}
              onChange={(e) => updateField(setCompetencesTechniques, index, e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => addField(setCompetencesTechniques)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
          >
            Add Another Competence
          </button>
        </div>
        {/* Repeat for Aptitudes Professionnelles */}
        <div className="mb-4">
          <label className="block text-gray-700">Aptitudes Professionnelles</label>
          {aptitudesProfessionnelles.map((aptitude, index) => (
            <input
              key={index}
              type="text"
              value={aptitude}
              onChange={(e) => updateField(setAptitudesProfessionnelles, index, e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => addField(setAptitudesProfessionnelles)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
          >
            Add Another Aptitude
          </button>
        </div>
        {/* Additional Fields */}
        <div className="mb-4">
          <label className="block text-gray-700">Conditions Particulieres d'Exercice</label>
          <input
            type="text"
            value={conditionsParticulieresExercice}
            onChange={(e) => setConditionsParticulieresExercice(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Postes Precedents</label>
          {postesPrecedents.map((poste, index) => (
            <input
              key={index}
              type="text"
              value={poste}
              onChange={(e) => updateField(setPostesPrecedents, index, e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => addField(setPostesPrecedents)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
          >
            Add Another Previous Post
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Evolution Professionnelle</label>
          {evolutionProfessionnelle.map((evolution, index) => (
            <input
              key={index}
              type="text"
              value={evolution}
              onChange={(e) => updateField(setEvolutionProfessionnelle, index, e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => addField(setEvolutionProfessionnelle)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
          >
            Add Another Evolution
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Diplome Requis</label>
          <input
            type="text"
            value={diplomeRequis}
            onChange={(e) => setDiplomeRequis(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Add Fiche de Poste
        </button>
      </form>
    </div></div> 
    
  );
}

export default AddFicheDePoste;
