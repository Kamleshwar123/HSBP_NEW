import React from 'react'

const ProductHeading = ({title, desc}) => {
  return (
    <div className="mt-8 text-black-text-black-241 mb-5 text-center w-3/4 mx-auto">
      <h1 className="text-[30px]">{title}</h1>
      <p className="text-base mt-2">{desc}</p>
    </div>
  )
}

export default ProductHeading