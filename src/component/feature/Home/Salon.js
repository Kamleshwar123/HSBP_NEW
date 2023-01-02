import Image from 'next/image'
import Link from 'next/link'
import {useRouter } from 'next/router'
import React from 'react'
import IMAGES from '../../../constant/images'
import SvgIcon from '../../../constant/SvgIcon'
import SeeAll from '../../common/SeeAll'

const Salon = () => {
    const router = useRouter();
    return (
        <div className='bg-pink p-6'>
            <div className='text-2xl text-black-2e2 text-center'>Discover the best salons near you</div>
            <div className='grid md:grid-cols-2 justify-center aling-center gap-7 py-7 sm:px-10'>
                <div>
                    <div className='flex'>
                        <input name="city" type="text" placeholder="Search by City" className='form-control' />
                        <button className="sendLinkBtn">SEARCH</button>
                    </div>
                </div>
                <div>
                    <div className='flex'>
                        <input name="name" type="text" placeholder="Search by Salon Name" className='form-control'/>
                        <button className="sendLinkBtn">SEARCH</button>
                    </div>
                </div>
            </div>
            <div className='text-theme-light'>Near by Salons</div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 py-6'>
                {[...Array(4).keys()].map((item, idx) => (
                    <div key={"salon" + idx}>
                        <div>
                            <div className='shadow-29 bg-white rounded-3xl cursor-pointer' onClick={()=> router.push('/salons/1')}>
                                <div className='text-center'>
                                    <Image src={IMAGES.Salon} alt="Salon" className="scale_img" />
                                </div>
                                <div className='p-4 flex justify-between gap-3'>
                                    <div>
                                        <h3 className='text-theme text-base font-medium'>HSBP Studio</h3>
                                        <p className='text-xs'>Near Mahagun Mall,</p>
                                        <p className='text-xs'>Vaishali, Ghaziabad</p>
                                    </div>
                                    <div className='text-right'>
                                        <div className='flex justify-end text-white-fc'><span className='flex gap-1 bg-green items-center p-1 rounded'><span>4.5</span><span><SvgIcon.Rating /></span></span></div>
                                        <p className='text-xs my-2'>482 Reviews</p>
                                        <div className='flex gap-3 items-center'>
                                            <SvgIcon.Call className="cursor-pointer" onClick={(e)=> e.stopPropagation()}/>
                                            <SvgIcon.Location className="cursor-pointer" onClick={(e)=> e.stopPropagation()}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center pb-4 px-2'>
                                    <button className='custom_button' onClick={(e)=> e.stopPropagation()}>Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <SeeAll text={"See All Salons"} url={"/salons"}/>
        </div>
    )
}

export default Salon