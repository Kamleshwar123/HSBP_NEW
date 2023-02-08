import React, { useState } from 'react'
import SvgIcon from '../../../constant/SvgIcon'
import RateUsModal from './RateUsModal';

const OrderDetail = ({orderStatus}) => {
  const [rateUsOpen, setReateUsOpen] = useState(false);
  return (
    <div className='grid grid-cols-12 shadow-4D rounded-2xl p-5 text-black-0f0 gap-x-6 gap-y-4'>
        <div className='col-span-12 md:col-span-6'>
          <h3 className='text-lg font-bold mb-1 text-theme'>Order Details</h3>
          <p className='text-black-685 mb-1'>Order ID : <b className='text-black-0f0'>HSBP101010</b></p>
          <p className='text-black-685 mb-1'>Date : <b className='text-black-0f0'>25 Jan, 2023 11:30 pm</b></p>
          <p className='text-black-685 mb-1'>Payment Mode : <b className='text-black-0f0'>Online</b></p>
          <p className='text-black-685'>Total Amount : <span className='text-black-0f0 font-bold'><span className='rupee-sym'>₹</span>1500</span></p>
        </div>
        <div className='col-span-12 md:col-span-6 md:justify-self-end'>
          <h3 className='text-lg font-bold mb-1 text-theme'>Address Details</h3>
          <p className='text-base font-bold mb-1'>Soniya Gupta</p>
          <p>RZ-95, Adarsh Nagar, Indirapuram</p>
          <p>Ghaziabad, (U.P.) - 201309</p>
          <p className='mt-1 font-semibold'>Phone Number</p>
          <p>9599043602, 9250452511</p>
        </div>
        <div className='col-span-12'>
          <div className='flex flex-wrap gap-2'>
            {orderStatus < 5 && <button className='custom_button h-10'>Cancel Order</button>}
            {orderStatus === 5 && <button className='custom_button h-10 w-32'>Reorder</button>}
            {orderStatus === 5 &&<button className='custom_button h-10 w-32' onClick={()=> setReateUsOpen(true)}>Rate Us</button>}
            {orderStatus === 5 &&<button className='addcard_button h-10 flex items-center gap-1 px-3'><span><SvgIcon.Download className='w-4 h-auto'/></span><b className='font-semibold'>Download Invoice</b></button>}
          </div>
        </div>
        {rateUsOpen && <RateUsModal isOpen={rateUsOpen} closeModal={()=> setReateUsOpen(false)}/>}
      </div>
  )
}

export default OrderDetail