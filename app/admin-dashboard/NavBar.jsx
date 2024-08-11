import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-around">
        <Link to="/admin" className="hover:text-blue-400">
          Admins
        </Link>
        <Link to="/rh" className="hover:text-blue-400">
          RHs
        </Link>
        <Link to="/employe" className="hover:text-blue-400">
          Employes
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;