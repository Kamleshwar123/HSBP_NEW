import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IMAGES from '../../../constant/images'

const Appointment = () => {
    return (
        <div>
            <Link href={'/contact-us'} className='text-center'>
                <Image src={IMAGES.Appointment} alt="Appointment" className="scale_img" />
            </Link>
        </div>
    )
}

export default Appointment