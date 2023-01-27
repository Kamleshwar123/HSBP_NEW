import { useRouter } from 'next/router';
import React, { useState } from 'react'
import CheckoutBox from '../../component/feature/services/CheckoutBox'

const BookNow = () => {
    const router = useRouter();
    const [paymentType, setPaymentType] = useState(1);
  return (
    <div className='container'>
        <div className='bg-white-f2 my-3 rounded-2xl bg-opacity-80'>
        <h6 className='text-black-241 px-5 pt-5 text-base md:text-xl font-bold text-center mx-auto w-3/4'>Awesome, No Extra Doorstep Charges!</h6>
        <div className='grid grid-cols-12 gap-6 py-3 px-3 md:p-7'>
          <div className='col-span-12 md:col-span-7'>
            <div className='shadow-checkout rounded-2xl overflow-hidden'>
              <div className='theme-heading-box'>
                Fill The Details
              </div>
              <div className='p-5'>
                {/* <form> */}
                  <div className='grid grid-cols-6 gap-6'>
                      <div className='col-span-6'>
                          <label className="form-label">Name</label>
                          <input type="text" className="form-control" placeholder='Enter Name' />
                      </div>
                      <div className='col-span-6'>
                          <label className="form-label">Mobile Number</label>
                          <input type="text" className="form-control" placeholder='10 Digit Mobile No.' />
                      </div>
                      <div className='col-span-6'>
                          <label className="form-label">Email Address</label>
                          <input type="text" className="form-control" placeholder='Enter Email Address' />
                      </div>
                      <div className='col-span-6 md:col-span-3'>
                          <label className="form-label">Date</label>
                          <input type="date" className="form-control" placeholder='Date' />
                      </div>
                      <div className='col-span-6 md:col-span-3'>
                          <label className="form-label">Timing</label>
                          <input type="time" className="form-control" placeholder='Timing' />
                      </div>
                    </div>
                {/* </form> */}
              </div>
            </div>
            <div className='pt-6 pb-0'>
                <div>
                  <label className="form-label">Check your payment mode</label>
                  <div>
                    <div className="form_check">
                        <input type="radio" id="online" name="payment" checked={paymentType === 1} value={1} onChange={()=> setPaymentType(1)}/>
                        <label htmlFor="online" className='whitespace-nowrap'>Online payment</label>
                    </div>
                    <div className="form_check">
                        <input type="radio" id="Cash" name="payment" checked={paymentType === 2} value={2} onChange={()=> setPaymentType(2)}/>
                        <label htmlFor="Cash" className='whitespace-nowrap'>Cash (Cash after service)</label>
                    </div>
                  </div>
                </div>
                <div className='text-center mt-3'>
                    <button className='custom_button w-36' onClick={()=> router.push(paymentType === 1 ? "/payment-mode" :"/booknow")}>{paymentType === 1 ? "Pay Now" :"Book Now"}</button>
                </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-5'>
            <CheckoutBox/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookNow