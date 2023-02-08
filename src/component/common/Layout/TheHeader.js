import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ICONS from "../../../constant/icons";
import IMAGES from "../../../constant/images";
import SvgIcon from "../../../constant/SvgIcon";
import OutsideClick from "../../../hooks/useOutClick";
import { setOpenLoginModal } from "../../../redux/Slices/commonSlice";
import LoginPopover from "./LoginPopover";
import SearchProduct from "./SearchProduct";
const Login = dynamic(() => import('../Login'), { ssr: false });
const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });

const TheHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openLoginModal = useSelector((state) => state.common.openLoginModal);
  function closeModal() {
    dispatch(setOpenLoginModal(false));
  }
  function openModal() {
    dispatch(setOpenLoginModal(true));
  }
  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  console.log(router)
  const haveSearchBox = ["/faqs","/franchise", "/products", "/product-home", "/products/[productId]", "/my-order", '/service-order/[orderId]', '/salon-order/[orderId]',"/product-order/[orderId]","/institutes","/institutes/[instituteId]"]
  return (
    <header className='w-full bg-white sticky top-0 z-[999] shadow-header'>
      <div className="container">
        <div className="flex justify-between items-center gap-5 h-20">
          <div className="flex gap-3 items-center">
            <SvgIcon.Hamburger onClick={toggleDrawer} className='cursor-pointer text-black-707' />
            {isOpen && <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />}
            <div>
              <Link href={"/"}>
                <Image src={IMAGES.Logo} alt="logo" className="w-auto mx-auto h-9" />
              </Link>
            </div>
            {haveSearchBox.includes(router.pathname) &&
              <>
                <div className="hidden md:inline">
                  <SearchProduct/>
                </div>
                {/* <div className="inline md:hidden">
                  <SearchProduct/>
                </div> */}
              </>
            }
          </div>
          <div className="flex gap-3 items-center justify-self-end">
              {router?.pathname === "/" && <Link href={"/price-list"} className="p-1 font-semibold text-theme">Price List</Link>}
              <p className="ml-5 font-bold text-black-707 hidden lg:block">DOWNLOAD APP</p>
              <Link href={"/"} className='hidden lg:block'>
                <Image
                  src={IMAGES.GoogleStore}
                  alt="g-app"
                  className="scale_img"
                  height={30}
                />
              </Link>
              <Link href={"/"} className='hidden lg:block'>
                <Image src={IMAGES.AppStore} alt="app" className="scale_img" height={30}/>
              </Link>
              <Link href="/cart" legacyBehavior>
                <Image src={ICONS.Cart} alt="cart" height={25} className="scale_img cursor-pointer" />
              </Link>
              <OutsideClick open={open} setOpen={setOpen}>
              <div className="relative flex flex-col items-center">
                <button className="font-semibold text-sm text-black-707 cursor-pointer inline-block" onClick={()=>setOpen(!open)}>Login</button>
                {open &&
                  <LoginPopover setOpen={setOpen} openModal={openModal}/>
                }
              </div>
              </OutsideClick>
          </div>
        </div>
      </div>
      <Login isOpen={openLoginModal} closeModal={closeModal}/>
    </header>
  );
};

export default TheHeader;
