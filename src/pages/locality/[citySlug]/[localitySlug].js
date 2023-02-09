import Image from 'next/image'
import React from 'react'
import LocalityTestimonial from '../../../component/feature/City/LocalityTestimonial';
import ICONS from '../../../constant/icons';
import IMAGES from '../../../constant/images'

const Area = () => {
    const productData = [ICONS.Brand1,ICONS.Brand2,ICONS.Brand3,ICONS.Brand4,ICONS.Brand5];
    const include = [
        {img: ICONS.LocalityInc1, label: "Premium Cosmetics"},
        {img: ICONS.LocalityInc2, label: "Trained Beauticians"},
        {img: ICONS.LocalityInc3, label: "Hygienic Service"},
        {img: ICONS.LocalityInc4, label: "Equipment"}
    ]
  return (
    <div className='my-3'>
      <div className='text-center'>
        <Image src={IMAGES.LocalityBanner} className="scale_img" alt="LocalityBanner"/>
      </div>
      <div className='container'>
        <div className='bg-[#FFD1D1] px-4 py-5 mt-5 rounded-3xl'>
            <div className='bg-white shadow-4D p-6 rounded-3xl text-black-2e2 text-xs'>
                <h6 className='text-base font-bold text-theme mb-2'>Best beauty parlor near by Sector-110, Noida for home service</h6>
                <div>
                    <p className='mb-3'>In Noida near by Sector-110 HSBP is one of best beauty parlor and ladies salon service provider at doorstep. HSBP also provide services like bridal makeup, birthday and kitty party makeup, hina, mehndi, hairdo, saree draping by best beauticians and makeup artists at your home.</p>
                    <p className='mb-3'>We are also serving services on festivals occasion like Lohri, Holi, Eid, Raksha Bandhan, Diwali, Karwa Chauth, Christmas in all sectors and colonies of Noida.</p>
                    <p className='mb-3 text-[13px] font-semibold'>Call us at +91-9911-027-026 to book best beautician near by Sector-110 in Noida.</p>
                    <p className='mb-3'>Simple way to book beautician / make-up artist in Sector-110, Noida.</p>
                </div>
            </div>
        </div>
        <div className='my-7 text-center sm:w-4/5 mx-auto'>
            <h3 className='text-xl md:text-3xl text-black mb-2'>Product We Served</h3>
        </div>
        <section>
            <div className='flex flex-wrap justify-center items-stretch -m-3'>
                {productData.map((item,idx) =>(
                    <div className='p-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-full' key={"productbox"+idx}>
                        <Image src={item} alt="" className='scale_img'/>
                    </div>
                ))}
            </div>
        </section>
        <div className='my-7 text-center sm:w-4/5 mx-auto'>
            <h3 className='text-xl md:text-3xl text-black mb-2'>What is Included</h3>
        </div>
        <section className='locality-include-bg rounded-3xl overflow-hidden'>
            <div className='grid grid-cols-12 gap-3 p-6'>
                {include.map((item,idx) =>(
                    <div className='col-span-12 sm:col-span-6 md:col-span-3 text-center' key={"includebox"+idx}>
                        <Image src={item?.img} alt="" className='mx-auto h-16 w-auto'/>
                        <p className='mt-2 text-black-0f0'>{item?.label}</p>
                    </div>
                ))}
            </div>
        </section>
        <div className='my-7 text-center sm:w-4/5 mx-auto'>
            <h3 className='text-xl md:text-3xl text-black mb-2'>How it Works</h3>
        </div>
        <section className='locality-include-bg rounded-3xl overflow-hidden'>
            <div className='grid grid-cols-5 gap-3 p-6'>
                <div className='col-span-1 text-center' >
                    <Image src={ICONS.LocalityBook} alt="" className='mx-auto h-16 w-auto'/>
                    <h6 className='my-2 text-black-0f0 text-bold'>Book</h6>
                    <p className='text-xs'>Share your need and information with us.</p>
                </div>
                <div className='col-span-1 text-center' >
                    <Image src={ICONS.LocalityShare} alt="" className='mx-auto h-16 w-auto'/>
                </div>
                <div className='col-span-1 text-center' >
                    <Image src={ICONS.LocalityShedual} alt="" className='mx-auto h-16 w-auto'/>
                    <h6 className='my-2 text-black-0f0 text-bold'>Schedule</h6>
                    <p className='text-xs'>Schedule a time for us to attend to you.</p>
                </div>
                <div className='col-span-1 text-center' >
                    <Image src={ICONS.LocalityShare} alt="" className='mx-auto h-16 w-auto'/>
                </div>
                <div className='col-span-1 text-center' >
                    <Image src={ICONS.LocalityRelax} alt="" className='mx-auto h-16 w-auto'/>
                    <h6 className='my-2 text-black-0f0 text-bold'>Relax</h6>
                    <p className='text-xs'>Our expert team will do the assigned task while you relax.</p>
                </div>
            </div>
        </section>
        <div className='my-7 text-center sm:w-4/5 mx-auto'>
            <h3 className='text-xl md:text-3xl text-black-0f0 mb-2'>Client's Feedback Regarding Service</h3>
        </div>
      </div>
      <LocalityTestimonial/>
    </div>
  )
}

export default Area