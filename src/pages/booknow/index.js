import Image from 'next/image'
import React from 'react'
import CheckoutBox from '../../component/feature/services/CheckoutBox'
import ICONS from '../../constant/icons'

const BookNow = () => {
  return (
    <div className='container my-3'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12 md:col-span-7'>
          <div className='shadow-[8px_5px_15px_#0000004D] p-5 rounded-2xl text-black-685'>
            <h6>LOGIN</h6>
            <p>+91-9599043601</p>
          </div>
          <div className='shadow-checkout rounded-2xl overflow-hidden mt-6'>
            <div className='theme-heading-box flex justify-between'>
              <p>Delivery Address</p>
              <p>Price (INR)</p>
            </div>
            <div className='p-5'>
              {[...Array(3).keys()].map((item, idx) => (
                <div key={idx+"add"}>
                  {idx !==0 &&<hr className='my-2'/>}
                  <div className='inline-flex space-x-5 text-black-685'>
                    <input type='radio' id={idx+"add"} name="address"/>
                    <label htmlFor={idx+"add"}>
                      <div className='inline-flex items-center'>
                        <div className='mr-3 text-black-0f0'>Manoj</div>
                        <div className='mr-3 text-sm'>home</div>
                        <Image src={ICONS.Call} alt="call" className='max-h-[16px] w-auto'/>
                        <div className='ml-1 text-black-0f0'>+9599043601</div>
                      </div>
                      <p className='text-xs pt-1'>RZ-95, Adarsh Nagar, Indirapuram,</p>
                      <p className='text-xs'>Ghaziabad - 201309</p>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='shadow-checkout rounded-2xl overflow-hidden mt-6'>
            <div className='theme-heading-box'>
              Fill The Details
            </div>
            <div className='p-5'>
              <form>
                <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" placeholder='First Name' />
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" placeholder='Last Name' />
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" placeholder='10 Digit Mobile No.' />
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">Email ID</label>
                        <input type="text" className="form-control" placeholder='Email ID' />
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">House No./ Building Name</label>
                        <input type="text" className="form-control" placeholder='House No./ Building Name' />
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">Street Name / Area / Colony</label>
                        <input type="text" className="form-control" placeholder='Street Name / Area / Colony' />
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">Select State</label>
                        <select className='form-control'>
                            <option>Select State</option>
                            <option>Punjab</option>
                            <option>Delhi</option>
                            <option>Rajasthan</option>
                        </select>
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">Select City</label>
                        <select className='form-control'>
                            <option>Select City</option>
                            <option>Agra</option>
                            <option>Delhi</option>
                            <option>Jaipur</option>
                        </select>
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">Nearby Location (Optional)</label>
                        <input type="text" className="form-control" placeholder='Nearby Location (Optional)' />
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">Pin Code</label>
                        <input type="text" className="form-control" placeholder='Pin Code' />
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">Check your payment mode</label>
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
                  <div className='text-center mt-6'>
                      <button className='custom_button'>Book Now</button>
                  </div>
              </form>
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