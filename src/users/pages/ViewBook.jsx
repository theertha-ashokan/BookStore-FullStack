import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBackward, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faCamera } from '@fortawesome/free-regular-svg-icons'




function ViewBook() {
  const [modalStatus, setModalstatus] = useState(false)
  return (
    <>
      <Header />
      <div className='md:m-10 m-5 '>
        <div className="border p-5 shadow border-gray-200">

          <div className='md:grid grid-cols-4 gap-10'>
            <div className='col-span-1'>
              <img className='w-full' src="https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg" alt="book" />
            </div>
            <div className='col-span-3'>
              <div className='flex justify-between'>
                <h1 className='text-xl font bold'>Title</h1>
                <button onClick={() => setModalstatus(true)} className='text-gray-400'><FontAwesomeIcon icon={faEye} /></button>
              </div>
              <p className='my-3 text-blue-700'>-Author</p>
              <div className='md:grid grid-cols-3 gap-5 my-10'>
                <p className='font-bold'>publisher:demo</p>
                <p className='font-bold'>publisher:demo</p>
                <p className='font-bold'>publisher:demo</p>
                <p className='font-bold'>publisher:demo</p>
                <p className='font-bold'>publisher:demo</p>
                <p className='font-bold'>publisher:demo</p>
              </div>
              <div className='md:my-10 my-4'>
                <p className='font-bold text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perferendis ipsa consequuntur enim eum corrupti ducimus veniam esse, consectetur pariatur earum sapiente molestias voluptates odio et ipsam labore deserunt dolor? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, nemo? Saepe a, ipsum aperiam explicabo voluptas harum eaque ipsa fuga sint enim perferendis odio eveniet dolores in corporis ut rerum?</p>
                <div className='flex justify-end'>
                  <Link to={'/all-books'} className='bg-blue-900 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward} className='me-3' />Back</Link>
                  <button className='bg-green-900 text-white p-2 ms-5 rounded'>Buy $ 123</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* moadl */}
      {
        modalStatus &&
        <div className='relative z-10 ' onClick={() => setModalstatus(false)}>
          <div className="bg-gray-500/75 fixed inset-0 transition-opacity">
            <div className="flex justify-center items-center min-h-screen">
              <div style={{ height: '550px', width: '900px' }} className='bg-white'>
                <div className='bg-black text-white flex justify-between items-center p-3'>
                  <h3>Books Images</h3>
                  <FontAwesomeIcon onClick={() => setModalstatus(false)} icon={faXmark} />
                </div>

                <p className='text-blue-600 my-5 ml-5'>
                  <FontAwesomeIcon icon={faCamera} />
                  Camera Click of the  hands of seller
                </p>

                <div className="md:flex my-4 flex-wrap">
                  {/* duplicate images */}
                  <img width={'250px'} height={'250px'} className='mx-2 my-3' src="https://templates.mediamodifier.com/5db698f47c3dc9731647a4e9/fiction-novel-book-cover-template.jpg" alt="book images" />
                </div>

              </div>
            </div>
          </div>
        </div>
      }
      <Footer />

    </>
  )
}

export default ViewBook