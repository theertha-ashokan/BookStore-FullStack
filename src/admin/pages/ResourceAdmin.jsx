import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSidebar'

const ResourceAdmin = () => {
    return (
     <div>
      <AdminHeader />
      <div className='md:flex'>
        <div className='col-span-1'><AdminSideBar /></div>

        <div className='col-span-3 p-8 '>
         Resource-Admin

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ResourceAdmin