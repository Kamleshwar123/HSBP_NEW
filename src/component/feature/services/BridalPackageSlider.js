import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Slider from 'react-slick';
import IMAGES from '../../../constant/images';
import { SampleNextArrow, SamplePrevArrow } from '../../common/SliderArrow';
import ActiveShadow from './ActiveShadow';

const BridalPackageSlider = () => {
    const router = useRouter();
    const [select, setSelect] = useState(0);
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />,
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
    const data = [
        {name: "Reception", img: IMAGES.Bridal1},
        {name: "Celebrate Sangeet", img: IMAGES.Bridal2},
        {name: "Wedding", img: IMAGES.Bridal3},
        {name: "Engagement", img: IMAGES.Bridal4},
        {name: "Reception", img: IMAGES.Bridal1},
        {name: "Celebrate Sangeet", img: IMAGES.Bridal2},
        {name: "Wedding", img: IMAGES.Bridal3},
        {name: "Engagement", img: IMAGES.Bridal4}
    ]
  return (
    <div className='service_slider -m-3'>
        <Slider {...settings}>
            {data.map((item, idx) => (
                <div className='w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 text-center' key={"pkg" + idx}>
                    <div>
                        <Image src={item?.img} alt="Bridal1" className="scale_img"/>
                        <div className='py-3 cursor-pointer' onClick={()=> router.push("/services/bridal-package/1")}>
                            <h6 className={`text-lg px-3 capitalize font-semibold ${idx === select ? "text-theme" : "text-black-241"}`}>{item?.name}</h6>
                            <ActiveShadow val={(idx === select)}/>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default BridalPackageSlider