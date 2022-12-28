import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import IMAGES from "../../../constant/images";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
  };
  return (
    <div className="home_banner_slider">
      <Slider {...settings}>
        <div className="home-banner-img">
          <Image src={IMAGES.Banner1} alt="Banner1" className="scale_img" />
          <div className="bann-con">
            <h1>Now Serving at your Home</h1>
            <h2>BEAUTICIANS/HAIRDRESSERS</h2>
            <div className="ban-btn1">
              <Link href={"/"} className="book-btn1">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="home-banner-img">
          <Image src={IMAGES.Banner2} alt="Banner2" className="scale_img" />
          <div className="bann-con">
            <div className="ban-btn1">
              <Link href={"/"} className="book-btn1">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="home-banner-img">
          <Image src={IMAGES.Banner3} alt="Banner3" className="scale_img" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
