import React, { useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'



function SettingAdmin() {
  return (
    <div>
      <AdminHeader />
      <div className='md:flex'>
        <div className='col-span-1'><AdminSideBar /></div>
        <div className='col-span-3 p-8 '>
          <h1 className='text-3xl text-center font-bold '>Settings</h1>
          <div>

            <div className='md:grid grid-cols-2 mt-5 gap-6'>
              <div className=''>
                <h1 className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis odit eius saepe cumque, debitis repellendus tempora perspiciatis deleniti eos magni alias fugiat recusandae, numquam illo vel amet. Dignissimos, ducimus nostrum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum obcaecati maiores aliquam, impedit possimus? Quo voluptas velit nisi, nesciunt fugit optio voluptate sequi obcaecati, veniam animi nemo eligendi? Corporis.</h1>
                <br />
                <br />
                <h1 className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, vitae nobis porro dolorem at odit sit, tempore molestias exercitationem neque iure sunt sint corporis eos adipisci provident omnis dicta in.</h1>
              </div>

              <div>
                <div className="bg-blue-200 md:mt-0 mt-5 rounded-lg flex flex-col justify-center items-center py-5  w-full max-w-[350px] aspect-[5/4] mx-auto " >

                 {/* Profile Picture with Edit Icon */}
<div className="relative w-[100px] h-[100px]">
  {/* Hidden File Input */}
  <input type="file" id="adminpic" className="hidden" />

  {/* Profile Image */}
  <label htmlFor="adminpic">
    <img
      src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
      alt="profile"
      className="w-[100px] h-[100px] rounded-full border-2 border-gray-400 object-cover"
    />
  </label>

  {/* Edit Icon */}
  <label
    htmlFor="adminpic"
    className="absolute bottom-2 right-2 bg-yellow-100 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600"
  >
    <FontAwesomeIcon icon={faUserPen} className="w-4 h-4 text-black" />
  </label>
</div>


                  <form action="" className="w-full px-5  ">
                    <input
                      type="text"
                      className="w-full bg-white p-1  rounded"
                      placeholder="Username"
                    />
                    <input
                      type="text"
                      className="w-full bg-white p-1 mt-1 rounded"
                      placeholder="Password"
                    />
                    <input
                      type="text"
                      className="w-full bg-white p-1 mt-1 rounded"
                      placeholder="Confirm Password"
                    />
                  </form>

                  <div className='grid grid-cols-2 gap-3 w-full px-5'>
                    <button className="bg-orange-400 text-white   text-center  px-3 py-1 mt-3 rounded-lg">Reset</button>
                    <button className="bg-green-600 text-white   text-center  px-3 py-1 mt-3 rounded-lg">Update</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SettingAdmin