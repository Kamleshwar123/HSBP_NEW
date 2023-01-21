import React from 'react'
import CareBox from '../../component/feature/services/CareBox'
import CheckoutBox from '../../component/feature/services/CheckoutBox'

const Cart = () => {
  return (
    <div className='container my-3'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12 md:col-span-7'>
          <div className='shadow-66 rounded-2xl overflow-hidden'>
            <div className='theme-heading-box'>Hair Care</div>
            <div className='text-black-2a3 divide-y divided-black-body px-5'>
              {[...Array(3).keys()].map((item, idx) => (
                  <CareBox key={`care${idx}`}/>
              ))}
            </div>
          </div>
        </div>
        <div className='col-span-12 md:col-span-5'>
          <div className='sticky top-20'><CheckoutBox/></div>
        </div>
      </div>
    </div>
  )
}

export default Cart