import Image from 'next/image'
import React from 'react'
import Enqueryform from '../../component/feature/Franchise/Enqueryform'
import IMAGES from '../../constant/images'

const Franchise = () => {
  return (
    <div className='container my-3 text-black-241'>
      <div className='text-center'>
        <Image src={IMAGES.FranchiseBanner} className="scale_img" alt="FranchiseBanner"/>
      </div>
      <div className='franchise-support-bg mt-6'>
        <div className='w-2/3 pt-6 px-7 pb-20'>
          <h1 className='font-semibold text-[42px]'>Franchise Support</h1>
          <hr className="text-theme w-24 border my-0" />
          <p className='my-5'>When you take on an HSBP Salon franchise, you can expect end-to-end support from the management at all stages of your salon’s lifecycle. Right from helping you choose the right location for greater footfalls to designing the salon’s layout and setting up the interiors and fittings, we are always there for you.</p>
        </div>
      </div>
      <div className='bg-[#DFDAE1] rounded-[40px] py-5 px-7 mt-6 bg-opacity-40'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-12 md:col-span-7'>
            <h1 className='font-semibold text-[42px]'>Criteria</h1>
            <hr className="text-theme w-24 border my-0" />
            <ul className='my-5 right-tick'>
              <li>Min. 900 sq. ft. owned/leased area</li>
              <li>Investment starting from Rs.10 Lakhs</li>
              <li>Should be passionate and devoted about the business</li>
              <li>Possess a customer-centric approach and exceed customer expectations</li>
              <li>Ability and skills to handle a team of beauty experts and professionals</li>   
            </ul>
          </div>
          <div className='col-span-12 md:col-span-5'>
            <Image src={IMAGES.Criteria} className="scale_img" alt="Criteria"/>
          </div>
        </div>
      </div>
      <div className='bg-[#DFDAE1] rounded-[40px] py-5 px-7 mt-6 bg-opacity-40'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-12 md:col-span-5'>
            <Image src={IMAGES.Criteria} className="scale_img" alt="Criteria"/>
          </div>
          <div className='col-span-12 md:col-span-7 pl-0 md:pl-6'>
            <h1 className='font-semibold text-[42px]'>Process</h1>
            <hr className="text-theme w-24 border my-0" />
            <div className='my-5'>
              <p className='pb-6'>Once you send an inquiry to join the HSBP Salon family, we check your eligibility and send across the agreement.</p>
              <p className='pb-6'>On the approval of the location, we help you with the setup and training.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Enqueryform/>
      </div>
    </div>
  )
}

export default Franchise