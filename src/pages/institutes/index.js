import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import IMAGES from '../../constant/images'
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const Institues = () => {
    const router = useRouter();
    const countryData = ["Assam", "Banglore", "Bhopal", "Chennai", "Delhi", "Faridabad", "Gujarat", "Goa", "Jammu", "Telangana", "Haryana", "Himachal Pradesh", "Maharastra", "Rajasthan", "Punjab", "Uttar Pradesh"];
    const packageFilter = ["Reception", "Celebrate Sangeet", "Engagement", "Wedding", "Pre-Bridal Care"];
    return (
        <div className='container mt-3'>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-12 lg:col-span-3 md:col-span-4'>
                    <div className='institute_sidebar'>
                        <div className='bg-white shadow-filterbox rounded-[10px_10px_0_0] mb-5 overflow-hidden'>
                            <div className='theme-heading-box py-3 px-4'>
                                <span className='border-b border-white pb-1'>Filter by State</span>
                            </div>
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
                            </div>
                        </div>
                        <div className='bg-white shadow-filterbox rounded-[10px_10px_0_0] mb-5 overflow-hidden'>
                            <div className='theme-heading-box py-3 px-4'>
                                <span className='border-b border-white pb-1'>Bridal Packages</span>
                            </div>
                            <div className='py-3 px-4'>
                                {packageFilter.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="form_check">
                                            <input type="checkbox" value="" id={idx + "cntry"} />
                                            <label htmlFor={idx + "cntry"} className='whitespace-nowrap'>
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
                            <div className='shadow-42 bg-white mb-7 rounded-[22px]' key={idx}>
                                <div className='flex flex-col md:flex-row place-items-stretch'>
                                    <div className='md:w-5/12'>
                                        <div className='text-center'>
                                            <Image src={IMAGES.HairCut} alt="Salon" className="scale_img md:rounded-l-3xl" height={300} />
                                        </div>
                                    </div>
                                    <div className='md:w-auto'>
                                        <div>
                                            <div className='p-5'>
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <h6 className='text-theme text-lg'>HSBP Studio</h6>
                                                        <p className='text-black-241'>Rohini, New Delhi</p>
                                                    </div>
                                                    <div>
                                                        <span>location</span>
                                                    </div>
                                                </div>
                                                <p className='py-2 text-[#707070] text-xs'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                                <div className='flex justify-between my-2'>
                                                    <div>
                                                        <div className='text-black-707 mb-2'>AMBIENCE RATING</div>
                                                        <div><Ratings rating={4.5} /></div>
                                                    </div>
                                                    <div className='text-right'>
                                                        <div><span className='bg-yellow p-2 text-white-fc text-xs rounded-lg'>4.5/5</span></div>
                                                        <p className='mt-2'>482 Reviews</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center sm:justify-between gap-7 mt-7'>
                                                    <button className='custom_button'>Book Appointment</button>
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