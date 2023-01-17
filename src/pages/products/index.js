import React, { useState } from 'react'
import ProductCategorySlider from '../../component/common/ProductCategorySlider'
import ProductBox from '../../component/feature/Home/Product/ProductBox'

const Products = () => {
    const [sortFilter,setSortFilter] = useState(1);
    return (
        <div className='container'>
            <ProductCategorySlider/>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-12 lg:col-span-3'>
                    <div className='bg-white-f2 rounded-2xl p-5'>
                        <div className='flex items-center gap-3 justify-between'>
                            <div>Filters</div>
                            <div className='font-medium text-blue-274 cursor-pointer'>Clear all</div>
                        </div>
                        <hr className='my-3'/>
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
                        <input class="range pr-6 accent-red-500" 
                    type="range" 
                    value={0} min={0}
                    max={4000}
                    ></input>
                        <hr className='my-3'/>
                        <div className='font-medium'>Brand</div>
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