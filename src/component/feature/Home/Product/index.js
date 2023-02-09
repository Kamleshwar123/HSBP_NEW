import React from 'react'
import SeeAll from '../../../common/SeeAll'
import ProductBox from './ProductBox'

const Product = () => {
    return (
        <div className='container pb-6'>
            <div className='flex flex-wrap justify-center items-stretch -m-3 pb-3'>
                {[...Array(8).keys()].map((item, idx) => (
                    <div className='p-3 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-full' key={"prd" + idx}>
                        <ProductBox/>
                    </div>
                ))
                }
            </div>
            <div className="mt-1"><SeeAll text={"See All Products"} url={"/products"}/></div>
        </div>
    )
}

export default Product