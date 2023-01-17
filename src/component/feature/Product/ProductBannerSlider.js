import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import IMAGES from '../../../constant/images';

const ProductBannerSlider = () => {
    var settings = {
        dots: true,
        arrows:true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
    };
  return (
    <div className='product_slider'>
        <Slider {...settings}>
            {[...Array(3).keys()].map((item, idx) => (
                <div key={idx+"p_banner"}>
                    <Image src={IMAGES.ProductBanner} alt="Salon" className="scale_img" />
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default ProductBannerSlider