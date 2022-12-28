import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../../constant/images'
import SvgIcon from '../../../../constant/SvgIcon'

const data = [
    { title: "Salon at Home", number: "100+ Services", url: IMAGES.WomenBeauty },
    { title: "Near by Salons", number: "100+ Salons", url: IMAGES.WomenBeauty },
    { title: "Beauty Products", number: "100+ Products", url: IMAGES.WomenBeauty },
    { title: "Franchise", number: "100+ Franchises", url: IMAGES.WomenBeauty },
    { title: "Training Centres", number: "100+ Centres", url: IMAGES.WomenBeauty }
]
const Card = () => {
    return (
        <div className='home_card'>
            <div className='flex flex-wrap items-center justify-center'>
                {data && data?.length > 0 && data?.map((item, idx) => (
                    <div className='w-full md:w-1/2 lg:w-1/3 main_card_box' key={"card" + idx}>
                        <div className={`card_box card_box${idx + 1}`}>
                            <h3 className='title'>{item?.title}</h3>
                            <p>{item?.number}</p>
                            <div className='flex justify-center p-3'>
                                <SvgIcon.IosArrowDown style={{ fontSize: "10px" }} />
                            </div>
                            <div className='img'>
                                <Image src={item?.url} alt="Salon" className="scale_img" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card