import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import AddAddressForm from '../../component/feature/CheckoutPage/AddAddressForm'
import CheckoutBox from '../../component/feature/services/CheckoutBox'
import ICONS from '../../constant/icons'
import SvgIcon from '../../constant/SvgIcon'

const Checkout = () => {
  const [openBox, setOpenBox]= useState(true);
  const [openBookingBox, setOpenBookingBox]= useState(false);
  const router = useRouter();
  const [paymentType, setPaymentType] = useState(1);
  const [isAddNewAddress, setIsAddNewAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const handleNewAddress = () => {
    setSelectedAddress("");
    setIsAddNewAddress(true);
  }
  const handleSelectAddress = (val) => {
    setSelectedAddress(val);
    setIsAddNewAddress(false);
  }
  return (
    <div className='container my-3'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12 md:col-span-7'>
        <div className='shadow-[8px_5px_15px_#0000004D] p-5 rounded-2xl text-black-685'>
          <div className='flex items-center gap-2'>LOGIN <span><Image src={ICONS.LoginCheck} alt="call" className='max-h-[10px] w-auto'/></span></div>
          <p>+91-9599043601</p>
        </div>
        <div className='block md:hidden mt-6'><CheckoutBox/></div>
          <div className='shadow-checkout rounded-2xl overflow-hidden mt-6'>
            <div className='theme-heading-box flex justify-between cursor-pointer' onClick={()=> setOpenBox(!openBox)}>
              <p>Address Details</p>
              <div><SvgIcon.IosArrowDown className={`scale-50 ${openBox ? 'rotate-180' : "rotate-0"}`}/></div>
            </div>
            {openBox &&
              <div className='p-5'>
                {[...Array(3).keys()].map((item, idx) => (
                  <div key={idx+"add"} className='cursor-pointer'>
                    {idx !==0 &&<hr className='my-2'/>}
                    <div className='flex space-x-5 text-black-685 w-full items-center'>
                      <input type='radio' id={"add"+idx} name="address" checked={selectedAddress === idx} onChange={()=>handleSelectAddress(idx)}/>
                      <label htmlFor={"add"+idx} className='w-full cursor-pointer'>
                        <div className='flex flex-wrap items-center'>
                          <div className='mr-3 text-black-0f0'>Manoj</div>
                          <div className='mr-3 p-1 text-xs bg-[#F1F1F1] text-black-686'>home</div>
                          <Image src={ICONS.Call} alt="call" className='max-h-[12px] w-auto'/>
                          <div className='ml-1 text-black-0f0'>+9599043601</div>
                        </div>
                        <p className='text-xs pt-1'>RZ-95, Adarsh Nagar, Indirapuram,</p>
                        <p className='text-xs'>Ghaziabad - 201309</p>
                      </label>
                      <div className='px-2'><SvgIcon.Pencil className="cursor-pointer" onClick={()=> {}}/></div>
                    </div>
                  </div>
                ))}
                <hr className='my-4'/>
                <div className="inline-flex space-x-5 w-full">
                    <input type="radio" name="addressnew" id="addAddress" checked={isAddNewAddress} onChange={handleNewAddress}/>
                    <label htmlFor="addAddress" className='whitespace-nowrap font-semibold cursor-pointer w-full'>Add a new address</label>
                </div>
              </div>
            }
          </div>
          {isAddNewAddress && <AddAddressForm/>}
            <div className='shadow-checkout rounded-2xl overflow-hidden mt-6'>
                <div className='theme-heading-box flex justify-between cursor-pointer' onClick={()=> setOpenBookingBox(!openBookingBox)}>
                <p>Select Booking Date/Time</p>
                <div><SvgIcon.IosArrowDown className={`scale-50 ${openBookingBox ? 'rotate-180' : "rotate-0"}`}/></div>
                </div>
                {openBookingBox &&
                <div className='p-5'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">Date</label>
                        <input type="date" className="form-control" placeholder='Date' />
                    </div>
                    <div className='col-span-6 md:col-span-3'>
                        <label className="form-label">Timing</label>
                        <input type="time" className="form-control" placeholder='Timing' />
                    </div>
                  </div>
                  {/* <div className='text-center mt-6'>
                      <button className='custom_button' onClick={()=> router.push(paymentType === 1 ? "/payment-mode" :"/thank-you")}>{paymentType === 1 ? "Pay Now" :"Book Now"}</button>
                  </div> */}
                </div>
                }
            </div>
            <div className='p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6'>
                      <label className="form-label">Check your payment mode</label>
                      <div className="form_check">
                          <input type="radio" id="online" name="payment" checked={paymentType === 1} value={1} onChange={()=> setPaymentType(1)}/>
                          <label className='whitespace-nowrap cursor-pointer' htmlFor='online'>Online payment</label>
                      </div>
                      <div className="form_check">
                          <input type="radio" id="Cash" name="payment" checked={paymentType === 2} value={2} onChange={()=> setPaymentType(2)}/>
                          <label className='whitespace-nowrap cursor-pointer' htmlFor='Cash'>Cash (Cash after service)</label>
                      </div>
                  </div>
                </div>
                <div className='text-center mt-6'>
                    <button className='custom_button' onClick={()=> router.push(paymentType === 1 ? "/payment-mode" :"/thank-you")}>{paymentType === 1 ? "Pay Now" :"Book Now"}</button>
                </div>
              </div>
        </div>
        <div className='col-span-12 md:col-span-5'>
          <div className='sticky top-20 hidden md:block'><CheckoutBox/></div>
        </div>
      </div>
    </div>
  )
}

export default Checkout