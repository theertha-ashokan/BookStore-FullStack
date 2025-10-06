import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { Link } from 'react-router-dom'
function ResourceAdmin() {
  const [bookListStatus,setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div>
          <AdminSidebar/>
        </div>
        <div className="col-span-4">
          <div className='py-10'>
            <h1 className='text-center text-3xl'>All Resources</h1>
          </div>
          {/* tabs  */}
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p onClick={() => { setBookListStatus(true); setUsersListStatus(false) }} className={bookListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Sell Books</p>
            <p onClick={() => { setUsersListStatus(true); setBookListStatus(false) }} className={usersListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>users</p>

          </div>
          {/* content */}

          { bookListStatus && <div className="md:grid  grid-cols-4 justify-center">
              {/* <div className="p-3 w-80 justify-center items-center"> */}
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
                
            </div>}

            { usersListStatus &&
        <div className="md:grid  grid-cols-3 w-full justify-center ms-10 ">
              <div className="shadow rounded p-3 mx-4 w-50 bg-gray-200 ">
                  <p className=' text-red-600 font-bold'>userId:gfjbf78900</p>
                <div className="grid grid-cols-2 justify-center items-center">
                   <img src="https://tse3.mm.bing.net/th/id/OIP.1waDZ8Q2eWBkenMscI08qAHaHa?pid=Api&P=0&h=180" alt="book" className='w-40 ' style={{borderRadius:'50%'}}/>
                 <div>
                    <p className='text-blue-700 font-bold'>username</p>
                    <p >email</p>
                 </div>
                 
                  
                </div>
        </div>
</div>
            }
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ResourceAdmin