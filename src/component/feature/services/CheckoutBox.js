import React, { useState } from 'react'

const CheckoutBox = () => {
  const [num, setNum]= useState(1);
    const inc = (e) => {
        num < 5 ? setNum(num + 1) : e.preventDefault();
    }
    const dec = (e) => {
        num > 0 ? setNum(num - 1) : e.preventDefault();
    }
    const addToCart = () => {
        setNum(1);
    }
  return (
    <div className='shadow-checkout rounded-2xl overflow-hidden'>
        <div className='theme-heading-box flex justify-between'>
        <p>Service / Package</p>
        <p>Price (INR)</p>
        </div>
        <div className='px-5 py-3 text-black-2a3 bg-gray-eee'>
          <div className=''>
            <h6 className='font-medium text-black-241'>Hair Spa</h6>
            <div className='flex gap-5 flex-row sm:flex-column justify-between items-center pt-1'>
                <p className='pb-1 text-xs text-black-2e2'>Treatment that helps repair damage and unwanted frizz...…...</p>
                <div>
                {num > 0 ?
                <div className='flex rounded-2xl border border-1'>
                    <span className='px-3 py-1 cursor-pointer' onClick={dec}>-</span>
                    <span className='px-3 py-1 bg-theme text-white'>{num}</span>
                    <span className='px-3 py-1 cursor-pointer' onClick={inc}>+</span>
                </div>
                :
                <button className='addcard_button' onClick={addToCart}>Add to Cart</button>
                }
                </div>
            </div>
            <div className='mt-1'>
                <div><span className='text-black-0f0'>&#x20B9;1500</span><span className='text-black-a8a ml-3 line-through'>&#x20B9;2000</span><span className='text-red-c80 ml-3'>50% OFF</span></div>
            </div>
          </div>
          <hr className='my-3'/>
          <div className='flex flex-wrap gap-3 sm:justify-between justify-center items-center'>
            <div className="form_check">
                <input type="checkbox" id="cpoupen" />
                <label htmlFor="cpoupen" className='whitespace-nowrap text-theme text-xs'>
                  Have a Discount Coupon?
                </label>
            </div>
            <div>
              <label className='text-xs'>Coupon Code</label>
              <input type="text" className='form-control h-6 border border-dashed'/>
              <button className='custom_button my-2 w-full'>Apply</button>
            </div>
          </div>
          <div className='my-3 px-4 bg-white border border-black-707 text-black-7d7 rounded-xl text-xs'>
            <div className='my-2 grid grid-cols-[70%_30%]'>
              <span>Subtotal</span>
              <span>&#x20B9;1500</span>
            </div>
            <div className='my-2 grid grid-cols-[70%_30%]'>
              <span>Product Discount</span>
              <span>&#x20B9;200</span>
            </div>
            <div className='my-2 grid grid-cols-[70%_30%]'>
              <span>Other Charges</span>
              <span>&#x20B9;0</span>
            </div>
            <hr className='my-2 border-theme'/>
            <div className='my-1 grid grid-cols-[70%_30%]'>
              <span>Total</span>
              <span className='text-theme'>&#x20B9;1500</span>
            </div>
          </div>
          <div className='text-center'>
            <button className='custom_button my-2'>Checkout</button>
          </div>
        </div>
    </div>
  )
}

export default CheckoutBox