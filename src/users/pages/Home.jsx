import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { getHomeBooksAPI } from '../../services/allAPI'




function Home() {
  const [homeBooks,setHomeBooks] = useState([])

useEffect(()=>{
getHomeBooks()
},[])

console.log(homeBooks);


const getHomeBooks = async ()=>{
  try{
    const result = await getHomeBooksAPI()
    if(result.status == 200){
      setHomeBooks(result.data)
    }
  }catch(err){
    console.log(err);
    
  }
}
  return (
    <div>
      <Header />
      {/* landing */}
      <div >
        <div style={{ height: "500px" }} className="flex h-screen flex-col justify-center items-center bg-[url(./homebg-img.jpg)] bg-cover bg-center text-white">
          <div style={{ height: "500px", backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold'>Wonderful Gifts</h1>
            <p>Give your family and friends a book</p>
            <div className='mt-9 relative'>
              <input type="text" className='bg-white text-gray-500 p-2 rounded-full w-100 focus:outline-0 ' placeholder='Search Books' />
              <button

                className="absolute right-3 top-1/2 -translate-y-1/2  text-blue-400"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* arrival */}
      <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>NEW ARRIVALS</h1>
        <h1 className='text-3xl'>EXPLORE OUR LATEST COLLECTIONS</h1>
        <div className="md:grid grid-cols-4 w-full mt-5">
          
            {
              homeBooks.length>0?
              homeBooks?.map((books,index)=>(
                <div className="shadow p-3 ms-3">
              <img width={"!00%"} height={"300px"} src={books.imageUrl
} alt="book" />
              <div className="flex flex-col justify-center items-center">
                <p className="text-blue-700 font-bold">{books.author}</p>
                <p className='text-center' >{books.title}</p>
                <p>{books.price}</p>
              </div>
            </div>
              ))
              :
              <p>Loading...</p>
            }
          
        </div>
        <div className='text-center my-5'>
          <Link to='/all-books' className='bg-blue-600 p-3 text-white'>Explore More...</Link>
        </div>
      </section>
      {/* Author */}
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
      {/* Testimonial */}
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
    </div>
  )
}

export default Home