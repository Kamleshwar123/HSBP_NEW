import React from 'react'
import ReactDatePicker from 'react-datepicker'

const Enqueryform = () => {
  return (
    <div className='shadow-checkout rounded-[30px] overflow-hidden mt-6'>
        <div className='theme-heading-box text-lg font-medium'>
            Enquiry Details
        </div>
        <div className='p-5 enqueryform'>
            <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" placeholder='Enter First Name' />
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" placeholder='Enter Email ID' />
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" placeholder='Enter Email ID.' />
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">Email ID</label>
                    <input type="text" className="form-control" placeholder='Enter Email ID' />
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
                    <label className="form-label">State</label>
                    <select className='form-control'>
                        <option>-Select State-</option>
                        <option>Punjab</option>
                        <option>Delhi</option>
                        <option>Rajasthan</option>
                    </select>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">City</label>
                    <select className='form-control'>
                        <option>-Select City-</option>
                        <option>Agra</option>
                        <option>Delhi</option>
                        <option>Jaipur</option>
                    </select>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">Date</label>
                    {/* <input type="date" className="form-control" placeholder='Date'/> */}
                    <div>
                        <ReactDatePicker
                            placeholderText="mm-dd-yyyy" 
                            className='form-control datepickerCalender cursor-pointer'
                            disabledKeyboardNavigation
                            dateFormat="MM/DD/YYYY"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            minDate={new Date()}
                        />
                    </div>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <label className="form-label">Timing</label>
                    <input type="time" className="form-control" placeholder='Timing' />
                </div>
                <div className='col-span-6'>
                    <label className="form-label">Write your own information</label>
                    <textarea type="text" rows={8} className="form-control" placeholder='Enter your own information' />
                </div>
            </div>
            <div className='text-center mt-6'>
                <button className='custom_button w-36 h-10'>Send Query</button>
            </div>
        </div>
    </div>
  )
}

export default Enqueryform