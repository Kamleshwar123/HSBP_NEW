import Image from 'next/image'
import React, { useState } from 'react'
import ICONS from '../../../constant/icons'
import IMAGES from '../../../constant/images'
import Heading from '../Home/Heading'
import ActiveShadow from './ActiveShadow'
import BridalPackageSlider from './BridalPackageSlider'

const BridalServices = () => {
    const [tab, setTab] = useState("tab1");

    const handleTab = (data) => {
        setTab(data);
    }

  return (
    <div>
        <Heading
          title={"Bridal Packages Price List"}
          desc={"At HSBP Salon, we believe the days before the wedding are the most crucial of all. Cold feet and wedding jitters can certainly keep you on edge, and that’s where we come in ! HSBP offers range of bridal packages that not only"}
        />
        <div>
            <div className='pkgtab text-xl flex flex-wrap gap-5 text-black-241'>
                <div>
                    <div className={`px-3 cursor-pointer${tab === "tab1" ? " text-theme" : ""}`} onClick={()=> setTab("tab1")}>Normal Packages</div>
                    <ActiveShadow val={(tab === "tab1")}/>
                </div>
                <div>
                    <div className={`px-3 cursor-pointer${tab === "tab2" ? " text-theme" : ""}`} onClick={()=> setTab("tab2")}>Premium Packages</div>
                    <ActiveShadow val={(tab === "tab2")}/>
                </div>
            </div>
        </div>
        <div className='pb-5'>
            <BridalPackageSlider/>
        </div>
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
                <div className='grid sm:grid-cols-[60%_40%] pt-7'>
                    <div className='inline-flex space-x-5'>
                        <span className='text-base text-[#7D7D7D] line-through'>&#x20B9;7,600</span>
                        <span className='text-xl text-[#C2133C]'>&#x20B9;3,799</span>
                    </div>
                    <div className='text-center md:text-right'>
                        <button className='custom_button'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BridalServices