import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Slider from 'react-slick';
import IMAGES from "../../../../constant/images";
import SvgIcon from '../../../../constant/SvgIcon';

const BeautyService = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        { title: "Body Care", desc: "We provide special offers for students and corporates" },
        { title: "Skin Care", desc: "Pamper Your Skin and Unleash a Beautiful You !" },
        { title: "Hair Care", desc: "From Couture Cut revitalising Treatment we've got it all !" },
        { title: "Body Care", desc: "We provide special offers for students and corporates" },
        { title: "Skin Care", desc: "Pamper Your Skin and Unleash a Beautiful You !" },
        { title: "Hair Care", desc: "From Couture Cut revitalising Treatment we've got it all !" },
        { title: "Body Care", desc: "We provide special offers for students and corporates" }
    ]
    return (
        <div className='bg-pink beauty_service'>
            <div className='beauty_slider'>
                <Slider {...settings}>
                    {data && data?.map((item, idx) => (
                        < div className='beauty_box' key={"beauty" + idx}>
                            <div className='inner_box'>
                                <div className='img_box'>
                                    <div className='corner upper_corner'></div>
                                    <Image src={IMAGES.HairCut} alt="beauty" className="scale_img" />
                                    <div className='corner lower_corner'></div>
                                </div>
                                <h3>{item?.title}</h3>
                                <p>{item.desc}</p>
                                <button className='custom_button'>Read More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='link_text'>
                <Link href={"/"} legacyBehavior>
                    <a>See All Beauty Services <span><SvgIcon.LinkArrow /></span></a>
                </Link>
            </div>
        </div >
    )
}

export default BeautyService