import Image from 'next/image'
import React from 'react'
import SlotBookForm from '../../component/feature/SlotBookForm'
import IMAGES from '../../constant/images'

const SlotBooking = () => {
  return (
    <div className='container my-3'>
        <div className='relative'>
            <Image src={IMAGES.SlotBookHeader} alt="slotbook" className='scale_img h-[150px]'/>
            <h5 className='text-white text-xl absolute top-0 left-10 p-3 md:p-7'>Fill The Form Details</h5>
        </div>
        <div className='grid grid-cols-12 items-center gap-6 px-6 -mt-16 z-10 relative'>
            <div className='col-span-12 md:col-span-6'>
                <div className='shadow-4D bg-white p-6 rounded-3xl'>
                    <SlotBookForm/>
                </div>
            </div>
            <div className='col-span-12 md:col-span-6'>
                <Image src={IMAGES.SlotBookSide} alt="slotbook" className='scale_img'/>
            </div>
        </div>
    </div>
  )
}

export default SlotBooking