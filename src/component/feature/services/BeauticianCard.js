import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import IMAGES from '../../../constant/images'

const BeauticianCard = ({item}) => {
  const router = useRouter();
  return (
    <div 
      className='h-full shadow-beautician bg-white text-center text-black-0f0 rounded-3xl overflow-hidden cursor-pointer'
      onClick={()=> router.push('/beautician/1')}
    >
      <div className='text-center'>
        <Image src={IMAGES.Beautician} alt="Beautician" className="scale_img"/>
      </div>
      <div className='p-5'>
        <h6 className='pb-2 text-theme text-base'>{item?.name}</h6>
        <p className='pb-2'>{item?.post}</p>
        <p className='pb-2'>{item?.exp}</p>
        <div className='text-blue-274 font-medium'>Read More</div>
      </div>
    </div>
  )
}

export default BeauticianCard