import Image from 'next/image'
import React from 'react'
import OderDetailStep from '../../component/feature/OrderDetails/OderDetailStep'
import OrderDetail from '../../component/feature/OrderDetails/OrderDetail'
import IMAGES from '../../constant/images'

const MySalonOrderDetails = () => {
  const statusData = [
    {status:1, label: "Booked", date: "20 Jan, 2023"},
    {status:2, label: "Confirmed", date: "21 Jan, 2023"},
    {status:3, label: "Beautician Allocated", date: "22 Jan, 2023"},
    {status:4, label: "Service Completed", date: "23 Jan, 2023"},
];
  return (
    <div className='container mt-3'>
      <OrderDetail orderStatus={3}/>
      <div>
        <OderDetailStep orderStatus={3} statusData={statusData}/>
      </div>
      <div>
        {[...Array(4).keys()].map((item,idx)=> (
          <div className='shadow-4D rounded-2xl overflow-hidden px-4 py-3 mb-6 text-black-0f0' key={"orderbox"+idx}>
            <div className='grid grid-cols-12 items-center gap-5'>
              <div className='col-span-12 md:col-span-7'>
                <div className='flex gap-3'>
                  <div>
                  <Image src={IMAGES.OrderSalon} alt="Appointment" width={80} height={80}/>
                  </div>
                  <div className='w-full py-3'>
                    <h6 className='mb-1 font-semibold'>HSBP Salon</h6>
                    <p className='text-xs'>Qty. 1</p>
                  </div>
                </div>
              </div>
              <div className='col-span-6 md:col-span-5 justify-self-end'>
                <div className='text-base font-bold'><span className='rupee-sym'>₹</span>1500</div>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default MySalonOrderDetails