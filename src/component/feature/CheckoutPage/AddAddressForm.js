import { useRouter } from 'next/router';
import React from 'react'

const AddAddressForm = () => {
    const router = useRouter();
  return (
    <div className='shadow-checkout rounded-2xl overflow-hidden mt-6'>
            <div className='theme-heading-box'>
              Fill The Details
            </div>
            <div className='p-5'>
              {/* <form> */}
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
                  </div>
                  <div className='text-center mt-6'>
                      <button className='custom_button'>Save Address</button>
                  </div>
              {/* </form> */}
            </div>
          </div>
  )
}

export default AddAddressForm