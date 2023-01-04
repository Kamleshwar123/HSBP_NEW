import React from 'react'

const ServiceFaq = () => {
  return (
    <div className='bg-white p-6 mt-5 shadow-4D rounded-2xl text-[#605F5F]'>
        <h6 className='text-theme text-lg font-medium'>Frequently Asked Questions</h6>
        <p>If you have any further questions you can contact us</p>
        <div className='grid md:grid-cols-2 items-stretch gap-y-6 mt-6'>
            <div className='py-5 z-10'>
                <div className='divide-y divide-black-707 border border-black-707 rounded-3xl md:-mr-8 bg-white overflow-hidden'>
                    <div className='p-3 cursor-pointer font-semibold text-black-241 bg-gray-eee'>What should I do to prepare for waxing ?</div>
                    <div className='p-3 cursor-pointer'>What should I do to prepare for waxing ?</div>
                    <div className='p-3 cursor-pointer'>What should I do to prepare for waxing ?</div>
                    <div className='p-3 cursor-pointer'>What should I do to prepare for waxing ?</div>
                </div>
            </div>
            <div className='border border-theme p-5 pl-14 rounded-3xl bg-gray-eee bg-opacity-75'>
                <h6 className='text-black-241 text-base font-medium mb-3'>What should I do to prepare for waxing ?</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceFaq