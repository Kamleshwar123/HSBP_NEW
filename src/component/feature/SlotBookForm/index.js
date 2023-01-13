import React from 'react'

const SlotBookForm = () => {
  return (
    <div>
        <div className='grid grid-cols-6 gap-6'>
            <div className='col-span-12'>
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder='Name' />
            </div>
            <div className='col-span-12'>
                <label className="form-label">Mobile Number</label>
                <input type="text" className="form-control" placeholder='10 Digit Mobile No.' />
            </div>
            <div className='col-span-12'>
                <label className="form-label">Email ID</label>
                <input type="text" className="form-control" placeholder='Email ID' />
            </div>
            <div className='col-span-12 md:col-span-6'>
                <label className="form-label">Select State</label>
                <select className='form-control'>
                    <option>Select State</option>
                    <option>Punjab</option>
                    <option>Delhi</option>
                    <option>Rajasthan</option>
                </select>
            </div>
            <div className='col-span-12 md:col-span-6'>
                <label className="form-label">Select City</label>
                <select className='form-control'>
                    <option>Select City</option>
                    <option>Agra</option>
                    <option>Delhi</option>
                    <option>Jaipur</option>
                </select>
            </div>
            <div className='col-span-12 md:col-span-6'>
                <label className="form-label">Date</label>
                <input type="date" className="form-control" placeholder='Date'/>
            </div>
            <div className='col-span-12 md:col-span-6'>
                <label className="form-label">Timing</label>
                <input type="time" className="form-control" placeholder='Timing' />
            </div>
            <div className='col-span-12'>
                <label className="form-label">Write your own information</label>
                <textarea type="text" rows={8} className="form-control" placeholder='Enter your own information' />
            </div>
        </div>
        <div className='text-center mt-6'>
            <button className='custom_button'>Slot Book Now</button>
        </div>
    </div>
  )
}

export default SlotBookForm