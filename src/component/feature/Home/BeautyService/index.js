import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import Slider from 'react-slick';
import IMAGES from "../../../../constant/images";
import SvgIcon from '../../../../constant/SvgIcon';
import SeeAll from '../../../common/SeeAll';

const BeautyService = () => {
    const router = useRouter();
    const handleRedirect = (url,data) => {
        router.push({
            pathname: url,
            query: data
        }, url)
    }
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
        { title: "Body Care", desc: "We provide special offers for students and corporates", _data: {type: 1}},
        { title: "Skin Care", desc: "Pamper Your Skin and Unleash a Beautiful You !", _data: {type: 2} },
        { title: "Hair Care", desc: "From Couture Cut revitalising Treatment we've got it all !", _data: {type: 3} },
        { title: "Body Care", desc: "We provide special offers for students and corporates" , _data: {type: 1}},
        { title: "Skin Care", desc: "Pamper Your Skin and Unleash a Beautiful You !" , _data: {type: 2}},
        { title: "Hair Care", desc: "From Couture Cut revitalising Treatment we've got it all !" , _data: {type: 3}},
        { title: "Body Care", desc: "We provide special offers for students and corporates" , _data: {type: 2}}
    ]
    return (
        <div className='bg-pink p-6'>
            <div className='beauty_slider'>
                <Slider {...settings}>
                    {data && data?.map((item, idx) => (
                        < div className='p-3 text-center' key={"beauty" + idx}>
                            <div className='service-bg p-5 rounded-3xl cursor-pointer' onClick={()=> handleRedirect("/services", item._data)}>
                                <div className='text-center relative'>
                                    <div className='corner upper_corner'></div>
                                    <Image src={IMAGES.HairCut} alt="beauty" className="scale_img" />
                                    <div className='corner lower_corner'></div>
                                </div>
                                <div className='px-3'>
                                <h3 className='text-2xl text-theme font-medium pt-4 pb-2'>{item?.title}</h3>
                                <p className='pb-4'>{item.desc}</p>
                                <button className='custom_button'>Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <SeeAll text={"See All Beauty Services"} url={"/services"}/>
        </div >
    )
}

export default BeautyService