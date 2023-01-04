import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../constant/images'

const BeautycianImgGallary = () => {
    const IMG = [
        IMAGES.BGallary1, 
        IMAGES.BGallary1, 
        IMAGES.BGallary1, 
        IMAGES.BGallary2, 
        IMAGES.BGallary2,
        IMAGES.BGallary2,
        IMAGES.BGallary2
    ]
  return (
    <div className='bg-gray-eee p-6'>
        <h6 className='mb-5 text-theme text-lg font-medium'>Image Gallery</h6>
        <div className='grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {IMG.map((item, idx) => (
            <div className='text-center' key={idx+"gallary"}>
                <Image src={item} alt="layer" className='h-auto mx-auto max-w-[200px]'/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default BeautycianImgGallary