import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../constant/images'

const ImageGallary = () => {
  const data = [IMAGES.Gallary1, IMAGES.Gallary2, IMAGES.Gallary3, IMAGES.Gallary1,IMAGES.Gallary2];
  return (
    <div className='bg-gray-eee p-6'>
        <h6 className='mb-5 text-theme text-lg font-semibold'>Image Gallery</h6>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {data.map((item, idx) => (
            <div className='text-center' key={idx+"gallary"}>
                <Image src={item} alt="layer" className='scale_img rounded-2xl'/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default ImageGallary