import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import BeautyPackageService from '../component/feature/services/BeautyPackageService';
import BridalServices from '../component/feature/services/BridalServices';
import IMAGES from '../constant/images';

const Services = () => {
    const [tab, setTab] = useState("tab1");
    useEffect(() => {
        setTab("tab1");
        return () => { }
    }, [])

    const handleTab = (data) => {
        setTab(data);
    }
    const TabData = [
        {label: "Beauty Services", val: "tab1"},
        {label: "Beauty Packages", val: "tab2"},
        {label: "Bridal Package", val: "tab3"}
    ]

  return (
    <div className='container py-3'>
        <div className='grid md:grid-cols-3 items-center justify-center rounded-3xl text-center bg-gray-e8e bg-opacity-[0.18]'>
        {TabData?.map((item, idx) => (
            <div key={"tabs"+idx} className='relative font-medium cursor-pointer' onClick={()=> setTab(item.val)}>
                <Image src={IMAGES.ServiceTab} alt="beauty" className="relative h-14 object-cover"/>
                <div className={`flex items-center text-opacity-100 justify-center absolute top-0 left-0 bottom-0 right-0 text-base${tab === item.val ? " text-white bg-theme-opacity" : " text-black-f0f"}`}>{item.label}</div>
            </div>
        ))}
        </div>
        <div className='py-5'>
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