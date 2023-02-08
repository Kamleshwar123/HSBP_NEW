import React from 'react'

const SelectcityPage = () => {
  return (
    <div className='container mt-3'>
      <div className='text-center'>
        <div>
        <a href="tel:+919911027026" className='custom_button py-3 inline-block'>CALL FOR APPOINTMENT: +91-9911-027-026</a>
        </div>
        <p className='py-5 text-base w-4/5 mx-auto'>Beautician and Parlour Near Locality in Noida for Home Services.</p>
      </div>
      <div>
        <span className='theme-heading-box rounded-t-2xl py-2'>Beauty Parlour Services</span>
        <div className='bg-[#F9F9F9] rounded-t-2xl p-5'>
          <div className='pb-3'>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5'></div>
              <h6 className='font-bold text-base text-theme'>Waxing - Body</h6>
            </div>
            <p className='text-xs text-black-2a3 mt-2'>To be relax do body wrap spa treatment and keeps cellulite away. HSBP help you de-stress, make your body free from cellulite completely. Do the waxing keep away dead skin cells and reducing cellulite. 
              <span className='font-semibold text-blue-274 ml-2'>Read more</span>
            </p>
          </div>
        </div>
      </div>
      <div className='bg-white-f2 py-4 px-6 rounded-2xl shadow-nearcity'>
        <ul className='grid grid-cols-12 gap-x-6'>
          {[...Array(15).fill().map((item,idx)=> (
            <li className='col-span-12 sm:col-span-6 md:col-span-4' key={"locationbox"+idx}>
              <p className='py-1 text-theme font-semibold'>Service At Home in Sector-58, Noida</p>
            </li>
          ))]}
        </ul>
      </div>
    </div>
  )
}

export default SelectcityPage