import React from 'react'
import Header from "../components/Header"
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
faMagnifyingGlass


function Home() {
  return (
    <>
      <Header />
      {/* Landing section */}
      <div className='flex flex-col h-screen justify-center items-center bg-[url(/homebg-img.jpg)] bg-cover bg-center text-white'>
        <h1 className='text-5xl font-bold'>Wonderful Gifts</h1>
        <p>Give Your Family And Friends a Book</p>
        <div className="relative mt-9 w-100">
          <input
            type="text"
            placeholder="Search Books"
            className="text-center bg-white text-black rounded-full w-full py-1 pr-10 focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 cursor-pointer hover:text-red-500 cursor-pointer"
          />
        </div>
      </div>
      {/* Arrival section */}
      {/* Author section */}
      {/* Testimony section */}
      <Footer />
    </>
  )
}

export default Home