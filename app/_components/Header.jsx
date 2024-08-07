'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import SignIn from '../(auth)/sign-in/[[...sign-in]]/page'; // Import the SignIn component
import SignUp from '../(auth)/sign-up/[[...sign-up]]/page'; // Import the SignUp component
import Admin from './Admin';
import RH from './RH';
import Employe from './Employe';
import Hero from './Hero';

function Header() {
  const [activeComponent, setActiveComponent] = useState('Hero');
  const [isAuthPath, setIsAuthPath] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Check if the current URL contains 'sign-in' or 'sign-up'
    const currentPath = window.location.href;
    setIsAuthPath(currentPath.includes('/sign-in') || currentPath.includes('/sign-up'));
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Admin':
        return <Admin />;
      case 'RH':
        return <RH />;
      case 'Employe':
        return <Employe />;
      case 'hhh':
        return ;
      default:
        return <Hero />;
    }
  };

  const handleNavigation = (path) => {
    if (path === 'sign-in' || path === 'sign-up') {
      setActiveComponent('hhh');
      // router.push(`/${path}`);
    } else {
     
      setActiveComponent(path);
      
    }
  };

  return (
    <header>
      <nav>
        <div className="">
          <div className="flex justify-between h-16 px-10 shadow items-center shadow-md">
            <div className="flex items-center space-x-8">
              <Image src='/logo.svg' alt='logo' width={30} height={30} />
              <a href='/' onClick={() => handleNavigation('Hero')}>
              <h1 
                
                className="text-xl lg:text-2xl font-bold cursor-pointer" 
                
              >
                GestionRH
              </h1>
              </a>
              {!isAuthPath && (
              <div className="hidden md:flex justify-around space-x-4">
                <button
                  onClick={() => handleNavigation('Admin')}
                  className="hover:text-indigo-600 text-gray-700"
                >
                  Admin
                </button>
                <button
                  onClick={() => handleNavigation('RH')}
                  className="hover:text-indigo-600 text-gray-700"
                >
                  RH
                </button>
                <button
                  onClick={() => handleNavigation('Employe')}
                  className="hover:text-indigo-600 text-gray-700"
                >
                  Employe
                </button>
              </div>)}
            </div>

            <div className="flex space-x-4 items-center">
              <a href='/sign-in'
                onClick={() => handleNavigation('sign-in')}
                className="bg-[#e4e3e2] text-indigo-600 text-sm px-4 py-2 rounded cursor-pointer"
              >
                LOGIN
              </a>
              <a
                href='sign-up'
                onClick={() => handleNavigation('sign-up')}
                className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm cursor-pointer"
              >
                SIGNUP
              </a>
            </div>
          </div>
        </div>
      </nav>

      {renderComponent()}
    </header>
  );
}

export default Header;
