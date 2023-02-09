import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import IMAGES from '../../../constant/images'
import { SampleNextArrow, SamplePrevArrow } from '../../common/SliderArrow';

const CustomerReview = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
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
            }
        ]
    };
  return (
    <div className='bg-gray-eee p-6 rounded-2xl'>
        <h6 className='mb-5 text-theme text-lg font-medium'>Customer Review</h6>
        <div>
            <div className='review_slider'>
            <Slider {...settings}>
            {[...Array(6).keys()].map((item, idx) => (
                <div key={idx+"review"} className="w-full h-full">
                <div className='text-left m-2 relative'>
                    <Image src={IMAGES.Btesti} alt="layer" className='scale_img min-h-[250px]'/>
                    <Image src={IMAGES.BtestiProfile} alt="layer" className='absolute right-0 top-0 rounded-full' height={80} width={80}/>
                    <div className='absolute left-5 pr-2 top-4 text-white'>
                        <h6>Nikita Chaudhary</h6>
                        <p className='text-xs'>Beautician</p>
                    </div>
                    <div className='absolute px-5 left-5 top-[85px]'>
                        <p className='text-black-2e2 py-2 text-xs'>The beautician was efficient at work. I was happy with the waxing & pedicure session. Will definitely book again.</p>
                        <p className='text-black-a8a py-2 text-xs'>21 Dec. 2022</p>
                    </div>
                </div>
                </div>
            ))}
            </Slider>
            </div>
        </div>
                
                
                {/* <div key={idx+"review"} className="w-full h-full p-3">
                    <div className='z-10 relative'>
                    <Image src={IMAGES.ReviewTag} alt="layer" className='h-32 max-w-[220px]'/>
                    </div>
                    <div className='bg-[#F8F8F8] pt-10 p-5 relative ml-4 -mt-20'>
                        <Image src={IMAGES.BtestiProfile} alt="layer" className='absolute right-0 -top-14 rounded-full' height={100} width={100}/>
                        <div className='w-11/12'>
                            <p className='text-black-2e2 py-2 text-xs'>The beautician was efficient at work. I was happy with the waxing & pedicure session. Will definitely book again.</p>
                            <p className='text-black-a8a py-2 text-xs'>21 Dec. 2022</p>
                        </div>
                    </div>
                </div> */}
    </div>
  )
}

export default CustomerReview
