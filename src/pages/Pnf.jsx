import React from "react";

export default function Pnf() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* GIF */}
      <img
        src="https://i.pinimg.com/originals/11/dc/96/11dc96d2e4daca3ea8ff6aa41299b5e1.gif"
        alt="404 Not Found"
        className="w-64 md:w-96 mb-6"
      />
      {/* Button to go home */}
      <a
        href="/"
        className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Go to Home
      </a>
    </div>
  );
}
