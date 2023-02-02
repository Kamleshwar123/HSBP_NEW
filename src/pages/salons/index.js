import Image from 'next/image'
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import SeeAll from '../../component/common/SeeAll'
import ICONS from '../../constant/icons'
import IMAGES from '../../constant/images'

const SalonsPage = () => {
  return (
    <div className='container'>
        <div className='grid grid-cols-12 gap-6 my-6 items-center'>
            <div className='col-span-12 md:col-span-3'>
                <h5 className='text-lg text-[#605F5F] font-bold'>HSBP Salon Centres</h5>
            </div>
            <div className='col-span-12 md:col-span-4'>
                <div className='flex'>
                <input name="city" type="text" placeholder="Search by City" className='form-control pr-6 salonsearchinput' />
                <button className="sendLinkBtn -ml-3">SEARCH</button>
                </div>
            </div>
            <div className='col-span-12 md:col-span-5'>
                <div className='flex'>
                    <input name="name" type="text" placeholder="Search by Salon Name" className='form-control pr-6 salonsearchinput'/>
                    <button className="sendLinkBtn -ml-3">SEARCH</button>
                </div>
            </div>
        </div>
        <div className='grid grid-flow-row md:grid-flow-col gap-6'>
            <div className='md:col-span-7 pb-5'>
                <div className='text-center'>
                <Image src={IMAGES.SalonBanner} alt="beauty" className="scale_img" />
                </div>
                <div className='text-241'>
                    {[...Array(6).keys()].map((item, idx) => (
                        <div className='shadow-8F rounded-3xl mt-7 px-5 py-3' key={`salon${idx}`}>
                            <div className='flex flex-wrap items-center justify-between'>
                                <div className='text-xl text-theme font-medium'>HSBP Salon</div>
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
                                <SeeAll text={"See Salon Detail"} url={"/salons/1"} data={{}}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='md:col-span-5'>
                <div className='bg-[#EEEEEE] shadow-[0px_6px_16px_#00000059] p-5 rounded-3xl'>
                        <div className='text-[#5B0F35] font-semibold text-base text-center'>QUERY FORM</div>
                        <form className='mt-3 queryform'>
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
                                    <label className="form-label">Pin Code</label>
                                    <input type="text" className="form-control" placeholder='Enter Pin Code' />
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
                            <div className='grid grid-cols-12'>
                            <div className='md:col-span-12 mb-3'>
                            <div className='recaptcha'>
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_SITE_KEY || "6LdT4gckAAAAALAO8LIr88ZGcCtkO2s6dGOmOwcq"}
                                />
                            </div>
                            </div>
                            </div>
                            <div className='text-center'>
                                <button className='custom_button' style={{paddingRight: "50px",paddingLeft: "50px"}}>SUBMIT</button>
                            </div>
                        </form>
                </div>
                <div className='text-center mt-10'>
                    <Image src={IMAGES.Map} alt="beauty" className="scale_img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SalonsPage