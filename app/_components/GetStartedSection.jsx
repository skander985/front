import React from 'react';

function GetStartedSection() {
  return (
    <div className="mt-12 p-6 bg-gray-800 rounded-md">
      <h2 className="text-2xl font-bold">Get Started with Our HR Platform</h2>
      <p className="mt-4">
        Ready to revolutionize your HR management? Our platform provides the tools you need to streamline your HR processes and drive organizational success.
        Click below to start your journey with us.
      </p>
      <a
        href="/start"
        className="block mt-4 rounded border border-blue-600 bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring active:text-opacity-75"
      >
        Start Now
      </a>
    </div>
  );
}

export default GetStartedSection;
