import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white ">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
        {/* About Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">ABOUT US</h2>
          <p className="text-gray-400 text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            dolorem veniam deserunt quisquam eius ad hic maxime dicta ipsum nemo
            itaque necessitatibus quas nobis, illum voluptate, pariatur
            recusandae alias harum!
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-4">NEWSLETTER</h2>
          <p className="text-gray-400 text-sm mb-3">
            Stay updated with our latest trends
          </p>
          <div className="flex bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-10 py-2 w-full text-black rounded-3"
            />
            <button className="bg-yellow-400 px-4 rounded-r">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">FOLLOW US</h2>
          <p className="text-gray-400 text-sm mb-3">Let us be social</p>
          <div className="flex space-x-4">
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
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-5 h-5 cursor-pointer hover:text-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-center py-3 text-sm">
        Copyright © 2023 All rights reserved | This website is made with{" "}
        <span className="text-yellow-400">❤</span> by{" "}
        <span className="font-semibold">Theertha</span>
      </div>
    </footer>
  );
}

export default Footer;
