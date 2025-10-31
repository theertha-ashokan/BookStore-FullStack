import React, { useState } from "react";

const AddJob = () => {
const [canvas,setCanvas] =  useState(false)
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
                type="text"
                placeholder="Job Title"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Job Type"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Salary"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Qualification"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Experience"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <textarea
                placeholder="Description"
                rows="3"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm resize-none focus:outline-none"
              ></textarea>
            </div>
    
            {/* Buttons */}
            <div className="flex justify-end gap-3 px-4 py-3 border-t border-gray-200">
              <button className="px-4 py-2 rounded-md bg-orange-500 text-white text-sm hover:brightness-95">
                Reset
              </button>
              <button className="px-4 py-2 rounded-md bg-green-600 text-white text-sm hover:brightness-95">
                Add
              </button>
            </div>
          </div>
        </div>
        }
   </div>
  );
};

export default AddJob;
