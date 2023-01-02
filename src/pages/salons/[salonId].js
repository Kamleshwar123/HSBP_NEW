import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import Services from '../../component/feature/services/Services';
import ICONS from '../../constant/icons';
import IMAGES from '../../constant/images';
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const SalonDetail = () => {
  /* const router = useRouter();
    const { salonId } = router.query; */
  return (
    <div className='container mt-3'>
        <div className='rounded-2xl shadow-salon border border--black-707 p-5'>
          <div className='text-black grid md:grid-cols-12 gap-5 items-center'>
            <div className='md:col-span-7'>
              <h6 className='text-xl text-theme font-medium'>HSBP Salon</h6>
              <p>C-56/11, Sector 62, Near Staller IT Park</p>
              <p>Noda Tel. : +91 958 257 7510 / 9582-577-510, E-mail : hsbpncr@gmail.com</p>
              <div className='grid sm:grid-cols-2 md:grid-cols-4 text-center items-center justify-center gap-5 mt-5 mb-2 text-black-241'>
                  <div>
                      <div><Image src={ICONS.Call} alt="beauty" className="scale_icon-18" /></div>
                      <div className='pt-2'><a href="tel: +91 9582-577-510">+91 9582-577-510</a></div>
                  </div>
                  <div>
                      <div><Image src={ICONS.Whatsapp} alt="beauty" className="scale_icon-18" /></div>
                      <div className='cursor-pointer pt-2'>Whatsapp</div>
                  </div>
                  <div>
                      <div><Image src={ICONS.Review} alt="beauty" className="scale_icon-18" /></div>
                      <div className='cursor-pointer pt-2'>Reviews</div>
                  </div>
                  <div>
                      <div><Image src={ICONS.Location} alt="Location" className="scale_icon-18" /></div>
                      <div className='cursor-pointer pt-2'>Reviews</div>
                  </div>
              </div>
            </div>
            <div className='md:col-span-5 text-center'>
              <Image src={IMAGES.SalonDetail} alt="Location" className="mx-auto w-auto max-h-40 rounded-l-3xl" />
            </div>
          </div>
          <hr/>
          <div className='flex flex-wrap items-center justify-between mt-5 mb-2 text-xs gap-5'>
                <div className='inline-flex space-x-2 items-center'>
                  <span className='text-theme border border-theme px-2 py-1 rounded-lg'>4.5 / 5</span>
                  <span className='ml-3 text-[#605F5F]'>482 Reviews</span>
                </div>
                <div className='inline-flex space-x-2 items-center'>
                    <span className='mr-1'>Ambience Rating</span>
                  <Ratings rating={4.5} size={"14px"}/>
                </div>
                <div className='inline-flex space-x-2 items-center'>
                  Working Monday to Sunday
                </div>
                <div className='inline-flex space-x-2 items-center'>
                  Timings 8:00 am -9:00 pm
                </div>
          </div>
        </div>
        <div className='rounded-2xl shadow-salon border border--black-707 p-5 mt-5'>
          <h5 className='text-[#605F5F] text-base mb-2'>Select Date and Time</h5>
          <div className='flex gap-5'>
            <div className="flex items-center justify-center">
              <div className="datepicker relative form-floating mb-3 xl:w-96">
                <input type="text"
                  className="form-control px-3 py-1.5"
                  placeholder="Select a date" />
              </div>
            </div>
            <div className="flex justify-center">
            <div className="timepicker relative form-floating mb-3 xl:w-96">
              <input type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Select a date" />
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