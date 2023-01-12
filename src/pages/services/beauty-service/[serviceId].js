import Image from 'next/image'
import React, { useState } from 'react'
import AddToCart from '../../../component/common/AddToCart'
import ImageGallary from '../../../component/feature/services/ImageGallary'
import IncludeSection from '../../../component/feature/services/IncludeSection'
import ServiceFaq from '../../../component/feature/services/ServiceFaq'
import ThingsToKnow from '../../../component/feature/services/ThingsToKnow'
import IMAGES from '../../../constant/images'
import SvgIcon from '../../../constant/SvgIcon'

const ServiceDetail = () => {
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
    <div className='container'>
        <div className='bg-pink p-6 text-black-2a3 mb-5 mt-3'>
            <div className='shadow-4D bg-white p-5 rounded-2xl'>
                <h6 className='text-lg text-theme font-semibold'>What Expert Says</h6>
                <p>"Hair spa requires a lot of head massage that stimulates the blood circulation in your scalp. The procedure enhances the oxygen supply to your hair follicles. It revitalizes your scalp and improves hair growth."</p>
            </div>
            <div className='shadow-4D bg-white px-5 my-5 rounded-2xl'>
                <div className='grid grid-cols-12 gap-6 place-items-stretch'>
                    <div className='col-span-12 md:col-span-3 text-center gap-6 relative'>
                        <Image src={IMAGES.Layer} alt="layer" className='scale_img md:object-fill md:h-full md:w-full'/>
                    </div>
                    <div className='col-span-12 md:col-span-9 px-5 py-5'>
                        <div className='grid sm:grid-cols-2 gap-x-5 gap-y-2'>
                            <div className='text-theme font-semibold text-lg'>Hair Spa</div>
                            <div className='sm:justify-self-end flex gap-1 items-center'>
                                <SvgIcon.Clock className='scale-75'/>
                                <div>30-60 mins</div>
                            </div>
                        </div>
                        <div className='grid sm:grid-cols-3 py-2 gap-6'>
                            <ul className='list-disc ml-4'>
                                <li className='mb-1'>Arranging</li>
                                <li className='mb-1'>Cutting</li>
                                <li className='mb-1'>Dressing</li>
                                <li className='mb-1'>Curling</li>
                                <li className='mb-1'>Waving</li>
                            </ul>
                            <ul className='list-disc ml-4'>
                                <li className='mb-1'>Singeing</li>
                                <li className='mb-1'>Bleaching</li>
                                <li className='mb-1'>Coloring</li>
                                <li className='mb-1'>Tinting</li>
                                <li className='mb-1'>Cleansing</li>
                            </ul>
                            <ul className='list-disc ml-4'>
                                <li className='mb-1'>Trimming</li>
                                <li className='mb-1'>Styling</li>
                                <li className='mb-1'>Relaxing</li>
                                <li className='mb-1'>Straightening</li>
                                <li className='mb-1'>Hair Extensions</li>
                            </ul>
                        </div>
                        <div className='mt-3 grid sm:grid-cols-2 items-center gap-6'>
                            <div><span className='text-black-0f0 text-xl'>&#x20B9;1500</span><span className='text-black-a8a text-base ml-3 line-through'>&#x20B9;2000</span><span className='text-red-c80 text-base ml-3'>50% OFF</span></div>
                            <div className='justify-self-end'><AddToCart num={num} inc={inc} dec={dec} addToCart={addToCart}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <IncludeSection/>
        <ThingsToKnow/>
        <ImageGallary/>
        <ServiceFaq/>
    </div>
  )
}

export default ServiceDetail