import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import IMAGES from "../../../constant/images";

const Banner = () => {
  var settings = {
    dots: true,
    arrow:false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };
  return (
    <div className="home_banner_slider">
      <Slider {...settings}>
        <div className="relative">
          <Image src={IMAGES.Banner1} alt="Banner1" className="scale_img" />
          <div className="hidden md:block absolute bottom-[20px] pl-12 text-black-2a3">
            <h6 className="text-xl my-3">Now Serving at your Home</h6>
            <h2 className="text-2xl font-bold">BEAUTICIANS/HAIRDRESSERS</h2>
            <div className="mt-7">
              <Link href={"/"} className="custom_button">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={IMAGES.Banner2} alt="Banner2" className="scale_img" />
          <div className="hidden md:block absolute bottom-[20px] pl-12 text-black-2a3">
            <div className="mt-7">
              <Link href={"/"} className="custom_button">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={IMAGES.Banner3} alt="Banner3" className="scale_img" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
