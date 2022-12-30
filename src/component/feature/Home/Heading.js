import React from "react";

const Heading = ({ title, desc }) => {
  return (
    <div className="mt-12 text-black-0f0 mb-9 text-center w-3/4 mx-auto">
      <h1 className="text-[42px]">{title}</h1>
      <p className="text-xl mt-2">{desc}</p>
    </div>
  );
};

export default Heading;
