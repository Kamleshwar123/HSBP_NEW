import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import SeeAll from '../../component/common/SeeAll'
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
            <div className='text-center'>
                <Image src={IMAGES.InstituteBanner} className="scale_img" alt="InstituteBanner"/>
            </div>
            <div className='-mt-7 mb-9 shadow-insti-search rounded-3xl bg-white p-6 w-[90%] mx-auto relative z-10'>
                <h3 className='text-lg text-theme font-semibold mb-2 text-center'>Beauty Training Center Search</h3>
                <div className='grid grid-cols-12 gap-6 enquryform'>
                    <div className='col-span-12 md:col-span-4'>
                        <label className="form-label">Institute / Center Name</label>
                        <div className="flex w-full flex-wrap items-stretch relative">
                            <input type="text" placeholder="Search Institute Name" className="form-control pr-10"/>
                            <SvgIcon.Search className="text-black-949 pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3"/>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-4'>
                        <label className="form-label">State</label>
                        <select className='form-control'>
                            <option>Select State</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className='col-span-12 md:col-span-4'>
                        <label className="form-label">Course</label>
                        <select className='form-control'>
                            <option>Select Course</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="institute_list">
                {[...Array(4).fill()].map((item, idx) => (
                    <div className='bg-[#FFDFDF] bg-opacity-50 rounded-2xl mb-6 overflow-hidden' key={idx}>
                        <div className='grid grid-cols-12 gap-y-5 md:place-items-stretch'>
                            <div className='col-span-12 md:col-span-3'>
                                <div className='text-center relative h-full min-h-[160px]'>
                                    <Image src={IMAGES.InsImg} alt="Salon" fill/>
                                </div>
                            </div>
                            <div className='col-span-12 md:col-span-9'>
                                <div className='p-5 text-black-241'>
                                    <div className='flex flex-wrap items-center justify-between'>
                                    <div className='text-xl text-theme font-bold'>HSBP Salon</div>
                                        <div className='inline-flex space-x-3 text-xs'>
                                            <div className='inline-flex items-center space-x-1'>
                                                <Image src={ICONS.Share} alt="Share" className="cursor-pointer scale_icon-24" />
                                                <span>Share</span>
                                            </div>
                                            <div className='inline-flex items-center space-x-1'>
                                                <Image src={ICONS.Direction} alt="Direction" className="cursor-pointer scale_icon-24" />
                                                <span>Get Direction</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-3 text-xs'>
                                        <div>C-56/11, Sector 62, Near Staller IT Park, Noda</div>
                                        <div>E-mail : hsbpncr@gmail.com</div>
                                    </div>
                                    <div className='flex flex-wrap items-center justify-between mt-5'>
                                        <div className='inline-flex space-x-2 items-center'>
                                            <div><Image src={ICONS.Call} alt="beauty" className="mx-auto max-h-[16px] w-auto" /></div>
                                            <a href="tel: +91 9582-577-510">+91 9582-577-510</a>
                                        </div>
                                        <SeeAll text={"See Salon Detail"} url={"/institutes/1"} data={{}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='ins-form-bg py-6'>
                <div className='enquryform bg-white max-w-md sm:ml-10 p-5 rounded-[30px] mx-3 sm:mx-0'>
                    <div className='mb-3'>
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder='Enter Name' />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" placeholder='10 Digital Mobile No.' />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Email Address</label>
                        <input type="text" className="form-control" placeholder='Enter Email Address' />
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6'>
                    <div className='mb-3'>
                            <label className="form-label">State</label>
                            <select className='form-control'>
                                <option>Select State</option>
                                <option>Agra</option>
                                <option>Delhi</option>
                                <option>Jaipur</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label className="form-label">City</label>
                            <select className='form-control'>
                                <option>Select City</option>
                                <option>Agra</option>
                                <option>Delhi</option>
                                <option>Jaipur</option>
                            </select>
                        </div>
                    </div>
                    <div className='mb-3'>
                    <label className="form-label">Query</label>
                        <textarea type="text" rows={8} className="form-control" placeholder='Enter your Query' />
                    </div>
                    <div className='text-center'>
                        <button className='custom_button w-32'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Institues