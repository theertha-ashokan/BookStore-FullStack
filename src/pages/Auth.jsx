import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Auth({ register}) {
  const [userDetails,setUserDetails]=useState({username:"",email:"",password:""})
  const [viewPasswordStatus,setViewPasswordStatus]=useState(false)
  return (
    <div> 
      <div className="flex flex-col items-center justify-center h-screen bg-cover  bg-[url(https://wallpaperaccess.com/full/458400.jpg)]">
       {/* <div className="flex flex-col items-center justify-center h-screen w-full" style={{backgroundColor:"rgb(0, 0, 0,0.3)"}}> */}
<div className="p-10 text-center">
  <h1 className='text-3xl text-white font-bold'>BOOK STORE</h1>
  <div className=" text-center text-white bg-black p-5 my-5 ">
       
    <div style={{width:"90px",height:"90px",borderRadius:'50%'}}
    className='text-center border mb-5 flex items-center justify-center'>
      <FontAwesomeIcon icon={faUser} className='text-3xl' /> 
    </div>
   <h1 className='text-3xl font-bold'>{register?"Register":"login"}</h1>
  <form className="my-5">
     {
    register && <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='User Name' className='bg-white p-2 w-full rounded placeholder-gray-600 mb-3 text-black' />

  }
  <input value={userDetails.email} onChange={e=>setUserDetails({...userDetails,email:e.target.value})} type="email" placeholder='Email' className='bg-white p-2 w-full rounded placeholder-gray-600 mb-3 text-black' />
   <div className='flex items-center'>
     <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type={viewPasswordStatus ?"text":"password" }placeholder='Password' className='bg-white p-2 w-full rounded placeholder-gray-600 mb-3 text-black' />
{  viewPasswordStatus ? <FontAwesomeIcon icon={faEye} style={{marginLeft:"-30px"}} className='text-gray-600' 
 onClick={()=>setViewPasswordStatus(!viewPasswordStatus)}/>
   : <FontAwesomeIcon icon={faEyeSlash} style={{marginLeft:"-30px"}} className='text-gray-600'
   onClick={()=>setViewPasswordStatus(!viewPasswordStatus)}/>}
  
   </div>
<div className='flex justify-between mb-5 '>
 
<p className='text-sm text-orange-300'>*never share your password with others </p>
<button className='text-sm underline'>Forget Password</button>
</div>
<div className='text-center'>
{
  register?
  <button className='bg-green-700 p-2 w-full rounded'>Register</button>
: 
  <button className='bg-green-700 p-2 w-full rounded'>Login</button>

}
</div>
{/* goole authentication */}
{
   register?
  <p className='text-blue-600'>Are you already a user ? <Link to={'/login'} className='underline'>Login</Link> </p>
: 
  <p className='text-blue-600'>Are you a new user ? <Link to={'/Register'} className='underline'>Register</Link></p>

}
  </form>

  </div>
</div>
       </div>
      </div>
    // </div>
  )
}

export default Auth