import Image from 'next/image'
import React from 'react'
import IMAGES from '../../../constant/images'

const AppDownload = () => {
    return (
        <div className='app_download'>
            <div className='grid md:grid-cols-[40%_60%] items-center'>
                <div className='p-8'>
                    <div className='text-center'>
                        <div className='app_mobile max-w-[300px]'>
                            <Image src={IMAGES.MobileHSBP} alt="Banner1" className="scale_img" />
                        </div>
                    </div>
                </div>
                <div className='col-md-7'>
                    <div className='download'>
                        <h1 className='text-[#0F0D0E] text-4xl mb-4'>Download HSBP App</h1>
                        <p className='text-base mb-4'>To consult with OMI astros and get a personalised Remedy Plan for all your problems. Download the app now</p>
                        <div className='flex w-fit gap-3'>
                            <Image src={IMAGES.AppStore} alt="Banner1" className="scale_img" />
                            <Image src={IMAGES.GoogleStore} alt="Banner1" className="scale_img" />
                        </div>
                    </div>
                    <div className="getLink mt-10">
                        <p className='text-base mb-4'>Enter your mobile number to get link to download</p>
                        <div className='flex'>
                            <input name="mobile_number" type="text" placeholder="Enter your mobile number*" maxLength="10" className='form-control' />
                            <button className="sendLinkBtn">SEND LINK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload