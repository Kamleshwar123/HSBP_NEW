import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
const Sidebar = ({ isOpen, toggleDrawer }) => {
    const router = useRouter();
    useEffect(() => {
        document.body.style.overflow = 'hidden';
      return () => {document.body.style.overflow = 'unset';}
    }, [])
    function isActiveClass (path) {
        return router.pathname === "/"+path ? "bg-gradient text-white" : "";
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
            <div className='bg-white px-5 py-7'>
                <ul className='font-bold'>
                    <Link href={"/profile"}>
                        <li className={`py-2 px-5 mb-1 rounded-lg ${isActiveClass("profile")}`} onClick={()=> toggleDrawer()}>My Profile </li>
                    </Link>
                    <Link href={"/my-order"}>
                        <li className={`py-2 px-5 mb-1 rounded-lg ${isActiveClass("my-order")}`} onClick={()=> toggleDrawer()}>My Orders</li>
                    </Link>
                    <Link href={"/"}>
                        <li className={`py-2 px-5 mb-1 rounded-lg ${isActiveClass("/")}`} onClick={()=> toggleDrawer()}>Logout</li>
                    </Link>
                </ul>
            </div>
        </Drawer>
    )
}

export default Sidebar