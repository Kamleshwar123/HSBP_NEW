import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import ICONS from '../../constant/icons';
import IMAGES from '../../constant/images';
import SvgIcon from '../../constant/SvgIcon';

const MyOrder = () => {
  const router = useRouter();
  const [tab, setTab] = useState(1);
  const handleTab = (val) => {
    setTab(val);
  }
  return (
    <div className='container my-3'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12 md:col-span-3'>
          <div className='shadow-4D p-3 rounded-2xl'>
            <div className='font-medium'>CATEGORIES</div>
            <hr className='my-1 text-black-707 border-t-2 text-opacity-60'/>
            <div className='text-black-0f0 font-semibold py-1'>
              <div className='flex gap-2 py-1 mb-3 mt-1 cursor-pointer' onClick={()=>handleTab(1)}>
                {tab === 1 ? <SvgIcon.OrderServiceActive className='scale-[0.65] mx-0'/> :<SvgIcon.OrderService className='scale-[0.65] mx-0'/>}
                <span className={`${tab === 1 ? "text-theme" : ""}`}>Home Services</span>
              </div>
              <div className='flex gap-2 py-1 mb-3 cursor-pointer' onClick={()=>handleTab(2)}>
                {tab === 2 ? <SvgIcon.SalonServiceActive className='scale-[0.65] mx-0'/> :<SvgIcon.SalonService className='scale-[0.65] mx-0'/>}
                <span className={`${tab === 2 ? "text-theme" : ""}`}>Salon Appointments</span>
              </div>
              <div className='flex gap-2 py-1 cursor-pointer' onClick={()=>handleTab(3)}>
                {tab === 3 ? <SvgIcon.ProductServiceActive className='scale-[0.65] mx-0'/> : <SvgIcon.ProductService className='scale-[0.65] mx-0'/>}
                <span className={`${tab === 3 ? "text-theme" : ""}`}>Product Orders</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-12 md:col-span-9'>
          {tab === 1 &&
            <div>
                {[...Array(3).keys()].map((item,idx)=> (
                <div className='shadow-4D p-4 mb-4 rounded-2xl cursor-pointer' key={`serorderbox${idx}`} onClick={()=> router.push("/service-order/1")}>
                  <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-12 md:col-span-8'>
                      <div className='flex gap-2 flex-wrap'>
                      <div><Image src={IMAGES.OrderBridal} className='scale_img max-w-[71px]' alt="OrderSalon"/></div>
                        <div>
                          <h6 className='font-semibold mb-1'>Bridal Package</h6>
                          <p className='mb-1'>Booking Date/Time</p>
                          <div className='flex items-center gap-1 text-black-0f0'><span><Image src={ICONS.BookCalender} className='h-[14px] w-auto' alt="BookCalender"/></span><span>25 Jan, 2023 11:30 pm</span></div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-12 md:col-span-4 justify-self-end text-right'>
                        <div>
                        <div className='flex items-center gap-1 text-xs mb-2 text-black-0f0'><span><Image src={ICONS.BookCalender} className='h-[10px] w-auto' alt="BookCalender"/></span><span>25 Jan, 2023 11:30 pm</span></div>
                          <div className='text-black-0f0 font-bold mb-1'><span className='rupee-sym'>₹</span>1500</div>
                          <div className='text-[#057847] text-xs font-semibold'>Confirmed</div>
                        </div>
                    </div>
                  </div>
                </div>
                ))}
            </div>
          }
          {tab === 2 &&
          <div>
              {[...Array(3).keys()].map((item,idx)=> (
              <div className='shadow-4D p-4 mb-4 rounded-2xl cursor-pointer' key={`sorderbox${idx}`} onClick={()=> router.push("/salon-order/1")}>
                <div className='grid grid-cols-12 gap-5'>
                  <div className='col-span-12 md:col-span-8'>
                    <div className='flex gap-2 flex-wrap'>
                      <div><Image src={IMAGES.OrderSalon} className='scale_img max-w-[71px]' alt="OrderSalon"/></div>
                      <div>
                        <h6 className='font-semibold mb-1 text-theme'>HSBP Salon</h6>
                        <p className='mb-1'>Appointment Date/Time</p>
                        <div className='flex items-center gap-1 text-black-0f0'><span><Image src={ICONS.BookCalender} className='h-[12px] w-auto' alt="BookCalender"/></span><span>25 Jan, 2023 11:30 pm</span></div>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-12 md:col-span-4 justify-self-end text-right'>
                    <div>
                      <div className='flex items-center gap-1 text-xs mb-2 text-black-0f0'><span><Image src={ICONS.BookCalender} className='h-[10px] w-auto' alt="BookCalender"/></span><span>25 Jan, 2023 11:30 pm</span></div>
                      <div className='text-black-0f0 font-bold mb-1'><span className='rupee-sym'>₹</span>1500</div>
                      <div className='text-[#057847] text-xs font-semibold'>Confirmed</div>
                    </div>
                  </div>
                </div>
              </div>
              ))}
          </div>
          }
          {tab === 3 &&
          <div>
              {[...Array(3).keys()].map((item,idx)=> (
              <div className='shadow-4D p-4 mb-4 rounded-2xl cursor-pointer' key={`porderbox${idx}`} onClick={()=> router.push("/product-order/1")}>
                <div className='grid grid-cols-12 gap-5'>
                  <div className='col-span-12 md:col-span-8'>
                    <div className='flex gap-2 flex-wrap'>
                    <div><Image src={IMAGES.OrderProduct} className='scale_img max-w-[71px] border border-border rounded-lg' alt="OrderProduct"/></div>
                      <div>
                        <h6 className='font-semibold mb-1'>King C. Gillette Men's Beard Oil with Plant Based Argan... </h6>
                        <h6 className='font-semibold mb-1'>Vitamin C Hair Serum...…..</h6>
                        <p className='text-black-0f0 text-xs'>2 Items</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-12 md:col-span-4 justify-self-end text-right'>
                    <div>
                      <div className='flex items-center gap-1 text-xs mb-2 text-black-0f0'><span><Image src={ICONS.BookCalender} className='h-[10px] w-auto' alt="BookCalender"/></span><span>25 Jan, 2023 11:30 pm</span></div>
                      <div className='text-black-0f0 font-bold mb-1'><span className='rupee-sym'>₹</span>1500</div>
                      <div className='text-[#057847] text-xs font-semibold'>Arriving Today</div>
                    </div>
                  </div>
                </div>
              </div>
              ))}
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default MyOrder