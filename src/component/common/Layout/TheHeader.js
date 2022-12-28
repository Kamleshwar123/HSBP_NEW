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
        <div className="header-nav">
          <div className="header-nav-left">
            <SvgIcon.Hamburger onClick={toggleDrawer} style={{ cursor: "pointer" }} />
            <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
            <div className="logo">
              <Link href={"/"}>
                <Image src={IMAGES.Logo} alt="logo" className="scale_img" />
              </Link>
            </div>
          </div>
          <div className="header-nav-right">
            <div className="cart-icon">
              <Image src={IMAGES.Cart} alt="cart" className="scale_img" />
            </div>
            <div className="app-icon">
              <p>DOWNLOAD APP</p>
              <Link href={"#"}>
                <Image src={IMAGES.AppStore} alt="app" className="scale_img" />
              </Link>
              <Link href={"#"}>
                <Image
                  src={IMAGES.GoogleStore}
                  alt="g-app"
                  className="scale_img"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
