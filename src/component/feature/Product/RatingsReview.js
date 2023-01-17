import React, { useState } from 'react'
import SvgIcon from '../../../constant/SvgIcon'

const RatingsReview = () => {
  return (
    <div className='w-full md:w-2/3 flex gap-2 items-center'>
        <div className='p-5'>
            <div className='text-4xl text-[#212121] font-bold flex items-center justify-center'>
                <span>4.3</span>
                <SvgIcon.BlackStar className='w-8 h-8 ml-2'/>
            </div>
            <div className='text-lg text-center mt-3 text-[#878789]'>
            <div>29,143</div>
            <div>Ratings &</div>
            <div className='whitespace-nowrap'>2008 Review</div>
            </div>
        </div>
        <div className='w-full text-[#878789]'>
            <div className='flex my-3 items-center gap-3'>
                <div className='whitespace-nowrap text-lg text-[#212121] font-bold flex items-center w-12'>
                    <span>5</span>
                    <SvgIcon.BlackStar className='w-5 h-5 ml-1'/>
                </div>
                <div className='bg-[#f0f0f0] w-full h-3 rounded-3xl overflow-hidden'><div className='bg-[#358d42] h-full rounded-3xl' style={{width: "100%"}}></div></div>
                <div className='text-left text-lg font-medium w-24'>17,402</div>
            </div>
            <div className='flex my-3 items-center gap-3'>
                <div className='whitespace-nowrap text-lg text-[#212121] font-bold flex items-center w-12'>
                    <span>4</span>
                    <SvgIcon.BlackStar className='w-5 h-5 ml-1'/>
                </div>
                <div className='bg-[#f0f0f0] w-full h-3 rounded-3xl overflow-hidden'><div className='bg-[#358d42] h-full rounded-3xl' style={{width: "39%"}}></div></div>
                <div className='text-left text-lg font-medium w-24'>6,811</div>
            </div>
            <div className='flex my-3 items-center gap-3'>
                <div className='whitespace-nowrap text-lg text-[#212121] font-bold flex items-center w-12'>
                    <span>3</span>
                    <SvgIcon.BlackStar className='w-5 h-5 ml-1'/>
                </div>
                <div className='bg-[#f0f0f0] w-full h-3 rounded-3xl overflow-hidden'><div className='bg-[#358d42] h-full rounded-3xl' style={{width: "14%"}}></div></div>
                <div className='text-left text-lg font-medium w-24'>2,553</div>
            </div>
            <div className='flex my-3 items-center gap-3'>
                <div className='whitespace-nowrap text-lg text-[#212121] font-bold flex items-center w-12'>
                    <span>2</span>
                    <SvgIcon.BlackStar className='w-5 h-5 ml-1'/>
                </div>
                <div className='bg-[#f0f0f0] w-full h-3 rounded-3xl overflow-hidden'><div className='bg-[#ffa02d] h-full rounded-3xl' style={{width: "5%"}}></div></div>
                <div className='text-left text-lg font-medium w-24'>1,023</div>
            </div>
            <div className='flex my-3 items-center gap-3'>
                <div className='whitespace-nowrap text-lg text-[#212121] font-bold flex items-center w-12'>
                    <span>1</span>
                    <SvgIcon.BlackStar className='w-5 h-5 ml-1'/>
                </div>
                <div className='bg-[#f0f0f0] w-full h-3 rounded-3xl overflow-hidden'><div className='bg-[#ff6365] h-full rounded-3xl' style={{width: "6%"}}></div></div>
                <div className='text-left text-lg font-medium w-24'>1,353</div>
            </div>
        </div>
    </div>
  )
}

export default RatingsReview