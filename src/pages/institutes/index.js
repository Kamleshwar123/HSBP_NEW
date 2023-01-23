import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import ICONS from '../../constant/icons'
import IMAGES from '../../constant/images'
import SvgIcon from '../../constant/SvgIcon'
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const Institues = () => {
    const [openStateFilter, setOpenStateFilter]= useState(true);
    const router = useRouter();
    const countryData = ["Assam", "Banglore", "Bhopal", "Chennai", "Delhi", "Faridabad", "Gujarat", "Goa", "Jammu", "Telangana", "Haryana", "Himachal Pradesh", "Maharastra", "Rajasthan", "Punjab", "Uttar Pradesh"];
    const packageFilter = ["Reception", "Celebrate Sangeet", "Engagement", "Wedding", "Pre-Bridal Care"];
    return (
        <div className='container mt-3'>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-12 lg:col-span-3 md:col-span-4'>
                    <div className='institute_sidebar'>
                        <div className='bg-white shadow-filterbox rounded-[10px_10px_0_0] mb-5 overflow-hidden'>
                            <div className='theme-heading-box py-2 px-4 flex justify-between items-center cursor-pointer' onClick={()=> setOpenStateFilter(!openStateFilter)}>
                                <p>Filter by State</p>
                                <div><SvgIcon.IosArrowDown className={`scale-50 ${openStateFilter ? 'rotate-180' : "rotate-0"}`}/></div>
                            </div>
                            {openStateFilter &&
                            <div className='py-3 px-4'>
                                {countryData.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="form_check">
                                            <input type="checkbox" value="" id={idx + "cntry"} />
                                            <label htmlFor={idx + "cntry"} className='whitespace-nowrap'>
                                                {item}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>}
                        </div>
                        <div className='bg-white shadow-filterbox rounded-[10px_10px_0_0] mb-5 overflow-hidden'>
                            <div className='theme-heading-box px-4 py-2 items-center'>
                                <span>Bridal Packages</span>
                            </div>
                            <div className='py-3 px-4'>
                                {packageFilter.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="form_check">
                                            <input type="checkbox" value="" id={idx + "bdpkg"} />
                                            <label htmlFor={idx + "bdpkg"} className='whitespace-nowrap'>
                                                {item}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-9 md:col-span-8'>
                    <div className='institute'>
                        {[...Array(4).fill()].map((item, idx) => (
                            <div className='shadow-42 bg-white mb-7 rounded-[22px] overflow-hidden' key={idx}>
                                <div className='grid grid-cols-12 gap-y-5 place-items-stretch'>
                                    <div className='col-span-12 md:col-span-4'>
                                        <div className='text-center relative h-full'>
                                            <Image src={IMAGES.InsImg} alt="Salon" fill/>
                                        </div>
                                    </div>
                                    <div className='col-span-12 md:col-span-8'>
                                        <div>
                                            <div className='p-5'>
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <h6 className='text-theme text-xl font-semibold'>HSBP Studio</h6>
                                                        <p className='text-black-241'>Rohini, New Delhi</p>
                                                    </div>
                                                    <div>
                                                        <Image src={ICONS.InsLocation} className='scale_img w-8' alt=""/>
                                                        <span className='text-xs'>3.1 km</span>
                                                    </div>
                                                </div>
                                                <p className='py-1 text-[#707070] text-xs w-3/4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                                <div className='flex justify-between mt-2'>
                                                    <div>
                                                        <div className='text-black-707 text-xs'>AMBIENCE RATING</div>
                                                        <div><Ratings rating={4.5} size={"16px"}/></div>
                                                    </div>
                                                    <div className='text-right'>
                                                        <div><span className='bg-yellow px-3 py-1 text-white-fc text-xs rounded-lg'>4.5/5</span></div>
                                                        <p className='mt-1 text-xs text-black-707'>482 Reviews</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center sm:justify-between gap-7 mt-7'>
                                                    <button className='custom_button flex gap-1 items-center'><span><Image src={ICONS.InsBook} className='scale_img w-4' alt="InsBook"/></span><span>Book Appointment</span></button>
                                                    <button className='custom_button' onClick={()=> router.push("/salons/1")}>View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Institues