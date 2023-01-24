import Image from "next/image";
import Link from "next/link";
import React from "react";
import IMAGES from "../../../constant/images";
import SvgIcon from "../../../constant/SvgIcon";
import { FooterCity, LeftLink, RightLink, SocialLink } from "./FooterConfig";

const TheFooter = () => {
  return (
    <footer className="mt-[30px]">
      <div className="footer-bg text-black opacity-[.84] pt-[30px] pb-[10px]">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 justify-items-stretch">
            <div className="justify-self-start">
              <div>
                <Link href={"/"}>
                  <Image src={IMAGES.Logo} alt="logo" className="sacle_img max-w-[70%]"/>
                </Link>
              </div>
              <p className="mt-4">
                India’s 1st Smart Salon serving you quality services and branded
                products both, at Salons & at Home, 24x7 through our user friendly
                app & website.
              </p>
            </div>
            <div className="md:justify-self-start lg:justify-self-center">
                <ul>
                  {LeftLink.map((item, idx) => (
                    <li key={"leftlink" + idx} className='list-style-none'>
                      <Link href={item?.srcUrl} className="leading-7 hover:text-theme">{item?.label}</Link>
                    </li>
                  ))}
                </ul>
            </div>
            <div className="md:justify-self-start lg:justify-self-center">
                <ul>
                  {RightLink.map((item, idx) => (
                    <li key={"rightlink" + idx} className='list-style-none'>
                      <Link href={item?.srcUrl} className="leading-7 hover:text-theme">{item?.label}</Link>
                    </li>
                  ))}
                </ul>
            </div>
            <div className="justify-self-start md:justify-self-end">
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
                      <Link href={item?.srcUrl} legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                          {item?.icon}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr className="opacity-50"/>
          <div>
            <ul className="flex flex-wrap w-full items-center justify-center divide divide-x px-5">
              {FooterCity.map((item, idx) => (
                <li key={"city" + idx} className='list-style-none px-3 whitespace-nowrap leading-4 my-2'>
                  <Link href={"/selectcity"}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="opacity-50"/>
          <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-5">
            <div className="flex flex-wrap items-center gap-3">
              <span><SvgIcon.Security className='scale-75'/></span>
              <span>Safe and Secure Transactions</span>
            </div>
            <div className="flex items-center gap-3">
              <span><SvgIcon.Trademark className='scale-75' /></span>
              <span>Genuine products</span>
            </div>
            <div className="flex items-center gap-3">
              <span><SvgIcon.Quality className='scale-75'/></span>
              <span>High quality & trusted professionals</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mx-auto w-4/5 text-[#827E81] text-sm p-3">
        <div className="mb-3">{`Copyright © ${new Date()?.getFullYear()} Home Service Beauty Parlour.`}</div>
        <div> All rights reserved | Terms of Use | Privacy Policy. Designed and Powered by 
          <a href={"https://abym.in/"} rel="noopener noreferrer" target="_blank" className="font-semibold text-[#827E81]">{" "}AbyM Technology</a>
          </div>
      </div>
    </footer>
  );
};

export default TheFooter;
