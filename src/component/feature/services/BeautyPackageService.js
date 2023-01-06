import React from 'react'
import BeautyPackageBox from '../Home/BeautyPackage/BeautyPackageBox'
import Heading from '../Home/Heading'

const BeautyPackageService = () => {
  return (
    <div>
        <Heading
          title={"Beauty Packages"}
          desc={"We provide special offers for students and corporates"}
        />
        <div className='bg-pink p-6'>
            <div className='flex flex-wrap justify-center'>
                {[...Array(6).keys()].map((item, idx) => (
                    <div className='w-full md:w-1/2 lg:w-1/3 p-3 text-center' key={"pkg" + idx}>
                    <BeautyPackageBox item={item}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BeautyPackageService