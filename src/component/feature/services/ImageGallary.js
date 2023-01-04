import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../constant/images'

const ImageGallary = () => {
  return (
    <div className='bg-gray-eee p-6'>
        <h6 className='mb-5 text-theme text-lg font-medium'>Image Gallery</h6>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {[...Array(8).keys()].map((item, idx) => (
            <div className='text-center' key={idx+"gallary"}>
                <Image src={IMAGES.Gallary1} alt="layer" className='scale_img'/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default ImageGallary