import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import Slider from 'react-slick';
import ICONS from '../../../constant/icons'

const ProductCategorySlider = () => {
    const router = useRouter();
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows:false,
        slidesToShow: 6,
        speed: 500,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const data = [
        {category: "Hair Serum", icon: ICONS.Category1},
        {category: "Face Cream", icon: ICONS.Category2},
        {category: "Lipstick", icon: ICONS.Category3},
        {category: "Massage Oil", icon: ICONS.Category4},
        {category: "Hair Serum", icon: ICONS.Category1},
        {category: "Face Cream", icon: ICONS.Category2},
        {category: "Lipstick", icon: ICONS.Category3},
        {category: "Massage Oil", icon: ICONS.Category4},
        {category: "Hair Serum", icon: ICONS.Category1},
        {category: "Face Cream", icon: ICONS.Category2},
        {category: "Lipstick", icon: ICONS.Category3},
        {category: "Massage Oil", icon: ICONS.Category4},
    ]
  return (
    <div className='beauty_slider my-3 sticky top-[80px] z-[100] bg-white -mx-3'>
        <Slider {...settings}>
        {data.map((item, idx) => (
        <div key={idx+"cat"} className='text-center px-3'>
            <div 
                className='mx-auto cursor-pointer text-theme border border-theme rounded-xl flex gap-2 px-2 py-1 items-center justify-start'
                onClick={()=> router.push("/products")}
            >
                <div className='w-5 h-5 rounded-full'>
                <Image src={item?.icon} alt="Appointment" className="scale_img" />
                </div>
                <div className='text-xs whitespace-nowrap text-center w-full px-2'>{item?.category}</div>
            </div>
        </div>
        ))}
        </Slider>
    </div>
  )
}

export default ProductCategorySlider