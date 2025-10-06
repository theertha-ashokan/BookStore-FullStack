import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
function AdminDashBoard() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-3  ">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 ms-15 p-10">
          <div className='md:grid grid-cols-3'>
            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-blue-900 grid grid-cols-2 p-4 items-center rounded text-white text-6xl">
                <FontAwesomeIcon icon={faBook} />
                <div className='text-center '>
                  <h3 className='text-xl'>total number of books</h3>
                  <h3 className="text-4xl ">100+</h3>
                </div>
              </div>
            </div>
            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-green-900 grid grid-cols-2 p-4 items-center rounded text-white text-6xl">
                <FontAwesomeIcon icon={faUsers} />
                <div className='text-center '>
                  <h3 className='text-xl'>Total number of Users</h3>
                  <h3 className="text-4xl ">100+</h3>
                </div>
              </div>
            </div>

            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-yellow-900 grid grid-cols-2 p-4 items-center rounded text-white text-6xl">
                <FontAwesomeIcon icon={faUser} />
                <div className='text-center '>
                  <h3 className='text-xl'>Total number of Employee</h3>
                  <h3 className="text-4xl ">100+</h3>
                </div>
              </div>
            </div>

          </div>

          <div className='md:grid grid-cols-2 p-5 my-5'>
            <div>  barchart </div>
            <div>pie chart </div>
          </div>






        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminDashBoard