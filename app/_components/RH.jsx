// 'use client';

// import React, { useEffect, useState } from 'react';

// function RH() {
//   const [isAuthPage, setIsAuthPage] = useState(false);

//   useEffect(() => {
//     // Get the current URL
//     const currentUrl = window.location.href;

//     // Check if the URL contains "sign-in" or "sign-up"
//     const isSignInPage = currentUrl.includes('sign-in');
//     const isSignUpPage = currentUrl.includes('sign-up');

//     // Set the state based on the current URL
//     setIsAuthPage(isSignInPage || isSignUpPage);
//   }, []); // Only run once on component mount

//   const handleSignIn = () => {
//     window.location.href = '/sign-in';
//   };

//   const handleSignUp = () => {
//     window.location.href = '/sign-up';
//   };

//   // Only render the RH section if not on a sign-in or sign-up page
//   if (isAuthPage) {
//     return null;
//   }

//   return (
//     <section className="bg-gray-900 text-white">
//       <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
//         <div className="mx-auto max-w-3xl text-center">
//           <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
//             Welcome to the RH Dashboard.
//             <span className="sm:block"> Streamline Your HR Functions. </span>
//           </h1>

//           <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
//             Leverage our tools to manage recruitment, optimize employee onboarding, and ensure seamless communication across departments. Your HR management, simplified.
//           </p>

//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <button
//               className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
//               onClick={handleSignIn}
//             >
//               Sign In
//             </button>

//             <button
//               className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white focus:outline-none hover:bg-indigo-500 focus:ring active:bg-blue-500 sm:w-auto"
//               onClick={handleSignUp}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RH;
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import RHDashboard from '../rh-dashboard/page'; // Import the RHDashboard component

function RH() {
  const [isAuthPage, setIsAuthPage] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if a token exists in local storage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    // Get the current URL
    const currentUrl = window.location.href;

    // Check if the URL contains "sign-in" or "sign-up"
    const isSignInPage = currentUrl.includes('sign-in');
    const isSignUpPage = currentUrl.includes('sign-up');

    // Set the state based on the current URL
    setIsAuthPage(isSignInPage || isSignUpPage);
  }, []); // Only run once on component mount

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to the RH dashboard if authenticated
      router.push('/rh-dashboard');
    }
  }, [isAuthenticated, router]);

  // Only render the RH section if not authenticated
  if (isAuthPage) {
    return null; // Do not render anything if on sign-in or sign-up pages
  }

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Welcome to the RH Portal.
            <span className="sm:block"> Streamline Your HR Functions. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Leverage our tools to manage recruitment, optimize employee onboarding, and ensure seamless communication across departments. Your HR management, simplified.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              onClick={() => router.push('/sign-in')}
            >
              Sign In
            </button>

            <button
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white focus:outline-none hover:bg-indigo-500 focus:ring active:bg-blue-500 sm:w-auto"
              onClick={() => router.push('/sign-up')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RH;

