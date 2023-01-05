import Image from 'next/image'
import React from 'react'
import ICONS from '../../constant/icons'

const PaymentMode = () => {
  return (
    <div className='container mt-3'>
      <div className='shadow-form bg-white-f2 rounded-2xl overflow-hidden'>
          <div className='theme-heading-box'>
              <h6>More ways to pay</h6>
          </div>
          <div className='grid grid-cols-12 gap-6 p-5'>
            <div className='col-span-12 md:col-span-7'>
              <div>
              <div className='flex text-black-685 items-start gap-5'>
                <input type='radio' id='net' name="payment_Type" className='mt-1 accent_green'/>
                <label htmlFor='net'>
                <div className='text-black-2a3 font-medium pb-4'>Other UPI IDs/Net Banking</div>
                  <div className='inline-flex items-center space-x-4'>
                    <Image src={ICONS.Paytm} alt="Paytm" className='max-h-[24px] w-auto'/>
                    <Image src={ICONS.Gpay} alt="Gpay" className='max-h-[24px] w-auto'/>
                    <Image src={ICONS.Phonepay} alt="Phonepay" className='max-h-[24px] w-auto'/>
                    <Image src={ICONS.Paypal} alt="Paypal" className='max-h-[24px] w-auto'/>
                    <Image src={ICONS.Upi} alt="Upi" className='max-h-[24px] w-auto'/>
                  </div>
                </label>
              </div>
              <hr className='my-2'/>
              <div className='flex text-black-685 items-start gap-5'>
                <input type='radio' id='net' name="payment_Type" className='mt-1 accent_green'/>
                <label htmlFor='net'>
                <div className='text-black-2a3 font-medium'>Add Debit / Credit / ATM Card</div>
                <div className='text-black-2a3 pt-1 pb-1'>You can save your cards as per new RBI guidliness, <span className='cursor-pointer text-blue-274'>Learn more</span></div>
                  <div className='inline-flex items-center space-x-4'>
                    <Image src={ICONS.Debitcard} alt="Paytm" className='max-h-[36px] w-auto'/>
                    <Image src={ICONS.CreditCard} alt="Gpay" className='max-h-[36px] w-auto'/>
                  </div>
                </label>
              </div>
              <hr className='my-2'/>
              <div className='flex text-black-685 items-start gap-5'>
                <input type='radio' id='net' name="payment_Type" className='mt-1 accent_green'/>
                <label htmlFor='net'>
                <div className='text-black-2a3 font-medium'>Pay On Service</div>
                <div className='text-black-2a3 pt-1 pb-1'>To ensure social distancing, Pay on Service is not preferable</div>
                </label>
              </div>
            </div>
          </div>
            <div className='col-span-12 md:col-span-5'>
              <div className='shadow-66 bg-white bg-opacity-50 p-4 rounded-2xl'>
                <div>
                  <h6>Delivery Details :</h6>
                  <p>Rohini Sharma / 9599043601</p>
                  <p>abcd@gmail.com</p>
                  <p>RZ-95, Adarsh Nagar, Indirapuram,</p>
                  <p>Ghaziabad - 201309</p>
                </div>
                <button className='custom_button'>Edit</button>
                <div className='my-5 px-4 bg-white border border-black-707 text-black-7d7 rounded-xl text-xs'>
                  <h6 className='text-black-2a3 text-sm font-medium mt-2'>Payment Details</h6>
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
                  <button className='custom_button'>Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PaymentMode