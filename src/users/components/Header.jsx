import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="bg-white shadow px-6 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="logo"
          className="w-8 h-8"
        />
      </div>

      {/* Center: Title */}
      <h1 className="text-4xl font-bold tracking-wide">BOOK STORE</h1>

      {/* Right: Social Icons + Profile */}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon
          icon={faInstagram}
          className="w-5 h-5 cursor-pointer hover:text-pink-500"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="w-5 h-5 cursor-pointer hover:text-blue-400"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="w-5 h-5 cursor-pointer hover:text-blue-600"
        />

        {/* Profile Avatar (using FA user-circle) */}
        <FontAwesomeIcon
          icon={faUserCircle}
          className="w-7 h-7 cursor-pointer text-gray-600"
        />
      </div>
    </header>
  );
}

export default Header;
