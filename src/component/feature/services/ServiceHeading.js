import React from "react";

const ServiceHeading = ({ title, desc}) => {
  return (
    <div className="mt-7 text-black-0f0 mb-6 text-center w-[85%] mx-auto">
      <h1 className="md:text-[42px] sm:text-3xl text-2xl">{title}</h1>
      <p className="sm:text-xl text-base mt-3">{desc}</p>
    </div>
  );
};

export default ServiceHeading;
