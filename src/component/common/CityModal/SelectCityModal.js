import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

const SelectCityModal = ({isOpen,closeModal}) => {
    Modal.setAppElement('#main_layout');
    const [selectedCity,setSelectedCity] = useState("");
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {document.body.style.overflow = 'unset';}
    }, [])

    const proceed = () => {
      
    }
    /* const disableScroll = () => { document.body.style.overflow = 'hidden' } */
  return (
    <Modal
        isOpen={isOpen}
        contentLabel="Example Modal2"
        /* onRequestClose={closeModal} */
        /* onAfterOpen={disableScroll} */
        className="modal selectcitymodal"
      >
        <div>
          <h2 className='text-lg text-black-2e2 font-semibold mb-3 text-center'>Please Select your city</h2>
          <div className='flex'>
            <input 
              className='form-control rounded-r-none text-black-2e2 cityproceed selectCitybox' 
              value={selectedCity}
              onChange={(e)=> setSelectedCity(e.target.value)}
            />
            <button className="custom_button" disabled={!selectedCity} style={{borderTopLeftRadius: '0px',borderBottomLeftRadius: '0px'}} onClick={proceed}>Proceed</button>
          </div>
        </div>
      </Modal>
  )
}

export default SelectCityModal