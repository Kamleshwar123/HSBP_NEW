import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import IMAGES from '../../../constant/images';
import SvgIcon from '../../../constant/SvgIcon';
import { SampleNextArrow, SamplePrevArrow } from '../../common/SliderArrow';

const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        {
            name: "DEEPIKA SINGH",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            image: IMAGES.Testimonial1
        },
        {
            name: "DIVYA BAJAJ",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            image: IMAGES.Testimonial2
        },
        {
            name: "UTSAV MONDAL",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            image: IMAGES.Testimonial3
        },
        {
            name: "ADITYA ARORA",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            image: IMAGES.Testimonial3
        },
        {
            name: "ADITYA ARORA",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            image: IMAGES.Testimonial3
        },
        {
            name: "ADITYA ARORA",
            content: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            image: IMAGES.Testimonial3
        }
    ]
    return (
        <div className='theme-bg py-3'>
            <div className="px-5">
                <div className='testi_slider'>
                    <Slider {...settings}>
                        {data && data?.map((item, idx) => (
                            < div className=" h-full w-full text-center relative" key={"testi" + idx}>
                                <Image src={item.image} alt="beauty" className="block scale_img" />
                                <div className="absolute top-[0px] text-center w-full">
                                    <Image src={IMAGES.TestiProfile} alt="beauty" width={100} height={100} className="scale_img" />
                                </div>
                                <div className='absolute top-[120px] margin-auto text-center'>
                                    <h3 className='text-base text-theme-light font-medium'>{item?.name}</h3>
                                    <div className='-mt-12 -mb-5 flex justify-center'><SvgIcon.Qauto className="scale-50"/></div>
                                    <p className='text-xs font-medium px-20'>{item?.content}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials