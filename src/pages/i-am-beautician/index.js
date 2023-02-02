import Image from 'next/image'
import React from 'react'
import IMAGES from '../../constant/images'

const IAmBeautician = () => {
  return (
    <div className='container my-3'>
      <div className='text-center'>
        <Image src={IMAGES.BeauticianBanner} className="scale_img" alt="BeauticianBanner"/>
      </div>
      <div className='shadow-[6px_5px_15px_#0000004D] rounded-xl overflow-hidden mt-6 p-6 sm:w-4/5 lg:w-2/3 mx-auto'>
        <div className='text-theme text-xl font-bold my-5 text-center'>
          Associate as a Beautician with HSBP
        </div>
        <div className='enqueryform'>
            <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" placeholder='Your Name' />
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" placeholder='10 Digital Mobile No.' />
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder='Enter Address' />
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">Alternate Mobile Number</label>
                    <input type="text" className="form-control" placeholder='10 Digital Mobile No.' />
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">Experience</label>
                    <select className='form-control'>
                        <option>Select Experience</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">State</label>
                    <select className='form-control'>
                        <option>Select State</option>
                        <option>Punjab</option>
                        <option>Delhi</option>
                        <option>Rajasthan</option>
                    </select>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">City</label>
                    <select className='form-control'>
                        <option>Select City</option>
                        <option>Agra</option>
                        <option>Delhi</option>
                        <option>Jaipur</option>
                    </select>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">Pin Code</label>
                    <input type="text" className="form-control" placeholder='Enter Pin Code' />
                </div>
            </div>
            <div className='text-center mt-6'>
                <button className='custom_button w-32'>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default IAmBeautician