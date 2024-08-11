import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-around">
        <Link to="/search" className="hover:text-blue-400">
          Search
        </Link>
        <Link to="/fichedeposte" className="hover:text-blue-400">
          Fiche de Poste
        </Link>
        <Link to="/associate" className="hover:text-blue-400">
          Associate
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
