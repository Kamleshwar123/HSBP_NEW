import React from 'react'
import Slider from 'react-slick';
import SeeAll from '../../../common/SeeAll';
import BeautyPackageBox from './BeautyPackageBox';

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
        <div className='beauty_slider bg-pink p-6'>
            <Slider {...settings}>
                {[...Array(9).keys()].map((item, idx) => (
                    <div className='w-full md:w-1/2 lg:w-1/3 p-3 mt-[75px] text-center' key={"pkg" + idx}>
                    <BeautyPackageBox item={item}/>
                    </div>
                ))}
            </Slider>
            <SeeAll text={"See All Packages"} url={"/services"} data={{tab: "tab2"}}/>
        </div>
    )
}

export default BeautyPackage