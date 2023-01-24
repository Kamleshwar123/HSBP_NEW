import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import ReactDatePicker from 'react-datepicker';
import Services from '../../component/feature/services/Services';
import ICONS from '../../constant/icons';
import IMAGES from '../../constant/images';
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const SalonDetail = () => {
  const router = useRouter();
    const { salonId } = router.query;
  return (
    <div className='mt-3'>
      <div className='container '>
        <div className='rounded-2xl shadow-salon border border--black-707 p-5'>
          <div className='text-black grid md:grid-cols-12 gap-5 items-center'>
            <div className='md:col-span-7'>
              <h6 className='text-xl text-theme font-medium'>HSBP Salon</h6>
              <p>C-56/11, Sector 62, Near Staller IT Park, Noida  </p>
              <p>Tel. : +91 958 257 7510 / 9582-577-510, E-mail : hsbpncr@gmail.com</p>
              <div className='grid sm:grid-cols-2 md:grid-cols-4 text-center md:divide-x md:divide-black-707 items-center justify-center gap-5 mt-5 mb-2 text-black-241 font-semibold'>
                  <div>
                      <div><Image src={ICONS.Call} alt="beauty" className="scale_icon-24" /></div>
                      <div className='pt-2'><a href="tel: +91 9582-577-510">+91 9582-577-510</a></div>
                  </div>
                  <div>
                      <div><Image src={ICONS.Whatsapp} alt="beauty" className="scale_icon-24" /></div>
                      <div className='cursor-pointer pt-2'>Whatsapp</div>
                  </div>
                  <div>
                      <div><Image src={ICONS.Location} alt="Location" className="scale_icon-24" /></div>
                      <div className='cursor-pointer pt-2'>Location</div>
                  </div>
                  <div>
                      <div><Image src={ICONS.Review} alt="beauty" className="scale_icon-24" /></div>
                      <div className='cursor-pointer pt-2'>Reviews</div>
                  </div>
              </div>
            </div>
            <div className='md:col-span-5'>
              <div className='flex justify-center md:justify-end'>
              <Image src={IMAGES.SalonDetail} alt="Location" className="w-auto max-h-40 rounded-l-3xl" />
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
        <div className='rounded-2xl shadow-salon border border--black-707 p-5 mt-5'>
          <h5 className='text-[#605F5F] text-base mb-2 font-medium'>Book a Slot</h5>
          <div className='grid md:grid-cols-4 gap-6'>
              <div>
                  <ReactDatePicker 
                    placeholderText="Select Date" 
                    className='form-control datepickerCalender cursor-pointer salonsearchinput'
                    disabledKeyboardNavigation
                    dateFormat="YYYY/MM/DD"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    minDate={new Date()}
                  />
              </div>
            <div>
              <select className='form-control salonsearchinput'>
                <option>Select Time</option>
                <option>01:00 AM to 02:00 AM</option>
                <option>01:00 AM to 02:00 AM</option>
                <option>01:00 AM to 02:00 AM</option>
              </select>
            </div>
            <div>
            <button className='custom_button h-10 w-40' onClick={()=> router.push("/booknow")}>Checkout</button>
            </div>
          </div>
        </div>
        </div>
        <div className='mt-3'>
          <Services/>
        </div>
    </div>
  )
}

export default SalonDetail