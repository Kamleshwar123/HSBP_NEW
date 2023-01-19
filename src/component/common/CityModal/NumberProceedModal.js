import Image from 'next/image';
import React from 'react'
import Modal from 'react-modal';
import IMAGES from '../../../constant/images';

const NumberProceedModal = ({closeModal}) => {
    Modal.setAppElement('#main_layout');
    const disableScroll = () => { document.body.style.overflow = 'hidden' }
  return (
    <Modal
        isOpen={true}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
        onAfterOpen={disableScroll}
        className="modal numberProceedModal"
      >
        <div>
        <div className='text-center'><Image src={IMAGES.ModalGirl} alt="ModalGirl" width={100} className="scale_img"/></div>
          <h2 className='text-lg text-[#100E0E] font-semibold mb-3 text-center'>Enter Your Number to Proceed</h2>
          <div className='flex'>
            <input className='form-control'/>
            {/* <button className="custom_button" style={{borderTopLeftRadius: '0px',borderBottomLeftRadius: '0px',}}>Proceed</button> */}
          </div>
          <button className="custom_button w-full">Proceed</button>
        </div>
      </Modal>
  )
}

export default NumberProceedModal
