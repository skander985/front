
// import React from 'react';
// import { useGlobalContext } from '../_context/GlobalContext';

// function Hero() {
//   const { x } = useGlobalContext();

  // // Get the current URL
  // const currentUrl = window.location.href;

  // // Check if the URL contains "sign-in" or "sign-up"
  // const isSignInPage = currentUrl.includes('sign-in');
  // const isSignUpPage = currentUrl.includes('sign-up');

  // // Only render the Hero component if the URL does not contain "sign-in" or "sign-up"
  // if (isSignInPage || isSignUpPage) {
  //   return null;
  // }

//   return x && (
//     <section className="bg-gray-900 text-white">
//       <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
//         <div className="mx-auto max-w-3xl text-center">
//           <h1
//             className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
//           >
//             Optimize HR Processes. 
//             <span className="sm:block"> Enhance Employee Engagement. </span>
//           </h1>

//           <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
//             Transform your HR practices with our innovative solutions. Streamline recruitment, improve employee management, and boost overall engagement to create a thriving workplace environment.
//           </p>

//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <a
//               className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
//               href="#"
//             >
//               Get Started
//             </a>

//             <a
//               className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white focus:outline-none hover:bg-primary focus:ring active:bg-blue-500 sm:w-auto"
//               href="#"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client'
import React, { useState } from 'react';
import GetStartedSection from './GetStartedSection'; // Import the GetStartedSection
import LearnMoreSection from './LearnMoreSection';

function Hero() {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);
    // Get the current URL
    const currentUrl = window.location.href;

    // Check if the URL contains "sign-in" or "sign-up"
    const isSignInPage = currentUrl.includes('sign-in');
    const isSignUpPage = currentUrl.includes('sign-up');
  
    // Only render the Hero component if the URL does not contain "sign-in" or "sign-up"
    if (isSignInPage || isSignUpPage) {
      return null;
    }

  const toggleGetStarted = () => {
    setShowGetStarted(prev => !prev);
    setShowLearnMore(false); // Hide Learn More section if it's visible
  };

  const toggleLearnMore = () => {
    setShowLearnMore(prev => !prev);
    setShowGetStarted(false); // Hide Get Started section if it's visible
  };

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Optimize HR Processes. 
            <span className="sm:block"> Enhance Employee Engagement. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Transform your HR practices with our innovative solutions. Streamline recruitment, improve employee management, and boost overall engagement to create a thriving workplace environment.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              onClick={toggleGetStarted}
            >
              Get Started
            </button>

            <button
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white focus:outline-none hover:bg-indigo-500 focus:ring active:bg-blue-500 sm:w-auto"
              onClick={toggleLearnMore}
            >
              Learn More
            </button>
          </div>

          {/* Container to hold dynamic sections */}
          <div className="mt-12 transition-all duration-300 ease-in-out">
            {showGetStarted && <GetStartedSection />}
            {showLearnMore && <LearnMoreSection />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;