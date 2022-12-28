import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import IMAGES from "../../../constant/images";

const BeautyPackage = () => {
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
    return (
        <div className='beauty_slider beauty_package bg-pink'>
            <Slider {...settings}>
                {[...Array(10).keys()].map((item, idx) => (
                    <div className='box' key={"pkg" + idx}>
                        <div className='inner_box'>
                            <div className='text-center package_img'>
                                <Image src={IMAGES.Beauty} alt="beauty" className="scale_img" width={150} height={150} />
                            </div>
                            <div className='content'>
                                <h3>Normal Packages</h3>
                                <p>Lotus Cleanup</p>
                                <p> Full Arms (Chocolate Wax)</p>
                                <p>Full Legs (Chocolate Wax)</p>
                                <p>VLCC Detan Pedicure</p>
                                <p>Eyebrow</p>
                                <p>Upper Lip</p>
                            </div>
                            <div className='my-3'><span className='price'>&#x20B9;1500</span><span className='off_price'>&#x20B9;2000</span></div>
                            <button className='custom_button'>Read More</button>
                        </div>
                    </div>
                ))
                }
            </Slider >
        </div >
    )
}

export default BeautyPackage