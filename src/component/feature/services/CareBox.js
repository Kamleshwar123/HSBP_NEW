import { useRouter } from 'next/router';
import React, { useState } from 'react'

const CareBox = () => {
    const router = useRouter();
    const [num, setNum]= useState(0);
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
    <div className='px-5 py-3 text-black-2a3'>
        <h6 className='text-base font-medium'>Hair Spa</h6>
        <div className='flex gap-5 flex-row sm:flex-column justify-between items-center pt-2'>
            <p className='pb-2 text-xs'>Have you tried a variety of shampoos and hair oils without success in preventing hair loss and split ends? If so, Hair Spa will... 
                <span className='text-blue-274 font-medium cursor-pointer' onClick={()=> router.push(`/services/beauty-service/1`)}>Read More</span>
            </p>
            <div>
            {num > 0 ?
            <div className='flex rounded-2xl border border-1'>
                <span className='px-3 py-1 cursor-pointer' onClick={dec}>-</span>
                <span className='px-3 py-1 bg-theme text-white'>{num}</span>
                <span className='px-3 py-1 cursor-pointer' onClick={inc}>+</span>
            </div>
            :
            <button className='addcard_button' onClick={addToCart}>Add to Cart</button>
            }
            </div>
        </div>
        <div className='mt-2'>
            <div><span className='text-black-0f0 text-base'>&#x20B9;1500</span><span className='text-black-a8a text-base ml-3 line-through'>&#x20B9;2000</span><span className='text-red-c80 ml-3'>50% OFF</span></div>
        </div>
    </div>
  )
}

export default CareBox