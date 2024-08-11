// import Image from "next/image";
// import Hero from "./_components/Hero";

// export default function Home() {
//   return (
//     <div>
//         <Hero/>
// </div>
//   );
// }
'use client'
import { useEffect, useState } from 'react';
import Admin from './_components/Admin';
import Employe from './_components/Employe';
import RH from './_components/RH';
import Hero from './_components/Hero';

export default function Home() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Retrieve the role from local storage
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  const renderContent = () => {
    switch (role) {
      case 'ROLE_ADMIN':
        return <Admin />;
      case 'ROLE_RH':
        return <RH />;
      case 'ROLE_EMPLOYE':
        return <Employe />;
      default:
        return ;
    }
  };

  return <div>{renderContent()}</div>;
}
