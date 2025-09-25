import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AllBooks = () => {
  const [listStatus, setListStatus] = useState(false)
  return (
    <>
      <Header />
      <div className='flex flex-col my-5 justify-center items-center '>
        <h1 className='text-4xl'>Collections</h1>
        <div className="flex my-5">
          <input type="text" className="p-2 rounded border text-black w-100 placeholder-gray-600" placeholder='Search by Title' />
          <button className='p-2 text-white bg-blue-700'>Search</button>
        </div>
      </div>

      {/* grid  */}
      <div className="md:grid grid-cols-4 md:px-20 p-5">
        {/* filter  */}
        <div className="col-span-1">
          <div className='flex justify-between'>
            <h1 className="text-xl font-semibold">Filter</h1>
            <button onClick={() => setListStatus(!listStatus)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} /></button>
          </div>

          <div className={listStatus?'block':'md:block hidden'}>
            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Philosophy</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Romance</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Mystery / Thriller</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Horror</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Auto / Biography</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Self Help</label>
            </div>

            <div className="mt-3">
              <input type="radio" name='filter' id='Literary' />
              <label className='ms-3' htmlFor="Literary">Politics</label>
            </div>
          </div>
        </div>

        {/* Books  */}
        <div className="col-span-3">
          <div className="md:grid grid-cols-4">

            <div className="shadow p-3 rounded mx-4">
              <img width={'100%'} height={'300px'} src="https://tse1.mm.bing.net/th/id/OIP.KBj3TEh7G1xt5q48hid2vQHaLg?pid=Api&P=0&h=180" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p>Book Title</p>
                <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
              </div>
            </div>

             <div className="shadow p-3 rounded mx-4">
              <img width={'100%'} height={'300px'} src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781684129058/charles-dickens-four-novels-9781684129058_hr.jpg" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p>Book Title</p>
                <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
              </div>
            </div>

            <div className="shadow p-3 rounded mx-4">
              <img width={'100%'} height={'300px'} src="https://www.ingramspark.com/hs-fs/hubfs/TheSumofAllThings_cover_June21_option4(1).jpg?width=1125&name=TheSumofAllThings_cover_June21_option4(1).jpg" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p>Book Title</p>
                <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
              </div>
            </div>

            <div className="shadow p-3 rounded mx-4">
              <img width={'100%'} height={'300px'} src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/501w/canva-brown-rusty-mystery-novel-book-cover-db-_00gXZSY.jpg" alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">Author</p>
                <p>Book Title</p>
                <Link to={'/books/:id/view'} className='border bg-blue-700 p-2 border-none text-white'>View Book</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AllBooks