import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../constant/images'

const Appointment = () => {
    return (
        <div>
            <div className='text-center'>
                <Image src={IMAGES.Appointment} alt="Appointment" className="scale_img" />
            </div>
        </div>
    )
}

export default Appointment