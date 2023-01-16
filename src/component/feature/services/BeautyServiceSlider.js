import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import IMAGES from '../../../constant/images';
import { SampleNextArrow, SamplePrevArrow } from '../../common/SliderArrow';

const BeautyServiceSlider = ({serviceId,setServiceId,setServiceName}) => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
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
                breakpoint: 524,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const data = [
        {name: "BODY CARE", img: IMAGES.BeautySlider1},
        {name: "SKIN CARE", img: IMAGES.BeautySlider2},
        {name: "HAIR CARE", img: IMAGES.BeautySlider2},
        {name: "MAKEUP SERVICES", img: IMAGES.BeautySlider1},
        {name: "MEHNDI ART SERVICES", img: IMAGES.BeautySlider2},
        {name: "HAIR CARE", img: IMAGES.BeautySlider2},
        {name: "MAKEUP SERVICES", img: IMAGES.BeautySlider1},
        {name: "MEHNDI ART SERVICES", img: IMAGES.BeautySlider2}
    ]
  return (
    <div className='beauty_service_slider bg-gradient mt-3'>
        <Slider {...settings}>
            {data.map((item, idx) => (
                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 text-center' key={"pkg" + idx}>
                    <div>
                        <Image src={item.img} alt="Bridal1" className="cursor-pointer mx-auto rounded-full bg-white" height={90} width={90} onClick={()=> {setServiceName(item?.name);setServiceId(idx+1)}}/>
                        <div className={`pt-3 text-white cursor-pointer uppercase font-light ${serviceId === idx+1 ? 'font-bold' : "text-opacity-75"}`} onClick={()=> {setServiceName(item?.name);setServiceId(idx+1)}}>{item?.name}</div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default BeautyServiceSlider