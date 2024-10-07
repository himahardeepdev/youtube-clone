/* eslint-disable react/no-unescaped-entities */
// src/components/PageNotFound.js

import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to the homepage
      </Link>
    </div>
  );
}

export default PageNotFound;
