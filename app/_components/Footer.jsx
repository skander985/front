import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-center text-white">


<div className="p-4 bg-neutral-800">
<div className="flex justify-center">
  <a
    href="https://facebook.com" // Add the correct URL
    type="button"
    className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-full w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  </a>

  <a
    href="https://twitter.com" // Add the correct URL
    type="button"
    className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-full w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  </a>

  <a
    href="https://linkedin.com" // Add the correct URL
    type="button"
    className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-full w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" />
    </svg>
  </a>

  <a
    href="https://instagram.com" // Add the correct URL
    type="button"
    className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-full w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  </a>

  <a
    href="https://pinterest.com" // Add the correct URL
    type="button"
    className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-full w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.828 14.828c-.219-.219-.576-.219-.795 0l-2.236 2.236-2.236-2.236c-.219-.219-.576-.219-.795 0l-.095.095c-.219.219-.219.576 0 .795l2.236 2.236-2.236 2.236c-.219.219-.219.576 0 .795l.095.095c.219.219.576.219.795 0l2.236-2.236 2.236 2.236c.219.219.576.219.795 0l.095-.095c.219-.219.219-.576 0-.795l-2.236-2.236 2.236-2.236c.219-.219.219-.576 0-.795l-.095-.095zm0 0-9 9-2 1.5 1.5-2 9-9-1.5-1.5z" />
    </svg>
  </a>
</div>
  © 2024 Copyright: MyWebsite.com
</div>
    </footer>
  );
}