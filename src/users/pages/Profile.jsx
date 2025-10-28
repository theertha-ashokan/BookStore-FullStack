import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import { addBookAPI, getAllUserPurchasedBooksAPI, getAllUserUploadBooksAPI, removeUserUploadBookAPI } from '../../services/allAPI'
import Edit from '../components/Edit'
import SERVERURL from '../../services/serverURL'
import { userUpdateContext } from '../../cotextAPI/ContextShare'


function Profile() {
  const [sellbookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseBookStatus] = useState(false)
  const [token, setToken] = useState("")
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImages: []
  })
  // console.log(bookDetails);
  const [preview, setPreview] = useState("")
  const [previewList, setPreviewList] = useState([])
  const [userBooks,setUserBooks] =useState([])
  const [deleteBookStatus,setDeleteBookStatus] = useState(false)
  const [purchaseBook,setPurchaseBook] = useState([])
  const [userName, setUserName] = useState("")
  const [userDp, setUserDp] = useState("")
  const { userEditResponse} = useContext(userUpdateContext)
  // console.log(userBooks);


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem('token'))
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserName(user.username)
      setUserDp(user.profile)
    }
  }, [userEditResponse])


  useEffect(()=>{
     if(bookStatus == true){
      getAllUserBooks()
     }else if(purchaseStatus==true){
      getAllUserBoughtBooks()
     }
  },[bookStatus,deleteBookStatus,purchaseBook])


 const getAllUserBoughtBooks = async()=>{
  const reqHeader = {
     "Authorization":`Bearer ${token}`
  }
  try{
    const result = await  getAllUserPurchasedBooksAPI(reqHeader)
    if(result.status==200){
      setPurchaseBook(result.data)
    }else{
      console.log(result);
      
    }
  }catch(err){
    console.log(err);
    
  }
 }



  const removeBook = async (bookID)=>{
     const reqHeader ={
      "Authorization":`Bearer ${token}`
    }
    try{
      const result = await removeUserUploadBookAPI(bookID,reqHeader)
      if(result.status==200){
        toast.success(result.data)
        setDeleteBookStatus(true)
      }else{
        console.log(result);
        
      }
    }catch(err){
      console.log(err);
      
    }
  }


   const getAllUserBooks = async()=>{
    const reqHeader ={
      "Authorization":`Bearer ${token}`
    }
    try{
      const result = await getAllUserUploadBooksAPI(reqHeader)
      if(result.status==200){
        setUserBooks(result.data)
      }else{
        console.log(result);
      }
    }catch(err){
      console.log(err); 
    }
   }


  const handleUploadBookImage = (e) => {
    // console.log(e.target.files[0]);
    const fileArray = bookDetails.uploadImages
    fileArray.push(e.target.files[0])
    setBookDetails({ ...bookDetails, uploadImages: fileArray })
    const url = URL.createObjectURL(e.target.files[0])
    // console.log(url);
    setPreview(url)

    const bookImgArray = previewList
    bookImgArray.push(url)
    setPreviewList(bookImgArray)

  }

  const handleReset = () => {
    setBookDetails({
      title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImages: []
    })
    setPreview("")
    setPreviewList([])
  }

  const handleBookSubmit = async () => {
    const { title, author, noOfPages, imageUrl, price, discountPrice, abstract, publisher, language, isbn, category, uploadImages } = bookDetails
    if (!title || !author || !noOfPages || !imageUrl || !price || !discountPrice || !abstract || !publisher || !language || !isbn || !category || uploadImages.length == 0) {

      toast.info("Please fill the form !!!")

    } else {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()
      for (let key in bookDetails) {
        if (key != "uploadImages") {
          reqBody.append(key, bookDetails[key])
        } else {
          bookDetails.uploadImages.forEach(img => {
            reqBody.append("uploadImages", img)
          })
        }
      }

      try {

        const result = await addBookAPI(reqBody, reqHeader)
        console.log(result);
        if (result.status == 401) {
          toast.warning(result.response.data)
          handleReset()
        } else if (result.status == 200) {
          toast.success("Book Added SuccessFully")
          handleReset()
        } else {
          toast.error('Something went wrong')
          handleReset()
        }


      }
      catch (err) {
        console.log(err);

      }


    }
  }





  return (
    <div>
      <Header />
      <div className='bg-black' style={{ height: '200px' }}></div>
      <div className="bg-white p-3 " style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }}>
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={userDp==""? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : userDp.startsWith("https://lh3.googleusercontent.com/")?userDp:`${SERVERURL}/uploads/${userDp}`}alt="profile" />
      </div>
      <div className='md:flex justify-between px-30 mt-5'>
        <div className='flex justify-center items-center'>
          <h1 className='font-bold text-2xl'>{userName}</h1>
          <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400  ms-3' />
        </div>
        <Edit/>
      </div>
      
      <p className='md:px-20 px-5 my-5 text-justify'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto dolorum ipsum natus nobis beatae laborum et facilis id dicta? Obcaecati et doloremque rerum natus rem explicabo impedit soluta error sint.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum eos! Vero sit, provident ducimus molestiae possimus nulla quisquam rerum mollitia consequuntur odio, tenetur praesentium debitis dicta nihil labore facere.
      </p>
      <div className='md:px-40'>
        <div className="flex justify-center items-center my-5">
          <p onClick={() => { setSellBookStatus(true); setPurchaseBookStatus(false); setBookStatus(false) }} className={sellbookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r cursor-pointer' : 'p-4 border-gray-200 cursor-pointer border-b'}>Sell Books</p>
          <p onClick={() => { setSellBookStatus(false); setPurchaseBookStatus(false); setBookStatus(true) }} className={bookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r cursor-pointer' : 'p-4 border-gray-200 cursor-pointer border-b'}>Book Status</p>
          <p onClick={() => { setSellBookStatus(false); setPurchaseBookStatus(true); setBookStatus(false) }} className={purchaseStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r cursor-pointer' : 'p-4 border-gray-200 cursor-pointer border-b'}>Purchase History</p>
        </div>

{/* sell books status */}
        {
          sellbookStatus &&
          <div>
            <div className='p-10 my-20 mx-5 bg-gray-200'>
              <div className='text-center text-3xl font-medium'>Book Details</div>
              <div className='md:grid grid-cols-2 mt-10 w-full'>
                <div className='px-3'>
                  <div className='mb-3 px-3'>
                    <input
                      value={bookDetails.title}
                      onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })}
                      type="text"
                      placeholder="Title"
                      className="w-full p-2 border rounded placeholder-gray-600 text-black bg-white border-0"
                    />
                  </div>
                  <div className='mb-3 px-3'>
                    <input
                      value={bookDetails.author}
                      onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })}
                      type="text"
                      placeholder="Author"
                      className="w-full p-2 border rounded placeholder-gray-600 text-black bg-white border-0"
                    />
                  </div>
                  <div className='mb-3 px-3'>
                    <input
                      value={bookDetails.noOfPages}
                      onChange={e => setBookDetails({ ...bookDetails, noOfPages: e.target.value })}
                      type="text"
                      placeholder="No.of Pages"
                      className="w-full p-2 border rounded placeholder-gray-600 text-black bg-white border-0"
                    />
                  </div>
                  <div className='mb-3 px-3'>
                    <input
                      value={bookDetails.imageUrl}
                      onChange={e => setBookDetails({ ...bookDetails, imageUrl: e.target.value })}
                      type="text"
                      placeholder="Images Url"
                      className="w-full p-2 border rounded placeholder-gray-600 text-black bg-white border-0"
                    />
                  </div>
                  <div className='mb-3 px-3'>
                    <input
                      value={bookDetails.price}
                      onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })}
                      type="text"
                      placeholder="price"
                      className="w-full p-2 border rounded placeholder-gray-600 text-black bg-white border-0"
                    />
                  </div>
                  <div className='mb-3 px-3'>
                    <input
                      value={bookDetails.discountPrice}
                      onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })}
                      type="text"
                      placeholder="discout price "
                      className="w-full p-2 border rounded placeholder-gray-600 text-black bg-white border-0"
                    />
                  </div>
                  <div className='mb-3 px-3'>
                    <input
                      value={bookDetails.abstract}
                      onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })}
                      type="text"
                      placeholder="abstract"
                      className="w-full p-2 border rounded placeholder-gray-600 text-black bg-white border-0"
                    />
                  </div>
                  <div className='mb-3 px-3'>
                    <input
                      value={bookDetails.publisher}
                      onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })}
                      type="text"
                      placeholder="publisher"
                      className="w-full p-2 border rounded placeholder-gray-600 text-black bg-white border-0"
                    />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='mb-3 px-3'>
                    <input
                      value={bookDetails.language}
                      onChange={e => setBookDetails({ ...bookDetails, language: e.target.value })}
                      type="text"
                      placeholder="language"
                      className="w-full p-2 border rounded placeholder-gray-600 text-black bg-white border-0"
                    />
                  </div>
                  <div className='mb-3 px-3'>
                    <input
                      value={bookDetails.isbn}
                      onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })}
                      type="text"
                      placeholder="isbn"
                      className="w-full p-2 border rounded placeholder-gray-600 text-black bg-white border-0"
                    />
                  </div>
                  <div className='mb-3 px-3'>
                    <input
                      value={bookDetails.category}
                      onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })}
                      type="text"
                      placeholder="category"
                      className="w-full p-2 border rounded placeholder-gray-600 text-black bg-white border-0"
                    />
                  </div>

                  <div className='mb-3 flex justify-center items-center mt-10'>
                    <label htmlFor="BookImage">
                      <input onChange={e => handleUploadBookImage(e)} type="file" name="" id="BookImage" className='hidden' />
                      {
                        !preview ?
                          <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="" />
                          :
                          <img src={preview} alt="" />
                      }
                    </label>
                  </div>
                  {
                    preview && <div className=' flex justify-center items-center'>
                      {
                        previewList?.map(imageUrl => (
                          <img src={imageUrl} alt="books" width={'70px'} height={'70px'} className='mx-3' />
                        ))
                      }
                      {
                        previewList.length < 3 &&
                        <label htmlFor="BookImage">
                          <input onChange={e => handleUploadBookImage(e)} type="file" name="" id="BookImage" className='hidden' />
                          <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow ms-3 text-gray-500' />
                        </label>
                      }
                    </div>
                  }
                </div>
              </div>
              <div className='p-3  w-full md:flex justify-end  mt-5'>
                <button onClick={handleReset} className='py-2 px-3 rounded bg-gray-600 text-white'>Reset</button>
                <button onClick={handleBookSubmit} className='py-2 px-3 ms-2 rounded bg-gray-600 text-white'>Submit</button>
              </div>

            </div>
          </div>
        }

   {/* book status */}
       {
        bookStatus &&
        <div className='p-10 my-20 shadow rounded'>
            {/* duplicate div accordign to book  */}
           {  userBooks?.length>0 ? 
           userBooks?.map((item,index)=>(
             <div key={index} className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className="text-2xl">{item.title}</h1>
                  <h2 className="text-xl">{item.author}</h2>
                  <h3 className="text-lg text-blue-500">{item.price}</h3>
                  <p className="text-justify">{item.abstract}</p>
                  <div className="flex mt-3">

                    {item?.status=="pending" ?<img width={'150px'} height={'150px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending icon" />:item?.status=="approved"?
                    <img width={'100px'} height={'100px'} src="https://pngimg.com/uploads/approved/approved_PNG1.png" alt="approved icon" />:
                     <img width={'100px'} height={'100px'} src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="sold icon" />}

                  </div>
                </div>

                <div className="px-4 mt-4 md:mt-0">
                  <img  className="w-full" src={item.imageUrl} alt="book" />
                  <div className="mt-4 flex justify-end">
                    <button onClick={()=>{removeBook(item?._id)}} className="py-2 px-3 rounded bg-red-600 text-white ms-3 hover:bg-white hover:border hover:text-red-600 hover:border-red-600">Delete</button>
                  </div>
                </div>

              </div>
            </div>
           ))
           :
  <p>no user books</p>
            }
        </div>
      }

  {/* purchase book */}
      {/* purchase history*/}
      {
        purchaseStatus &&
        <div className='p-10 my-20 shadow rounded'>
            {/* duplicate div accordign to book  */}
            { purchaseBook?.length>0? 
              purchaseBook?.map((item,index)=>{
             <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className="text-2xl">{item.title}</h1>
                  <h2 className="text-xl">{item.author}</h2>
                  <h3 className="text-lg text-blue-500">{item.price}</h3>
                  <p className="text-justify">{item.abstract}</p>
                  <div className=" mt-3">
                    <img width={'150px'} height={'150px'} src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-sold-stamp-png.png" alt="sold icon" />
                  </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                  <img className="w-full" src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book" />
                  
                </div>
              </div>
            </div>
              })
            
            :
            <p>Books are not purchased yet</p>
            }


        </div>
      }
      
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

export default Profile