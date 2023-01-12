import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import ICONS from '../../../constant/icons'
import IMAGES from '../../../constant/images'

const BridalPacakgeDetail = () => {
    const router = useRouter();
    const [showLess, setShowLess] = React.useState(true);
    const text = 'Lorem ipsum has been used as dummy text for centuries, which is how lorem Lorem ipsum has been used as dummy text for centuries, which is how lorem'
  return (
    <div className='bg-[#FFEDEC] py-6 px-9 grid md:grid-cols-[35%_65%] items-center relative gap-y-5'>
            <div className='absolute -top-5 right-6'>
                <Image src={ICONS.Off} alt="Bridal1" className="mx-auto max-w-[65%] h-auto"/>
                <p className='text-white font-medium absolute top-[40%] right-[40%]'>Save 50%</p>
            </div>
            <div className='text-center pt-9 md:pt-0'>
                <Image src={IMAGES.Bridal2} alt="Bridal1" className="rounded-2xl scale_img"/>
            </div>
            <div className='px-5 py-0'>
                <h1 className='text-theme text-3xl font-semibold'>Reception</h1>
                <hr/>
                <div className='pb-5 text-black-2e2 w-full md:w-3/4'>
                    <h3 className='font-semibold text-xl pb-1'>Services & Pricing</h3>
                    <p>{showLess ? `${text?.slice(0, 80)}...` : text}<span className='text-blue-274 ml-1 cursor-pointer' onClick={() => setShowLess(!showLess)}>{showLess ? "Read More": "Read Less"}</span></p>
                </div>
                <div className='bg-theme text-white py-6 px-4 grid sm:grid-cols-[60%_40%] rounded-2xl'>
                    <div>
                        <p className='pb-2'>- Oxy bleach</p>
                        <p className='pb-2'>- O3 Facial</p>
                        <p className='pb-2'>- Chocolate wax</p>
                        <p className='pb-2'>- Anti-Tan Manicure</p>
                        <p className='pb-2'>- Bridal Mahendi</p>
                    </div>
                    <div>
                        <p className='pb-2'>- Oxy bleach</p>
                        <p className='pb-2'>- O3 Facial</p>
                        <p className='pb-2'>- Chocolate wax</p>
                        <p className='pb-2'>- Anti-Tan Manicure</p>
                        <p className='pb-2'>- Bridal Mahendi</p>
                    </div>
                </div>
                <div className='grid sm:grid-cols-[60%_40%] pt-7 items-center gap-5'>
                    <div className='inline-flex space-x-2 items-center justify-self-center md:justify-self-start'>
                        <span className='text-black-0f0 text-xl font-semibold'>&#x20B9;3799</span>
                        <span className='text-black-a8a ml-3 text-base line-through'>&#x20B9;7600</span>
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