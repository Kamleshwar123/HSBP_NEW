import Image from "next/image";
import Link from "next/link";
import React from "react";
import IMAGES from "../../../constant/images";
import SvgIcon from "../../../constant/SvgIcon";
import { FooterCity, LeftLink, RightLink, SocialLink } from "./FooterConfig";

const TheFooter = () => {
  return (
    <footer className="footer">
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
            <div className="footer_page_list">
              <ul>
                {LeftLink.map((item, idx) => (
                  <li key={"leftlink" + idx}>
                    <Link href={item?.srcUrl} className="footer_menu">{item?.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="footer_page_list">
              <ul>
                {RightLink.map((item, idx) => (
                  <li key={"rightlink" + idx}>
                    <Link href={item?.srcUrl} className="footer_menu">{item?.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="justify-self-end">
            <div className="footer_support">
              <p>Customer Care</p>
              <div>
                <a href="tel:9582577510">+91 958 257 7510</a>
              </div>
              <div>
                <a href="mailto:hsbpncr@gmail.com">hsbpncr@gmail.com</a>
              </div>
            </div>
            <div className="footer_social">
              <h1>CONNECT US</h1>
              <ul>
                {SocialLink.map((item, idx) => (
                  <li key={"sociallink" + idx}>
                    <Link href={item?.srcUrl} passHref>{item?.icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer_city">
          <ul>
            {FooterCity.map((item, idx) => (
              <li key={"city" + idx}>{item}</li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="flex flex-wrap items-center justify-between footer_lower gap-5">
          <div className="flex flex-wrap items-center">
            <span><SvgIcon.Security /></span>
            <span className="text">Safe and Secure Transactions</span>
          </div>
          <div className="flex items-center">
            <span><SvgIcon.Trademark /></span>
            <span className="text">Genuine products</span>
          </div>
          <div className="flex items-center">
            <span><SvgIcon.Quality /></span>
            <span className="text">High quality & trusted professionals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
