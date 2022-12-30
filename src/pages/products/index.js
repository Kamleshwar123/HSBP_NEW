import Image from 'next/image'
import React from 'react'
import Heading from '../../component/feature/Home/Heading'
import ProductBox from '../../component/feature/Home/Product/ProductBox'
import IMAGES from '../../constant/images'

const products = () => {
    return (
        <div className='container'>
            <div className='text-center'>
                <Image src={IMAGES.ProductBanner} alt="Salon" className="scale_img" />
            </div>
            <Heading
                title={"Top Selling Product"}
                desc={"Need ideas? See our list of top-selling products that are being loved by the masses."}
            />
            <div className='bg-pink product p-6'>
                <div className='flex flex-wrap justify-center'>
                    {[...Array(6).keys()].map((item, idx) => (
                        <div className='w-full md:w-1/2 lg:w-1/3 p-3' key={"prd" + idx}>
                            <ProductBox data={item} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default products