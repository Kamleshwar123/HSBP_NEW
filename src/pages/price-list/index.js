import React from 'react'
import { useState } from 'react';
import SvgIcon from '../../constant/SvgIcon';

const PriceList = () => {
    const [openBox, setOpenBox]= useState(true);
  return (
    <div className='container my-3'>
        <div className={`text-center w-[85%] mx-auto font-medium mt-7 mb-5`}>
            <h1 className="md:text-[42px] sm:text-3xl text-2xl">Beauty Services Price List</h1>
            <p className="text-base mt-3 text-black">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className='grid grid-cols-12'>
            <div className='col-span-12 md:col-span-7'>
            <div className='shadow-4D rounded-2xl overflow-hidden mt-6'>
                <div className='theme-heading-box flex justify-between cursor-pointer' onClick={()=> setOpenBox(!openBox)}>
                <p>BODY CARE SERVICES</p>
                <div><SvgIcon.IosArrowDown className={`scale-50 ${openBox ? 'rotate-180' : "rotate-0"}`}/></div>
                </div>
                {openBox &&
                <div className='py-4'>
                    <ul className='flex flex-wrap gap-4 text-xs px-4'>
                        <li className='bg-gradient text-white py-2 px-5 rounded-3xl'>Body Scrubbing & Polishing</li>
                        <li className='py-2 px-5 rounded-3xl border border-body'>Brazilian Wax</li>
                        <li className='py-2 px-5 rounded-3xl border border-body'>Chocolate Wax</li>
                        <li className='py-2 px-5 rounded-3xl border border-body'>Honey Wax</li>
                        <li className='py-2 px-5 rounded-3xl border border-body'>Manicure</li>
                        <li className='py-2 px-5 rounded-3xl border border-body'>Massages</li>
                        <li className='py-2 px-5 rounded-3xl border border-body'>Pedicure</li>
                        <li className='py-2 px-5 rounded-3xl border border-body'>Rica Wax</li>
                    </ul>
                    <h6 className='text-theme text-center font-semibold my-3 uppercase px-4'>BODY SCRUBING AND POLISHING</h6>
                    <ul className='text-xs font-semibold font-Roboto'>
                        <li className='flex justify-between items-center gap-2 bg-[#FBE0E0] py-1 px-2 mb-1'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox"/>
                                <span className='uppercase'>FULL HAND SCRUB + POLISHING</span>
                            </div>
                            <div>
                                <span className='w-20 mr-7'><span className='rupee-sym'>&#x20B9;</span>2000</span>
                                <span className='w-20'><span className='rupee-sym'>&#x20B9;</span>2000</span>
                            </div>
                        </li>
                        <li className='flex justify-between items-center gap-2 border-[0.4px] border-black-707 border-opacity-40 py-1 px-2 mb-1'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox"/>
                                <span className='uppercase'>FULL HAND SCRUB + POLISHING</span>
                            </div>
                            <div>
                                <span className='w-20 mr-7'><span className='rupee-sym'>&#x20B9;</span>2000</span>
                                <span className='w-20'><span className='rupee-sym'>&#x20B9;</span>2000</span>
                            </div>
                        </li>
                        <li className='flex justify-between items-center gap-2 border-[0.4px] border-black-707 border-opacity-40 py-1 px-2 mb-1'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox"/>
                                <span className='uppercase'>FULL HAND SCRUB + POLISHING</span>
                            </div>
                            <div>
                                <span className='w-20 mr-7'><span className='rupee-sym'>&#x20B9;</span>2000</span>
                                <span className='w-20'><span className='rupee-sym'>&#x20B9;</span>2000</span>
                            </div>
                        </li>
                        <li className='flex justify-between items-center gap-2 border-[0.4px] border-black-707 border-opacity-40 py-1 px-2 mb-1'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox"/>
                                <span className='uppercase'>FULL HAND SCRUB + POLISHING</span>
                            </div>
                            <div>
                                <span className='w-20 mr-7'><span className='rupee-sym'>&#x20B9;</span>2000</span>
                                <span className='w-20'><span className='rupee-sym'>&#x20B9;</span>2000</span>
                            </div>
                        </li>
                    </ul>
                </div>
                }
            </div>
            </div>
            <div className='col-span-12 md:col-span-5'></div>
        </div>
    </div>
  )
}

export default PriceList