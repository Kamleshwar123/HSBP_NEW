import Image from 'next/image'
import React from 'react'
import IMAGES from '../../constant/images'
import SvgIcon from '../../constant/SvgIcon'

const ThankYou = () => {
    return (
        <div className='container my-3'>
            <div className='theme-bg text-center text-white py-16 px-5 rounded-2xl'>
                <div className='flex items-center justify-center'>
                    <span className='bg-white rounded-[50%] p-4'><SvgIcon.RightTick width={25} height={25} /></span>
                </div>
                <div className='mt-8'>
                    <Image src={IMAGES.ThankYou} alt="ThankYou" className='mx-auto max-h-24 w-auto'/>
                    {/* <h1 className='text-6xl italic'>Thank You!</h1> */}
                    <div className='text-lg py-2'>FOR APPOINTMENT</div>
                    <p className='py-2'>Your appointment is almost confirmed. You will get beautician detail soon.</p>
                </div>
                <div className='pt-7'>
                    <button className='back_button'>My Order</button>
                    <button className='back_button ml-5'>Back to Home</button>
                </div>
            </div>
        </div>
    )
}

export default ThankYou