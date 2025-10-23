import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import { addBookAPI } from '../../services/allAPI'

function Profile() {
  const [sellbookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseBookStatus] = useState(false)
  const [token, setToken] = useState("")
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImages: []
  })
  console.log(bookDetails);
  const [preview, setPreview] = useState("")
  const [previewList, setPreviewList] = useState([])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem('token'))
    }
  }, [])
  console.log(token);


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
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png" alt="profile" />
      </div>
      <div className='md:flex justify-between px-30 mt-5'>
        <div className='flex justify-center items-center'>
          <h1 className='font-bold text-2xl'>Username</h1>
          <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400  ms-3' />
        </div>
        <div>Edit</div>
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
        {
          bookStatus &&
          <div className='p-10 my-20 shadow rounded'>
            <div className="p-5 rounded mt-4 bg-gray-300">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className='px-4'>
                  <h1 className="text-2xl">Book Title</h1>
                  <h2 className='text-2xl'> Author</h2>
                  <h3 className="text-lg text-blue-500">$ 300</h3>
                  <p className='text-justify'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, repellendus suscipit. Earum, consequuntur mollitia dolore porro in id, quas expedita suscipit sit quaerat, maxime iste ad obcaecati enim at iure.
                  </p>
                  <div className='flex'>
                    <img src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" width={"150px"} height={'150px'} alt="" />
                    <img src="https://pngimg.com/uploads/approved/approved_PNG13.png" width={"100px"} height={'100px'} alt="" />
                  </div>
                </div>
                <div className='px-4 mt-4 md:mt-0'>
                  <img className='w-full' src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="book" />
                  <button className='bg-red-700 text-white ms-5 px-3 py-1 mt-2 rounded'>Delete</button>
                </div>

              </div>
            </div>

          </div>
        }
        {
          purchaseStatus &&
          <div className='p-10 my-20 shadow rounded'>
            <div className="p-5 rounded mt-4 bg-gray-300">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className='px-4'>
                  <h1 className="text-2xl">Book Title</h1>
                  <h2 className='text-2xl'> Author</h2>
                  <h3 className="text-lg text-blue-500">$ 300</h3>
                  <p className='text-justify'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, repellendus suscipit. Earum, consequuntur mollitia dolore porro in id, quas expedita suscipit sit quaerat, maxime iste ad obcaecati enim at iure.
                  </p>
                  <div className='flex'>
                    <img src="http://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-2.png" width={"150px"} height={'150px'} alt="" />

                  </div>
                </div>
                <div className='px-4 mt-4 md:mt-0'>
                  <img className='w-full' src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="book" />
                </div>

              </div>
            </div>

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