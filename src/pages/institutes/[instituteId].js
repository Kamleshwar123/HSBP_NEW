import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import Slider from 'react-slick'
import { SampleNextArrow, SamplePrevArrow } from '../../component/common/SliderArrow'
import BeautyService from '../../component/feature/services/BeautyService'
import ICONS from '../../constant/icons'
import IMAGES from '../../constant/images'
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const course = [
  {label: "Diet And Nutrition", img: IMAGES.Course1},
  {label: "Cosmetology", img: IMAGES.Course2},
  {label: "Cosmetology", img: IMAGES.Course3},
  {label: "Hair Designing", img: IMAGES.Course4},
  {label: "Dermatology", img: IMAGES.Course5},
  {label: "Permanent Makeup", img: IMAGES.Course6}
]
const InstitueDetail = () => {
  const [selectedDate,setSelectedDate]= useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  }
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow style={{width: "95px", height: "95px"}}/>,
    nextArrow: <SampleNextArrow style={{width: "95px", height: "95px"}}/>,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
            }
        }
    ]
};
  return (
    <div className='container mt-3 -mb-[30px]'>
        <div className='text-center'>
          <Image src={IMAGES.InstituteDetailBanner} className='scale_img' alt="InstituteBanner"/>
        </div>
        <div className='grid grid-cols-12 items-start mt-6 gap-y-6'>
          <div className='col-span-12 md:col-span-5'>
            <div className='text-center'>
              <Image src={IMAGES.WhyHsbp} className='scale_img' alt="WhyHsbp"/>
            </div>
          </div>
          <div className='col-span-12 md:col-span-7 px-7'>
            <h1 className='text-[42px] text-theme border-b border-theme'>Why <b>HSBP?</b></h1>
            <p className='text-base mt-3'>Prioritizing future through our Quality Education</p>
            <p className='mt-3'>New image international beauty institute, established in 2006, is one of the leading beauty institutes focusing on empowering young minds through excellent advanced beauty, makeup & cosmetic education while scaling its wings with 13+ branches till now.</p>
            <ul className='whyhsbp mt-6'>
              <li>Focus On Practical Work</li>
              <li>World Class Infrastructure</li>
              <li>Latest Hi-Tech Techniques</li>
              <li>Industry Expert Teachers</li>
              <li>Internationally Recognised With 10+ Organisations World Wide</li>
            </ul>
            <button className='h-10 w-36 custom_button'>Read More</button>
          </div>
        </div>
        <div className="mt-8 mb-5 text-center w-3/4 mx-auto">
          <h1 className="md:text-[42px] sm:text-3xl text-2xl">Our Courses</h1>
          <p className="sm:text-lg text-base mt-3">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='grid grid-cols-12 gap-6'>
          {course.map((item, idx)=> (
            <div className='col-span-12 md:col-span-4' key={`course${idx}`}>
              <div className='text-center'>
                <Image src={item.img} className='scale_img' alt="WhyHsbp"/>
                <h6 className='mt-3 my-1 text-base'>{item.label}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 mb-5 text-center w-3/4 mx-auto">
          <h1 className="md:text-[42px] sm:text-3xl text-2xl">Events & Awards</h1>
          <p className="sm:text-lg text-base mt-3">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='grid grid-cols-12 gap-6'>
          {[...Array(3).fill()].map((item, idx)=> (
            <div className='col-span-12 md:col-span-4' key={`course${idx}`}>
              <div className='text-center'>
                <Image src={IMAGES.Award} className='scale_img' alt="WhyHsbp"/>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 mb-5 text-center w-3/4 mx-auto">
          <h1 className="md:text-[42px] sm:text-3xl text-2xl">Student Speaks</h1>
          <p className="sm:text-lg text-base mt-3">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='grid grid-cols-12 gap-6'>
          {[...Array(3).fill()].map((item, idx)=> (
            <div className='col-span-12 md:col-span-4' key={`course${idx}`}>
              <div className='relative h-full text-center speak-bg rounded-2xl overflow-hidden'>
                <Image src={IMAGES.Logo} alt="logo" className="absolute right-2 top-2 w-auto mx-auto h-4" />
                <div className='py-3 px-6'>
                  <h6 className='text-black-0f0 text-base mb-3'>Student Speaks</h6>
                  <Image src={IMAGES.Speakprofile} alt="logo" className="h-24 w-24 mx-auto" />
                  <h6 className='text-base mt-2 text-black-0f0'>Pooja Gupta</h6>
                  <div className='text-black-0f0'><span className='text-theme mt-2'>Post Graduation Diploma</span> in Cosmetology</div>
                  <p className='text-xs mt-1'>HSBP Institute has given my skills new wings of learning and getting trained for Beauty Industry. Experienced faculty & supportive admin staff have helped me a lot during my course.</p>
                  <Image src={ICONS.ClientRating} alt="logo" className="mx-auto w-auto h-12 my-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <section className='insti-testi-bg mt-6 py-7'>
          <div className='grid grid-cols-12 gap-6 pt-16 px-12'>
            <div className='col-span-12 md:col-span-5'>
              <div className='text-white pt-10 pl-10 hidden lg:block'>
                <h3 className='text-4xl font-medium'>Testimonial</h3>
                <p className='mt-4 text-lg font-Montserrat'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
              </div>
            </div>
            <div className='col-span-12 md:col-span-7'>
              <div className='-m-3 insti_testi_slider'>
              <Slider {...settings}>
                <div className='p-3'>
                  <div className='shadow-ins-testi bg-white p-6 text-center rounded-2xl'>
                    <Image src={IMAGES.Instestiprofile1} alt="Instestiprofile1" className="h-24 w-24 mx-auto" />
                    <p className='text-[#444444] text-xs pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make......</p>
                    <hr className='my-3 text-theme w-28 mx-auto'/>
                    <div className='text-base font-medium text-[#3D3D3D]'>Anurag Bansal</div>
                    <Ratings rating={4} size={"12px"}/>
                  </div>
                </div>
                <div className='p-3'>
                  <div className='shadow-ins-testi bg-white p-6 text-center rounded-2xl'>
                    <Image src={IMAGES.Instestiprofile2} alt="Instestiprofile1" className="h-24 w-24 mx-auto" />
                    <p className='text-[#444444] text-xs pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make......</p>
                    <hr className='my-3 text-theme w-28 mx-auto'/>
                    <div className='text-base font-medium text-[#3D3D3D]'>Priya Gupta</div>
                    <Ratings rating={4} size={"12px"}/>
                  </div>
                </div>
                <div className='p-3'>
                  <div className='shadow-ins-testi bg-white p-6 text-center rounded-2xl'>
                    <Image src={IMAGES.Instestiprofile1} alt="Instestiprofile1" className="h-24 w-24 mx-auto" />
                    <p className='text-[#444444] text-xs pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make......</p>
                    <hr className='my-3 text-theme w-28 mx-auto'/>
                    <div className='text-base font-medium text-[#3D3D3D]'>Anurag Bansal</div>
                    <Ratings rating={4} size={"12px"}/>
                  </div>
                </div>
              </Slider>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default InstitueDetail