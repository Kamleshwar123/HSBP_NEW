import React from 'react'

const DeliveryAddress = () => {
  return (
    <div className='container bg-white-f2'>
            <h6 className='text-black-241 p-5 text-base font-medium'>Add Delivery Address</h6>
            <div className='p-5 md:px-12 py-5'>
                <div className='shadow-form bg-white rounded-2xl overflow-hidden'>
                    <div className='theme-heading-box'>
                        <h6>Contact Details</h6>
                    </div>
                    <div className='p-5'>
                        <form>
                            <div className='grid grid-cols-6 gap-6'>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder='Name' />
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" placeholder='10 Digit Mobile No.' />
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
                                    <input type="text" className="form-control" placeholder='Nearby Location (Optional)' required/>
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Pin Code</label>
                                    <input type="text" className="form-control" placeholder='Pin Code' />
                                </div>
                            </div>
                            <div className='text-center mt-6'>
                                <button className='custom_button'>Save Address & Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DeliveryAddress