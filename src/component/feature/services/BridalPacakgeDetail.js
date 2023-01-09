import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import ICONS from '../../../constant/icons'
import IMAGES from '../../../constant/images'

const BridalPacakgeDetail = () => {
    const router = useRouter();
  return (
    <div className='bg-[#FFEDEC] py-6 px-8 grid md:grid-cols-[35%_65%] items-center relative'>
            <div className='absolute -top-7 right-7'>
                <Image src={ICONS.Off} alt="Bridal1" className="mx-auto max-w-[75%] h-auto"/>
                <p className='text-white font-medium absolute top-[40%] right-[40%]'>Save 50%</p>
            </div>
            <div className='text-center'>
                <Image src={IMAGES.Bridal1} alt="Bridal1" className="scale_img"/>
            </div>
            <div className='p-5'>
                <h1 className='text-theme text-3xl'>Reception</h1>
                <hr/>
                <div className='pb-5 text-black-2e2 w-3/4'>
                    <h3 className='font-medium text-2xl'>Services & Pricing</h3>
                    <p>Lorem ipsum has been used as dummy text for centuries, which is how lorem Read More</p>
                </div>
                <div className='bg-theme text-white py-6 px-4 grid sm:grid-cols-[60%_40%]'>
                    <div>
                        <p>- Oxy bleach</p>
                        <p>- O3 Facial</p>
                        <p>- Chocolate wax</p>
                        <p>- Anti-Tan Manicure</p>
                        <p>- Bridal Mahendi</p>
                    </div>
                    <div>
                        <p>- Oxy bleach</p>
                        <p>- O3 Facial</p>
                        <p>- Chocolate wax</p>
                        <p>- Anti-Tan Manicure</p>
                        <p>- Bridal Mahendi</p>
                    </div>
                </div>
                <div className='grid sm:grid-cols-[60%_40%] pt-7 items-center'>
                    <div className='inline-flex space-x-5 items-center'>
                        <span className='text-base text-[#7D7D7D] line-through'>&#x20B9;7,600</span>
                        <span className='text-xl text-[#C2133C]'>&#x20B9;3,799</span>
                    </div>
                    <div className='text-center md:text-right'>
                        <button className='custom_button' onClick={()=> router.push("/booknow")}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BridalPacakgeDetail