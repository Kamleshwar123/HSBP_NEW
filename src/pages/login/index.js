import Image from 'next/image';
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2'
import IMAGES from '../../constant/images';
import SvgIcon from '../../constant/SvgIcon';

const Login = () => {
  const [screen, setScreen] = useState(1);
  const [otp, setOtp] = useState("");
  return (
    <div className='container my-3'>
      <div className='bg-[#a05bcf] p-3 sm:p-5 md:p-10'>
          <div className='grid grid-cols-12 items-stretch rounded-2xl overflow-hidden'>
            <div className='col-span-12 md:col-span-5 lg:col-span-7 h-full hidden md:block'>
              <div className='bg-[#6322a3] flex flex-col justify-center items-center h-full'>
                <Image src={IMAGES.LoginInner} alt=""/>
              </div>
            </div>
            <div className='col-span-12 md:col-span-7 lg:col-span-5'>
              <div className='bg-white p-0 sm:p-5 md:p-7 h-full gap-y-6 flex flex-col justify-center items-center'>
                {screen === 1 &&
                  <div className='pt-3'>
                    <SvgIcon.User/>
                    <h6 className='text-center text-base text-black-241 font-medium mt-2'>Login</h6>
                  </div>
                }
                <div className='shadow-4D rounded-2xl px-5 pt-7 pb-10 w-full'>
                  {screen === 1 ?
                  <div>
                    <p className='font-medium mb-3'>Enter your mobile number</p>
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
                      <div>
                        We have send you a 4 digit OTP on 9599043601 
                        <span className='text-blue-477 cursor-pointer font-medium' onClick={()=>setScreen(1)}>{" Edit"}</span>
                      </div>
                    </div>
                    <div className='flex justify-center'>
                      <OtpInput
                        value={otp}
                        onChange={(otp)=> setOtp(otp)}
                        numInputs={4}
                        separator={<span className='px-2'></span>}
                        inputStyle={{width: "35px", height: "35px", border: '1px solid #CCC9C9', borderRadius: "5px"}}
                      />
                    </div>
                    <div className='text-blue-477 my-2 cursor-pointer text-center font-medium' onClick={()=>{}}>Resend Otp?</div>
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