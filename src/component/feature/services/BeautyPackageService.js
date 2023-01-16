import React from 'react'
import IMAGES from '../../../constant/images'
import BeautyPackageBox from '../Home/BeautyPackage/BeautyPackageBox'
import ServiceHeading from './ServiceHeading'

const BeautyPackageService = () => {
  const data = [
    {title: "Normal Packages", img: IMAGES.Beauty1},
    {title: "Deluxe Package", img: IMAGES.Beauty2},
    {title: "Bridal Packages", img: IMAGES.Beauty3},
    {title: "Normal Packages", img: IMAGES.Beauty1},
    {title: "Normal Packages", img: IMAGES.Beauty1},
    {title: "Deluxe Package", img: IMAGES.Beauty2},
    {title: "Bridal Packages", img: IMAGES.Beauty3},
    {title: "Normal Packages", img: IMAGES.Beauty1}
]
  return (
    <div className="beautypkg-bg pt-1 mt-3 -mb-[31px]">
        <div className='container'>
          <ServiceHeading
            title={"Beauty Packages"}
            desc={"We provide special offers for students and corporates"}
          />
          <div className='-mx-3 -my-6 pb-6'>
              <div className='flex flex-wrap justify-center'>
                  {data.map((item, idx) => (
                      <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3 py-6 text-center' key={"pkg" + idx}>
                      <BeautyPackageBox item={item}/>
                      </div>
                  ))}
              </div>
          </div>
        </div>
    </div>
  )
}

export default BeautyPackageService