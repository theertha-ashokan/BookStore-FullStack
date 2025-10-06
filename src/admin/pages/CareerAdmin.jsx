import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import Footer from '../../components/Footer';
import { Link, Links } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSquareArrowUpRight, faTrash } from '@fortawesome/free-solid-svg-icons';

function CareerAdmin() {
  const [jobListStatus, setJobListStatus] = useState(true)
  const [listApplicationStatus, setListApplicationStatus] = useState(true)

  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div>
          <AdminSidebar />
        </div>
        <div className="col-span-4 ms-10">
          <div className='py-10'>
            <h1 className='text-center text-3xl'>Careers</h1>
          </div>
          {/* tabs  */}
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p onClick={() => { setJobListStatus(true); setListApplicationStatus(false) }} className={jobListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Job Post</p>
            <p onClick={() => { setListApplicationStatus(true); setJobListStatus(false) }} className={listApplicationStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Applications</p>

          </div>
          {/* content */}

          {jobListStatus &&


            <div>
              <div className="flex justify-between  ">
                <div className='md:mx-80 grid grid-cols-2  justify-center items-center text-center md:w-200 w-100'>
                  <input type="text" placeholder='Job Title' className='h-10 ' />
                  <button className='text-white bg-blue-600 md:w-50 w-30 h-10'>Search </button>
                </div>
                <button className='font-bold mx-10'>Add</button>
              </div>
              <div className=" md:mx-45 bg-white shadow rounded p-5">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                  <h3 className="font-semibold text-lg">Job Title</h3>
                  <button className="bg-white-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white-500 flex items-center gap-1">
                    Delete
                    <FontAwesomeIcon size='2x' icon={faTrash} onClick={() => setCareerModal(true)} /></button>
                </div>

                {/* Job Details */}
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" /> Location
                  </p>
                  <p>
                    <span className="font-semibold">Job Type:</span> Senior Level
                  </p>
                  <p>
                    <span className="font-semibold">Salary:</span> 10 lakhs
                  </p>
                  <p>
                    <span className="font-semibold">Qualification:</span> M-Tech /B-Tech/BCA/MCA
                  </p>
                  <p>
                    <span className="font-semibold">Experience:</span> 5-7
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-600 text-sm ">
                  Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>

          }

          {listApplicationStatus &&
            <div className='p-10 overflow-x-hidden'>
              <table className='w-full my-3 shadow'>
                <thead>
                  <tr>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-300'>SL NO</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-300'>job Title</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-300'>Name</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-300'>Qualification</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-300'>Email</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-300'>Phone</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-300'>Cover  letter</th>               <th className='p-3 text-center bg-blue-800 text-white border border-gray-300'>Resume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-500 p-3 text-center'>1</td>
                    <td className='border border-gray-500 p-3 text-center'>front end developer</td>
                    <td className='border border-gray-500 p-3 text-center'>max miller</td>
                    <td className='border border-gray-500 p-3 text-center'>BCA</td>
                    <td className='border border-gray-500 p-3 text-center'>max@gmail.com</td>
                    <td className='border border-gray-500 p-3 text-center'>90909 09000</td>
                    <td className='border border-gray-500 p-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veniam, vitae tenetur maxime, error deleniti, distinctio corrupti accusantium alias dicta commodi! Quaerat, autem! Molestiae quod ea voluptatibus maxime voluptas inventore.</td>
                    <td className='border border-gray-500 p-3 text-center'><Link className="text-blue-500 underline">Resume</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>


          }
        </div>
      </div>

      <Footer />
    </>
  )
}

export default CareerAdmin