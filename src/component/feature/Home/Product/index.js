import React from 'react'
import SeeAll from '../../../common/SeeAll'
import ProductBox from './ProductBox'

const Product = () => {
    return (
        <div className='container pb-3'>
            <div className='flex flex-wrap justify-center items-stretch -m-6 pb-3'>
                {[...Array(4).keys()].map((item, idx) => (
                    <div className='p-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4' key={"prd" + idx}>
                        <ProductBox/>
                    </div>
                ))
                }
            </div>
            <SeeAll text={"See All Products"} url={"/product-home"}/>
        </div>
    )
}

export default Product