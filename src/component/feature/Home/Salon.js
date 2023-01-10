import Image from 'next/image'
import {useRouter } from 'next/router'
import React from 'react'
import ICONS from '../../../constant/icons'
import IMAGES from '../../../constant/images'
import SvgIcon from '../../../constant/SvgIcon'
import SeeAll from '../../common/SeeAll'

const Salon = () => {
    const router = useRouter();
    return (
        <div>
            <div className='text-xl md:text-3xl text-black-2e2 text-center'>Discover the best salons near you</div>
            <div className='flex flex-wrap justify-center items-center gap-6 p-6'>
                <div className='flex justify-center md:justify-end w-[278px]'>
                    <label htmlFor="selectcity" className="relative block">
                        <SvgIcon.LocationTheme className="scale-75 pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"/>
                        <select className='form-control rounded-xl' id="selectcity" style={{paddingLeft: "40px"}}>
                            <option>Select City</option>
                            <option>Noida</option>
                            <option>Agra</option>
                            <option>Delhi</option>
                            <option>Jaipur</option>
                        </select>
                    </label>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch max-w-sm">
                    <SvgIcon.Search className="text-theme pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3"/>
                    <input type="text" placeholder="Search for Services" className="form-control rounded-xl pl-10"/>
                </div>
            </div>
            <div className='text-theme-light text-base'>Near by Salons</div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 py-6'>
                {[...Array(4).keys()].map((item, idx) => (
                    <div key={"salon" + idx}>
                        <div>
                            <div className='shadow-29 bg-white rounded-3xl pb-5'>
                                <div className='text-center'>
                                    <Image src={IMAGES.Salon} alt="Salon" className="scale_img" />
                                </div>
                                <div className='py-4 px-3 flex justify-between gap-3'>
                                    <div>
                                        <h3 className='text-theme text-base font-medium pb-2'>HSBP Studio</h3>
                                        <p className='text-xs'>Near Mahagun Mall,</p>
                                        <p className='text-xs'>Vaishali, Ghaziabad</p>
                                    </div>
                                    <div className='text-right'>
                                        <div className='flex justify-end text-white-fc'><span className='flex gap-1 bg-green items-center px-1 rounded'><span>4.5</span><span><SvgIcon.Rating /></span></span></div>
                                        <p className='text-xs mb-1'>482 Reviews</p>
                                        <div className='flex gap-1 items-center justify-end'>
                                            <a href="tel:+4733378901"><Image src={ICONS.Scall} alt="Scall" className="scale_icon-24"/></a>
                                            <a href="https://www.google.com/maps/place/1,+Block+B,+Sector+34,+Gurugram,+Haryana+122015/@28.4327897,77.0111773,17z/data=!3m1!4b1!4m5!3m4!1s0x390d181cdf34ffbb:0xc492782cb98402e1!8m2!3d28.432785!4d77.013366" rel="noopener noreferrer" target="_blank"><Image src={ICONS.Slocation} alt="Slocation" className="scale_icon-24"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='custom_button' onClick={()=> router.push('/salons/1')}>Book Appointment</button>
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