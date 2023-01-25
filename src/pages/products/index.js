import React, { useState } from 'react'
import RangeSlider from 'react-range-slider-input/dist/components/RangeSlider';
import ProductCategorySlider from '../../component/common/ProductCategorySlider'
import ProductBox from '../../component/feature/Home/Product/ProductBox'
import SvgIcon from '../../constant/SvgIcon';

const Products = () => {
    const [prices,setPrices] = useState([0,500,1000,2000,3000,4000])
    const [sortFilter,setSortFilter] = useState(1);
    const[openBrand, setOpenBrand] = useState(true);
    const [minPrice, setMinPrice]= useState(0);
    const [maxPrice, setMaxPrice]= useState(4000);
    const handleMinSlider = (max) => {
        
    }
    const handleMaxSlider = (max) => {

    }
    
    return (
        <div className='container'>
            <ProductCategorySlider/>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-12 lg:col-span-3'>
                    <div className='bg-white-f2 rounded-2xl p-5 sticky top-[135px]'>
                        <div className='flex items-center gap-3 justify-between'>
                            <div>Filters</div>
                            <div className='font-medium text-blue-274 cursor-pointer'>Clear all</div>
                        </div>
                        <hr className='my-3 text-black-707 opacity-50'/>
                        <div>
                            <p className='font-medium'>CATEGORIES</p>
                            <ul className='text-black-949'>
                                <li>{'<'} Beauty and grooming</li>
                                <li>{'<'} Makeup</li>
                                <li>{'<'} Lips</li>
                                <li className='text-body font-medium'>Lipstick</li>
                            </ul>
                        </div>
                        <div className='my-2 font-medium'>Price</div>
                        <RangeSlider 
                            min={0}
                            max={4000}
                            step={500}
                            defaultValue={[0, 4000]}
                            className="pricerangeslider"
                            /* onInput={(min,max)=> handleSlider(min,max)} */
                            onRangeDragStart={handleMinSlider}
                            onRangeDragEnd={handleMaxSlider}
                            thumbsDisabled={[false, false]}
                        />
                        <hr className='my-3 border-t-2 border-black-707 border-dotted border-opacity-50'></hr>
                        <div className='flex gap-2 justify-between items-center'>
                            <select className='form-control py-1/2 bg-transparent text-xs' value={minPrice} onChange={(e)=> setMinPrice(e.target.value)}>
                                <option value={0}>Min</option>
                                <option value={500}>500</option>
                                <option value={1000}>1000</option>
                                <option value={1500}>1500</option>
                                <option value={2000}>2000</option>
                                <option value={3000}>3000</option>
                            </select>
                            <div>to</div>
                            <select className='form-control py-1/2 bg-transparent text-xs' value={maxPrice} onChange={(e)=> setMaxPrice(e.target.value)}>
                                <option value={1000}>1000+</option>
                                <option value={2000}>2000+</option>
                                <option value={3000}>3000+</option>
                                <option value={4000}>4000+</option>
                            </select>
                        </div>
                        <hr className='my-3 text-black-707 opacity-50'/>
                        <div className='font-medium flex justify-between items-center cursor-pointer py-1' onClick={()=> setOpenBrand(!openBrand)}>
                            <span>Brand</span>
                            <span className={`w-10 h-4 brand_arrow ${openBrand ? 'rotate-180': ""}`}></span>
                        </div>
                        {openBrand &&
                            <div>
                                <div className='flex gap-2 items-center mb-2'>
                                    <SvgIcon.Cross className='w-4 h-4 text-black-685'/>
                                    <label>Clear all</label>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input type="checkbox" className='accent-black-685'/>
                                    <label>Bluish</label>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-9'>
                    <div className='bg-white-f2 rounded-2xl p-5'>
                        <div><b>Lipstick</b><span className='font-light ml-2'>(Showing 1 – 40 products of 257 products)</span></div>
                        <div className='inline-flex space-x-5 items-center mt-3'>
                            <div>Sort by</div>
                            <div className={sortFilter === 1 ? "product_sort_filter active": "product_sort_filter"} onClick={()=> setSortFilter(1)}>Popularity</div>
                            <div className={sortFilter === 2 ? "product_sort_filter active": "product_sort_filter"} onClick={()=> setSortFilter(2)}>Price - Low to High</div>
                            <div className={sortFilter === 3 ? "product_sort_filter active": "product_sort_filter"} onClick={()=> setSortFilter(3)}>Price - High to Low</div>
                        </div>
                        <div className='flex flex-wrap justify-center items-stretch -m-3 py-5'>
                            {[...Array(14).keys()].map((item, idx) => (
                                <div className='p-3 w-full md:w-1/2 lg:w-1/3' key={"prd" + idx}>
                                    <ProductBox/>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products