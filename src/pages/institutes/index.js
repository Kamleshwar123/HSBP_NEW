import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import IMAGES from '../../constant/images'
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const Institues = () => {
    const countryData = ["Assam", "Banglore", "Bhopal", "Chennai", "Delhi", "Faridabad", "Gujarat", "Goa", "Jammu", "Telangana", "Haryana", "Himachal Pradesh", "Maharastra", "Rajasthan", "Punjab", "Uttar Pradesh"];
    const packageFilter = ["Reception", "Celebrate Sangeet", "Engagement", "Wedding", "Pre-Bridal Care"];
    return (
        <div className='container mt-3'>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-12 lg:col-span-3 md:col-span-4'>
                    <div className='institute_sidebar'>
                        <div className='filter_box'>
                            <h5>
                                <span className='filter_title'>Filter by State</span>
                            </h5>
                            <div className='filter_content'>
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
                        <div className='filter_box'>
                            <h5>
                                <span className='filter_title'>Bridal Packages</span>
                            </h5>
                            <div className='filter_content'>
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
                            <div className='institute_box' key={idx}>
                                <div className='flex flex-col md:flex-row place-items-stretch'>
                                    <div className='md:w-5/12'>
                                        <div className='text-center'>
                                            <Image src={IMAGES.HairCut} alt="Salon" className="scale_img md:rounded-l-3xl" height={300} />
                                        </div>
                                    </div>
                                    <div className='md:w-auto'>
                                        <div className='right_box'>
                                            <div className='institute_inner_box'>
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
                                                    <button className='custom_button'>View Details</button>
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