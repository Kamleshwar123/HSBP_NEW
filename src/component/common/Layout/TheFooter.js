import Image from "next/image";
import Link from "next/link";
import React from "react";
import IMAGES from "../../../constant/images";
import SvgIcon from "../../../constant/SvgIcon";
import { FooterCity, LeftLink, RightLink, SocialLink } from "./FooterConfig";

const TheFooter = () => {
  return (
    <footer className="footer-bg mt-[30px] text-black opacity-[.84] pt-[30px] pb-[10px]">
      <div className="container">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5 justify-items-stretch">
          <div className="justify-self-start">
            <div>
              <Link href={"/"}>
                <Image src={IMAGES.Logo} alt="logo" className="max-w-100 h-auto" />
              </Link>
            </div>
            <p className="mt-4">
              India’s 1st Smart Salon serving you quality services and branded
              products both, at Salons & at Home, 24x7 through our user friendly
              app & website.
            </p>
          </div>
          <div className="justify-self-center">
              <ul>
                {LeftLink.map((item, idx) => (
                  <li key={"leftlink" + idx} className='list-style-none'>
                    <Link href={item?.srcUrl} className="leading-7 hover:text-theme">{item?.label}</Link>
                  </li>
                ))}
              </ul>
          </div>
          <div className="justify-self-center">
              <ul>
                {RightLink.map((item, idx) => (
                  <li key={"rightlink" + idx} className='list-style-none'>
                    <Link href={item?.srcUrl} className="leading-7 hover:text-theme">{item?.label}</Link>
                  </li>
                ))}
              </ul>
          </div>
          <div className="justify-self-end">
            <div className="footer-support">
              <p>Customer Care</p>
              <div className="my-5 text-xl font-semibold opacity-100">
                <div>
                  <a href="tel:9582577510">+91 958 257 7510</a>
                </div>
                <div>
                  <a href="mailto:hsbpncr@gmail.com">hsbpncr@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="footer-social">
              <h5 className="text-base font-medium opacity-100">CONNECT US</h5>
              <div className="flex items-center gap-4 my-4">
                {SocialLink.map((item, idx) => (
                  <div key={"sociallink" + idx}>
                    <Link href={item?.srcUrl} passHref>{item?.icon}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <ul className="flex flex-nowrap w-full items-center overflow-x-auto py-2 px-2">
            {FooterCity.map((item, idx) => (
              <li key={"city" + idx} className='list-style-none px-3 whitespace-nowrap relative after:absolute after:h-full after:w-[1px] after:top-0 after:right-0 after:bg-black'>{item}</li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span><SvgIcon.Security /></span>
            <span>Safe and Secure Transactions</span>
          </div>
          <div className="flex items-center gap-3">
            <span><SvgIcon.Trademark /></span>
            <span>Genuine products</span>
          </div>
          <div className="flex items-center gap-3">
            <span><SvgIcon.Quality /></span>
            <span>High quality & trusted professionals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
