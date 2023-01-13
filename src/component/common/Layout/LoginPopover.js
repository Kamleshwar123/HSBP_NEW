import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import ICONS from '../../../constant/icons';

const LoginPopover = ({setOpen}) => {
    const router = useRouter();
  return (
    <div className="transition-all shadow-66 z-10 absolute right-0 top-10 flex flex-col items-start h-auto w-auto px-3 py-3 bg-white rounded-lg text-left text-black text-sm after:content-[''] after:absolute after:right-2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-white">
        <div>
            <div className="flex font-medium gap-2 cursor-pointer items-center">
            <Image src={ICONS.UserPopover} alt="UserPopover" className="h-4 w-auto" />
            <h6 className="font-medium">Hello User</h6>
            </div>
            <p className="text-xs whitespace-nowrap ml-6">To access your HSBP access</p>
            <button className="custom_button mt-2 ml-6" style={{fontSize: '12px', padding: '4px 12px'}} onClick={()=> {router.push("/login"); setOpen(false)}}>Sign Up</button>
        </div>
        <div className="my-2">
            <div className="flex font-medium gap-2 cursor-pointer items-center">
            <Image src={ICONS.UserCart} alt="cart" className="h-4 w-auto" />
            <h6 className="font-medium" onClick={()=> {router.push("/my-order"); setOpen(false)}}>My Order</h6>
            </div>
        </div>
    </div>
  )
}

export default LoginPopover