import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IMAGES from '../../../constant/images'

const Institute = () => {
    return (
        <div>
            <Link href={"/institues"} className='text-center'>
                <Image src={IMAGES.Institute} alt="Institute" className="scale_img cursor-pointer" />
            </Link>
        </div>
    )
}

export default Institute