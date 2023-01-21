import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'

const BeautyPackageBox = ({item}) => {
    const router = useRouter();
    return (
    <div className='rounded-3xl bg-white shadow-4D p-5 mt-[75px] cursor-pointer' onClick={()=> router.push("/booknow")}>
        <div className='-mt-[95px]'>
            <div className='text-center'>
                <Image src={item?.img} alt="beauty" className="scale_img" width={150} height={150} />
            </div>
            <div className='content'>
                <h3 className='text-xl text-theme font-meduim mb-1 mt-1 capitalize'>{item.title}</h3>
                <p className='mb-1'>Lotus Cleanup</p>
                <p className='mb-1'> Full Arms (Chocolate Wax)</p>
                <p className='mb-1'>Full Legs (Chocolate Wax)</p>
                <p className='mb-1'>VLCC Detan Pedicure</p>
                <p className='mb-1'>Eyebrow</p>
                <p className='mb-1'>Upper Lip</p>
            </div>
            <div className='my-3'><span className='text-black-0f0 text-base font-bold'><span className='rupee-sym'>₹</span>1500</span><span className='text-black-a8a ml-3 line-through rupee-sym'>₹2000</span></div>
            <button className='custom_button'>Book Now</button>
        </div>
    </div>
    )
}

export default BeautyPackageBox