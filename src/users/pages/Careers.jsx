import React ,{useEffect, useState}from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faXmark } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { addApplicationAPI, getAllJobAPI } from "../../services/allAPI";
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";


function Careers() {
  const navigate = useNavigate()
    const [modalStatus,setModalStatus] = useState(false)
    const [allJobs,setAllJobs] = useState([])
    const [searchKey,setSearchKey] = useState("")
    const  [jobTitle,setjobTitle] = useState("")
    const [jobId,setJobId] = useState("")
    const [applicationDetails,setApplicationDetails] = useState({
      fullname:"",email:"",qualification:"",phone:"",coverLetter:"",resume:""
    })
    // clear resume input
    const [fileKey,setFilekey] = useState(Date.now())


   console.log(applicationDetails);
   

    useEffect(()=>{
      getAlljobs()
    },[searchKey])

    const handleApplyJob = (job) =>{
      setJobId(job?._id)
      setjobTitle(job.title)
      setModalStatus(true)
    }


    const  handleSubmitApplication = async ()=>{
      
      const token = sessionStorage.getItem("token")
      const {fullname,email,qualification,phone,coverLetter,resume} = applicationDetails
      if(!token){
        toast.info("please login to apply job...!!")
        setTimeout(()=>{
           navigate('/login')
      },2000);
      }else if(!fullname || !email || !qualification || !phone || !coverLetter || !resume || !jobId || !jobTitle){
        toast.info("please fill the form completely ...!!!")
      }else{
         const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()
      for(let key in applicationDetails){
      reqBody.append(key,applicationDetails[key])
      }
      reqBody.append("jobTitle",jobTitle)
      reqBody.append("jobId",jobId)
      const result = await addApplicationAPI(reqBody,reqHeader)
      console.log(result);
      if(result.status==200){
        toast.success("Application submitted susccessfully")
        handleReset()
        setModalStatus(false)
      }else if (result.status==409){
        toast.warning(result.response.data)
        handleReset()
      }else{
        toast.error("something went wrong")
         handleReset()
        setModalStatus(false)
      }
      
      }
    }

    
    const handleReset = ()=>{
      setApplicationDetails({
        fullname:"",email:"",qualification:"",phone:"",coverLetter:"",resume:""
     })
    //  reset resume input
     setFilekey(Date.now())
    }

    
     const getAlljobs = async()=>{
      try{
        const result = await getAllJobAPI (searchKey)
        if(result.status==200){
          setAllJobs(result.data)
        }else{
          console.log(result);
        }
      }catch(err){
        console.log(err); 
      }
     }
  
   


  return (
    <>
      <Header />
      <div className="px-6 md:px-20 py-10">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center mb-4">Careers</h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione,
          officia delectus consequuntur, dicta libero magni omnis architecto
          voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum
          fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <h1>Corrent Openings</h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="flex border rounded overflow-hidden w-full max-w-lg">
            <input
              type="text"
              onChange={e=>setSearchKey(e.target.value)}
              placeholder="Job Title"
              className="w-full px-3 py-2 focus:outline-none"
            />
            <button className="bg-green-600 text-white px-6">Search</button>
          </div>
        </div>

        {/* Job Listing Card */}
        {/* duplicate */}
       
       {
        allJobs?.length>0?
        allJobs?.map(job=>(
           <div key={job?._id} className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto border border-gray-500">
          {/* Title + Button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{job?.title}</h2>
            <button onClick={()=>handleApplyJob(job)} className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 flex items-center gap-2">
              Apply <span>↗</span>
            </button>
          </div>
          <hr />
          <div className="flex items-center text-gray-600 mb-3">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-blue-500" />
           {job?.location}
          </div>
          <p>
                                        <span className="font-semibold">Job Type:</span> {job?.jobType}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Salary:</span>{job?.salary}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Qualification:</span>{job?.qualification}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Experience:</span>{job?.experience}
                                    </p>
                                     <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                                    <span className="font-semibold text-gray-800">Description:</span>{job?.description}
                                </p>
        </div>
        ))
        :
        <p>No current Job opening</p>
       }
      </div>

      {/* moadl */}
           {/* Modal */}
      {
        modalStatus && (
          <div className="fixed inset-0 bg-gray-500/75 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
              {/* Header */}
              <div className="bg-slate-900 text-white flex justify-between items-center p-3 rounded-t-lg">
                <h1 className="text-lg font-semibold">Application Form</h1>
                <button onClick={() =>setModalStatus(false)}>
                  <FontAwesomeIcon icon={faXmark} className="text-white hover:text-slate-300" />
                </button>
              </div>

               {/* Form modal body */}
              <form className="p-6 space-y-4">


                {/* Inputs */}
                <div className="md:grid grid-cols-2 gap-4">
                  <input value={applicationDetails?.fullname} onChange={e=>setApplicationDetails({...applicationDetails,fullname:e.target.value})} type="text" placeholder="Full name" className="w-full border mb-3 rounded px-3 py-2" />

                  <input value={applicationDetails?.qualification} onChange={e=>setApplicationDetails({...applicationDetails,qualification:e.target.value})} type="text" placeholder="Qualification" className="w-full border mb-3 rounded px-3 py-2" />

                  <input value={applicationDetails?.email} onChange={e=>setApplicationDetails({...applicationDetails,email:e.target.value})} type="email" placeholder="Email ID" className="w-full border mb-3 rounded px-3 py-2" />

                  <input value={applicationDetails?.phone} onChange={e=>setApplicationDetails({...applicationDetails,phone:e.target.value})} type="tel" placeholder="Phone" className="w-full border mb-3 rounded px-3 py-2" />

                  <div className='col-span-2'>
                    <textarea value={applicationDetails?.coverLetter} onChange={e=>setApplicationDetails({...applicationDetails,coverLetter:e.target.value})} placeholder="Cover Letter" rows="4" className="w-full border rounded px-3 py-2 ">
                    </textarea></div>
                  {/* Resume  File Upload */}
                  <div className='col-span-2'>
                    <label htmlFor="">Resume</label>
                    <input key={fileKey} onChange={e=>setApplicationDetails({...applicationDetails,resume:e.target.files[0]})} type="file" id='' name='' className='w-full border rounded file:p-1 file:bg-gray-200 ' />
                  </div>
                </div>



                   {/* Buttons */}
                <div className="flex justify-end space-x-4 pt-4">
                  <button onClick={handleReset} type="reset" className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded">
                    Reset
                  </button>
                  <button onClick={handleSubmitApplication} type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}



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
    </>
  );
}

export default Careers;
