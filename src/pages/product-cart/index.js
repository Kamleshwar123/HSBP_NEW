import React from 'react'
import { useState } from 'react';
import ProductCartBox from '../../component/feature/ProductCart/ProductCartBox'
import ProductCartCheckout from '../../component/feature/ProductCart/ProductCartCheckout'
import SvgIcon from '../../constant/SvgIcon';

const ProductCart = () => {
  const [openBox, setOpenBox]= useState(true);
  return (
    <div className='container my-3'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12 md:col-span-7'>
          <div className='shadow-66 rounded-2xl overflow-hidden'>
            <div className='theme-heading-box flex justify-between cursor-pointer' onClick={()=> setOpenBox(!openBox)}>
              <p className='sm:pl-[72px]'>Product Details</p>
              <div><SvgIcon.IosArrowDown className={`scale-50 ${openBox ? 'rotate-180' : "rotate-0"}`}/></div>
            </div>
            {openBox &&
              <div className='text-black-686 divide-y divided-black-686'>
                {[...Array(3).keys()].map((item, idx) => (
                    <ProductCartBox key={`ProductCartBox${idx}`}/>
                ))}
              </div>
            }
          </div>
        </div>
        <div className='col-span-12 md:col-span-5'>
          <div className='sticky top-20'><ProductCartCheckout/></div>
        </div>
      </div>
    </div>
  )
}

export default ProductCart