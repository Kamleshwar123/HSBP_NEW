import Image from 'next/image'
import React from 'react'
import ICONS from '../../constant/icons'
import IMAGES from '../../constant/images'

const ContactUs = () => {
  return (
    <div className='container mt-3'>
        <div className='bg-[#F5F5F5] bg-opacity-[0.83] px-6 py-8 rounded-2xl'>
            <div className='grid grid-cols-12 gap-5'>
              <div className='col-span-12 md:col-span-6'>
                <h6 className='text-base text-black font-bold'>DETAILS</h6>
                <div className='mt-5'>
                  <div className='inline-flex space-x-3 mb-2 items-center'>
                    <Image src={ICONS.Cuser} alt="contact-us" className='scale_icon-18'/>
                    <span className='text-theme font-semibold text-base'>Customer Care</span>
                  </div>
                  <p className='text-black mb-2'>+91 958-257-7510, 9582-577-510</p>
                  <p className='text-black-241'>Monday to Sunday 8.00 AM - 9.00 PM</p>
                </div>
                <hr className='my-5'/>
                <div className='mt-5'>
                  <div className='inline-flex space-x-3 mb-2 items-center'>
                    <Image src={ICONS.Cmail} alt="contact-us" className='h-3 w-auto'/>
                    <span className='text-theme font-semibold text-base'>Email ID</span>
                  </div>
                  <p className='text-black'>hsbpncr@gmail.com</p>
                </div>
                <hr className='my-5'/>
                <div className='mt-5'>
                  <div className='inline-flex space-x-3 mb-2 items-center'>
                    <Image src={ICONS.Location} alt="contact-us" className='scale_icon-18'/>
                    <span className='text-theme font-semibold text-base'>Social Media Pages</span>
                  </div>
                  <div className='mt-3'>
                    <div className='inline-flex space-x-2'>
                      <Image src={ICONS.Social1} alt="contact-us" className='scale_icon-24'/>
                      <Image src={ICONS.Social2} alt="contact-us" className='scale_icon-24'/>
                      <Image src={ICONS.Social3} alt="contact-us" className='scale_icon-24'/>
                      <Image src={ICONS.Social4} alt="contact-us" className='scale_icon-24'/>
                      <Image src={ICONS.Social5} alt="contact-us" className='scale_icon-24'/>
                      <Image src={ICONS.Social6} alt="contact-us" className='scale_icon-24'/>
                      <Image src={ICONS.Social7} alt="contact-us" className='scale_icon-24'/>
                    </div>
                  </div>
                </div>
                <hr className='my-5'/>
                <div className='mt-5'>
                  <div className='inline-flex space-x-3 mb-2 items-center'>
                    <Image src={ICONS.Partner} alt="contact-us" className='h-4 w-auto'/>
                    <span className='text-theme font-semibold text-base'>Our Partners</span>
                  </div>
                  <div>
                    <Image src={ICONS.AllPartner} alt="contact-us" className='max-w-4/5 h-auto'/>
                  </div>
                </div>
              </div>
              <div className='col-span-12 md:col-span-6'>
                <div className='py-5'>
                  <Image src={IMAGES.ContactUs} alt="contact-us" className='scale_img'/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs