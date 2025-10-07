import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBook, faScrewdriverWrench, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  const [listStatus, setListstatus] = useState(false)
  return (
    <div className='bg-sky-100 flex justify-center items-center flex-col px-23 py-30 '>
      <div className='bg-gray-400 rounded-full text-white flex justify-center items-center text-3xl' style={{ width: "70px", height: "70px" }}>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <p className='mt-2 text-xl'>Username</p>
      <button onClick={() => setListstatus(!listStatus)} className='text-2xl md:hidden '><FontAwesomeIcon icon={faBars} style={{ color: "blue" }} /></button>

     {/* side bar redirection-link */}
             <div className={listStatus ? 'block mt-2' : 'md:block hidden mt-2'}>
        <div className="mt-3 flex items-center gap-x-2">
  <Link to={'/'} className="flex items-center gap-x-2">
    <FontAwesomeIcon icon={faBook} />
    <span>Home</span>
  </Link>
</div>

<div className="mt-3 flex items-center gap-x-2">
  <Link to={'/all-books'} className="flex items-center gap-x-2">
    <FontAwesomeIcon icon={faBook} />
    <span>AllBooks</span>
  </Link>
</div>

<div className="mt-3 flex items-center gap-x-2">
  <Link to={'/Careers'} className="flex items-center gap-x-2">
    <FontAwesomeIcon icon={faBagShopping} />
    <span>Careers</span>
  </Link>
</div>

<div className="mt-3 flex items-center gap-x-2">
  <Link to={'/admin-settings'} className="flex items-center gap-x-2">
    <FontAwesomeIcon icon={faScrewdriverWrench} />
    <span>Settings</span>
  </Link>
</div>

      </div>
    </div>
  )
}

export default AdminSideBar


