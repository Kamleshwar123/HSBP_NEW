import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../constant/images'

const ProductOffer = () => {
  return (
    <div className='grid md:grid-cols-3 gap-6 justify-center items-center max-w-[95%]'>
        <div>
            <Image src={IMAGES.Offer1} alt="Ad1" className="scale_img" />
        </div>
        <div>
            <Image src={IMAGES.Offer2} alt="Ad2" className="scale_img" />
        </div>
        <div>
            <Image src={IMAGES.Offer3} alt="Ad2" className="scale_img" />
        </div>
    </div>
  )
}

export default ProductOffer