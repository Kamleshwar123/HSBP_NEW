import React from 'react'
import SvgIcon from '../../../constant/SvgIcon'

const SearchProduct = () => {
  return (
    <div className='w-full hidden md:flex'>
        <select className='form-control w-[80px] rounded-r-none text-theme py-2 select_arrow_theme'>
        <option>All</option>
        <option>New</option>
        <option>Popular</option>
        </select>
        <input className='form-control rounded-none border-l-0 text-center' placeholder='Search by products name'/>
        <div className='flex items-center justify-center bg-body px-3 rounded-r-xl cursor-pointer'><SvgIcon.Search className="text-white w-6 h-5 scale-75"/></div>
    </div>
  )
}

export default SearchProduct