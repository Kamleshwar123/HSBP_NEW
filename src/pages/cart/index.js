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
            <div>
              {[...Array(3).keys()].map((item, idx) => (
                <React.Fragment key={`care${idx}`}>
                  {idx !== 0 && <hr className='my-0 mx-5'/>}
                  <CareBox/>
                </React.Fragment>
              ))}
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

export default Cart