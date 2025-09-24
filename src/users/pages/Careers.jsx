import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header'
import Footer from '../../components/Footer'

function Careers() {
  return (

    <>
      <Header />
      <div className="px-6 md:px-20 py-10">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center mb-4">Careers</h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione,
          officia delectus consequuntur, dicta libero magni omnis architecto
          voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum
          fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <h1>Corrent Openings</h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="flex border rounded overflow-hidden w-full max-w-lg">
            <input
              type="text"
              placeholder="Job Title"
              className="w-full px-3 py-2 focus:outline-none"
            />
            <button className="bg-green-600 text-white px-6">Search</button>
          </div>
        </div>

        {/* Job Listing Card */}
        <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto border border-gray-500">
          {/* Title + Button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Job Title</h2>
            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 flex items-center gap-2">
              Apply <span>↗</span>
            </button>
          </div>
          <hr />
          <div className="flex items-center text-gray-600 mb-3">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-blue-500" />
            Location
          </div>
          <p className="mb-1">
            <span className="font-semibold">Job Type:</span> Senior Level
          </p>
          <p className="mb-1">
            <span className="font-semibold">Salary:</span> 10 lakhs
          </p>
          <p className="mb-1">
            <span className="font-semibold">Qualification:</span> M-Tech / B-Tech /
            BCA / MCA
          </p>
          <p className="mb-4">
            <span className="font-semibold">Experience:</span> 5–7 years
          </p>
          <p className="text-gray-700 mb-6">
            Description: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Careers;
