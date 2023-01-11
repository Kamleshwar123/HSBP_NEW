import React from 'react'
import BridalPackageSlider from './BridalPackageSlider'
import ServiceHeading from './ServiceHeading'

const BridalServices = () => {

  return (
    <div className='container'>
        <ServiceHeading
          title={"Bridal Packages Price List"}
          desc={"At HSBP Salon, we believe the days before the wedding are the most crucial of all. Cold feet and wedding jitters can certainly keep you on edge, and that’s where we come in ! HSBP offers range of bridal packages that not only"}
        />
        <div className='px-3 text-theme text-center font-bold text-2xl md:text-4xl'>Normal Packages</div>
        <div className='mt-7 mb-7'>
            <BridalPackageSlider/>
        </div>
        <div className='px-3 text-theme text-center font-bold text-2xl md:text-4xl'>Premium Packages</div>
        <div className='mt-7'>
            <BridalPackageSlider/>
        </div>
    </div>
  )
}

export default BridalServices