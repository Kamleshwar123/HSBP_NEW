import React, { useEffect } from 'react'
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import PriceListCheckout from '../../component/feature/PriceList/PriceListCheckout';
import SvgIcon from '../../constant/SvgIcon';
import { ServiceService } from '../../services';

const PriceList = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState({name: "", id: ""});
    const [filterService, setFilterService]= useState([]);
    const [selectedService, setSelectedService]= useState("");
    const { mutate: getServiceList } = useMutation((data) => dispatch(ServiceService.serviceListApi(data)));
    const serviceList = useSelector(state => state.service.serviceList || []);
    const CityId = useSelector((state)=> state.common.localCity);

    useEffect(()=> {
        getServiceList({CityId: CityId});
        return () => { }; 
    },[CityId])

    useEffect(()=> {
        if(serviceList?.length > 0 ) {
            setCategory(serviceList[0]?.CategoryId);
            if(serviceList[0]?.SubCategories?.length > 0) {
                setSubCategory({name: serviceList[0]?.SubCategories[0]?.SubCategoryName, id: serviceList[0]?.SubCategories[0]?.SubCategoryId});
            }
        }
        return () => { }; 
    },[serviceList])

    useEffect(()=> {
        if(category && subCategory) {
            let _category = serviceList?.find((cat)=> cat?.CategoryId === category);
            if(_category?.SubCategories && _category?.SubCategories?.length > 0) {
                let _data = _category?.SubCategories.find((subcat)=> subcat?.SubCategoryId === subCategory?.id);
                setFilterService(_data?.SubCategoryProductList || []);
            }
        }
        return () => { }; 
    },[subCategory])

    const handleOpenBox = (val) => {
        if(val?.CategoryId === category) {
            setCategory("");
        } else {
            setCategory(val?.CategoryId);
            if(val?.SubCategories?.length > 0){
                setSubCategory({name: val?.SubCategories[0]?.SubCategoryName, id: val?.SubCategories[0]?.SubCategoryId});
            }
        }
    }
    const handleSubCategory = (val) => {
        setSubCategory({name: val?.SubCategoryName, id: val?.SubCategoryId});
    }
    
  return (
    <div className='container my-3'>
        <div className={`text-center w-[85%] mx-auto font-medium mt-7 mb-5`}>
            <h1 className="md:text-[42px] sm:text-3xl text-2xl">Beauty Services Price List</h1>
            <p className="text-base mt-3 text-black">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 md:col-span-7 flex flex-col gap-y-6'>
                {serviceList?.map((cat,idx)=> (
                <div className='shadow-4D rounded-2xl overflow-hidden' key={"cat"+idx}>
                    <div className='theme-heading-box flex justify-between cursor-pointer' onClick={()=>handleOpenBox(cat)}>
                        <p className='text-[#EBEBEB] uppercase'>{cat?.CategoryName}</p>
                        <div><SvgIcon.IosArrowDown className={`scale-50 ${category === cat?.CategoryId ? 'rotate-180' : "rotate-0"}`}/></div>
                    </div>
                    {category === cat?.CategoryId  &&
                    <div className='py-3'>
                        <ul className='flex flex-wrap gap-4 text-xs px-3'>
                            {cat?.SubCategories?.length > 0 && cat?.SubCategories?.map((subcat,idx)=> (
                                <li 
                                    className={`cursor-pointer py-2 px-5 rounded-3xl ${subCategory?.id === subcat?.SubCategoryId ? "bg-gradient text-white": "border border-body"}`} 
                                    onClick={()=> handleSubCategory(subcat)}
                                    key={"subcategory"+idx}
                                >
                                    {subcat?.SubCategoryName}
                                </li>
                            ))}
                        </ul>
                        <h6 className='text-theme text-center font-semibold my-3 uppercase px-4'>{subCategory?.name}</h6>
                        <ul className='text-xs font-semibold'>
                            {filterService?.length > 0 && filterService?.map((service,idx)=> (
                                <li 
                                    className={`flex justify-between cursor-pointer items-center gap-3  py-1 px-3 mb-1 ${selectedService === service?.ProductId ? "bg-[#FBE0E0]" : "border-[0.4px] border-black-707 border-opacity-40"}`}
                                    onClick={()=>setSelectedService(service?.ProductId)}
                                    key={"filterService"+idx}
                                >
                                <div className='flex items-center gap-2'>
                                    {/* <input type="checkbox" className='pricecheckbox'/> */}
                                    <div className='w-4 h-4 min-w-[16px] border border-black-707 rounded-[3px] text-xs flex justify-center items-center text-theme'>{selectedService === service?.ProductId ? "✓" : ""}</div>
                                    <div className='uppercase w-auto'>{service?.ProductName}</div>
                                </div>
                                <div className='flex justify-end gap-4'>
                                    <div className='w-12 line-through'><span className='rupee-sym'>&#x20B9;</span>{service?.ProductPrice}</div>
                                    <div className='w-12'><span className='rupee-sym'>&#x20B9;</span>{service?.ProductDiscountPrice}</div>
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