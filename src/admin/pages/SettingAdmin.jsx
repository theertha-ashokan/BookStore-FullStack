import React, { useContext, useEffect, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faUserPen } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer,toast } from 'react-toastify'
import SERVERURL from '../../services/serverURL'
import { updateAdminProfileAPI } from '../../services/allAPI'
import { adminUpdateContext } from '../../cotextAPI/ContextShare'


function SettingAdmin() {
  const {adminEditResponse,setAdminEditResponse} = useContext(adminUpdateContext)
  const [userDetails,setUserDetails] = useState({username:"",password:"",cpassword:"",profile:"",role:""})
  const [token,setToken] = useState("")
  const [existingProfile,setExistingProfile] = useState("")
  const [preview,setPreview] = useState("")


  useEffect(()=>{
          if(sessionStorage.getItem("token")){
              const userToken = sessionStorage.getItem("token")
              setToken(userToken)
              const user = JSON.parse(sessionStorage.getItem("user"))
              setUserDetails({username:user.username,password:user.password,cpassword:user.password,role:user.role})
              setExistingProfile(user.profile)
          }
      },[])

      const handlePictureUpload = (e)=>{
        setUserDetails({...userDetails,profile:e.target.files[0]})
        const url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
    }

    const handleReset = ()=>{
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({username:user.username,password:user.password,cpassword:user.password,role:user.role})
        setExistingProfile(user.profile)
        setPreview("")
    }

    const handleUpdate = async()=>{
            const {username,password,role,cpassword,profile} = userDetails
            if(!username || !password || !cpassword ){
                toast.info("Please fill the form completely")
            }else{ 
                if(password != cpassword){
                toast.warning("Password and confirm password must be same")
            }else{
                const reqHeader = {
                "Authorization":`Bearer ${token}`
              }
              const reqBody = new FormData()
              if(preview){
                for(let key in userDetails){
                    reqBody.append(key,userDetails[key])
                }
                const result = await updateAdminProfileAPI(reqBody,reqHeader)
                if(result.status == 200){
                    toast.success("Profile updated successfully")
                    sessionStorage.setItem("user",JSON.stringify(result.data))
                    handleReset()
                    setAdminEditResponse(result.data)
                }else{
                    toast.error("Something went wrong")
                    console.log(result);
                    
                }
              }else{
                const result = await updateAdminProfileAPI({username,password,role,profile:existingProfile,
                },reqHeader)
                if(result.status == 200){
                    toast.success("Profile updated successfully")
                    sessionStorage.setItem("user",JSON.stringify(result.data))
                    handleReset()
                    setAdminEditResponse(result.data)
                }else{
                    toast.error("Something went wrong")
                    console.log(result);
                    
                }
              }
    
            }
        }
        }

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
                  <div className="relative w-[130px] h-[-130px]">
                    {/* Hidden File Input */}
                    <input type="file" id="adminpic" className="hidden" />

                    {/* Profile Image */}
                   <label htmlFor="profilePic">
                        <input onChange={e=>handlePictureUpload(e)} type="file" id='profilePic' style={{display:'none'}} />
                        {
                            existingProfile==""?
                            <img className='' style={{width:"150px",height:'150px',borderRadius:'50%'}} src={preview? preview:"https://png.pngtree.com/png-vector/20230831/ourlarge/pngtree-man-avatar-image-for-profile-png-image_9197911.png" } alt="profile" />
                            : existingProfile.startsWith("https://lh3.googleusercontent.com/")?
                            <img className='' style={{width:"150px",height:'150px',borderRadius:'50%'}} src={preview?preview:existingProfile} alt="profile" />
                            :
                            <img className='' style={{width:"150px",height:'150px',borderRadius:'50%'}} src={preview?preview:`${SERVERURL}/uploads/${existingProfile}`} alt="profile" />

                        }
                        {/* <button className="bg-yellow-300   text-white py-3 px-4 rounded flex justify-center" style={{marginLeft:'75px',marginTop:'-20px',width:"30px",height:"30px"}}><FontAwesomeIcon icon={faPen}/></button> */}
                    </label>

                    {/* Edit Icon */}
                    <label
                      htmlFor="adminpic"
                      className="absolute bottom-2 right-2 bg-yellow-100 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600"
                    >
                      <FontAwesomeIcon icon={faUserPen} className="w-4 h-4 text-black" />
                    </label>

                  </div>

           {/* input box */}
                  <form action="" className="w-full px-5  ">
                    <input
                      type="text"
                      value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})}
                      className="w-full bg-white p-1  rounded"
                      placeholder="Username"
                    />

                    <input
                      type="text"
                      value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})}
                      className="w-full bg-white p-1 mt-1 rounded"
                      placeholder="Password"
                    />

                    <input
                      type="text"
                      value={userDetails.cpassword} onChange={e=>setUserDetails({...userDetails,cpassword:e.target.value})}
                      className="w-full bg-white p-1 mt-1 rounded"
                      placeholder="Confirm Password"
                    />
                  </form>

                  <div className='grid grid-cols-2 gap-3 w-full px-5'>
                    <button onClick={handleReset} className="bg-orange-400 text-white   text-center  px-3 py-1 mt-3 rounded-lg">Reset</button>
                    <button onClick={handleUpdate} className="bg-green-600 text-white   text-center  px-3 py-1 mt-3 rounded-lg">Update</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />

      <ToastContainer
              position="top-right"
              autoClose={5000}
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

export default SettingAdmin