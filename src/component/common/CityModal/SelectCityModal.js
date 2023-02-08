import React, { useEffect } from 'react'
import Modal from 'react-modal';

const SelectCityModal = ({isOpen,closeModal}) => {
    Modal.setAppElement('#main_layout');
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {document.body.style.overflow = 'unset';}
    }, [])
    /* const disableScroll = () => { document.body.style.overflow = 'hidden' } */
  return (
    <Modal
        isOpen={isOpen}
        contentLabel="Example Modal2"
        onRequestClose={closeModal}
        /* onAfterOpen={disableScroll} */
        className="modal selectcitymodal"
      >
        <div>
          <h2 className='text-lg text-black-2e2 font-semibold mb-3 text-center'>Please Select your city</h2>
          <div className='flex'>
            <select className='form-control rounded-r-none text-black-2e2 cityproceed selectCitybox'>
              <option>-- Select City --</option>
              <option className='bg-black-605 text-white'>Agra</option>
              <option className='hover:bg-black-605 hover:text-white'>Banglore</option>
              <option className='hover:bg-black-605 hover:text-white'>Bhopal</option>
              <option className='hover:bg-black-605 hover:text-white'>Chandigrah</option>
              <option className='hover:bg-black-605 hover:text-white'>Chennai</option>
            </select>
            <button className="custom_button" style={{borderTopLeftRadius: '0px',borderBottomLeftRadius: '0px'}} onClick={closeModal}>Proceed</button>
          </div>
        </div>
      </Modal>
  )
}

export default SelectCityModal