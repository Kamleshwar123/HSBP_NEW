import Image from 'next/image'
import React from 'react'
import IMAGES from '../../constant/images'

const ClientsSpeak = () => {
  return (
    <div className='my-3'>
      <div className='text-center'>
        <Image src={IMAGES.TestiBanner} className="scale_img" alt="TestiBanner"/>
      </div>
      <div className='container'>
        <div className={`text-center w-[85%] mx-auto font-medium mt-7 mb-5`}>
          <h1 className="md:text-[42px] sm:text-3xl text-2xl">Testimonials</h1>
          <p className="text-base mt-3 text-black">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className='flex flex-wrap justify-center items-stretch -m-3 py-5'>
            {[...Array(8).keys()].map((item, idx) => (
                <div className='p-3 w-full md:w-1/2 lg:w-1/3' key={"prd" + idx}>
                  <div className='relative'>
                    <Image src={IMAGES.ClientSpeakBg} className="scale_img rounded-2xl" alt="ClientSpeakBg"/>
                    <div className='rounded-2xl absolute flex justify-center top-5 w-full'>
                      <div className='text-white text-center'>
                        <p className='opacity-75'>WHAT SAY</p>
                        <p className='text-xl my-2'>OUR CLIENTS</p>
                        <p className='opacity-75 text-2xl font-Alex-Brush'>About Us</p>
                      </div>
                    </div>
                    <Image src={IMAGES.TestiImageProfile} className="w-24 h-24 absolute top-[32%] left-[15%]" alt="ClientSpeakBg"/>
                  </div>
                </div>
            ))
            }
        </div>
      </div>
    </div>
  )
}

export default ClientsSpeak