import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye ,faBackward} from '@fortawesome/free-solid-svg-icons'



function ViewBook() {
  return (
    <>
    <Header/>
    <div className='md:m-10 m-5 '>
      <div className="border p-5 shadow border-gray-200">

        <div className='md:grid grid-cols-4 gap-10'>
          <div className='col-span-1'>
            <img className='w-full' src="https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg" alt="book" />
             </div>
            <div className='col-span-3'>
               <div className='flex justify-between'>
                <h1 className='text-xl font bold'>Title</h1>
                <button className='text-gray-400'><FontAwesomeIcon icon={faEye}/></button>
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
                    <button className='bg-blue-900 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward}className='me-3' />Back</button>
                     <button className='bg-green-900 text-white p-2 ms-5 rounded'>Buy $ 123</button>
                  </div>
                </div>
            </div>
          </div>

      </div>
    </div>
    <Footer/>

    </>
  )
}

export default ViewBook