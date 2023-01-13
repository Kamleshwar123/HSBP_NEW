import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../constant/images'

const BeautycianImgGallary = () => {
    const IMG = [
        IMAGES.BGallary1, 
        IMAGES.BGallary2, 
        IMAGES.BGallary3
    ]
    const IMGEND = [
        IMAGES.BGallary4, 
        IMAGES.BGallary5, 
        IMAGES.BGallary6, 
        IMAGES.BGallary7
    ]
  return (
    <div className='bg-gray-eee p-6 rounded-2xl'>
        <h6 className='mb-5 text-theme text-lg font-medium'>Image Gallery</h6>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
        {IMG.map((item, idx) => (
            <div className='text-center' key={idx+"gallary"}>
                <Image src={item} alt="layer" className='sscale_img'/>
            </div>
        ))}
        </div>
        <div className='grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch'>
        {IMGEND.map((item, idx) => (
            <div className='text-center relative' key={idx+"gallary"}>
                <Image src={item} alt="layer" className='max-h-[300px]'/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default BeautycianImgGallary