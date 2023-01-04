import Image from 'next/image'
import React from 'react'
import BeauticianCard from '../../../component/feature/services/BeauticianCard'
import BridalPacakgeDetail from '../../../component/feature/services/BridalPacakgeDetail'
import ImageGallary from '../../../component/feature/services/ImageGallary'
import IncludeSection from '../../../component/feature/services/IncludeSection'
import ServiceFaq from '../../../component/feature/services/ServiceFaq'
import ThingsToKnow from '../../../component/feature/services/ThingsToKnow'

const ServiceDetail = () => {
  const data = [
    {name:'Deepika Singh', post: 'Makeup Artist & Hairstylist', exp: '8+ yrs experience'},
    {name:'Shashi Saxena', post: 'Beautician', exp: '7+ yrs experience'},
    {name:'Pooja Singhal', post: 'Makeup Artist & Hairstylist', exp: '8+ yrs experience'},
    {name:'Deepika Saxena', post: 'Beautician', exp: '6+ yrs experience'}
  ]
  return (
    <div className='container'>
        <div className='mb-6 mt-3'>
          <BridalPacakgeDetail/>
        </div>
        <IncludeSection/>
        <ThingsToKnow/>
        <ImageGallary/>
        <ServiceFaq/>
        <div>
          <h6 className='text-theme my-8 text-2xl font-medium'>Our Beauticians</h6>
          <div className='flex flex-wrap -m-6 justify-center items-stretch'>
          {data.map((item, idx) => (
            <div className='p-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4' key={idx+"beautician"}>
                <BeauticianCard item={item}/>
            </div>
          ))}
          </div>
        </div>
    </div>
  )
}

export default ServiceDetail