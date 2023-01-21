import React, { useEffect } from 'react'
import Modal from 'react-modal';

const CityModal = ({isOpen,closeModal}) => {
    Modal.setAppElement('#main_layout');
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
            <input type="text" className=" pr-5 form-control text-black-686 placeholder:text-black-686 shadow-[0px_4px_8px_#00000029] border-black-2a3 focus:border-black-2a3 rounded-r-none border-r-none" placeholder='Delhi' />
            <button className="custom_button -ml-3">SEARCH</button>
        </div>
        <div className='text-center'>
        <h3 className='text-lg font-semibold'>Select You City</h3>
        <p>to view service</p>
        <p className='text-xs mt-1'>We provide services for women only</p>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-6 items-end">
        <div><Image src={IMAGES.City1} alt="City1" className='scale_img max-w-[40%]'/><h6 className='text-xs text-center'>Delhi / NCR</h6></div>
        <div><Image src={IMAGES.City2} alt="City1" className='scale_img max-w-[60%]'/><h6 className='text-xs text-center'>Mumbai</h6></div>
        <div><Image src={IMAGES.City3} alt="City1" className='scale_img max-w-[60%]'/><h6 className='text-xs text-center'>Ahemadabad</h6></div>
        </div>
        <div className="form_check mt-6">
            <input type="checkbox" id="s_city" onChange={()=>{setIsOpen(false);setModal2(true);}}/>
            <label className='whitespace-nowrap'>
            My city is not listed
            </label>
        </div>
      </Modal>
  )
}

export default CityModal