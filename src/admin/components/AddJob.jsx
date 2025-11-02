import React, { useContext, useState } from "react";
import { ToastContainer,toast } from 'react-toastify'
import { addJobAPI } from "../../services/allAPI";
import { jobContext } from "../../cotextAPI/ContextShare";


const AddJob = () => {
const {addJobResponse,setAddJobResponse} = useContext(jobContext)
const [canvas,setCanvas] =  useState(false)
const [newJob,setNewJob] = useState({
  title:"",location:"",jobType:"",salary:"",qualification:"",experience:"",description:""
})


// reset
const handleReset = ()=>{
  setNewJob({
      title:"",location:"",jobType:"",salary:"",qualification:"",experience:"",description:""

  })
}

// add job
const HandleAddJob =async()=>{
  const token = sessionStorage.getItem("token")
  const {title,location,jobType,salary,qualification,experience,description} = newJob
  if(!title || !location || !jobType || !salary || !qualification || !experience || !description){
    toast.info("please fill the form completely")
  }else if(token){
    const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      // api call
      try{
         const result = await addJobAPI(newJob,reqHeader)
         if(result.status==200){
          // alert job add
          toast.success("Current job added successfully....")
          // reset data
          handleReset()
          // close modal
          setCanvas(false)
          // share data to context
          setAddJobResponse(result.data)

         }else if(result.status==409){
           toast.warning(result.response.data)
           handleReset()
         }else{
          toast.error("Somthing went wrong...")

         }
      }catch(err){
        console.log(err);
            toast.warning("Somthing went wrong...")

      }

  }else{
    toast.warning("Somthing went wrong...")
  }
}

  return (
   <div>
    <div className='flex justify-end'>
         <button onClick={()=>setCanvas(true)}  className='bg-green-600 text-white hover:text-green-400 hover:border-green-500 hover:bg-white border p-3'>Add Job</button>
      </div>
        {   canvas &&
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-[360px]">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 rounded-t-2xl bg-[#111827] text-white">
              <h3 className="text-lg font-semibold">Application form</h3>
              <button onClick={()=>setCanvas(false)} className="text-white text-xl leading-none hover:opacity-80">
                &times;
              </button>
            </div>
    
            {/* Form fields */}
            <div className="p-4 space-y-3">
              <input
              value={newJob.title}
              onChange={e=>setNewJob({...newJob,title:e.target.value})}
                type="text"
                placeholder="Job Title"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <input
               value={newJob.location}
              onChange={e=>setNewJob({...newJob,location:e.target.value})}
                type="text"
                placeholder="Location"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <input
               value={newJob.jobType}
              onChange={e=>setNewJob({...newJob,jobType:e.target.value})}
                type="text"
                placeholder="Job Type"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <input
               value={newJob.salary}
              onChange={e=>setNewJob({...newJob,salary:e.target.value})}
                type="text"
                placeholder="Salary"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <input
               value={newJob.qualification}
              onChange={e=>setNewJob({...newJob,qualification:e.target.value})}
                type="text"
                placeholder="Qualification"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <input
               value={newJob.experience}
              onChange={e=>setNewJob({...newJob,experience:e.target.value})}
                type="text"
                placeholder="Experience"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <textarea
               value={newJob.description}
              onChange={e=>setNewJob({...newJob,description:e.target.value})}
                placeholder="Description"
                rows="3"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm resize-none focus:outline-none"
              ></textarea>
            </div>
    
            {/* Buttons */}
            <div className="flex justify-end gap-3 px-4 py-3 border-t border-gray-200">
              <button onClick={handleReset} className="px-4 py-2 rounded-md bg-orange-500 text-white text-sm hover:brightness-95">
                Reset
              </button>
              <button onClick={HandleAddJob} className="px-4 py-2 rounded-md bg-green-600 text-white text-sm hover:brightness-95">
                Add
              </button>
            </div>
          </div>
        </div>
        }
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
  );
};

export default AddJob;
