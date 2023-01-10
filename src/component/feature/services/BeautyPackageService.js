import React from 'react'
import IMAGES from '../../../constant/images'
import BeautyPackageBox from '../Home/BeautyPackage/BeautyPackageBox'
import Heading from '../Home/Heading'

const BeautyPackageService = () => {
  const data = [
    {title: "Normal Packages", img: IMAGES.Beauty1},
    {title: "Deluxe Package", img: IMAGES.Beauty2},
    {title: "Bridal Packages", img: IMAGES.Beauty3},
    {title: "Normal Packages", img: IMAGES.Beauty1},
    {title: "Normal Packages", img: IMAGES.Beauty1},
    {title: "Deluxe Package", img: IMAGES.Beauty2},
]
  return (
    <div>
        <Heading
          title={"Beauty Packages"}
          desc={"We provide special offers for students and corporates"}
        />
        <div className='bg-pink p-6 -m-3'>
            <div className='flex flex-wrap justify-center'>
                {data.map((item, idx) => (
                    <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 text-center' key={"pkg" + idx}>
                    <BeautyPackageBox item={item}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BeautyPackageService