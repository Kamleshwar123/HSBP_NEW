import React from 'react'
import SvgIcon from '../../constant/SvgIcon'

const ThankYou = () => {
    return (
        <div className='container'>
            <div className='theme-bg text-center text-white py-16 px-5'>
                <div className='flex items-center justify-center'>
                    <span className='bg-white rounded-[50%] p-5'><SvgIcon.RightTick width={30} height={30} /></span>
                </div>
                <div className='mt-8'>
                    <h1 className='text-6xl italic'>Thank You!</h1>
                    <div className='text-lg py-2'>FOR APPOINTMENT</div>
                    <p className='py-2'>Your appointment is almost confirmed. You will get beautician detail soon.</p>
                </div>
                <div className='py-2'>
                    <button className='back_button'>My Order</button>
                    <button className='back_button ml-5'>Back to Home</button>
                </div>
            </div>
        </div>
    )
}

export default ThankYou