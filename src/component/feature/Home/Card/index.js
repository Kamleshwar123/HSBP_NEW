import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../../constant/images'
import SvgIcon from '../../../../constant/SvgIcon'

const data = [
    { title: "Salon at Home", number: "100+ Services", url: IMAGES.Card1 },
    { title: "Near by Salons", number: "100+ Salons", url: IMAGES.Card2 },
    { title: "Beauty Products", number: "100+ Products", url: IMAGES.Card3 },
    { title: "Franchise", number: "100+ Franchises", url: IMAGES.Card4 },
    { title: "Training Centres", number: "100+ Centres", url: IMAGES.Card5 }
]

const Card = () => {
    return (
        <div className='home_card'>
            <div className='flex flex-wrap items-center justify-center'>
                {data && data?.length > 0 && data?.map((item, idx) => (
                    <div className='w-full md:w-1/2 lg:w-1/3 text-center p-7' key={"card" + idx}>
                        <div className={`shadow-card rounded-[40px] h-[370px] text-white  pt-5 card_box${idx + 1}`}>
                            <h3 className='text-xl font-semibold mb-2'>{item?.title}</h3>
                            <p>{item?.number}</p>
                            <div className='flex justify-center p-3'>
                                <SvgIcon.IosArrowDown className='scale-75' />
                            </div>
                            <div className='text-center'>
                                <Image src={item?.url} alt="Salon" className="scale_img w-1/2 mt-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card