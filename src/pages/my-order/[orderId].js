import Image from 'next/image'
import React from 'react'
import IMAGES from '../../constant/images'
import SvgIcon from '../../constant/SvgIcon'

const MyOrderDetails = () => {
  return (
    <div className='container mt-3'>
      <div className='grid grid-cols-12 shadow-4D rounded-2xl p-5 text-black-0f0'>
        <div className='col-span-12 md:col-span-6'>
          <h3 className='text-lg font-bold mb-1 text-theme'>Order Details</h3>
          <p className='text-black-685 mb-1'>Order ID : <b className='text-black-0f0'>HSBP101010</b></p>
          <p className='text-black-685 mb-1'>Date : <b className='text-black-0f0'>25 Jan, 2023 11:30 pm</b></p>
          <p className='text-black-685 mb-1'>Payment Mode : <b className='text-black-0f0'>Online</b></p>
          <p className='text-black-685'>Total Amount : <span className='text-black-0f0 font-bold'><span className='rupee-sym'>₹</span>1500</span></p>
        </div>
        <div className='col-span-12 md:col-span-6'>
          <h3 className='text-lg font-bold mb-1 text-theme'>Address Details</h3>
          <p className='text-base font-bold mb-1'>Soniya Gupta</p>
          <p>RZ-95, Adarsh Nagar, Indirapuram</p>
          <p>Ghaziabad, (U.P.) - 201309</p>
          <p className='mt-1 font-semibold'>Phone Number</p>
          <p>9599043602, 9250452511</p>
        </div>
        <div className='col-span-12'>
          <div className='flex flex-wrap gap-2'>
            <button className='custom_button'>Cancel Order</button>
            <button className='custom_button'>Reorder</button>
            <button className='custom_button'>Rate Us</button>
            <button className='addcard_button flex items-center gap-1 px-3'><span><SvgIcon.Download className='w-4 h-auto'/></span><b className='font-semibold'>Download Invoice</b></button>
          </div>
        </div>
      </div>
      <div className='shadow-checkout rounded-2xl overflow-hidden mt-6'>
      <div className='grid grid-cols-12 items-center gap-6 px-5 py-4 theme-heading-box'>
            <div className='col-span-12 md:col-span-6'>
              <h6>My Orders</h6>
            </div>
            <div className='col-span-6 md:col-span-3 justify-self-end'>
            <h6>Price</h6>
            </div>
            <div className='col-span-6 md:col-span-3 justify-self-end'>
            <h6>Total</h6>
            </div>
          </div>
        <div className='divide-y divide-black-686'>
          {[...Array(4).keys()].map((item,idx)=> (
            <div className='grid grid-cols-12 items-center gap-6 px-5 py-4' key={"orderbox"+idx}>
              <div className='col-span-12 md:col-span-6'>
                <div className='flex gap-2'>
                  <div>
                  <Image src={IMAGES.Product} alt="Appointment" className="w-20 h-20" />
                  </div>
                  <div className='text-black-686 w-full md:w-2/3'>
                    <h6 className='mb-1'>King C. Gillette Men's Beard Oil with Plant Based Argan...</h6>
                    <p>Qty. 1</p>
                  </div>
                </div>
              </div>
              <div className='col-span-6 md:col-span-3 justify-self-end'>
                <div className='text-red-c21 text-xl'><span className='font-ruppes text-xl'>₹</span>377.00</div>
                <p className='text-red-8b2 text-base'><span className='font-ruppes text-base'>₹</span>500.00</p>
              </div>
              <div className='col-span-6 md:col-span-3 justify-self-end'>
                <div className='text-green-088 text-xl'><span className='font-ruppes text-xl'>₹</span>377.00</div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default MyOrderDetails