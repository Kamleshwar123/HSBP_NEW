import React from 'react'

const ProductHeading = ({title, desc}) => {
  return (
    <div className="mt-8 text-black-241 mb-5 text-center w-3/4 mx-auto">
      <h1 className="md:text-[42px] sm:text-3xl text-2xl">{title}</h1>
      <p className="sm:text-lg text-base mt-3">{desc}</p>
    </div>
  )
}

export default ProductHeading