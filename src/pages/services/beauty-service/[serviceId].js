import Image from 'next/image'
import React from 'react'
import ImageGallary from '../../../component/feature/services/ImageGallary'
import IncludeSection from '../../../component/feature/services/IncludeSection'
import ServiceFaq from '../../../component/feature/services/ServiceFaq'
import ThingsToKnow from '../../../component/feature/services/ThingsToKnow'
import IMAGES from '../../../constant/images'

const ServiceDetail = () => {
  return (
    <div className='container'>
        <div className='bg-pink p-6 text-black-2a3 mb-5 mt-3'>
            <div className='shadow-4D bg-white p-5 rounded-2xl'>
                <h6 className='text-lg text-theme font-medium'>Hair Care</h6>
                <p>Have you tried a variety of shampoos and hair oils without success in preventing hair loss and split ends? If so, Hair Spa will save you. It not only strengthens your hair from the inside out but also addresses issues like dandruff, hair loss, rough, and lifeless hair.</p>
            </div>
            <div className='shadow-4D bg-white p-5 my-5 rounded-2xl'>
                <div className='grid grid-cols-12 gap-6'>
                    <div className='col-span-12 md:col-span-3 text-center gap-6'>
                        <Image src={IMAGES.Layer} alt="layer" className='scale_img'/>
                    </div>
                    <div className='col-span-12 md:col-span-9 px-5'>
                        <div className='grid sm:grid-cols-2 gap-x-5 gap-y-2'>
                            <div className='text-theme font-medium text-lg'>Hair Services</div>
                            <div className='sm:text-right'><div>30-60 mins</div></div>
                        </div>
                        <div className='grid sm:grid-cols-2 py-3 gap-6'>
                            <div>
                                <p className='mb-1'>Hair Spa</p>
                                <p className='mb-1'>Anti Hair Fall Treatment</p>
                                <p className='mb-1'> Below Shoulder Hair Spa </p>
                                <p className='mb-1'>Keratin Hair Spa Below Waist Hair Spa</p>
                                <p className='mb-1'>Below Waist Hair Spa</p>
                            </div>
                            <div className='sm:text-right'>
                                <p className='mb-1'>Smoothening up to Shoulder (Temporary)</p>
                                <p className='mb-1'>Smoothening up to Shoulder (Temporary)</p>
                                <p className='mb-1'> Smoothening up to Shoulder (Temporary)</p>
                                <p className='mb-1'>Anti Dandruff Treatment Smoothening upto Shoulder</p>
                                <p className='mb-1'>Smoothning any Lenth Kerastraight any Lenght</p>
                            </div>
                        </div>
                        <div className='mt-3 grid sm:grid-cols-2 items-center gap-6'>
                            <div><span className='text-black-0f0 text-base'>&#x20B9;1500</span><span className='text-black-a8a text-base ml-3 line-through'>&#x20B9;2000</span><span className='text-red-c80 ml-3'>50% OFF</span></div>
                            <div className='text-right'><button className='addcard_button'>Add to Cart</button></div>
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