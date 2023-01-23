import React, { useState } from 'react'

const MyOrder = () => {
  const [tab, setTab] = useState(1);
  const handleTab = (val) => {
    setTab(val);
  }
  return (
    <div className='container my-3'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-3'>
          <div className='shadow-4D p-3 rounded-2xl'>
            <div className='font-medium'>CATEGORIES</div>
            <hr className='my-1 border-black-707 opacity-40'/>
            <div className='text-black-0f0 font-semibold py-1'>
              <div className='flex gap-2 py-1 mb-1 cursor-pointer' onClick={()=>handleTab(1)}><span></span><span className='text-theme'>Home Services</span></div>
              <div className='flex gap-2 py-1 mb-1 cursor-pointer' onClick={()=>handleTab(2)}><span></span><span>Salon Appointments</span></div>
              <div className='flex gap-2 py-1 cursor-pointer' onClick={()=>handleTab(3)}><span></span><span>Product Orders</span></div>
            </div>
          </div>
        </div>
        <div className='col-span-9'>
          {tab === 1 &&
            <div>
                {[...Array(3).keys()].map((item,idx)=> (
                <div className='shadow-4D p-4 mb-4 rounded-2xl' key={`orderbox${idx}`}>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-8'>
                      <div className='flex gap-2'>
                        <div></div>
                        <div>
                          <h6>Bridal Package</h6>
                          <p>Booking Date/Time</p>
                          <div><span></span><span>25 Jan, 2023 11:30 pm</span></div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-4'>
                        <div>
                          <div><span></span><span>25 Jan, 2023 11:30 pm</span></div>
                          <div>1500</div>
                          <div>Confirmed</div>
                        </div>
                    </div>
                  </div>
                </div>
                ))}
            </div>
          }
          {tab === 2 &&
          <div>
              {[...Array(3).keys()].map((item,idx)=> (
              <div className='shadow-4D p-4 mb-4 rounded-2xl' key={`orderbox${idx}`}>
                <div className='grid grid-cols-12'>
                  <div className='col-span-8'>
                    <div className='flex gap-2'>
                      <div></div>
                      <div>
                        <h6>HSBP Salon</h6>
                        <p>Appointment Date/Time</p>
                        <div><span></span><span>25 Jan, 2023 11:30 pm</span></div>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-4'>
                      <div>
                        <div><span></span><span>25 Jan, 2023 11:30 pm</span></div>
                        <div>1500</div>
                        <div>Confirmed</div>
                      </div>
                  </div>
                </div>
              </div>
              ))}
          </div>
          }
          {tab === 3 &&
          <div>
              {[...Array(3).keys()].map((item,idx)=> (
              <div className='shadow-4D p-4 mb-4 rounded-2xl' key={`orderbox${idx}`}>
                <div className='grid grid-cols-12'>
                  <div className='col-span-8'>
                    <div className='flex gap-2'>
                      <div></div>
                      <div>
                        <h6>King C. Gillette Men's Beard Oil with Plant Based Argan... </h6>
                        <h6>Vitamin C Hair Serum...…..</h6>
                        <p>Booking Date/Time</p>
                        <p>2 Items</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-4'>
                      <div>
                        <div><span></span><span>25 Jan, 2023 11:30 pm</span></div>
                        <div>1500</div>
                        <div>Arriving Today</div>
                      </div>
                  </div>
                </div>
              </div>
              ))}
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default MyOrder