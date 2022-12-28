import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import IMAGES from '../../../constant/images';
import SvgIcon from '../../../constant/SvgIcon';

const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
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
        }
    ]
    return (
        <div className='testimonial'>
            <div className='testi_slider'>
                <Slider {...settings}>
                    {data && data?.map((item, idx) => (
                        < div className="testi_box" key={"testi" + idx}>
                            <Image src={item.image} alt="beauty" className="testi_bg scale_img" />
                            <div className="testi_profile">
                                <Image src={IMAGES.TestiProfile} alt="beauty" width={100} height={100} className="scale_img" />
                            </div>
                            <div className='testi_content'>
                                <h3>{item?.name}</h3>
                                <div><SvgIcon.Qauto className="quato" /></div>
                                <p>{item?.content}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials