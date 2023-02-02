import Image from 'next/image'
import React from 'react'
import IMAGES from '../../constant/images'

const Testimonials = () => {
  return (
    <div className='container my-3'>
      <div className='text-center'>
        <Image src={IMAGES.TestiBanner} className="scale_img" alt="TestiBanner"/>
      </div>
      <div className={`text-center w-[85%] mx-auto font-meduim mt-7 mb-5`}>
        <h1 className="md:text-[42px] sm:text-3xl text-2xl">Testimonials</h1>
        <p className="text-base mt-3 text-black">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div className='flex flex-wrap justify-center items-stretch -m-3 py-5'>
          {[...Array(8).keys()].map((item, idx) => (
              <div className='p-3 w-full md:w-1/2 lg:w-1/3' key={"prd" + idx}>
                  <div className='testi-bg p-6 rounded-2xl'>
                    <div className='text-white text-center'>
                      <p className='text-opacity-75'>WHAT SAY</p>
                      <p className='text-lg'>OUR CLIENTS</p>
                      <p className='text-opacity-75 italic'>About Us</p>
                    </div>
                  </div>
              </div>
          ))
          }
      </div>
    </div>
  )
}

export default Testimonials