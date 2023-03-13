import React, { useEffect, useState } from "react";
import { getLocalCity } from "../../../utils";
import CityModal from "../CityModal/CityModal";
import SelectCityModal from "../CityModal/SelectCityModal";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

const Layout = ({ children }) => {
  const [openCityModal, setOpenCityModal] = useState(false);
  const [openSelectCityModal, setOpenSelectCityModal] = useState(false);

  useEffect(()=> {
    if(!getLocalCity()) {
      setOpenCityModal(true);
    }
  },[])
  const handleSelectCity = () => {

  }
  return (
    <>
    <div id="main_layout">
      <TheHeader />
      <main>
        {children}
      </main>
      <TheFooter />
    </div>
      {openCityModal && 
      <CityModal 
        isOpen={openCityModal} 
        closeModal={()=> setOpenCityModal(false)} 
        setOpenSelectCityModal={setOpenSelectCityModal} 
      />
      }
      {openSelectCityModal && 
      <SelectCityModal 
        isOpen={openSelectCityModal} 
        closeModal={()=> {setOpenCityModal(false);setOpenSelectCityModal(false)}}
      />
      }
    </>
  );
};

export default Layout;
