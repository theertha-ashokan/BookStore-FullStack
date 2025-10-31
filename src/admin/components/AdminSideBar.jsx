import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBook, faScrewdriverWrench, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { use, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SERVERURL from '../../services/serverURL'
import { adminUpdateContext } from '../../cotextAPI/ContextShare'

function AdminSideBar() {
  const {adminEditResponse,setAdminEditResponse} = useContext(adminUpdateContext)
  const [dp,setDp] = useState("")
  const [adminName,setAdminName] =useState("")
  const [listStatus, setListstatus] = useState(false) 

  useEffect(()=>{
    if (sessionStorage.getItem("user")){
     const user = JSON.parse(sessionStorage.getItem("user"))
     setDp(user.profile)
     setAdminName(user.username)
    }
  },[adminEditResponse])



  return (
    <div className='bg-sky-100 flex justify-center items-center flex-col px-23 py-30 '>
      <div className='bg-gray-400 rounded-full text-white flex justify-center items-center text-3xl' style={{ width: "70px", height: "70px" }}>
       {/* <FontAwesomeIcon icon={faUser} /> */}
       <img src={dp==""?"https://cdn-icons-png.flaticon.com/256/9131/9131529.png":`${SERVERURL}/uploads/${dp}`} alt="user icon image" />
      </div>
      <p className='mt-2 text-xl'>{adminName}</p>
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
  <Link to={'/admin-resources'} className="flex items-center gap-x-2">
    <FontAwesomeIcon icon={faBook} />
    <span>Collections</span>
  </Link>
</div>

<div className="mt-3 flex items-center gap-x-2">
  <Link to={'/admin-careers'} className="flex items-center gap-x-2">
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


