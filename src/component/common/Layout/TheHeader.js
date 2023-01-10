import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ICONS from "../../../constant/icons";
import IMAGES from "../../../constant/images";
import SvgIcon from "../../../constant/SvgIcon";
import OutsideClick from "../../../hooks/useOutClick";
const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });

const TheHeader = () => {
  const router = useRouter();
  console.log(router);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className='w-full bg-white top-0 sticky z-[999] shadow-header'>
      <div className="container">
        <div className="flex items-center justify-between gap-5 h-20">
          <div className="flex gap-3 items-center">
            <SvgIcon.Hamburger onClick={toggleDrawer} className='cursor-pointer text-black-707' />
            <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
            <div>
              <Link href={"/"}>
                <Image src={IMAGES.Logo} alt="logo" height={40} className="scale_img" />
              </Link>
            </div>
          </div>
          <div className="flex gap-5 items-center">
              <p className="ml-5 font-semibold text-base text-black-707 hidden md:block">DOWNLOAD APP</p>
              <Link href={"/"} className='hidden md:block'>
                <Image src={IMAGES.AppStore} alt="app" className="scale_img" height={30}/>
              </Link>
              <Link href={"/"} className='hidden md:block'>
                <Image
                  src={IMAGES.GoogleStore}
                  alt="g-app"
                  className="scale_img"
                  height={30}
                />
              </Link>
              <Link href="/cart" legacyBehavior>
                <Image src={ICONS.Cart} alt="cart" height={30} className="scale_img cursor-pointer" />
              </Link>
              <OutsideClick open={open} setOpen={setOpen}>
              <div className="relative flex flex-col items-center">
                <button className="font-semibold text-sm text-black-707 cursor-pointer inline-block" onClick={()=>setOpen(!open)}>Login</button>
                {open &&
                  <div className="transition-all shadow-66 z-10 absolute right-0 top-10 flex flex-col items-start h-auto w-auto px-3 py-3 bg-white rounded-lg text-left text-black text-sm after:content-[''] after:absolute after:right-2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-white">
                  <div>
                    <div className="flex font-medium gap-2 cursor-pointer items-center">
                    <Image src={ICONS.UserPopover} alt="UserPopover" className="h-4 w-auto" />
                    <h6 className="font-medium">Hello User</h6>
                    </div>
                    <p className="text-xs whitespace-nowrap">To access your HSBP access</p>
                    <button className="custom_button mt-2" style={{fontSize: '12px', padding: '4px 12px'}} onClick={()=> {router.push("/login"); setOpen(false)}}>Sign Up</button>
                  </div>
                  <div className="my-2">
                    <div className="flex font-medium gap-2 cursor-pointer items-center">
                    <Image src={ICONS.UserCart} alt="cart" className="h-4 w-auto" />
                    <h6 className="font-medium">My Order</h6>
                    </div>
                  </div>
                </div>
                }
              </div>
              </OutsideClick>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
