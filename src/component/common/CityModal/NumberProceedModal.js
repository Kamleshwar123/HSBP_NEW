import Image from 'next/image';
import React, { useEffect } from 'react'
import Modal from 'react-modal';
import IMAGES from '../../../constant/images';
import { onylMobileInput } from '../../../utils';

const NumberProceedModal = ({closeModal}) => {
    Modal.setAppElement('#main_layout');
    /* const disableScroll = () => { document.body.style.overflow = 'hidden' }; */

    useEffect(()=> {
      onylMobileInput();
    },[])

  return (
    <Modal
        isOpen={true}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
        /* onAfterOpen={disableScroll} */
        className="modal numberProceedModal"
      >
        <div>
        <div className='text-center'><Image src={IMAGES.ModalGirl} alt="ModalGirl" width={100} className="scale_img"/></div>
          <h2 className='text-lg text-[#100E0E] font-semibold mb-3 text-center'>Enter Your Number to Proceed</h2>
          <div className='flex items-stretch'>
            <div className='bg-black-605 px-3 text-white flex items-center rounded-l-xl text-base'>+91-</div>
            <input id="onlyMobile" className='form-control rounded-l-none py-2 text-base text-black-605 placeholder:text-black-605' type="text" maxLength={10} placeholder="7339716480"/>
          </div>
          <button className="custom_button w-full mt-6 h-10">Proceed</button>
        </div>
      </Modal>
  )
}

export default NumberProceedModal
