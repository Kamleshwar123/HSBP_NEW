import { useRouter } from 'next/router';
import React from 'react'
import CheckoutBox from '../../component/feature/services/CheckoutBox'

const BookNow = () => {
    const router = useRouter();
  return (
    <div className='container bg-white-f2 my-3 rounded-2xl'>
        <h6 className='text-black-241 px-5 pt-5 text-base font-bold text-center mx-auto w-3/4'>Awesome, No Extra Doorstep Charges!</h6>
    <div className='grid grid-cols-12 gap-6 p-7'>
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
                      <input type="text" className="form-control" placeholder='Name' />
                  </div>
                  <div className='col-span-6'>
                      <label className="form-label">Mobile Number</label>
                      <input type="text" className="form-control" placeholder='10 Digit Mobile No.' />
                  </div>
                  <div className='col-span-6'>
                      <label className="form-label">Email ID</label>
                      <input type="text" className="form-control" placeholder='Email ID' />
                  </div>
                  <div className='col-span-6 md:col-span-3'>
                      <label className="form-label">Date</label>
                      <input type="date" className="form-control" placeholder='Date' />
                  </div>
                  <div className='col-span-6 md:col-span-3'>
                      <label className="form-label">Timing</label>
                      <input type="time" className="form-control" placeholder='Timing' />
                  </div>
                  <div className='col-span-6'>
                      <label className="form-label">Check your payment mode</label>
                      <div className='flex flex-wrap gap-3'>
                        <div className="form_check">
                            <input type="radio" id="online" name="payment"/>
                            <label htmlFor="online" className='whitespace-nowrap'>Online payment</label>
                        </div>
                        <div className="form_check">
                            <input type="radio" id="Cash" name="payment"/>
                            <label htmlFor="Cash" className='whitespace-nowrap'>Cash (Cash after service)</label>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='text-center mt-6'>
                    <button className='custom_button' onClick={()=> router.push("/booknow")}>Book Now</button>
                </div>
            {/* </form> */}
          </div>
        </div>
      </div>
      <div className='col-span-12 md:col-span-5'>
        <CheckoutBox/>
      </div>
    </div>
  </div>
  )
}

export default BookNow