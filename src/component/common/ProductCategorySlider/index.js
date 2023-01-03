import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import ICONS from '../../../constant/icons'

const ProductCategorySlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
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
  return (
    <div className='beauty_slider my-3'>
        <Slider {...settings}>
        {[...Array(16).keys()].map((item, idx) => (
        <div key={idx+"cat"}>
            <div className='cursor-pointer justify-self-center mx-auto max-w-[160px] text-theme border border-theme rounded-xl flex gap-2 px-1 py-2 items-center justify-center'>
                <span className='w-4 h-4 rounded-full'>
                <Image src={ICONS.Call} alt="Appointment" className="scale_img" />
                </span>
                <span className='text-xs whitespace-nowrap'>Hair Serum</span>
            </div>
        </div>
        ))}
        </Slider>
    </div>
  )
}

export default ProductCategorySlider