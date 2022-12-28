import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../../constant/images'
import SvgIcon from '../../../../constant/SvgIcon'
const Ratings = dynamic(() => import('../../../common/Ratings'), { ssr: false })

const ProductBox = () => {
    return (
        <div className='rounded-3xl bg-white border-[#DCDCDC] p-5 text-center'>
            <div>
                <div className='flex justify-end'>
                    <SvgIcon.Heart className="cursor-pointer"/>
                </div>
                <div className='text-center my-4'>
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
                <button className='custom_button'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductBox