import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSideBar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import AddJob from '../components/AddJob'
import { getAllApplicationAPI, getAllJobAPI, removeJobAPI } from '../../services/allAPI'
import { jobContext } from '../../cotextAPI/ContextShare'
import SERVERURL from '../../services/serverURL'


const CareerAdmin = () => {
    const {addJobResponse,setAddJobResponse} = useContext(jobContext)
    const [jobListStatus, setJobListStatus] = useState(true)
    const [listApplicationStatus, setListApplicationStatus] = useState(false)
    const [allJobs,setAllJobs] = useState([])
    const [searchKey,setSearchKey] = useState("")
    const [deleteJobResponse,setDeleteJobResponse] = useState({})
    const [application,setApplication] = useState([])

    console.log(application);
    

    useEffect(()=>{
      if(jobListStatus==true){
        getAllJobs()
      }else if(listApplicationStatus==true){
        getApplication()
      }
    },[searchKey,deleteJobResponse,addJobResponse,listApplicationStatus])

     
    const getApplication = async()=>{
         const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
    //   api call
    const result = await getAllApplicationAPI(reqHeader)
    if(result.status==200){
        setApplication(result.data)
    }else{
        console.log(result);  
    }
    }
}

 
    const getAllJobs = async ()=>{
      try{
          const result = await getAllJobAPI(searchKey)
          if(result.status==200)
            setAllJobs(result.data)
      }catch(err){
        console.log(err);
        
      }
    }

  // remove job
   const removeJob = async(id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      try{
        const result = await removeJobAPI(id,reqHeader)
        if(result.status==200){
          setDeleteJobResponse(result.data)
        }else{
          console.log(result);
          
        }
      }catch(err){
        console.log(err);
        
      }
    }
   }
      
    return (
        <>
            <AdminHeader />
            <div className="md:grid grid-cols-5 gap-2">
                {/* Admin Sidebar  */}
                <div className=" col-span-1 ">
                    <AdminSidebar />
                </div>

                <div className="col-span-4">
                    <div className='py-10'>
                        <h1 className='text-center text-3xl'>All Resources</h1>
                    </div>
                    {/* tabs  */}
                    <div className="flex justify-center items-center my-8 font-medium text-lg">
                        <p onClick={() => { setJobListStatus(true); setListApplicationStatus(false) }} className={jobListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Job Post</p>
                        <p onClick={() => { setListApplicationStatus(true); setJobListStatus(false) }} className={listApplicationStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>View Applicants</p>
                    </div>
                    
                    {/* contents  */}
                    {
                        jobListStatus &&
                        <div className="w-full p-6 ">
                            {/* Top Controls */}
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                                {/* Search Section */}
                                <div className="flex items-center w-full md:w-2/3 bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden">

                                    <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder=" Search by Job Title" className="flex-1 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                                    <button className="bg-green-600 hover:bg-green-700 transition text-white font-medium px-6 py-2">
                                        Search
                                    </button>
                                </div>

                                {/* Add Job Button */}
                                
                                    <div><AddJob/></div>
                               
                            </div>

                            {/* Job Card */}

                            {
                             allJobs?.length>0 ?
                             allJobs?.map(job=>(
                                   <div key={job?._id} className="bg-white shadow-lg hover:shadow-xl transition rounded-xl p-6 border border-gray-200">
                                <div className="flex justify-between items-center border-b pb-3 mb-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{job?.title}</h3>
                                    <button onClick={()=>removeJob(job?._id)} className="flex items-center gap-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition px-4 py-2 rounded-lg">
                                        <FontAwesomeIcon icon={faTrash} />
                                        Delete
                                    </button>
                                </div>

                                {/* Job Details */}
                                <div className="grid md:grid-cols-2 gap-y-2 text-sm text-gray-700">
                                    <p className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" />
                                        <span>{job?.location}</span>
                                    </p>
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
                                </div>

                                {/* Description */}
                                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                                    <span className="font-semibold text-gray-800">Description:</span>{job?.description}
                                </p>
                            </div>
                             ))
                             :
                             <p>no job openings</p>
                            }

                        </div>
                    }

                    {
                        listApplicationStatus &&

                        <div className="p-10 overflow-x-hidden">
                            <table className="w-full my-3 shadow">
                                <thead>
                                    <tr>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>SL No</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Email</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover</th>
                                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        application?.length>0?
                                        application?.map((item,index)=>(
                                            <tr key={item?._id}>
                                        <td className='text-center border border-gray-500 p-3'>{index+1}</td>
                                        <td className='text-center border border-gray-500 p-3'>{item?.jobTitle}</td>
                                        <td className='text-center border border-gray-500 p-3'>{item?.fullname}</td>
                                        <td className='text-center border border-gray-500 p-3'>{item?.qualification}</td>
                                        <td className='text-center border border-gray-500 p-3'>{item?.email}</td>
                                        <td className='text-center border border-gray-500 p-3'>{item?.phone}</td>
                                        <td className='text-center border border-gray-500 p-3'>{item?.coverLetter}</td>
                                        <td className='text-center border border-gray-500 p-3'><Link className='text-blue-600 underline' to={`${SERVERURL}/pdf/${item?.resume}`}target='_blank'>Resume</Link></td>
                                    </tr>
                                        ))

                                        :
                                        <tr><td>No applications are available</td></tr>
                                    }
                                </tbody>

                            </table>
                        </div>

                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CareerAdmin