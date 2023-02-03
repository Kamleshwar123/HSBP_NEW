import React from 'react'
import SvgIcon from '../../../constant/SvgIcon'

const OderDetailStep = () => {
  return (
    <div className="py-20">
        <div className="w-11/12 lg:w-4/5 mx-auto">
            <div  className="bg-gray-e5e h-2 flex items-center justify-between text-xs text-black-685 w-full">
                <div className='flex flex-col items-start'>
                    <p className='text-[#0B6804] mb-2'>Booked</p>
                    <div className="bg-[#0B6804] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <SvgIcon.Stepcheck/>
                    </div>
                    <p className='mt-2'>20 Jan, 2023</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-[#0B6804] mb-2'>Confirmed</p>
                    <div className="bg-[#0B6804] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <SvgIcon.Stepcheck/>
                    </div>
                    <p className='mt-2'>21 Jan, 2023</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-[#0B6804] mb-2'>Shipped</p>
                    <div className="bg-[#0B6804] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <SvgIcon.Stepcheck/>
                    </div>
                    <p className='mt-2'>22 Jan, 2023</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='mb-2'>Out for Delivery</p>
                    <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                    <div className="h-3 w-3 bg-[#7B7B7B] rounded-full"></div>
                    </div>
                    <p className='mt-2'>23 Jan, 2023</p>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='mb-2'>Delivered</p>
                    <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                    <div className="h-3 w-3 bg-[#7B7B7B] rounded-full"></div>
                    </div>
                    <p className='mt-2'>24 Jan, 2023</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OderDetailStep