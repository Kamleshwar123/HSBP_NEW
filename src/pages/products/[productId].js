import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ProductCategorySlider from '../../component/common/ProductCategorySlider';
import ProductBox from '../../component/feature/Home/Product/ProductBox';
import ProductHeading from '../../component/feature/Product/ProductHeading';
import ICONS from '../../constant/icons';
import IMAGES from '../../constant/images';
import SvgIcon from '../../constant/SvgIcon';
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const ProductDetails = () => {
    const router = useRouter()
    const { productId } = router.query;
    const [tab, setTab] = useState("tab1");
    useEffect(() => {
        setTab("tab1");
        return () => { }
    }, [])

    const handleTab = (data) => {
        setTab(data);
    }

    return (
        <div className='container'>
            <ProductCategorySlider/>
            <div className='mt-4 mb-7 text-black-0f0'>
                <h1 className='text-[42px]'>Product Details</h1>
                <p className='text-black-686'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna dolor sit eiusmod consectetur adipiscing tempor amet aliqua.</p>
            </div>
            <div className='p-4 bg-white-f2 bg-opacity-50 shadow-8F rounded-3xl'>
                <div className='grid md:grid-cols-[40%,_60%] gap-6 p-5'>
                    <div className='grid grid-cols-6 items-stretch gap-6'>
                        <div className='col-span-1 flex flex-col justify-between gap-y-2'>
                            {[...Array(4).keys()].map((item, idx) => (
                                <div className='p-1 w-12 h-12 text-center shadow-4D rounded-lg' key={"pdimg"+idx}>
                                    <Image src={IMAGES.Product} alt="Product" className="scale_img" />
                                </div>
                            ))}
                        </div>
                        <div className='col-span-5'>
                            <div className='p-3 text-center shadow-4D rounded-3xl'>
                                <Image src={IMAGES.Product} alt="Appointment" className="scale_img" />
                            </div>
                        </div>
                    </div>
                    <div className='px-5 text-black-241'>
                        <div>
                            <h6 className='text-base'>King C. Gillette Men's Beard Oil with Plant Based Argan...</h6>
                            <div className='py-4 flex gap-4'>
                                <div><Ratings rating={4.5} /></div>
                                <div className='text-black-707'>4.5/5 <span className='ml-4'>216 Reviews</span></div>
                            </div>
                            <div className='text-theme'>Special Price</div>
                            <div className='my-2'><span>&#x20B9;1500</span><span className='ml-3 line-through'>&#x20B9;2000</span></div>
                            <div>Size - 200 ML</div>
                            <div>Quantity - 1</div>
                            <div className='flex items-center gap-5 mt-3'>
                                <button className='custom_button'>Add to Cart</button>
                                <button className='custom_button'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='text-lg text-black-241 gap-5 flex items-center font-medium pb-5'>
                    <span onClick={() => handleTab("tab1")} className={tab === 'tab1' ? 'cursor-pointer py-1 active': 'cursor-pointer py-1'}>Description</span>
                    <span onClick={() => handleTab("tab2")} className={tab === 'tab2' ? 'cursor-pointer py-1 active': 'cursor-pointer py-1'}>Review</span>
                </div>
                {tab === "tab1" &&
                    <div>
                        <div className='bg-white shadow-8F p-5 rounded-2xl mt-3'>
                            <p>Palladio’s Herbal Lipstick is a richly pigmented long lasting lipstick. This nourishing lipstick goes on soft with color that lasts & can help combat the look of fine lines associated with aging. Gives lips a smooth, moisturized feel. FULL COVERAGE LIP COLOR: Palladio Herbal Lipstick features a creamy texture that glides smoothly over lips. It has full-coverage properties for color that stays in place for hours without drying the lips, feathering, or bleeding. A makeup bag essential.</p>
                        </div>
                        <div className='bg-white shadow-8F p-5 rounded-2xl my-5'>
                            <h6 className='text-black-0f0 text-base'>About this item</h6>
                            <p className='my-1'>- Moisturizes dry skin under the beard</p>
                            <p className='my-1'>- Softens beard hair</p>
                            <p className='my-1'>- Apply a few drops daily (more for longer beards) onto your palm then work treatment into beard and skin</p>
                            <p className='my-1'>- Helps you feel and be your best self every day</p>
                            <p className='my-1'>- Helps you feel and be your best self every day</p>
                            <p className='my-1'>- The pinnacle of over a century's worth of innovation and expertise</p>
                        </div>
                    </div>
                }
                {tab === "tab2" &&
                <div>
                    {[...Array(3).keys()].map((item, idx) => (
                    <div className='flex gap-5 py-3 items-start' key={`review${idx}`}>
                        <div className='rounded-[50%] bg-white-f2 w-20 h-20 text-center'>
                            <Image src={ICONS.UserProfile} alt="Appointment" className="scale_img" />
                        </div>
                        <div className='px-2 w-auto'>
                            <div className='inline-flex items-center space-x-3'>
                                <h6 className='text-base text-theme'>Annu</h6>
                                <span className='text-xs'>21 march 2022</span>
                            </div>
                            <div><Ratings rating={4.5} /></div>
                            <p className='text-[#7D7D7D] text-xs mt-1'>I work as a hairstylist in the fashion industry. A lot of my clients need to tweak their hairstyles, hair colour rather frequently. The nature of work demands</p>
                        </div>
                    </div>
                    ))}
                </div>
                }
            </div>
            <ProductHeading
                title={"Related Products"}
                desc={""}
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

export default ProductDetails