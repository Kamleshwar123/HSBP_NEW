import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import ICONS from '../../constant/icons'
import IMAGES from '../../constant/images'
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const InstitueDetail = () => {
  const [selectedDate,setSelectedDate]= useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    }
  return (
    <div className='container mt-3'>
      <div className='text-center'>
        <Image src={IMAGES.InstituteBanner} className='scale_img' alt="InstituteBanner"/>
      </div>
      <div className='rounded-2xl shadow-salon border border-opacity-50 border-black-707 p-5 mt-6'>
          <div className='text-black grid md:grid-cols-12 gap-5 items-center'>
            <div className='col-span-12 lg:col-span-4'>
              <h6 className='text-xl text-theme font-medium'>HSBP Salon</h6>
              <p>+91 958-257-7510</p>
              <p>E-mail : hsbpncr@gmail.com</p>
            </div>
            <div className='col-span-12 lg:col-span-8 lg:justify-self-end'>
              <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 text-center items-center gap-4 text-black-241 font-medium'>
                    <div>
                        <div><Image src={ICONS.InsCall} alt="InsCall" className="scale_icon-24" /></div>
                        <div className='pt-2'><a href="tel: +91 9582-577-510">+91 9582-577-510</a></div>
                    </div>
                    <div>
                        <div><Image src={ICONS.Inswhatsapp} alt="Whatsapp" className="scale_icon-24" /></div>
                        <div className='cursor-pointer pt-2'>Whatsapp</div>
                    </div>
                    <div>
                        <div><Image src={ICONS.InsNewLocation} alt="InsNewLocation" className="scale_icon-24" /></div>
                        <div className='cursor-pointer pt-2'>Location</div>
                    </div>
                    <div>
                        <div><Image src={ICONS.InsReview} alt="InsReview" className="scale_icon-24" /></div>
                        <div className='cursor-pointer pt-2'>Reviews</div>
                    </div>
                </div>
            </div>
          </div>
          <hr/>
          <div className='grid grid-cols-12 mt-5 mb-2 text-xs lg:divide-x lg:divide-black-707 gap-x-3 gap-y-4 items-end text-[#605F5F] font-medium'>
            <div className='col-span-12 lg:col-span-6 grid grid-cols-12 gap-x-3 gap-y-4 items-end'>
              <div className='col-span-12 md:col-span-6 items-end'>
                <span className='text-theme border border-theme px-3 py-1 rounded-lg'>4.5 / 5</span>
                <span className='ml-3'>482 Reviews</span>
              </div>
              <div className='col-span-12 md:col-span-6 items-end flex'>
                  <span className='mr-1'>Ambience Rating</span>
                <Ratings rating={4.5} size={"14px"}/>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-3 lg:text-center'>
              Working Monday to Sunday
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-3 lg:text-center'>
              Timings 8:00 am -9:00 pm
            </div>
          </div>
      </div>
      <div className='rounded-2xl shadow-salon border border-black-707 pr-5 py-3 mt-5 border-opacity-50'>
          <h5 className='text-[#605F5F] font-bold pl-5'>Select Date and Time</h5>
          <hr className='mt-2 my-3 border-black-707 opacity-30'></hr>
          <div className='grid md:grid-cols-4 gap-5 pl-5'>
              <div>
                  <ReactDatePicker 
                    placeholderText="Select Date" 
                    className='form-control cursor-pointer instituebookinput'
                    disabledKeyboardNavigation
                    dateFormat="MM/dd/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    minDate={new Date()}
                    selected={selectedDate}
                    onChange={handleDateChange}
                  />
              </div>
            <div>
              <input type="time" defaultValue="12:57" onChange={(e)=> console.log(e.target.value)} className="form-control cursor-pointer instituebookinput w-32"/>
            </div>
            <div>
            <button className='custom_button h-9 w-40' onClick={()=> router.push("/booknow")}>Checkout</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InstitueDetail