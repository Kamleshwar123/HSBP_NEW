import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import IMAGES from "../../../constant/images";
import SvgIcon from "../../../constant/SvgIcon";
const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });

const TheHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between gap-5 h-20">
          <div className="flex gap-5 items-center">
            <SvgIcon.Hamburger onClick={toggleDrawer} className='cursor-pointer' />
            <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
            <div>
              <Link href={"/"}>
                <Image src={IMAGES.Logo} alt="logo" height={40} className="scale_img" />
              </Link>
            </div>
          </div>
          <div className="flex gap-5 items-center">
              <Image src={IMAGES.Cart} alt="cart" height={30} className="scale_img cursor-pointer" />
              <p className="ml-5 font-semibold text-base text-black-707">DOWNLOAD APP</p>
              <Link href={"#"}>
                <Image src={IMAGES.AppStore} alt="app" className="scale_img" height={30}/>
              </Link>
              <Link href={"#"}>
                <Image
                  src={IMAGES.GoogleStore}
                  alt="g-app"
                  className="scale_img"
                  height={30}
                />
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
