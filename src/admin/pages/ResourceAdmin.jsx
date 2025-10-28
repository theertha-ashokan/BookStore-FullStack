import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSideBar'
import { Link } from 'react-router-dom'
import { getAllUsersAPI, listAllBooksAPI, updateBookStatusAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'

function ResourceAdmin() {
  const [bookListStatus, setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  const [userBooks, setUserBooks] = useState([])
  const [updateBookStatus,setUpdateBookStatus] = useState({})
  // const [token,setToken] = useState("")

  console.log(allUsers);
  console.log(userBooks);



  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      if (bookListStatus == true) {
        getAllBooks(token)
      } else if (usersListStatus == true) {
        getAllUsers(token)
      } else {
        console.log("Something went wrong!!");

      }
    }
  }, [usersListStatus,updateBookStatus])



  const getAllUsers = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllUsersAPI(reqHeader)
      if (result.status == 200) {
        setAllUsers(result.data)
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }


  const getAllBooks = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await listAllBooksAPI(reqHeader)
      if (result.status == 200) {
        setUserBooks(result.data)
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);

    }
  }


  const approveBook = async (book)=>{
    const userToken = sessionStorage.getItem("token")
     const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    
  }
  try{
    const result = await updateBookStatusAPI(book,reqHeader)
    setUpdateBookStatus(result.data)
  }catch(err){
    console.log(err);
    
  }
}

  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div>
          <AdminSidebar />
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

          {
            bookListStatus &&
            <div className="col-span-3">
              <div className="md:grid grid-cols-4 gap-8 w-full my-10 px-6">
                {
                  userBooks?.length > 0 ?
                    userBooks?.map((book, index) => (
                      <div key={index} className="shadow p-3 rounded mx-4">
                        <img width={'100%'} height={'300px'} src={book?.imageUrl} alt="book" />
                        <div className="flex flex-col justify-center items-center">
                          <p className="text-blue-700 font-bold my-2">{book?.author.slice(0, 20)}</p>
                          <p className='mb-2'>{book?.title.slice(0, 20)}</p>
                          <p>{book?.discountPrice}</p>
                          {
                            book?.status=='pending' &&
                            <button onClick={()=>approveBook(book)} className='border bg-green-700 p-2 border-none text-white'>Approve</button>
                            }
                            {
                              book?.status=="approved" && 
                              <div className='flex justify-end w-full'>
                                <img width={'40px'} height={'40px'} src="https://static.vecteezy.com/system/resources/previews/023/893/562/original/check-tick-mark-on-wavy-edge-green-circle-sticker-star-burst-shape-tag-with-approved-icon-premium-official-account-verify-icon-stamp-illustration-isolated-on-white-background-vector.jpg" alt="approved tick icon" />
                              </div>
                            }
                        </div>
                      </div>
                    ))
                    :
                    <div className="text-center text-gray-600 col-span-3">No User Books Found</div>
                }
              </div>
            </div>
          }

          {usersListStatus &&
            <div className="md:grid  grid-cols-3 w-full justify-center ms-10 ">
              {/* diplicate */}
              {
                allUsers?.length > 0 ?
                  allUsers?.map((user, index) => (
                    <div key={index} className="shadow rounded p-3 m-2 w-80 bg-gray-200 ">
                      <p className=' text-red-600 font-bold text-md'>ID:{user?._id}</p>
                      <div className="flex items-center mt-3">
                        <img src={user?.profile ? `${SERVERURL}/uploads/${user.profile}` : "https://tse3.mm.bing.net/th/id/OIP.1waDZ8Q2eWBkenMscI08qAHaHa?pid=Api&P=0&h=180"} alt="book" className='w-40 ' style={{ borderRadius: '50%' }} />
                        <div className='flex flex-col ml-3 w-full'>
                          <p className='text-blue-700 font-bold'>{user?.username}</p>
                          <p >{user?.email}</p>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <div>No Users</div>
              }

            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ResourceAdmin