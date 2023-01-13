import Image from 'next/image'
import React, { useState } from 'react'
import IMAGES from '../../../constant/images'
import BeautyServiceSlider from './BeautyServiceSlider'
import CareBox from './CareBox'
import CheckoutBox from './CheckoutBox'

const BeautyService = ({type}) => {
  const [serviceId, setServiceId]= useState(type || 3);
  const [serviceName, setServiceName]= useState("Hair Care");
  const advData = [
    {label: "Trusted Professionals", img: IMAGES.Adv1},
    {label: "Branded Products", img: IMAGES.Adv2},
    {label: "Satisfaction Guaranteed", img: IMAGES.Adv3},
    {label: "Reasonable Price", img: IMAGES.Adv4}
  ]
  return (
    <div className='container'>
        <BeautyServiceSlider serviceId={serviceId} setServiceId={setServiceId} setServiceName={setServiceName}/>
        <div className='grid md:grid-cols-12 gap-7 my-5'>
          <div className='md:col-span-7'>
            <div className='shadow-66 rounded-2xl overflow-hidden'>
              <div className='theme-heading-box'>{serviceName}</div>
              <div className='text-black-2a3 divide-y divided-black-body px-5'>
              {[...Array(3).keys()].map((item, idx) => (
                <React.Fragment key={`care${idx}`}>
                  <CareBox/>
                </React.Fragment>
              ))}
              </div>
            </div>
          </div>
          <div className='md:col-span-5'>
              <CheckoutBox/>
          </div>
        </div>
        <div className='bg-pink-light bg-opacity-30 py-5 px-7 text-black-2e2'>
          <h6 className='font-bold text-base'>Home beauty service packages for your monthly need at an affordable price</h6>
          <p className='mt-5'>Being a women means juggling with a myriad of responsibilities. It's difficult to carve out time for yourself. We tried to make it bit easier for you.</p>
          <p className='mt-5'> We bring you customized beauty packages to cater your grooming essentials at most jaw-dropping prices. Although you still have the flexibility to add services even after the expert has arrived at your home.</p>
          <p className='mt-5'> We also provide pre-bridal services to make your wedding experience delightful and hassle-free in every possible way. On busy days of your wedding, stay at your home and our beautician will reach you to pamper. Get ready for your big day with all comforts at your home.</p>
        </div>
        <div>
          <div className='my-6 text-center'>
            <Image src={IMAGES.HSBPAdv} alt="HSBPAdv" className="scale_img"/>
            <h4 className='mt-4 text-theme text-xl font-bold'>HSBP Advantage</h4>
          </div>
          <div className='flex flex-wrap gap-7 text-center text-black-2e2 items-end justify-evenly'>
            {advData.map((item,idx)=> (
              <div key={`adv${idx}`}>
                <Image src={item?.img} alt="HSBPAdv" className="mx-auto w-auto max-h-75"/>
                <p className='font-bold py-2'>{item?.label}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default BeautyService