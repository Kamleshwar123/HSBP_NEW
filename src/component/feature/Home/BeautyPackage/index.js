import React from 'react'
import Slider from 'react-slick';
import SeeAll from '../../../common/SeeAll';
import { SampleNextArrow, SamplePrevArrow } from '../../../common/SliderArrow';
import BeautyPackageBox from './BeautyPackageBox';

const BeautyPackage = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className='container'>
            <div className='beauty_slider -m-3 pb-3'>
            <Slider {...settings}>
                {[...Array(9).keys()].map((item, idx) => (
                    <div className='h-full p-3 text-center' key={"pkg" + idx}>
                    <BeautyPackageBox item={item}/>
                    </div>
                ))}
            </Slider>
            <SeeAll text={"See All Packages"} url={"/services"} data={{tab: "tab2"}}/>
        </div>
        </div>
    )
}

export default BeautyPackage