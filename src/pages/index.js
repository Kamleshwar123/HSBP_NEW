import React from "react";
import CityModal from "../component/common/CityModal/CityModal";
import SelectCityModal from "../component/common/CityModal/SelectCityModal";
import ExploreAll from "../component/common/ExploreAll";
import AppDownload from "../component/feature/Home/AppDownload";
import Appointment from "../component/feature/Home/Appointment";
import Banner from "../component/feature/Home/Banner";
import BeautyPackage from "../component/feature/Home/BeautyPackage";
import BeautyService from "../component/feature/Home/BeautyService";
import Card from "../component/feature/Home/Card";
import Franchise from "../component/feature/Home/Franchise";
import Heading from "../component/feature/Home/Heading";
import Institute from "../component/feature/Home/Institute";
import Product from "../component/feature/Home/Product";
import Salon from "../component/feature/Home/Salon";
import Testimonials from "../component/feature/Home/Testimonials";

const Home = () => {
  /* const openLoginModal = useSelector((state) => state.common.openLoginModal);
  const openLoginModal = useSelector((state) => state.common.openLoginModal); */
  return (
    <div>
      <Banner />
      <div className="container">
        <Heading
          title={"India's Largest Platform"}
          desc={"For all your beauty salon needs"}
          classes="mt-12 mb-3 heading-homepage"
        />
        <Card />
        <Heading
          title={"Beauty Services"}
          desc={"We provide special offers for students and corporates"}
          classes="mt-12 heading-homepage"
        />
        <ExploreAll text={"Explore All"} url={"/services"}/>
        <BeautyService />
      </div>
      <Heading
        title={"Book Appointment"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipisci elitsed eiusmod"}
        classes="mt-12 mb-9 heading-homepage"
      />
      <Appointment />
      <div className="mt-12">
        <div className="beautypkg-bg pt-6">
            <Heading
              title={"Beauty Packages"}
              desc={"We provide special offers for students and corporates"}
              classes="heading-homepage"
            />
            <ExploreAll text={"Explore All"} url={"/services"} data={{tab: "tab2"}}/>
          <BeautyPackage />
        </div>
      </div>
      <div className="container">
        <Heading
          title={"Near by Salons"}
          desc={"200+ tech enabled salons, serving you quality services across 40+ cities"}
          classes="mt-12 heading-homepage"
        />
        <ExploreAll text={"Explore All"} url={"/salons"}/>
        <Salon />
      </div>
      <div className="mt-6">
        <div className="productshop-bg pt-6">
        <Heading
          title={"Product Shop"}
          desc={"50+ salon professional brands delivered nationally to your doorsteps"}
          classes="heading-homepage"
        />
        <ExploreAll text={"Explore All"} url={"/products"}/>
        <Product />
        </div>
      </div>
        <Heading
          title={"Franchise"}
          desc={"100+ Tech enabled Institute, Serving you quality services across 60+ cities"}
          classes="mt-12 mb-9 heading-homepage"
        />
        <Franchise />
        <Heading
          title={"Institute"}
          desc={"200+ Tech enabled salons, Serving you quality services across 40+ cities"}
          classes="mt-12 mb-9"
        />
        <Institute />
        <Heading
          title={"Testimonials"}
          desc={"When the age of a person exceeds 50 years, it becomes very important to take care of one’s health as she enters the senior citizen age."}
          classes="mt-12 mb-9 heading-homepage"
        />
        <Testimonials />
      <div className="container">
        <AppDownload />
      </div>
      {/* <CityModal/>
      <SelectCityModal/> */}
    </div>
  );
};

export default Home;
