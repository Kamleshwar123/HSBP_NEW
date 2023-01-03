import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../constant/images'

const ProductAd = () => {
  return (
    <div className='mt-6 grid md:grid-cols-2 gap-6 justify-center items-center'>
        <div>
            <Image src={IMAGES.Ad1} alt="Ad1" className="scale_img" />
        </div>
        <div>
            <Image src={IMAGES.Ad2} alt="Ad2" className="scale_img" />
        </div>
    </div>
  )
}

export default ProductAd