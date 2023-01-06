import React from 'react'

const Profile = () => {
  return (
    <div className='container bg-white-f2'>
            <h6 className='text-black-241 p-5 text-base font-bold'>My Profile</h6>
            <div className='p-5 md:px-12 py-5'>
                <div className='shadow-form bg-white rounded-2xl overflow-hidden'>
                    <div className='theme-heading-box'>
                        <h6>Contact Details</h6>
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
                                    <label className="form-label">Gender</label>
                                    <select className='form-control'>
                                        <option>-Select Gender-</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Date of birth</label>
                                    <input type="date" className="form-control" placeholder='dd-mm-yyyy' />
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Marriage Anniversary(For Promotional offers)</label>
                                    <input type="date" className="form-control" placeholder='dd-mm-yyyy' />
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" placeholder='Email Address' />
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

export default Profile