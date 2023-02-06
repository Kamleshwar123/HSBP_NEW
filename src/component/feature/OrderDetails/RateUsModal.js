import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import ICONS from '../../../constant/icons';

const RateUsModal = ({isOpen,closeModal}) => {
    Modal.setAppElement('#main_layout');
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {document.body.style.overflow = 'unset';}
    }, [])

  return (
    <Modal
        isOpen={isOpen}
        contentLabel="rate Us Modal"
        onRequestClose={closeModal}
        className="modal rateusModal"
      >
        <div className='relative px-7 py-6'>
            <button className='absolute -top-3 -right-3 w-9 h-9 rounded-[50%] bg-theme text-white text-base font-extrabold' onClick={closeModal}>&#10006;</button>
            <div>
                <h2 className='text-2xl text-theme font-bold mb-2'>Rate this service</h2>
                <p className='text-black-685 text-base'>Order ID : <b className='text-black-0f0'>HSBP101010</b></p>
                <div className='my-4 flex items-center gap-3 mx-auto md:w-3/4'>
                  <div className='cursor-pointer'>
                      <Image src={ICONS.RateUs1} alt="RateUs1" className="mx-auto h-auto"/>
                  </div>
                  <div className='cursor-pointer'>
                      <Image src={ICONS.RateUs2} alt="RateUs2" className="mx-auto h-auto"/>
                  </div>
                  <div className='cursor-pointer'>
                      <Image src={ICONS.RateUs3} alt="RateUs3" className="mx-auto h-auto"/>
                  </div>
                  <div className='cursor-pointer'>
                      <Image src={ICONS.RateUs4} alt="RateUs4" className="mx-auto h-auto"/>
                  </div>
                  <div className='cursor-pointer'>
                      <Image src={ICONS.RateUs5} alt="RateUs5" className="mx-auto h-auto"/>
                  </div>
                </div>
                <textarea type="text" rows={6} className="form-control border-black-949 py-3 px-4 " placeholder='Enter Your Comments' />
                <button className='custom_button mt-5'>Submit</button>
            </div>
        </div>
      </Modal>
  )
}

export default RateUsModal