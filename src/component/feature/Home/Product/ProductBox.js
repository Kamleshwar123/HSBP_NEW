import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import IMAGES from '../../../../constant/images'
import SvgIcon from '../../../../constant/SvgIcon'
const Ratings = dynamic(() => import('../../../common/Ratings'), { ssr: false })

const ProductBox = () => {
    const router = useRouter();
    const [wishList, setWishlist] = useState(false);
    return (
        <div className='rounded-3xl bg-white border-[#DCDCDC] text-center cursor-pointer' onClick={()=> router.push("products/1")}>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <SvgIcon.BestSeller className="cursor-pointer"/>
                        <p className='text-white rotate-[-30deg] -mt-[66px] mr-[80px]'>Best Seller</p>
                    </div>
                    <div className='p-5 cursor-pointer' onClick={(e)=> {e.stopPropagation() ;setWishlist(!wishList)}}>{wishList ? <SvgIcon.HeartWish/> :<SvgIcon.Heart/>}</div>
                </div>
                <div className='pb-5 px-5 mt-4'>
                    <div className='text-center mx-7 my-3'>
                        <Image src={IMAGES.Product} alt="Appointment" className="scale_img" />
                    </div>
                    <div className='content'>
                        <h6 className='font-medium text-theme'>King C. Gillette Men's Beard Oil with Plant Based Argan...</h6>
                        <div className='my-3'>
                            <Ratings rating={4.5} />
                        </div>
                    </div>
                    <div className='mb-2'><span className='text-black-0f0 text-base'>&#x20B9;1500</span><span className='text-black-a8a text-base ml-3 line-through'>&#x20B9;2000</span></div>
                    <div className='text-red-c80 mb-3'>50% OFF</div>
                    <button className='custom_button' onClick={(e)=> e.stopPropagation()}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductBox