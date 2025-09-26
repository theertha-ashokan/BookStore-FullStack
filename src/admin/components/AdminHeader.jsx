import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


function AdminHeader() {
  return (
    <>
      <header className="flex items-center justify-between bg-white shadow px-6 py-3">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold">BOOK STORE</h1>
        </div>
        {/* Logout Button */}
        <button className="flex items-center space-x-2 border px-4 py-2 rounded-md  hover:bg-gray-900 hover:text-white  ">
         <FontAwesomeIcon icon={faPowerOff} />
          <span >Logout</span>
        </button>
      </header>
   <div className="bg-black w-full p-3 text-white">
    <marquee className='text-white p-1'>Welcome,  Admin!    You're all set to manage and monitor the system. Let’s get to work!</marquee>

   </div>
    </>
  );
}

export default AdminHeader;