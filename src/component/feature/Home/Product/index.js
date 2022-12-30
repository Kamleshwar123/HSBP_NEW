import React from 'react'
import SeeAll from '../../../common/SeeAll'
import ProductBox from './ProductBox'

const Product = () => {
    return (
        <div className='bg-pink p-6'>
            <div className='flex flex-wrap justify-center'>
                {[...Array(4).keys()].map((item, idx) => (
                    <div className='w-full md:w-1/2 lg:w-1/3 p-3' key={"prd" + idx}>
                        <ProductBox data={item} />
                    </div>
                ))
                }
            </div>
            <SeeAll text={"See All Products"} url={"/"}/>
        </div>
    )
}

export default Product