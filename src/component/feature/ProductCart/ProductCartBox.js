import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import IMAGES from '../../../constant/images';
import AddToCart from '../../common/AddToCart';

const ProductCartBox = () => {
    const router = useRouter();
    const [num, setNum]= useState(1);
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
    <div className='p-3 text-black-2a3'>
        <div className='flex gap-x-5 gap-y-3 flex-col sm:flex-row justify-between items-center py-2'>
            <div className='w-auto flex gap-2 sm:max-w-[60%]'>
                <div className='min-w-[64px] min-h-[64px]'>
                <Image src={IMAGES.ProductCartProduct} alt="" className='ml-0' width={64}  height={64}/>
                </div>
                <div className='text-black-686'>
                <h6 className='font-semibold text-[13px]'>King C. Gillette Men's Beard Oil with Plant Based Argan...</h6>
                <p className='mt-1 text-xs'>This placeholder image generator offers a lot of options
                <span className='text-blue-274 font-bold cursor-pointer' onClick={()=> router.push(`/products/1`)}>{" "} Read More</span>
                </p>
                </div>
            </div>
            <div className='w-32'><AddToCart num={num} inc={inc} dec={dec} addToCart={addToCart}/></div>
        </div>
        <div>
            <span className='text-black-0f0 text-base font-extrabold'><span className='rupee-sym'>&#x20B9;</span>1500</span>
            <span className='text-black-a8a ml-3 line-through rupee-sym'>&#x20B9;2000</span>
            <span className='text-red-c80 ml-3 font-semibold'>50% OFF</span>
        </div>
    </div>
  )
}

export default ProductCartBox