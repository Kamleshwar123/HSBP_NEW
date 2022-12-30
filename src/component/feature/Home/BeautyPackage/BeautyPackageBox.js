import Image from 'next/image'
import React from 'react'
import IMAGES from "../../../../constant/images";

const BeautyPackageBox = ({item}) => {
    return (
    <div className='rounded-3xl bg-white shadow-pkg px-5 py-5'>
        <div className='text-center -mt-[95px]'>
            <Image src={IMAGES.Beauty1} alt="beauty" className="scale_img" width={150} height={150} />
        </div>
        <div className='content'>
            <h3 className='text-xl text-theme font-meduim my-2'>Normal Packages</h3>
            <p className='mb-1'>Lotus Cleanup</p>
            <p className='mb-1'> Full Arms (Chocolate Wax)</p>
            <p className='mb-1'>Full Legs (Chocolate Wax)</p>
            <p className='mb-1'>VLCC Detan Pedicure</p>
            <p className='mb-1'>Eyebrow</p>
            <p className='mb-1'>Upper Lip</p>
        </div>
        <div className='my-3'><span className='text-black-0f0 text-base'>&#x20B9;1500</span><span className='text-black-a8a text-base ml-3 line-through'>&#x20B9;2000</span></div>
        <button className='custom_button'>Read More</button>
    </div>
    )
}

export default BeautyPackageBox