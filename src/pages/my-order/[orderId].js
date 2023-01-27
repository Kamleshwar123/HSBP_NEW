import Image from 'next/image'
import React from 'react'
import IMAGES from '../../constant/images'
import SvgIcon from '../../constant/SvgIcon'

const MyOrderDetails = () => {
  return (
    <div className='container mt-3'>
      <h3 className='text-2xl font-bold mb-2 text-black-2a3'>Order Details</h3>
      <div className='grid grid-cols-12 gap-6 text-black-2a3'>
        <div className='col-span-12 sm:col-span-5'>
          <p>Order Id : #HSBP021548485</p>
          <p>Order Place : 30/05/2022 10.19 am</p>
          <p>Items : 05</p>
          <p>Payment Mode : Online</p>
          <p>Total Amount : <span className='font-bold text-base'><span className='rupee-sym'>₹</span>1685.00</span></p>
        </div>
        <div className='col-span-12 sm:col-span-7 justify-self-end text-right'>
          <p className='text-lg font-bold'>Delivery Address :</p>
          <p className='text-lg font-bold'> Rakesh Singh</p>
          <p>RZ-95, Adarsh Nagar, Indirapuram,</p>
          <p>Ghaziabad - 201309</p> 
        </div>
        <div className='col-span-12 sm:col-span-5'>
          <p>Status : Processing Delivery</p>
          <p>Expected : 03/06/2022</p>
        </div>
        <div className='col-span-12 sm:col-span-7 justify-self-end text-right'>
          <div className='flex flex-wrap gap-2'>
            <button className='custom_button'>Continue Shopping</button>
            <button className='custom_button'>Order Cancel</button>
            <button className='custom_button flex items-center gap-1'><span><SvgIcon.Download className='w-4 h-auto'/></span> Invoice</button>
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