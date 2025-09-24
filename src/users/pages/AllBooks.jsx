import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

function AllBooks() {
  return (
    <div>
      <Header/>
     <>
     <div className="flex justify-center items-center flex-col my-5">
          <h1 className='text-3xl'>Collections</h1>
          <div className="flex">
            <input type="text" className="p-2 text-black rounded border border-gray-200 w-100 placeholder-gray-600" placeholder='Search by Title' />
            <button className='bg-blue-500 w-20'>Search</button>
          </div>
     </div>
     <div className="grid grid-cols-3 p-5 md:px-40">
      <div className="col-span-1">
        <h1 className='text-xl font-semibold'>Filter</h1>
        <div>
          <input type="radio" id='Literature' name='filter'/>
          <label className='ms-3' htmlFor="Literature">Literature Fiction</label>
        </div>
        <div>
          <input type="radio" id='Literature' name='filter'/>
          <label className='ms-3' htmlFor="Literature">Literature Fiction</label>
        </div>
        <div>
          <input type="radio" id='Literature' name='filter'/>
          <label className='ms-3' htmlFor="Literature">Literature Fiction</label>
        </div>
        <div>
          <input type="radio" id='Literature' name='filter'/>
          <label className='ms-3' htmlFor="Literature">Literature Fiction</label>
        </div>
        <div>
          <input type="radio" id='Literature' name='filter'/>
          <label className='ms-3' htmlFor="Literature">Literature Fiction</label>
        </div>
        <div>
          <input type="radio" id='Literature' name='filter'/>
          <label className='ms-3' htmlFor="Literature">Literature Fiction</label>
        </div>
        <div>
          <input type="radio" id='Literature' name='filter'/>
          <label className='ms-3' htmlFor="Literature">Literature Fiction</label>
        </div>
        <div>
          <input type="radio" id='Literature' name='filter'/>
          <label className='ms-3' htmlFor="Literature">Literature Fiction</label>
        </div>
        <div>
          <input type="radio" id='Literature' name='filter'/>
          <label className='ms-3' htmlFor="Literature">Literature Fiction</label>
        </div>
      </div>
     </div>
     </>
      <Footer/>
      </div>
  )
}

export default AllBooks