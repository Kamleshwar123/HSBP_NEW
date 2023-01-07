import React from 'react'
import ProductCategorySlider from '../../component/common/ProductCategorySlider'
import ProductBox from '../../component/feature/Home/Product/ProductBox'

const products = () => {
    return (
        <div className='container'>
            <ProductCategorySlider/>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-12 lg:col-span-3'>
                    <div className='bg-white-f2 rounded-2xl p-5'>
                        <div className='flex items-center gap-3 justify-between'>
                            <div>Filters</div>
                            <div className='font-bold text-blue-274 cursor-pointer'>Clear all</div>
                        </div>
                        <hr className='my-3'/>
                        <div>
                            <p>CATEGORIES</p>
                            <ul className='text-black-949'>
                                <li>{'>'} Beauty and grooming</li>
                                <li>{'>'} Makeup</li>
                                <li>{'>'} Lips</li>
                                <li className='text-body'>Lipstick</li>
                            </ul>
                        </div>
                        <div className='my-2'>Price</div>
                        <hr className='my-3'/>
                        <div>Brand</div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-9'>
                    <div className='bg-white-f2 rounded-2xl p-5'>
                        <div><b>Lipstick</b><span className='font-light ml-2'>(Showing 1 – 40 products of 257 products)</span></div>
                        <div className='inline-flex space-x-5 items-center mt-3'>
                            <div>Sort by</div>
                            <div className='text-theme font-medium border-b border-b-theme'>Popularity</div>
                            <div>Price - Low to High</div>
                            <div>Price - High to Low</div>
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

export default products