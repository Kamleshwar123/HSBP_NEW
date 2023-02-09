import React, { useState } from 'react'
import FaqQuestion from './FaqQuestion'

const ServiceFaq = () => {
    const [tab,setTab] = useState(0);
  return (
    <div className='bg-white p-6 lg:px-10 mt-5 shadow-4D rounded-3xl text-[#605F5F]'>
        <h6 className='text-theme text-xl font-semibold'>Frequently Asked Questions</h6>
        <p className='text-lg'>If you have any further questions you can contact us</p>
        <div className='grid md:grid-cols-2 items-stretch gap-y-6 mt-6'>
            <div className='py-5 z-10'>
                <div className='divide-y divide-black-707 border border-black-707 rounded-xl md:-mr-8 bg-white overflow-hidden'>
                    {[...Array(5).keys()].map((item,idx)=> (
                        <FaqQuestion text={`What should I do to prepare for waxing ${idx} ?`} active={tab === idx} key={"sfaq"+idx} onClick={()=> setTab(idx)}/>
                    ))}
                </div>
            </div>
            <div className='border border-theme p-5 pl-14 rounded-3xl bg-gray-eee bg-opacity-75'>
                <h6 className='text-black-241 text-base font-semibold mb-3'>{`What should I do to prepare for waxing ${tab} ?`}</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceFaq