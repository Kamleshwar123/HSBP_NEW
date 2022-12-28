import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../constant/images'

const Franchise = () => {
    return (
        <div>
            <div className='text-center'>
                <Image src={IMAGES.Franchisi} alt="Franchisi" className="scale_img" />
            </div>
        </div>
    )
}

export default Franchise