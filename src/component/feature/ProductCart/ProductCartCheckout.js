import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import IMAGES from '../../../constant/images';
import AddToCart from '../../common/AddToCart';

const ProductCartCheckout = ({showCheckout = false}) => {
  const router = useRouter();
  const [num, setNum]= useState(1);
  const [haveCoupen, setHaveCoupen]= useState(false);
  const [apply, setApply]= useState(false);
  const [coupenCode, setCoupenCode]= useState("");
    const inc = (e) => {
        num < 5 ? setNum(num + 1) : e.preventDefault();
    }
    const dec = (e) => {
        num > 0 ? setNum(num - 1) : e.preventDefault();
    }
    const addToCart = () => {
        setNum(1);
    }
  return (
    <div className='shadow-checkout rounded-2xl overflow-hidden'>
        <div className='theme-heading-box flex justify-between'>
        <p>Products</p>
        <p>Price (INR)</p>
        </div>
        <div className='px-5 py-3 text-black-2a3 bg-gray-eee'>
          <div>
            <div className='flex gap-x-5 gap-y-3 flex-col sm:flex-row justify-between py-2'>
                <div className='w-auto flex gap-2'>
                  <div className='w-12 h-12'>
                    <Image src={IMAGES.ProductCartProduct} alt=""/>
                  </div>
                  <div className='text-black-686 text-xs'>
                    <h6 className='font-semibold'>King C. Gillette Men's Beard Oil with Plant Based Argan...</h6>
                    <p className='mt-1'>This placeholder image generator offers a lot of options
                    <span className='text-blue-274 font-bold cursor-pointer' onClick={()=> router.push(`/products/1`)}>{" "} Read More</span>
                    </p>
                  </div>
                </div>
                <div className='w-32'><AddToCart num={num} inc={inc} dec={dec} addToCart={addToCart}/></div>
            </div>
            {/* <div className='mt-3 mb-2'>
              <span className='text-black-0f0 text-base font-bold'><span className='rupee-sym'>&#x20B9;</span>1500</span>
              <span className='text-black-a8a ml-3 line-through rupee-sym'>&#x20B9;2000</span>
              <span className='text-red-c80 ml-3 font-semibold'>50% OFF</span>
            </div> */}
          </div>
          <hr className='my-3'/>
          <div>
          <div className='text-theme text-base cursor-pointer text-center' onClick={()=> setHaveCoupen(!haveCoupen)}>Have a Discount Coupon?</div>
              {haveCoupen &&
              <div className='flex flex-wrap gap-3 justify-center items-end mb-7 mt-3'>
                <div>
                  <input 
                    type="text" 
                    placeholder='Enter Coupon Here' 
                    className={`text-xs h-10 form-control border border-dashed text-center max-w-[180px]${apply ? ' text-green-0b5 border-green-0b5 bg-white' : ' bg-transparent'}`}
                    onChange={(e)=>setCoupenCode(e.target.value?.toUpperCase())}
                    value={coupenCode}
                    disabled={apply}
                  />
                </div>
                <div>
                  {apply ?
                    <button className='text-[#CC0000] h-10 font-bold cursor-pointer text-center w-32 align-middle rounded-lg' onClick={() => {setApply(false); setCoupenCode("")}}>Remove</button>
                    :
                    <button className='custom_button h-10 w-40' disabled={!!!coupenCode} onClick={() => setApply(true)}>Apply</button>
                  }
                </div>
              </div>}
          </div>
          <div className='my-3 px-4 bg-white border border-black-707 text-black-7d7 rounded-xl text-xs'>
            <div className='my-2 grid grid-cols-[auto_40px]'>
              <span>Subtotal</span>
              <span><span className='rupee-sym'>&#x20B9;</span>1500</span>
            </div>
            <div className='my-2 grid grid-cols-[auto_40px]'>
              <span>Product Discount</span>
              <span><span className='rupee-sym'>&#x20B9;</span>200</span>
            </div>
            <div className='my-2 grid grid-cols-[auto_40px]'>
              <span>Other Charges</span>
              <span className='rupee-sym'><span className='rupee-sym'>&#x20B9;</span>0</span>
            </div>
            <hr className='my-2 border-theme'/>
            <div className='my-1 pb-2 grid grid-cols-[auto_40px]'>
              <span>Total</span>
              <span className='text-theme'><span className='rupee-sym'>&#x20B9;</span>1500</span>
            </div>
          </div>
          <div className='text-center'>
            <button className='custom_button my-2 h-10 w-40' onClick={()=> {router.pathname?.includes("/salons") ? router.push("/booknow"): router.push("/checkout")}}>Checkout</button>
          </div>
        </div>
    </div>
  )
}

export default ProductCartCheckout