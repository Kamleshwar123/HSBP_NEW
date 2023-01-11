import React from 'react'

const AddToCart = ({num,inc,dec, addToCart}) => {
  return (
    <div>
        {num > 0 ?
        <div className='overflow-hidden grid grid-cols-3 items-center text-center rounded-2xl border border-theme w-28 h-8 select-none'>
            <div className='text-2xl font-black text-theme cursor-pointer' onClick={dec}>-</div>
            <div className='bg-theme text-white h-full flex justify-center items-center'>{num}</div>
            <div className='text-xl font-black text-theme cursor-pointer' onClick={inc}>+</div>
        </div>
        :
        <button className='w-28 h-8 addcard_button' onClick={addToCart}>Add to Cart</button>
        }
    </div>
  )
}

export default AddToCart