import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import IMAGES from '../../../../constant/images'
import SvgIcon from '../../../../constant/SvgIcon'

const data = [
    { title: "Salon at Home", number: "100+ Services", img: IMAGES.Card1, url: "/services"},
    { title: "Near by Salons", number: "100+ Salons", img: IMAGES.Card2, url: "/salons"},
    { title: "Beauty Products", number: "100+ Products", img: IMAGES.Card3, url: "/products"},
    { title: "Franchise", number: "100+ Franchises", img: IMAGES.Card4 , url: "/franchise"},
    { title: "Training Centres", number: "100+ Centres", img: IMAGES.Card5, url: "/institutes"}
]

const Card = () => {
    const router = useRouter();
    const handleRedirect = (path) => {
        router.push(path);
    }
    return (
        <div className='home_card'>
            <div className='flex flex-wrap items-center justify-center'>
                {data && data?.length > 0 && data?.map((item, idx) => (
                    <div className='w-full md:w-1/2 lg:w-1/3 text-center p-7' key={"card" + idx}>
                        <div 
                            className={`cursor-pointer shadow-card rounded-[40px] h-[370px] text-white  pt-5 card_box${idx + 1}`}
                            onClick={() => handleRedirect(item.url)}
                        >
                            <h3 className='text-xl font-semibold mb-2'>{item?.title}</h3>
                            <p>{item?.number}</p>
                            <div className='flex justify-center p-3'>
                                <SvgIcon.IosArrowDown className='scale-75' />
                            </div>
                            <div className='text-center'>
                                <Image src={item?.img} alt="Salon" className="scale_img w-1/2 mt-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card