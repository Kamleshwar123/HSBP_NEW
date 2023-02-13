import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import ICONS from '../../../constant/icons'
import IMAGES from '../../../constant/images'
import SvgIcon from '../../../constant/SvgIcon'
const Sidebar = ({ isOpen, toggleDrawer }) => {
    const router = useRouter();
    useEffect(() => {
        document.body.style.overflow = 'hidden';
      return () => {document.body.style.overflow = 'unset';}
    }, [])
    function isActiveClass (path) {
        return router.pathname === path ? true : false;
    }
    return (
        <Drawer
            lockBackgroundScroll={true}
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
            overlayOpacity={0.8}
            overlayColor={'#2e2e2e'}
            size={300}
            className='custom_drawer'
        >
            <div className='art-board-bg w-full text-black h-full'>
                <div className='h-full relative flex flex-col'>
                    <div className='relative'>
                        <div className='h-16 min-h-[64px] relative'>
                        <Image src={IMAGES.ArtBoardUpper} alt="SidebarFacebook" fill/>
                        </div>
                        <Image src={ICONS.SidebarProfileBg} alt="SidebarProfileBg" className='absolute top-[16px] left-[96px]' width={100}/>
                        <Image src={ICONS.CameraProfile} alt="CameraProfile" className='absolute top-[88px] left-[169px]' width={20}/>
                        <div className='absolute top-[16px] left-[96px] p-3'>
                            <Image src={ICONS.SidebarProfile} alt="SidebarProfile" className='h-16 max-w-[80px] rounded-[50%]'/>
                        </div>
                    </div>
                    <div className='text-center mt-12 py-3'>
                        <div className='inline-block mx-auto'>
                            <h6 className="font-bold text-center shadow-sidebar-name py-3 px-5 rounded-3xl">Aashvi Kaur</h6>
                        </div>
                        <p className='text-xs font-bold mt-3'>+91 8887-6978-14</p>
                    </div>
                    <ul className='font-bold flex-auto overflow-y-auto'>
                        <Link href={"/profile"}>
                            <li className={isActiveClass("/profile") ? "sidebar_menu active_menu": "sidebar_menu"} onClick={()=> toggleDrawer()}>
                                <div className='flex items-center'>
                                <Image src={ICONS.MyOrderMenu} alt="SidebarFacebook" width={45}/>
                                <h6>My Profile</h6>
                                </div>
                                <div><SvgIcon.IosArrowDown className='scale-50 -rotate-90' /></div>
                            </li>
                        </Link>
                        <Link href={"/my-order"}>
                            <li className={isActiveClass("/my-order") ? "sidebar_menu active_menu": "sidebar_menu"} onClick={()=> toggleDrawer()}>
                                <div className='flex items-center'>
                                <Image src={ICONS.MyOrderMenu} alt="SidebarFacebook" width={45}/>
                                <h6>My Orders</h6>
                                </div>
                                <div><SvgIcon.IosArrowDown className='scale-50 -rotate-90' /></div>
                            </li>
                        </Link>
                        <Link href={"/price-list"}>
                            <li className={isActiveClass("/price-list") ? "sidebar_menu active_menu": "sidebar_menu"} onClick={()=> toggleDrawer()}>
                                <div className='flex items-center'>
                                <Image src={ICONS.MyOrderMenu} alt="SidebarFacebook" width={45}/>
                                <h6>Price List</h6>
                                </div>
                                <div><SvgIcon.IosArrowDown className='scale-50 -rotate-90' /></div>
                            </li>
                        </Link>
                        <Link href={"/services"}>
                            <li className={isActiveClass("/services") ? "sidebar_menu active_menu": "sidebar_menu"} onClick={()=> toggleDrawer()}>
                                <div className='flex items-center'>
                                <Image src={ICONS.MyOrderMenu} alt="SidebarFacebook" width={45}/>
                                <h6>Salon at Home</h6>
                                </div>
                                <div><SvgIcon.IosArrowDown className='scale-50 -rotate-90' /></div>
                            </li>
                        </Link>
                        <Link href={"/salons"}>
                            <li className={isActiveClass("/salons") ? "sidebar_menu active_menu": "sidebar_menu"} onClick={()=> toggleDrawer()}>
                                <div className='flex items-center'>
                                <Image src={ICONS.MyOrderMenu} alt="SidebarFacebook" width={45}/>
                                <h6>Near by Salon</h6>
                                </div>
                                <div><SvgIcon.IosArrowDown className='scale-50 -rotate-90' /></div>
                            </li>
                        </Link>
                        <Link href={"/product-home"}>
                            <li className={isActiveClass("/product-home") ? "sidebar_menu active_menu": "sidebar_menu"} onClick={()=> toggleDrawer()}>
                                <div className='flex items-center'>
                                <Image src={ICONS.MyOrderMenu} alt="SidebarFacebook" width={45}/>
                                <h6>Beauty Products</h6>
                                </div>
                                <div><SvgIcon.IosArrowDown className='scale-50 -rotate-90' /></div>
                            </li>
                        </Link>
                        <Link href={"/franchise"}>
                            <li className={isActiveClass("/franchise") ? "sidebar_menu active_menu": "sidebar_menu"} onClick={()=> toggleDrawer()}>
                                <div className='flex items-center'>
                                <Image src={ICONS.MyOrderMenu} alt="SidebarFacebook" width={45}/>
                                <h6>Franchise</h6>
                                </div>
                                <div><SvgIcon.IosArrowDown className='scale-50 -rotate-90' /></div>
                            </li>
                        </Link>
                        <Link href={"/institutes"}>
                            <li className={isActiveClass("/institutes") ? "sidebar_menu active_menu": "sidebar_menu"} onClick={()=> toggleDrawer()}>
                                <div className='flex items-center'>
                                <Image src={ICONS.MyOrderMenu} alt="SidebarFacebook" width={45}/>
                                <h6>Training Centres</h6>
                                </div>
                                <div><SvgIcon.IosArrowDown className='scale-50 -rotate-90' /></div>
                            </li>
                        </Link>
                        <Link href={"/contact-us"}>
                            <li className={isActiveClass("/contact-us") ? "sidebar_menu active_menu": "sidebar_menu"} onClick={()=> toggleDrawer()}>
                                <div className='flex items-center'>
                                <Image src={ICONS.MyOrderMenu} alt="SidebarFacebook" width={45}/>
                                <h6>Contact us</h6>
                                </div>
                                <div><SvgIcon.IosArrowDown className='scale-50 -rotate-90' /></div>
                            </li>
                        </Link>
                        <Link href={"/"}>
                            <li className={isActiveClass("/noactive") ? "sidebar_menu active_menu": "sidebar_menu"} onClick={()=> toggleDrawer()}>
                                <div className='flex items-center'>
                                <Image src={ICONS.LogoutMenu} alt="SidebarFacebook" width={45}/>
                                <h6>Logout</h6>
                                </div>
                                <div><SvgIcon.IosArrowDown className='scale-50 -rotate-90' /></div>
                            </li>
                        </Link>
                    </ul>
                    <div className='flex items-start h-20 min-h-[80px] justify-center gap-2 pt-3'>
                        <div className='flex justify-center items-center'>
                            <Image src={ICONS.SidebarFacebook} alt="SidebarFacebook" width={40}/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Image src={ICONS.SidebarInstagram} alt="SidebarFacebook" width={40}/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Image src={ICONS.SidebarLinkedin} alt="SidebarFacebook" width={40}/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Image src={ICONS.SidebarTwitter} alt="SidebarFacebook" width={40}/>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    )
}

export default Sidebar