import React from 'react'
import SvgIcon from '../../../constant/SvgIcon'

const OderDetailStep = ({orderStatus,statusData}) => {
    const renderActiveStep = (item,idx) => {
        return (
            <div className='flex flex-col items-center relative'>
                <div className={`font-semibold absolute flex flex-col whitespace-nowrap -top-8 ${idx === 0 ? 'left-0': 'justify-center text-center'}`}>
                    <p className='text-[#0B6804]'>{item?.label}</p>
                    <p className='mt-12'>{item?.date}</p>
                </div>
                <div className="bg-[#0B6804] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                    <SvgIcon.Stepcheck/>
                </div>
            </div>
        )
    }
    const renderStep = (item,idx) => {
        return (
            <div className='flex flex-col items-center relative'>
                <div className={`absolute flex flex-col whitespace-nowrap -top-8 ${idx === 0 ? 'left-0': 'justify-center text-center'}`}>
                    <p>{item?.label}</p>
                    <p className='mt-12'>{item?.date}</p>
                </div>
                <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                    <div className="h-[50%] w-[50%] bg-[#7B7B7B] rounded-[50%]"></div>
                </div>
            </div>
        )
    }
    const renderMdActiveStep = (item,idx) => {
        return (
            <div className='flex flex-col items-center relative'>
                <div className="absolute flex flex-col whitespace-nowrap left-10 -top-0">
                <p className='text-[#0B6804] text-semibold'>{item?.label}</p>
                <p className='mt-2'>{item?.date}</p>
                </div>
                <div className="bg-[#0B6804] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                    <SvgIcon.Stepcheck/>
                </div>
            </div>
        )
    }
    const renderMdStep = (item,idx) => {
        return (
            <div className='flex flex-col items-center relative'>
                <div className="absolute flex flex-col whitespace-nowrap left-10 -top-0">
                <p>{item?.label}</p>
                <p className='mt-2'>2{item?.date}</p>
                </div>
                <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                    <div className="h-[50%] w-[50%] bg-[#7B7B7B] rounded-[50%]"></div>
                </div>
            </div>
        )
    }
  return (
    <div className="py-20">
        <div className="mx-auto text-xs">
{/*             <div  className="bg-gray-e5e h-2 flex items-center justify-between text-xs text-black-685 w-full">
                <div className='flex flex-col items-start'>
                    <p className='text-[#0B6804] mb-2'>Booked</p>
                    <div className="bg-[#0B6804] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <SvgIcon.Stepcheck/>
                    </div>
                    <p className='mt-2'>20 Jan, 2023</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-[#0B6804] mb-2'>Confirmed</p>
                    <div className="bg-[#0B6804] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <SvgIcon.Stepcheck/>
                    </div>
                    <p className='mt-2'>21 Jan, 2023</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-[#0B6804] mb-2'>Shipped</p>
                    <div className="bg-[#0B6804] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <SvgIcon.Stepcheck/>
                    </div>
                    <p className='mt-2'>22 Jan, 2023</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='mb-2'>Out for Delivery</p>
                    <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                    <div className="h-3 w-3 bg-[#7B7B7B] rounded-full"></div>
                    </div>
                    <p className='mt-2'>23 Jan, 2023</p>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='mb-2'>Delivered</p>
                    <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                    <div className="h-3 w-3 bg-[#7B7B7B] rounded-full"></div>
                    </div>
                    <p className='mt-2'>24 Jan, 2023</p>
                </div>
            </div> */}
            <ol className="hidden items-center justify-center w-auto sm:flex">
                {statusData.map((item,idx)=> (
                    <React.Fragment key={"stpe"+idx}>
                        {item?.status <= orderStatus ? renderActiveStep(item, idx) : renderStep(item,idx)}
                        {idx < (statusData?.length-1) && <div className="w-[140px] border-t-8 transition duration-500 ease-in-out border-gray-e5e"></div>}
                    </React.Fragment>
                ))}
                {/* <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-gray-e5e"></div>
                <div className='flex flex-col items-center relative'>
                    <div className='absolute flex flex-col justify-center -top-8 whitespace-nowrap'>
                    <p className='text-[#0B6804]'>Confirmed</p>
                    <p className='mt-12'>21 Jan, 2023</p>
                    </div>
                    <div className="bg-[#0B6804] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <SvgIcon.Stepcheck/>
                    </div>
                </div>
                <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-gray-e5e"></div>
                <div className='flex flex-col items-center relative'>
                    <div className='absolute flex flex-col justify-center -top-8 whitespace-nowrap'>
                    <p className='text-[#0B6804]'>Shipped</p>
                    <p className='mt-12'>22 Jan, 2023</p>
                    </div>
                    <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <div className="h-3 w-3 bg-[#7B7B7B] rounded-full"></div>
                    </div>
                </div>
                <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-gray-e5e"></div>
                <div className='flex flex-col items-center relative'>
                    <div className='absolute flex flex-col justify-center -top-8 whitespace-nowrap'>
                    <p className='text-[#0B6804]'>Out for Delivery</p>
                    <p className='mt-12'>23 Jan, 2023</p>
                    </div>
                    <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <div className="h-3 w-3 bg-[#7B7B7B] rounded-full"></div>
                    </div>
                </div>
                <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-gray-e5e"></div>
                <div className='flex flex-col items-center relative'>
                    <div className='absolute flex flex-col justify-center -top-8 whitespace-nowrap'>
                    <p className='text-[#0B6804]'>Delivered</p>
                    <p className='mt-12'>25 Jan, 2023</p>
                    </div>
                    <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <div className="h-3 w-3 bg-[#7B7B7B] rounded-full"></div>
                    </div>
                </div> */}
            </ol>

            <ol className="flex flex-col items-center sm:hidden">
                {statusData.map((item,idx)=> (
                    <React.Fragment key={"stpe"+idx}>
                        {item?.status <= orderStatus ? renderMdActiveStep(item, idx) : renderMdStep(item,idx)}
                        {idx < (statusData?.length-1) && <div className="h-[80px] border-l-8 transition duration-500 ease-in-out border-gray-e5e"></div>}
                    </React.Fragment>
                ))}
                {/* <div className='flex flex-col items-center relative'>
                    <div className='absolute flex flex-col left-10 -top-0 whitespace-nowrap'>
                    <p className='text-[#0B6804]'>Booked</p>
                    <p className='mt-2'>20 Jan, 2023</p>
                    </div>
                    <div className="bg-[#0B6804] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <SvgIcon.Stepcheck/>
                    </div>
                </div>
                <div className="flex-auto border-l-8 transition duration-500 ease-in-out border-gray-e5e"></div>
                <div className='flex flex-col items-center relative'>
                    <div className='absolute flex flex-col left-10 -top-0 whitespace-nowrap'>
                    <p className='text-[#0B6804]'>Confirmed</p>
                    <p className='mt-2'>21 Jan, 2023</p>
                    </div>
                    <div className="bg-[#0B6804] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <SvgIcon.Stepcheck/>
                    </div>
                </div>
                <div className="flex-auto border-l-8 transition duration-500 ease-in-out border-gray-e5e"></div>
                <div className='flex flex-col items-center relative'>
                    <div className='absolute flex flex-col left-10 -top-0 whitespace-nowrap'>
                    <p className='text-[#0B6804]'>Shipped</p>
                    <p className='mt-2'>22 Jan, 2023</p>
                    </div>
                    <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <div className="h-3 w-3 bg-[#7B7B7B] rounded-full"></div>
                    </div>
                </div>
                <div className="flex-auto border-l-8 transition duration-500 ease-in-out border-gray-e5e"></div>
                <div className='flex flex-col items-center relative'>
                    <div className='absolute flex flex-col left-10 -top-0 whitespace-nowrap'>
                    <p className='text-[#0B6804]'>Out for Delivery</p>
                    <p className='mt-2'>23 Jan, 2023</p>
                    </div>
                    <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <div className="h-3 w-3 bg-[#7B7B7B] rounded-full"></div>
                    </div>
                </div>
                <div className="flex-auto border-l-8 transition duration-500 ease-in-out border-gray-e5e"></div>
                <div className='flex flex-col items-center relative'>
                    <div className='absolute flex flex-col left-10 -top-0 whitespace-nowrap'>
                    <p className='text-[#0B6804]'>Delivered</p>
                    <p className='mt-2'>25 Jan, 2023</p>
                    </div>
                    <div className="bg-[#9D9D9D] h-6 w-6 rounded-[50%] shadow flex items-center justify-center">
                        <div className="h-3 w-3 bg-[#7B7B7B] rounded-full"></div>
                    </div>
                </div> */}
            </ol>
        </div>
    </div>
  )
}

export default OderDetailStep