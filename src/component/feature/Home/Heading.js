import React from "react";

const Heading = ({ title, desc, classes=undefined}) => {
  return (
    <div className={`text-black-0f0 text-center w-[85%] mx-auto font-medium ${classes}`}>
      <h1 className="md:text-[42px] sm:text-3xl text-2xl">{title}</h1>
      <p className="sm:text-xl text-base mt-3">{desc}</p>
    </div>
  );
};

export default Heading;
