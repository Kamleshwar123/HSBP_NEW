import Image from 'next/image';
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2'
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import ICONS from '../../../constant/icons';
import IMAGES from '../../../constant/images';
import SvgIcon from '../../../constant/SvgIcon';
import { UserServices } from '../../../services';
import { isNumberOnly } from '../../../utils';

const LoginModal = ({isopen,closeModal}) => {
  const dispatch = useDispatch();
  const [screen, setScreen] = useState(1);
  const [otp, setOtp] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const { mutate: login } = useMutation((data) => dispatch(UserServices.loginApi(data)));
  const { mutate: verifyOtp } = useMutation((data) => dispatch(UserServices.verifyOtpApi(data)));
  const customerId = useSelector(state => state.user.customerId || []);
  const handleSubmit = () => {
    if(screen === 1) {
      login({MobileNo:MobileNo}, {
        onSuccess: () => {
          setScreen(1);
        }
      });
    }
    else if(screen === 2) {
      verifyOtp({CustomerId:customerId,OTP:otp}, {
        onSuccess: () => {
          closeModal();
        }
      });
    }
  }

  return (
      <div className='bg-[#a05bcf] p-1 sm:p-5 md:py-12 md:px-16 relative'>
          <span className='absolute top-1 right-1 text-white p-2 cursor-pointer'>
            <SvgIcon.Cross className="w-8 h-8" onClick={closeModal}/>
          </span>
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
                    <p className='font-medium mb-3 text-left'>Enter your mobile number</p>
                    {/* <PhoneInput
                    country={'in'}
                    className="font-Poppins"
                    inputClass='form-control w-full focus:border-black-241 border-black-241 text-black-241'
                    inputStyle={{width: "100%"}}
                    disableDropdown={true}
                    countryCodeEditable={false}
                    /> */}
                    <div className='flex items-stretch relative'>
                      <div className='flex items-center absolute h-full left-1 gap-1 border-r border-border pr-1'><Image src={ICONS.Indianflag} height={16} width={24} alt="Indianflag"/><span>+91</span><Image src={ICONS.CountryArrowDown} alt="CountryArrowDown" width={10}/></div>
                      <input type="tel" className='form-control pl-20' maxLength={10} onKeyPress={(e)=>isNumberOnly(e)} name="MobileNo" onChange={(e)=> setMobileNo(e.target.value)} value={MobileNo}/>
                    </div>
                  </div>
                  :
                  <div>
                    <div className='w-4/5 mx-auto text-center mb-5'>
                      <h6 className='text-base font-medium mb-2 text-black-241'>Enter your verification code</h6>
                      <div>
                        We have send you a 4 digit OTP on 9599043601 
                        <span className='text-blue-477 cursor-pointer font-semibold' onClick={()=>setScreen(1)}>{" Edit"}</span>
                      </div>
                    </div>
                    <div className='flex justify-center'>
                      <OtpInput
                        value={otp}
                        onChange={(otp)=> setOtp(otp)}
                        numInputs={4}
                        separator={<span className='px-2'></span>}
                        inputStyle={{width: "35px", height: "35px", border: '1px solid #707070', borderRadius: "5px", color: "241E1E"}}
                      />
                    </div>
                    <div className='text-blue-477 my-2 cursor-pointer text-center font-semibold' onClick={()=>{}}>Resend OTP</div>
                  </div>
                  }
                  <button 
                    className='custom_button w-full mt-3 h-10' 
                    onClick={()=> handleSubmit()}
                    disabled={screen === 1 ? MobileNo.length < 10 : otp.length < 4}
                  >
                    {screen === 1 ? "Continue": "Login"}
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}

export default LoginModal