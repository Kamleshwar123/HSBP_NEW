import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import ICONS from '../../constant/icons'
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const Feedback = () => {
  return (
    <div className='container'>
        <div className='faq-bg text-white py-6 px-4 rounded-3xl text-center'>
            <h1 className='text-4xl pb-2'>Salon Feedback</h1>
            <p>If you need some information or wish to share your feedback or concern with us, kindly fill in the form.</p>
        </div>
        <div className='py-5'>
            <h1 className='text-theme font-semibold text-[30px] pb-2'>Share Your Experience</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sunt in culpa</p>
        </div>
        <div className='grid grid-cols-10 items-center gap-6 mt-5'>
          <div className='col-span-10 md:col-span-3'>
            <input type="text" className='form-control text-black-241 placeholder:text-black-241 rounded-none border-r-0 border-l-0 border-t-0' placeholder='Name'/>
          </div>
          <div className='col-span-10 md:col-span-4'>
            <input type="text" className='form-control text-black-241 placeholder:text-black-241 rounded-none border-r-0 border-l-0 border-t-0' placeholder='E-mail ID'/>
          </div>
          <div className='col-span-10 md:col-span-3'>
            <input type="text" className='form-control text-black-241 placeholder:text-black-241 rounded-none border-r-0 border-l-0 border-t-0' placeholder='Mobile No.'/>
          </div>
        </div>
        <div className='my-6'>
          <div className='shadow-feedback p-7 rounded-2xl text-black-2a3 mb-6'>
              <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                <div className='flex gap-3'>
                  <Image src={ICONS.ThumbColor} className="scale_img w-12" alt=""/>
                  <div>
                    <h6 className='text-theme text-base font-semibold mb-2'>Helpful</h6>
                    <p className='font-medium'>is our site helpful to you?</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='font-medium'>Ambience Rating</span>
                  <span><Ratings rating={4.5} size={"16px"}/></span>
                </div>
              </div>
          </div>
          <div className='shadow-feedback p-7 rounded-2xl text-black-2a3 mb-6'>
              <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                <div className='flex gap-3'>
                  <Image src={ICONS.ThumbColor} className="scale_img w-12" alt=""/>
                  <div>
                    <h6 className='text-theme text-base font-semibold mb-2'>Ease of Use</h6>
                    <p className='font-medium'>How easy is it to use?</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='font-medium'>Ambience Rating</span>
                  <span><Ratings rating={4.5} size={"16px"}/></span>
                </div>
              </div>
          </div>
          <div className='shadow-feedback p-7 rounded-2xl text-black-2a3 mb-6'>
              <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                <div className='flex gap-3'>
                  <Image src={ICONS.ThumbColor} className="scale_img w-12" alt=""/>
                  <div>
                    <h6 className='text-theme text-base font-semibold mb-2'>Experience</h6>
                    <p className='font-medium'>How is your overall experience on our website?</p>
                  </div>
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='font-medium'>Ambience Rating</span>
                  <span><Ratings rating={4.5} size={"16px"}/></span>
                </div>
              </div>
          </div>
          <div className='shadow-feedback p-7 rounded-2xl text-black-2a3 mb-6'>
              <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                <div className='flex gap-3'>
                  <Image src={ICONS.ThumbColor} className="scale_img w-12" alt=""/>
                  <div>
                    <h6 className='text-theme text-base font-semibold mb-2'>How would you rate the support you received ?</h6>
                    <div className='flex flex-wrap gap-5'>
                      <button className='custom_button flex gap-1 items-center'><span><Image src={ICONS.ThumbUp} className='scale_img w-6' alt="InsBook"/></span><span>Good, I'm Satisfied</span></button>
                      <button className='custom_button flex gap-1 items-center' style={{background:'#b9b9b9'}}><span><Image src={ICONS.ThumbDown} className='scale_img w-6' alt="InsBook"/></span><span>Bad, I'm Unsatisfied</span></button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div>
          <h3 className='text-2xl text-black-241 font-semibold mb-6'>Write Feedback</h3>
          <textarea type="text" rows={10} className="form-control p-6" placeholder='Type your comments here' />
          <div className='text-center mt-6'>
              <button className='custom_button'>SUBMIT</button>
          </div>
        </div>
    </div>
  )
}

export default Feedback