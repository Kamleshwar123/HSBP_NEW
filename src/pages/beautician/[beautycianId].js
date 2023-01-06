import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import BeautycianImgGallary from '../../component/feature/BeauticianDetail/BeautycianImgGallary'
import CustomerReview from '../../component/feature/BeauticianDetail/CustomerReview'
import ICONS from '../../constant/icons'
import IMAGES from '../../constant/images'
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const BeautycianDetails = () => {
  return (
    <div className='container'>
        <h1 className="text-center text-black-2e2 my-7 text-2xl lg:text-[42px] md:text-3xl w-3/4 mx-auto">Our Beauticians are our core Strength</h1>
        <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 md:col-span-4 text-center'>
                <Image src={IMAGES.Beautician} alt="Beautician" className="scale_img rounded-2xl"/>
            </div>
            <div className='col-span-12 md:col-span-8'>
                <div>
                    <h6 className='text-3xl font-medium'>Deepika Singh</h6>
                    <p className='text-base pt-2'>Beautician</p>
                    <p className='text-base pb-3'>10+ yrs experience</p>
                    <div className='inline-flex space-x-3 items-center'>
                        <Ratings rating={4.5}/>
                        <span>4.5/5</span>
                        <span>482 Reviews</span>
                    </div>
                    <div className='my-5 px-5 py-8 bg-gray-f3f rounded-2xl text-left relative'>
                    <Image src={ICONS.Qstart} alt="Qstart" className="scale_icon-18 absolute top-4 left-5"/>
                        <div className='px-8'>
                            <p>Deepika Singh is a makeup queen as well as Family Lawyer who rules the makeup industry and creates magic with her work and makes everyone spellbound with her extraordinary talent.</p>
                            <p className='mt-7'>Optimally praised in India and around the globe with her modernised magic and establishment for style and beauty totally follow PERFECTION.</p>
                        </div>
                        <Image src={ICONS.Qend} alt="Qend" className="scale_icon-18 absolute bottom-4 right-12"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-6'>
            <BeautycianImgGallary/>
        </div>
        <div className='mt-6'>
            <CustomerReview/>
        </div>
    </div>
  )
}

export default BeautycianDetails