import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import IMAGES from '../../../constant/images';

const CityModal = ({isOpen,closeModal,setOpenSelectCityModal}) => {
    Modal.setAppElement('#main_layout');
    const [selectedCity, setSelectedCity]= useState("");
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {document.body.style.overflow = 'unset';}
    }, [])

  return (
    <Modal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
        className="modal cityModal"
      >
        <div className='flex relative mb-3'>
            <input type="text" className=" pr-5 form-control text-black-686 placeholder:text-black-686 shadow-[0px_4px_8px_#00000029] border-black-2a3 focus:border-black-2a3 rounded-r-none border-r-none" placeholder='Enter Your City' />
            <button className="custom_button -ml-3" /* onClick={closeModal} */>Search</button>
        </div>
        <div className='text-center'>
        <h3 className='text-lg font-semibold'>Select You City</h3>
        <p>to view service</p>
        <p className='text-xs mt-1'>We provide services for women only</p>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-6 items-end">
        <div className='cursor-pointer' onClick={closeModal}><Image src={IMAGES.City1} alt="City1" className='scale_img max-w-[40%]'/><h6 className='text-xs text-center'>Delhi / NCR</h6></div>
        <div className='cursor-pointer' onClick={closeModal}><Image src={IMAGES.City2} alt="City1" className='scale_img max-w-[60%]'/><h6 className='text-xs text-center'>Mumbai</h6></div>
        <div className='cursor-pointer' onClick={closeModal}><Image src={IMAGES.City3} alt="City1" className='scale_img max-w-[60%]'/><h6 className='text-xs text-center'>Ahemadabad</h6></div>
        </div>
        <div className="form_check mt-6">
            <input type="checkbox" id="s_city" onChange={()=>{closeModal;setOpenSelectCityModal(true);}}/>
            <label className='whitespace-nowrap cursor-pointer' htmlFor='s_city'>
            My city is not listed
            </label>
        </div>
      </Modal>
  )
}

export default CityModal