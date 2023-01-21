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
        <div className='overflow-hidden shadow-4D h-full rounded-3xl bg-white border-[#DCDCDC] text-center cursor-pointer' onClick={()=> router.push("/products/1")}>
            <div>
                <div className='flex justify-between relative'>
                    <div>
                        <SvgIcon.BestSeller className="cursor-pointer"/>
                        <p className='text-white rotate-[-30deg] -mt-[66px] mr-[80px]'>Best Seller</p>
                    </div>
                    <div className='absolute z-10 top-3 right-3 cursor-pointer' onClick={(e)=> {e.stopPropagation() ;setWishlist(!wishList)}}>{wishList ? <SvgIcon.HeartWish className="scale-75"/> :<SvgIcon.Heart className="scale-75"/>}</div>
                </div>
                <div className='pb-5 px-5 mt-4'>
                    <div className='text-center mx-7 my-3'>
                        <Image src={IMAGES.Product} alt="Appointment" className="scale_img" />
                    </div>
                    <div className='content'>
                        <h6 className='font-medium text-theme'>King C. Gillette Men's Beard Oil with Plant Based Argan...</h6>
                        <div className='my-2'>
                            <Ratings rating={4.5} />
                        </div>
                    </div>
                    <div className='mb-1'><span className='text-black-0f0 font-bold text-base'><span className='rupee-sym'>₹</span>1500</span><span className='text-black-a8a ml-3 line-through'><span className='rupee-sym'>₹2000</span></span></div>
                    <div className='text-red-c80'>50% OFF</div>
                    <button className='custom_button mt-5' onClick={(e)=> e.stopPropagation()}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductBox