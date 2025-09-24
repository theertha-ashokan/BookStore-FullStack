import React from 'react'
import Header from "../components/Header"
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <Header />
      {/* Landing section */}
      <div
        className="relative flex flex-col h-screen justify-center items-center text-white"
        style={{
          backgroundImage: "url('/homebg-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay layer just for opacity */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>

        {/* Content */}
        <h1 className="relative text-5xl font-bold drop-shadow-lg">Wonderful Gifts</h1>
        <p className="relative">Give Your Family And Friends a Book</p>

        <div className="relative mt-9 w-100">
          <input
            type="text"
            placeholder="Search Books"
            className="text-center bg-white text-black rounded-full w-full py-1 pr-10 focus:outline-none relative"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-red-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Arrival section */}
      <section className="md:px-40 p-5 flex flex-col justify-center items-center">
  <h1 className="text-2xl font-bold">NEW ARRIVAL</h1>
  <h1 className="text-3xl text-center">Explore Our Latest Collection</h1>

  {/* Responsive grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-5">
    <div className="p-3">
      <div className="shadow-lg rounded-lg p-3 hover:scale-105 transition-transform duration-300">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.UfjypUKjf_hbbjiUKSCqBQAAAA?pid=Api&P=0&h=180"
          alt="img"
          className="w-full h-64 object-cover rounded-md"
        />
        <div className="p-5 flex flex-col justify-center items-center mt-4">
          <p className="text-blue-700">Author</p>
          <p className="text-blue-700">Book Title</p>
          <p className="font-semibold">$400</p>
        </div>
      </div>
    </div>
  </div>


  {/* Button */}
  <div className="text-center py-5">
    <Link
      to="/all-books"
      className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold shadow-md transition-colors duration-300"
    >
      Explore More
    </Link>
  </div>
     </section>


      {/* Author section */}
       <section className="md:grid grid-cols-2 my-5 gap-6 md:px-40 p-5">
          <div className="text-center">
            <h1 className='text-lg font-medium'>FEATURED AUTHORS</h1>
            <h1 className='text-lg'>Captivates with every word</h1>
            <p className='text-justify my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolorum facilis, harum perferendis accusantium distinctio eligendi corporis possimus velit aut, illo dolor. Molestiae perspiciatis non delectus? Porro in assumenda ex.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolorum facilis, harum perferendis accusantium distinctio eligendi corporis possimus velit aut, illo dolor. Molestiae perspiciatis non delectus? Porro in assumenda ex.
            </p>
             <p className='text-justify my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolorum facilis, harum perferendis accusantium distinctio eligendi corporis possimus velit aut, illo dolor. Molestiae perspiciatis non delectus? Porro in assumenda ex.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolorum facilis, harum perferendis accusantium distinctio eligendi corporis possimus velit aut, illo dolor. Molestiae perspiciatis non delectus? Porro in assumenda ex.
             </p>
          </div>
          <div className='p-5'>
            <img className='w-90' height={"300px"} src="https://images.squarespace-cdn.com/content/v1/6091c3e4f5f6071721c43f77/8722ad5e-1398-445d-afdb-30c7bd402a59/DSC06581.jpg" alt="" />
          </div>
      </section>
      
      {/* Testimony section */}

<section className="md:px-40 p-5 flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl font-bold">TESTIMONIALS</h1>
        <h1 className="text-3xl">SEE WHAT OTHERS ARE SAYING</h1>

        <div className="my-5 flex flex-col items-center">
          <img
            width="120px"
            height="120px"
            className="rounded-full"
            src="https://static.wixstatic.com/media/7d5b6a_f378ea0e687c4fb895760a1e7212ecc5~mv2.jpg/v1/fill/w_1067,h_1067,al_c,q_85/author-professional-headshot-pose-reference-prop.jpg"
            alt="user"
          />
          <h4 className="mt-3 font-semibold">Treesa Joseph</h4>
          <p className=" mt-2 text-gray-600 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vitae asperiores quibusdam quam voluptates illum, natus provident incidunt accusamus saepe fugit repellendus ab, ipsum quae quo laborum eveniet nulla dolorum.
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vitae asperiores quibusdam quam voluptates illum, natus provident incidunt accusamus saepe fugit repellendus ab, ipsum quae quo laborum eveniet nulla dolorum.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vitae asperiores quibusdam quam voluptates illum, natus provident incidunt accusamus saepe fugit repellendus ab, ipsum quae quo laborum eveniet nulla dolorum.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home