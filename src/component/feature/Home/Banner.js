import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import IMAGES from "../../../constant/images";

const Banner = () => {
  const router = useRouter();
  const bannerList = useSelector(state => state.home.bannerList || []);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };
  return (
    <div className="home_banner_slider">
      <Slider {...settings}>
        <div className="relative">
          <Image src={IMAGES.Banner1} alt="Banner1" className="scale_img banner_img" />
          <div className="hidden md:block absolute bottom-[20px] pl-12 text-black-2a3">
            <h6 className="text-xl my-3">Now Serving at your Home</h6>
            <h2 className="text-2xl font-bold">BEAUTICIANS/HAIRDRESSERS</h2>
            <div className="mt-7">
              <span  className="custom_button" onClick={()=>router.push("/booknow")}>
              Book Now
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={IMAGES.Banner2} alt="Banner2" className="scale_img banner_img" />
          <div className="hidden md:block absolute bottom-[20px] pl-12 text-black-2a3">
            <div className="mt-7">
            <div  className="custom_button" onClick={()=>router.push("/booknow")}>
              Book Now
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={IMAGES.Banner3} alt="Banner3" className="scale_img banner_img" />
          <div className="hidden md:block absolute bottom-[20px] pl-12 text-black-2a3">
            <div className="mt-7">
            <div  className="custom_button" onClick={()=>router.push("/booknow")}>
              Book Now
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
