import React from 'react'

const IncludeSection = () => {
  return (
    <div className='bg-pink p-6 text-black-2a3 mb-5'>
            <div className='grid grid-cols-6 gap-6'>
                <div className='shadow-4D bg-white p-5 col-span-6 md:col-span-3 rounded-2xl'>
                    <h6 className='text-lg text-theme font-semibold'>What's Included?</h6>
                    <p className='mb-1'>Includes Blow Dry Hairstyling.</p>
                    <p className='mb-1'>Helps in hair growth</p>
                    <p className='mb-1'>Includes Blow Dry Hairstyling</p>
                    <p className='mb-1'> Helps in hair growth</p>
                </div>
                <div className='shadow-4D bg-white p-5 col-span-6 md:col-span-3 rounded-2xl'>
                    <h6 className='text-lg text-theme font-semibold'>Products</h6>
                    <p className='mb-1'> Makes one occasion ready</p>
                    <p className='mb-1'>Boosts Confidence</p>
                    <p className='mb-1'>Makes your hair Shinier.</p>
                    <p className='mb-1'>Makes your hair Frizz-Free</p>
                </div>
            </div>
        </div>
  )
}

export default IncludeSection