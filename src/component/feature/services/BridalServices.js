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
        {/* <div>
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
        </div> */}
        <div className='px-3 text-theme font-bold text-2xl'>Normal Packages</div>
        <div className='pb-5'>
            <BridalPackageSlider/>
        </div>
        <div className='px-3 text-theme font-bold text-2xl'>Premium Packages</div>
        <div className='pb-5'>
            <BridalPackageSlider/>
        </div>
    </div>
  )
}

export default BridalServices