import React from 'react'
import AdminSideBar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import { Link } from 'react-router-dom'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function DashboardAdmin() {
  return (
     <div>
      <AdminHeader />
      <div className='md:flex'>
        <div className='col-span-1'>
          <AdminSideBar />
          </div>

        <div className='col-span-3 p-8 '>
         Admin-DashBoard

          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DashboardAdmin