import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import IMAGES from '../../../constant/images';
import BeautyPackageService from './BeautyPackageService';
import BeautyService from './BeautyService';
import BridalServices from './BridalServices';

const Services = () => {
    const router = useRouter();
    const {query}= router;
    console.log(query?.tab)
    const [tab, setTab] = useState(query?.tab || "tab1");
    const [type, setType] = useState(query?.type || 0);
    const handleTab = (data) => {
        setTab(data);
    }
    const TabData = [
        {label: "Beauty Services", val: "tab1"},
        {label: "Beauty Packages", val: "tab2"},
        {label: "Bridal Package", val: "tab3"}
    ]

  return (
    <div className='py-3'>
        <div className='container'>
            <div className='grid md:grid-cols-3 items-center justify-center text-center bg-gray-e8e bg-opacity-[0.18] overflow-hidden rounded-2xl'>
            {TabData?.map((item, idx) => (
                <div key={"tabs"+idx} className='relative font-medium cursor-pointer' onClick={()=> setTab(item.val)}>
                    <Image src={IMAGES.ServiceTab} alt="beauty" className="relative h-20 object-cover"/>
                    <div className={`flex items-center text-opacity-100 justify-center absolute top-0 left-0 bottom-0 right-0 text-base${tab === item.val ? " text-white bg-gradient opacity-75" : " text-black-f0f"}`}>{item.label}</div>
                </div>
            ))}
            </div>
        </div>
        <div>
            {tab === "tab1" &&
                <BeautyService type={type}/>
            }
            {tab === "tab2" &&
                <BeautyPackageService/>
            }
            {tab === "tab3" &&
                <BridalServices/>
            }
        </div>
    </div>
  )
}

export default Services