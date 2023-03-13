import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import IMAGES from '../../../constant/images';
import SvgIcon from '../../../constant/SvgIcon';
import OutsideClick from '../../../hooks/useOutClick';
import { setLocalCityRedux } from '../../../redux/Slices/commonSlice';

const CityModal = ({isOpen,closeModal,setOpenSelectCityModal}) => {
    Modal.setAppElement('#main_layout');
    const dispatch = useDispatch();
    const [search,setSearch] = useState("");
    const [showAutoComplete,setShowAutoComplete] = useState(false);
    const cityList = useSelector(state => state.home.cityList || []);
    const filteredData =
    search === ''
      ? []
      : cityList.filter((_val) => {
          return _val.CityName?.toLowerCase()?.includes(search?.toLowerCase());
    })
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {document.body.style.overflow = 'unset';}
    }, [])
    const handleCitySelect = (city_id) => {
      dispatch(setLocalCityRedux(city_id));
      closeModal();
    }
  return (
    <Modal
        isOpen={isOpen}
        contentLabel="Example Modal"
        /* onRequestClose={closeModal} */
        className="modal cityModal"
      >
        {/* <div className='flex relative mb-3'>
            <input type="text" className="pr-5 form-control text-black-686 placeholder:text-black-686 shadow-[0px_4px_8px_#00000029] border-black-2a3 focus:border-black-2a3 rounded-r-none border-r-none" placeholder='Enter Your City' />
            <button className="custom_button -ml-3">Search</button>
        </div> */}
        <OutsideClick open={showAutoComplete} setOpen={setShowAutoComplete}>
            <div className='flex relative mb-3'>
                <SvgIcon.Search className="text-black-686 pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3"/>
                <input type="text" className="pl-10 form-control text-black-686 placeholder:text-black-686 shadow-[0px_4px_8px_#00000029] border-black-2a3 focus:border-black-2a3 rounded-xl" placeholder='Search Your City' onChange={(e)=> setSearch(e.target.value)} onFocus={()=> setShowAutoComplete(true)}/>
            </div>
            {showAutoComplete && search &&
            <ul className='absolute z-[10] mt-0 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {filteredData?.length > 0 ? filteredData?.map((item,idx) => (
                idx < 10 &&
                <li 
                    className='cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-black-605 hover:text-white' 
                    key={`cityautocomplete${idx}`}
                    onClick={()=> handleCitySelect(item?.CityId)}
                >
                    {item?.CityName}
                </li>
                ))
                :
                (<div className='select-none py-2 pl-3 pr-9'>Nothing found.</div>)
                }
            </ul>
            }
        </OutsideClick>
        <div className='text-center'>
        <h3 className='text-lg font-semibold'>Select Your City</h3>
        <p>to view service</p>
        <p className='text-xs mt-1'>We provide services for women only</p>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-6 items-end">
        <div className='cursor-pointer' /* onClick={closeModal} */><Image src={IMAGES.City1} alt="City1" className='scale_img max-w-[40%]'/><h6 className='text-xs text-center'>Delhi / NCR</h6></div>
        <div className='cursor-pointer' /* onClick={closeModal} */><Image src={IMAGES.City2} alt="City1" className='scale_img max-w-[60%]'/><h6 className='text-xs text-center'>Mumbai</h6></div>
        <div className='cursor-pointer' /* onClick={closeModal} */><Image src={IMAGES.City3} alt="City1" className='scale_img max-w-[60%]'/><h6 className='text-xs text-center'>Ahemadabad</h6></div>
        </div>
        <div className="form_check mt-6">
            <input type="checkbox" id="s_city" onChange={()=>{closeModal();setOpenSelectCityModal(true);}}/>
            <label className='whitespace-nowrap cursor-pointer' htmlFor='s_city'>
            My city is not listed
            </label>
        </div>
      </Modal>
  )
}

export default CityModal