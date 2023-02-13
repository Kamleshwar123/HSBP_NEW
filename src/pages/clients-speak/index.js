import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import ICONS from '../../constant/icons'
import IMAGES from '../../constant/images'
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

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
                  <Image src={IMAGES.ClientSpeakBg1} className="scale_img rounded-2xl" alt="ClientSpeakBg"/>
                    <div className='absolute flex flex-col justify-center top-0'>
                      <div className='flex justify-center w-full py-4'>
                        <div className='text-white text-center'>
                          <p className='opacity-75'>WHAT SAY</p>
                          <p className='text-lg my-1'>OUR CLIENTS</p>
                          <p className='opacity-75 text-2xl font-Alex-Brush'>About Us</p>
                        </div>
                      </div>
                      <div className='relative'>
                        <Image src={IMAGES.ClientSpeakDes} className="scale_img" alt="ClientSpeakBg"/>
                        <div className='absolute top-0 px-10'>
                          <div className='flex gap-3 justify-between items-end'>
                              <Image src={IMAGES.TestiImageProfile} className="w-24 h-28" alt="ClientSpeakBg"/>
                              <div className='mt-14'>
                                <h6 className='font-semibold'>Deepa Bajaj</h6>
                                <p className='text-xs'>Specialist Beautician</p>
                                <Ratings rating={4.5} size={"12px"}/>
                              </div>
                          </div>
                          <div className='mt-3 text-xs'>
                              <p className='line_clamp-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                            </div>
                        </div>
                      </div>
                    </div>
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