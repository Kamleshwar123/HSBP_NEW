import React from 'react'
import { useState } from 'react';
import PriceListCheckout from '../../component/feature/PriceList/PriceListCheckout';
import SvgIcon from '../../constant/SvgIcon';

const PriceList = () => {
    const [openBox, setOpenBox]= useState([]);
    const [selectedPackages, setSelectedPackages]= useState(1);
    const [selectedCategory, setSelectedCategory]= useState("Body Scrubbing & Polishing");
    const services = [
        {
            id:1, 
            service: "BODY CARE SERVICES",
        },
        {
            id:2, 
            service: "SKIN CARE SERVICES",
        },
        {
            id:3, 
            service: "HAIR CARE SERVICES",
        },
        {
            id:4, 
            service: "MAKE UP SERVICES",
        },
        {
            id:5, 
            service: "MEHNDI ART SERVICES",
        }
    ]
    const category = [
        {name:"Body Scrubbing & Polishing"},
        {name:"Brazilian Wax"},
        {name:"Chocolate Wax"},
        {name:"Honey Wax"},
        {name:"Manicure"},
        {name:"Massages"},
        {name:"Pedicure"},
        {name:"Rica Wax"}
    ]
    const Packages = [
        {id: 1, name:"FULL HAND SCRUB + POLISHING", price1: "₹849", price2: "₹649"},
        {id: 2, name:"FULL HAND SCRUB + POLISHING", price1: "₹849", price2: "₹649"},
        {id: 3, name:"FULL BACK + FULL FRONT SCRUBING + POLISH", price1: "₹849", price2: "₹649"},
        {id: 4, name:"FULL BODY SCRUBBING", price1: "₹849", price2: "₹649"},
        {id: 5, name:"FULL BODY SPA", price1: "₹849", price2: "₹649"},
        {id: 6, name:"FULL BODY POLISHING (MASSAGE OLIVE OIL OR CREAM + SCRUB + PACK)", price1: "₹849", price2: "₹649"}
    ]
    const handleOpenBox = (val) => {
        let openBoxArr = [...openBox];
        let index = openBoxArr.indexOf(val);
        if(index > -1 ){
            openBoxArr.splice(index,1);
        } else {
            openBoxArr.push(val);
        }
        setOpenBox(openBoxArr);
    }
  return (
    <div className='container my-3'>
        <div className={`text-center w-[85%] mx-auto font-medium mt-7 mb-5`}>
            <h1 className="md:text-[42px] sm:text-3xl text-2xl">Beauty Services Price List</h1>
            <p className="text-base mt-3 text-black">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 md:col-span-7 flex flex-col gap-y-6'>
                {services?.map((service,idx)=> (
                <div className='shadow-4D rounded-2xl overflow-hidden' key={"service"+idx}>
                    <div className='theme-heading-box flex justify-between cursor-pointer' onClick={()=>handleOpenBox(service?.id)}>
                        <p className='text-[#EBEBEB] uppercase'>{service?.service}</p>
                        <div><SvgIcon.IosArrowDown className={`scale-50 ${openBox ? 'rotate-180' : "rotate-0"}`}/></div>
                    </div>
                    {!openBox?.includes(service?.id) &&
                    <div className='py-3'>
                        <ul className='flex flex-wrap gap-4 text-xs px-3'>
                            {category?.map((cat,idx)=> (
                                <li 
                                    className={`cursor-pointer py-2 px-5 rounded-3xl ${selectedCategory === cat?.name ? "bg-gradient text-white": "border border-body"}`} 
                                    onClick={()=> setSelectedCategory(cat?.name)}
                                    key={"category"+idx}
                                >
                                    {cat?.name}
                                </li>
                            ))}
                        </ul>
                        <h6 className='text-theme text-center font-semibold my-3 uppercase px-4'>{selectedCategory}</h6>
                        <ul className='text-xs font-semibold font-Roboto'>
                            {Packages?.map((pkg,idx)=> (
                                <li 
                                    className={`flex justify-between cursor-pointer items-center gap-3  py-1 px-3 mb-1 ${selectedPackages === pkg?.id ? "bg-[#FBE0E0]" : "border-[0.4px] border-black-707 border-opacity-40"}`}
                                    onClick={()=>setSelectedPackages(pkg?.id)}
                                    key={"package"+idx}
                                >
                                <div className='flex items-center gap-2'>
                                    {/* <input type="checkbox" className='pricecheckbox'/> */}
                                    <span className='w-4 h-4 border border-black-707 rounded-[3px] text-xs flex justify-center items-center text-theme'>{selectedPackages === pkg?.id ? "✓" : ""}</span>
                                    <span className='uppercase'>{pkg?.name}</span>
                                </div>
                                <div className='flex justify-end gap-4'>
                                    <div className='w-12'><span className='rupee-sym'>&#x20B9;</span>{pkg?.price1}</div>
                                    <div className='w-12'><span className='rupee-sym'>&#x20B9;</span>{pkg?.price2}</div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                    }
                </div>
                ))}
            </div>
            <div className='col-span-12 md:col-span-5'>
                <div className='sticky top-20'><PriceListCheckout/></div>
            </div>
        </div>
    </div>
  )
}

export default PriceList