import Image from 'next/image'
import React from 'react'
import ProductCategorySlider from '../../component/common/ProductCategorySlider'
import ProductBox from '../../component/feature/Home/Product/ProductBox'
import ProductAd from '../../component/feature/Product/ProductAd'
import ProductHeading from '../../component/feature/Product/ProductHeading'
import ProductOffer from '../../component/feature/Product/ProductOffer'
import IMAGES from '../../constant/images'

const ProductHome = () => {
    return (
        <div className='container'>
            <ProductCategorySlider/>
            <div className='text-center'>
                <Image src={IMAGES.ProductBanner} alt="Salon" className="scale_img" />
            </div>
            <ProductHeading
                title={"HSBP Offers"}
                desc={"Need ideas? See our list of top-selling products that are being loved by the masses."}
            />
            <ProductOffer/>
            <ProductHeading
                title={"Top Selling Product"}
                desc={"Need ideas? See our list of top-selling products that are being loved by the masses."}
            />
            <div className='bg-white-f2 product p-3'>
                <div className='flex flex-wrap justify-center'>
                    {[...Array(6).keys()].map((item, idx) => (
                        <div className='w-full md:w-1/2 lg:w-1/3 p-3' key={"prd" + idx}>
                            <ProductBox data={item} />
                        </div>
                    ))
                    }
                </div>
            </div>
            <ProductAd/>
            <ProductHeading
                title={"New Arrivals"}
                desc={"Need ideas? See our list of top-selling products that are being loved by the masses."}
            />
            <div className='bg-white-f2 product p-3'>
                <div className='flex flex-wrap justify-center'>
                    {[...Array(6).keys()].map((item, idx) => (
                        <div className='w-full md:w-1/2 lg:w-1/3 p-3' key={"prd" + idx}>
                            <ProductBox data={item} />
                        </div>
                    ))
                    }
                </div>
            </div>
            <ProductHeading
                title={"Recommended Products"}
                desc={"Need ideas? See our list of top-selling products that are being loved by the masses."}
            />
            <div className='bg-white-f2 p-3'>
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

export default ProductHome