// context/GlobalContext.js
'use client'
import React, { createContext, useContext, useState } from 'react';

// Create a Context
const GlobalContext = createContext();

// Create a Provider component
export const GlobalProvider = ({ children }) => {
  const [x, setX] = useState(true);

  return (
    <GlobalContext.Provider value={{ x, setX }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the Global Context
export const useGlobalContext = () => useContext(GlobalContext);
