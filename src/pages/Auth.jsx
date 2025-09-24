import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url("https://hdqwalls.com/wallpapers/spring-season-flowers-os.jpg")] bg-cover bg-center '>
          <div className='p-10'>
            <h1 className='text-3xl font-bold'>BOOK STORE</h1>
          </div>
          <div style={{width:"500px"}} className='bg-black text-white p-5  my-5 flex justify-center items-center flex-col'>
            <div style={{width:"100px",height:'100px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
              <FontAwesomeIcon icon={faUser} className='text-3xl' />
            </div>
            <h1 className='text-2xl'>{register?"Register":"Login"}</h1>
            {
              register && 
               <form className='my-3 w-full'>
                <input type="text" placeholder='User Name' className='w-full bg-white p-2 placeholder-gray-500 rounded text-black' />
             </form>
            }
            <form className='my-3 w-full'>
                <input type="text" placeholder='Email ID' className='w-full bg-white p-2 placeholder-gray-500 rounded text-black' />
            </form>
            <form className='my-3 w-full'>
                <input type="text" placeholder='Password' className=' w-full bg-white p-2 placeholder-gray-500 rounded text-black' />
            </form>
            <div className='flex justify-between p-4 w-full'>
                  <p className='text-sm text-orange-300'>Never Share Your Password</p>
                  <button className='text-sm underline'> Forget Password</button>
            </div>
            <div className='text-center w-full'>
              {
                register ?
                  <button className='bg-green-700 p-2 w-full rounded'>Register</button>
                  :
                  <button className='bg-green-700 p-2 w-full rounded'>Login</button>
              }
            </div>
            <div>
              {
              register?
              <p className='text-blue-600'>Are You a Alraedy a User?<Link to={'/login'} className='underline ms-5'>Login</Link></p>
              :
              <p className='text-blue-600'>Are you a  New User? <Link to={'/register'} className='underline ms-5'>Register</Link></p>
            }
            </div>
          </div>
    </div>
  )
}

export default Auth