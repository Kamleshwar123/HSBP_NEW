import Image from 'next/image';
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2'
import IMAGES from '../../constant/images';

const Login = () => {
  const [screen, setScreen] = useState(1);
  return (
    <div className='container my-3'>
      <div className='bg-[#a05bcf] p-5 md:p-10'>
          <div className='grid grid-cols-12 items-stretch rounded-2xl overflow-hidden'>
            <div className='col-span-12 md:col-span-7 h-full'>
              <div className='bg-[#6322a3] flex flex-col justify-center items-center h-full'>
                <Image src={IMAGES.LoginInner} alt=""/>
              </div>
            </div>
            <div className='col-span-12 md:col-span-5'>
              <div className='bg-white p-5 h-full'>
                <div className='shadow-4D rounded-2xl p-5'>
                  {screen === 1 ?
                  <div>
                    <p className='font-medium my-3'>Enter your mobile number</p>
                    <PhoneInput
                    country={'in'}
                    className="font-Poppins"
                    inputClass='form-control w-full'
                    inputStyle={{width: "100%"}}
                    />
                  </div>
                  :
                  <div>
                    <div className='w-4/5 mx-auto text-center mb-5'>
                      <h6 className='text-base font-medium mb-2 text-black-241'>Enter your verification code</h6>
                      <p>We have send you a 4 digit OTP on 9599043601 Edit</p>
                    </div>
                    <div className='flex justify-center'>
                      <OtpInput
                        numInputs={4}
                        separator={<span></span>}
                        className='form-control w-auto'
                      />
                    </div>
                  </div>
                  }
                  <button className='custom_button w-full mt-3' onClick={()=> setScreen(2)}>Continue</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login