import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../constant/images'

const Institute = () => {
    return (
        <div>
            <div className='text-center'>
                <Image src={IMAGES.Institute} alt="Institute" className="scale_img" />
            </div>
        </div>
    )
}

export default Institute