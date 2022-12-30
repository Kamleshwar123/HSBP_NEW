import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import IMAGES from '../../../constant/images';

const BridalPackageSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <div className='beauty_slider'>
        <Slider {...settings}>
            {[...Array(5).keys()].map((item, idx) => (
                <div className='w-full xs:w-1/2 md:w-1/2 md:w-1/3 lg:w-1/4 p-3 mt-[75px] text-center' key={"pkg" + idx}>
                    <Image src={IMAGES.Bridal1} alt="Bridal1" className="scale_img"/>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default BridalPackageSlider