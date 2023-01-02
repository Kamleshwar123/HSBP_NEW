import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IMAGES from '../../../constant/images'

const Franchise = () => {
    return (
        <div>
            <Link href={'franchise'} className='text-center'>
                <Image src={IMAGES.Franchisi} alt="Franchisi" className="scale_img cursor-pointer" />
            </Link>
        </div>
    )
}

export default Franchise