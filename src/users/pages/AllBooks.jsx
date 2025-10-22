import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { getAllBooksAPI } from '../../services/allAPI'

function AllBooks() {
  const [listStatus,setListstatus] = useState(false)
  const [token,setToken] = useState("")
  const [books,setBooks] = useState([])
  console.log(books);
  
  
  
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
     const userToken = sessionStorage.getItem("token")
     setToken(userToken)
     getAllBooks(userToken)
    }
  },[])

  const getAllBooks = async (userToken)=>{
    const reqHeader = {
      "Authorization" : `Bearer ${userToken}`
    }
    try{
      const result = await getAllBooksAPI(reqHeader)
      if(result.status == 200){
        setBooks(result.data)
      }else{
        console.log(result);
        toast.warning(result.response.data)
        
      }

    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <div>
      <Header/>
     
    {
      token?
      <>
       <div className="flex justify-center md:items-center flex-col my-5 p-3">
            <h1 className='text-3xl'>Collections</h1>
            <div className="flex">
              <input type="text" className="p-2 text-black rounded border border-gray-200 w-100 placeholder-gray-600" placeholder='Search by Title' />
              <button className='bg-blue-500 w-20'>Search</button>
            </div>
       </div>
       <div className="md:grid grid-cols-4 p-5 md:px-20 mb-10">
  
        <div className="col-span-1">
         <div className='flex justify-between '>  
            <h1 className='text-xl font-semibold'>Filter</h1>
            <button onClick={()=>setListstatus(!listStatus)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} /></button>
         </div>
          <div className={listStatus?'block':'md:block hidden'}>
            <div className='mt-3'>
              <input type="radio" id='Literature' name='filter'/>
              <label className='ms-3' htmlFor="Literature">Literature Fiction</label>
            </div>
            <div>
              <input type="radio" id='philosphy' name='filter'/>
              <label className='ms-3' htmlFor="Literature">Philosophy</label>
            </div>
            <div>
              <input type="radio" id='romanace' name='filter'/>
              <label className='ms-3' htmlFor="Literature">Romance</label>
            </div>
            <div>
              <input type="radio" id='mystery' name='filter'/>
              <label className='ms-3' htmlFor="Literature">Mystery/Thriller</label>
            </div>
            <div>
              <input type="radio" id='horror' name='filter'/>
              <label className='ms-3' htmlFor="Literature">Horror</label>
            </div>
            <div>
              <input type="radio" id='autobio' name='filter'/>
              <label className='ms-3' htmlFor="Literature">Auto/Biography</label>
            </div>
            <div>
              <input type="radio" id='self-help' name='filter'/>
              <label className='ms-3' htmlFor="Literature">Self-Help</label>
            </div>
            <div>
              <input type="radio" id='Politics' name='filter'/>
              <label className='ms-3' htmlFor="Literature">Politics</label>
            </div>
            
          </div>
        </div>
        <div className="col-span-3">
          <div className="md:grid grid-cols-4">
            {
              books.length>0 ?
              books?.map(book =>(
                <div key={book?._id} className="shadow rounded p-3 mx-4">
              <img  width={"100%"} height={"300px"} src={book?.imageUrl} alt="" />
              <div className='flex flex-col justify-center items-center'>
              <h1 className='text-center '>{book?.author.slice(0,20)}</h1>
              <h1 className=' text-center'>{book?.title.slice(0,20)}</h1>
              <Link to={`/books/${book?._id}/view`} className='bg-blue-500 rounded px-4 py-1'>View Book</Link>
              </div>
            </div>
              ))
              :
              <p>No Books</p>
            }
           
          </div>
        </div>
       </div>
    </>
    :
    <div className='my-10 flex justify-center items-center flex-col min-h-100vh'>

      <img src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" height={"200px"} width={"200px"} alt="lock" />
      <p className="font-semibold text-lg">Please <Link to={'/login'} className='text-blue-500'>Login</Link> to Explore More</p>
    </div>
    }
     
     
      <Footer/>
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

export default AllBooks