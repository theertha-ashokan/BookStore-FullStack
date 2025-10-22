import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { getSingleBookAPI } from '../../services/allAPI'
import { ToastContainer,toast } from 'react-toastify'
import { useEffect } from 'react'
import SERVERURL from '../../services/serverURL'



function ViewBook() {
  const [modalStatus,setModalStatus] = useState(false)
  const {id} = useParams()
  const [book,setBook] = useState({})

  console.log(book);
  useEffect(()=>{
    viewBookDetails()
  },[])



  const viewBookDetails = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      try{
        const result = await getSingleBookAPI(id,reqHeader)
        if(result.status == 200){
          setBook(result.data)

        }else if(result.response.status == 401){
          toast.warning(result.response.data)
        }else{
          console.log(result);
          
        }

      }catch{
        console.log(err);
        
      }
    }
  }
  
  return (
    <div>
      <Header/>
      <div className='md:m-10 m-5'>ViewBook
        <div className="border p-5 shadow border-gray-200">
          <div className='md:grid grid-cols-4 gap-x-10'>
            <div className="col-span-1">
              <img className='w-full' src={book?.imageUrl} alt="book" />
            </div>
            <div className='col-span-3'>
                <div className='flex justify-between'>
                  <h1 className="text-xl font-bold r">{book?.title}</h1>
                  <button onClick={()=>setModalStatus(true)} className='text-gray-400'><FontAwesomeIcon icon={faEye}/></button>
                </div>
                <p className='my-3 text-blue-700'>{book?.author}</p>
                <div className='md:grid grid-cols-3 gap-5 my-10'>
                  <p className='font-bold'>Publisher:{book?.publisher}</p>
                  <p className='font-bold'>Language:{book?.language}</p>
                  <p className='font-bold'>No.og Pages:{book?.noOfPages}</p>
                  <p className='font-bold'>Seller Mail:{book?.userMail}</p>
                  <p className='font-bold'>Real Price:{book?.price}</p>
                  <p className='font-bold'>ISBN:{book?.isbn}</p>
                </div>
                <div className="md:my-10 my-4">
                  <p className='font-bold text-lg'>
                   {book?.abstract}
                  </p>
                </div>
                <div className='flex justify-end'>
                      <Link to={'/all-books'} className='bg-blue-900 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward} />Back</Link>
                      <button className='bg-green-900 text-white ms-5 p-2 rounded'>Buy {book?.discountPrice}</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      {
        modalStatus &&
        <div className='relative z-10 overflow-y-auto' onClick={()=>setModalStatus(false)}>
          <div className='bg-gray-500/75 fixed inset-0 transition-opacity'>
            <div className="flex justify-center items-center min-h-screen">
                <div className='bg-white rounded md:w-250 w-100 '>
                  <div className='bg-black text-white flex justify-between items-center rounded'>
                    <h3>Books Images</h3>
                    <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark}/>
                  </div>
                  <p className='text-blue-600 my-5 ml-5'>
                    <FontAwesomeIcon icon={faCamera} className='me-2'/>
                    Camera click of the book in the hand of seller
                  </p>
                  <div className='md:flex flex-wrap my-4 mx-1 '>
                      {/* duplicate images */}
                      {
                        book?.uploadImg?.length>0?
                          book?.uploadImg?.map(img=>(
                          <img src={`${SERVERURL}/uploads/${img}`}  alt="booka image" width={'250px'} height={'250px'} className='mx-1'/>
                          ))
                          :
                          <p>User uploaded book images are unavialble</p>
                      }
                      
                      
                  </div>
                </div>
            </div>
          </div>
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


export default ViewBook