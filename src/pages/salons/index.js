import Image from 'next/image'
import React from 'react'
import ICONS from '../../constant/icons'
import IMAGES from '../../constant/images'

const SalonsPage = () => {
  return (
    <div className='container'>
        <div className='grid md:grid-flow-col gap-x-8 gap-y-4 my-6 items-center'>
            <div className='md:col-span-8'>
                <div className='flex flex-wrap items-center'>
                    <div className='w-full md:w-1/2'>
                        <h5 className='text-lg text-[#605F5F] font-medium'>HSBP Salon Centres</h5>
                    </div>
                    <div className='w-full md:w-1/4 px-2 py-2 md:py-0'>
                        <select className='form-control'>
                            <option>Select City</option>
                            <option>Agra</option>
                            <option>Delhi</option>
                            <option>Jaipur</option>
                        </select>
                    </div>
                    <div className='w-full md:w-1/4 px-2 py-2 md:py-0'>
                        <select className='form-control'>
                            <option>Select state</option>
                            <option>Gujrat</option>
                            <option>Punjab</option>
                            <option>Delhi</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='md:col-span-4 px-2'>
                <input type="text" className="form-control" placeholder='Search By Locality/pincode' />
            </div>
        </div>
        <div className='grid grid-flow-row md:grid-flow-col gap-8'>
            <div className='md:col-span-7 pb-5'>
                <div className='text-center'>
                <Image src={IMAGES.SalonBanner} alt="beauty" className="scale_img" />
                </div>
                <div className='text-241'>
                    {[...Array(6).keys()].map((item, idx) => (
                        <div className='shadow-8F rounded-3xl mt-7 p-5' key={`salon${idx}`}>
                            <div className='flex items-center justify-between'>
                                <div className='text-xl text-theme font-medium'>HSBP Salon</div>
                                <div>
                                    <Image src={ICONS.Location} alt="beauty" className="cursor-pointer scale_icon-24" />
                                </div>
                            </div>
                            <div className='my-4 text-xs'>
                                <div>C-56/11, Sector 62, Near Staller IT Park, Noda</div>
                                <div>Tel. : +91 958 257 7510 / 9582-577-510, E-mail : hsbpncr@gmail.com</div>
                            </div>
                            <div className='flex flex-wrap items-center justify-between mt-5 mb-2'>
                                <div className='inline-flex space-x-2 items-center'>
                                    <div><Image src={ICONS.Call} alt="beauty" className="scale_icon-18" /></div>
                                    <a href="tel: +91 9582-577-510">+91 9582-577-510</a>
                                </div>
                                <div className='inline-flex space-x-2 items-center'>
                                    <div><Image src={ICONS.Whatsapp} alt="beauty" className="scale_icon-18" /></div>
                                    <div className='cursor-pointer'>Whatsapp</div>
                                </div>
                                <div className='inline-flex space-x-2 items-center'>
                                    <div><Image src={ICONS.Review} alt="beauty" className="scale_icon-18" /></div>
                                    <div className='cursor-pointer'>Reviews</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='md:col-span-5'>
                <div className='text-center mb-10'>
                    <Image src={IMAGES.Map} alt="beauty" className="scale_img" />
                </div>
                <div className='bg-[#EEEEEE] shadow-[0px_6px_16px_#00000059] p-5 rounded-3xl'>
                        <div className='text-[#5B0F35] font-medium text-base text-center'>QUERY FORM</div>
                        <form className='mt-3'>
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
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                                <div className='mb-3'>
                                    <label className="form-label">Pin Code</label>
                                    <input type="text" className="form-control" placeholder='Enter Pin Code' />
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">Select City</label>
                                    <select className='form-control'>
                                        <option>Select City</option>
                                        <option>Agra</option>
                                        <option>Delhi</option>
                                        <option>Jaipur</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <textarea type="text" rows={4} className="form-control" placeholder='Enter your Query' />
                            </div>
                            <div className='text-center'>
                                <button className='custom_button'>SUBMIT</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SalonsPage