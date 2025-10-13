import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer ,toast} from 'react-toastify'
import { registerAPI } from '../services/allAPI'


function Auth({ register }) {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
  // console.log(userDetails);

  // register
  const handleRegister = async() => {
    console.log("Inside handleregister");
    const { username, email, password } = userDetails
    if (!username || !email || !password)
      toast.info("please fill the form completely")

    else {
      // toast.success("Proceed to api call")
      try{
        const result = await registerAPI(userDetails)
        console.log(result);
        if(result.status==200){
          toast.success("Registered successfully!!!! please login.")
          setUserDetails({username :"",email:"",password:""})
          navigate('/login')
        }else if(result.status==409){
          toast.warning(result.response.data)
          setUserDetails({username :"",email:"",password:""})
          navigate('/login')
        }else{
          console.log(result);
          
        } 
      }catch(err){
        console.log(err); 
      }
    }

  }

// login
 const handleLogin = async()=>{
    const {email,password} = userDetails
    if(!email || !password){
      toast.info("Please fill the form completely")
    }else{
      //toast.success("Proceed to API CALL")
      try{
        const result = await loginAPI(userDetails)
        console.log(result);
        if(result.status == 200){
          
        }else if(result.status == 404){
          
        }else{
          console.log(result);
          
        }
        
      }catch(err){
        console.log(err);
        
      }
    } 
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-cover  bg-[url(https://wallpaperaccess.com/full/4506133.jpg)]">

        <div className="p-10 text-center">
          <h1 className='text-3xl text-white font-bold'>BOOK STORE</h1>
          <div className=" text-center text-white bg-black p-5 my-5 ">

            <div style={{ width: "90px", height: "90px", borderRadius: '50%' ,margin: "0 auto" }}
              className='text-center border mb-5 flex items-center justify-center'>
              <FontAwesomeIcon icon={faUser} className='text-3xl' />
            </div>
            <h1 className='text-3xl font-bold'>{register ? "Register" : "login"}</h1>
            <form className="my-5">
              {
                register && <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='User Name' className='bg-white p-2 w-full rounded placeholder-gray-600 mb-3 text-black' />

              }
              <input value={userDetails.email} onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} type="email" placeholder='Email' className='bg-white p-2 w-full rounded placeholder-gray-600 mb-3 text-black' />
              <div className='flex items-center'>
                <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type={viewPasswordStatus ? "text" : "password"} placeholder='Password' className='bg-white p-2 w-full rounded placeholder-gray-600 mb-3 text-black' />
                {viewPasswordStatus ? <FontAwesomeIcon icon={faEye} style={{ marginLeft: "-30px" }} className='text-gray-600'
                  onClick={() => setViewPasswordStatus(!viewPasswordStatus)} />
                  : <FontAwesomeIcon icon={faEyeSlash} style={{ marginLeft: "-30px" }} className='text-gray-600'
                    onClick={() => setViewPasswordStatus(!viewPasswordStatus)} />}

              </div>
              <div className='flex justify-between mb-5 '>

                <p className='text-sm text-orange-300'>*never share your password with others </p>
                <button className='text-sm underline'>Forget Password</button>
              </div>
              <div className='text-center'>
                {
                  register ?
                    <button type='button' onClick={handleRegister} className='bg-green-700 p-2 w-full rounded'>Register</button>
                    :
                    <button onClick={handleLogin} type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>

                }
              </div>
              {/* goole authentication */}
              {
                register ?
                  <p className='text-blue-600'>Are you already a user ? <Link to={'/login'} className='underline'>Login</Link> </p>
                  :
                  <p className='text-blue-600'>Are you a new user ? <Link to={'/register'} className='underline'>Register</Link></p>

              }
            </form>

          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        
      />

    </div>

  )
}

export default Auth