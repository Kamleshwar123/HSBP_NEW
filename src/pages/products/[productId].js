import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ProductCategorySlider from '../../component/common/ProductCategorySlider';
import ProductBox from '../../component/feature/Home/Product/ProductBox';
import ProductHeading from '../../component/feature/Product/ProductHeading';
import RatingsReview from '../../component/feature/Product/RatingsReview';
import ICONS from '../../constant/icons';
import IMAGES from '../../constant/images';
import SvgIcon from '../../constant/SvgIcon';
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const ProductDetails = () => {
    const router = useRouter()
    const { productId } = router.query;
    const [tab, setTab] = useState("tab1");
    const [image, setImage]= useState(1);
    useEffect(() => {
        setTab("tab1");
        return () => { }
    }, [])

    const handleTab = (data) => {
        setTab(data);
    }
    const handleImg = (val) => {
        setImage("");
        setTimeout(()=>setImage(val), 300);
    }
    return (
        <div className='container'>
            <ProductCategorySlider/>
            <div className='mt-4 mb-7 text-black-0f0'>
                <h1 className='md:text-[42px] sm:text-3xl text-2xl'>Product Details</h1>
                <p className='text-black-686'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna dolor sit eiusmod consectetur adipiscing tempor amet aliqua.</p>
            </div>
            <div className='p-4 bg-white-f2 bg-opacity-50 shadow-8F rounded-3xl'>
                <div className='grid md:grid-cols-[40%,_60%] gap-6 p-3'>
                    <div className='grid grid-cols-12 items-stretch gap-6'>
                        <div className='col-span-3 flex flex-col justify-between items-stretch gap-y-2'>
                            {[...Array(4).keys()].map((item, idx) => (
                                <div className={`p-2 text-center shadow-4D rounded-xl cursor-pointer ${image === (idx+1) ? "border border-theme": ""}`} key={"pdimg"+idx} onClick={() => handleImg(idx+1)}>
                                    <Image src={IMAGES.Product} alt="Product" className="scale_img" />
                                </div>
                            ))}
                        </div>
                        <div className='col-span-9'>
                            <div className='p-8 text-center shadow-4D rounded-3xl h-full flex items-center'>
                                {image && <Image src={IMAGES.Product} alt="Appointment" className="scale_img" />}
                            </div>
                        </div>
                    </div>
                    <div className='px-5 text-black-241'>
                        <div className='pt-0 md:pt-5'>
                            <h6 className='text-xl w-4/5 font-bold'>King C. Gillette Men's Beard Oil with Plant Based Argan...</h6>
                            <hr className='border border-[#8B2E5D] opacity-20 my-4'></hr>
                            <div className='mb-3 flex gap-4'>
                                <div><Ratings rating={4.5} /></div>
                                <div className='text-black-707'>4.5/5 <span className='ml-4'>216 Reviews</span></div>
                            </div>
                            <div className='text-theme'>Special Price</div>
                            <div className='my-2'><span className='text-black-0f0 font-bold text-base'><span className='rupee-sym'>₹</span>377</span><span className='text-black-a8a ml-3 line-through'><span className='rupee-sym'>₹754</span></span></div>
                            <div>Size - 50 ML</div>
                            <div className='flex flex-wrap items-center gap-5 mt-6'>
                                <button className='custom_button w-36' onClick={()=> router.push("/product-cart")}>Add to Cart</button>
                                <button className='custom_button w-36' onClick={()=> router.push("/checkout")}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {tab === 'tab2' &&
                <>
                <h3 className='text-xl text-black-0f0 font-semibold my-6'>Ratings & Reviews</h3>
                    <RatingsReview/>
                </>
            }
            <div className='mt-10'>
                <div className='text-xl text-[#CFCECE] gap-5 flex items-center font-bold pb-5'>
                    <span onClick={() => handleTab("tab1")} className={`${tab === 'tab1' ? "text-theme ": ""}cursor-pointer py-1 border-solid border-b-2`}>Description</span>
                    <span onClick={() => handleTab("tab2")} className={`${tab === 'tab2' ? "text-theme ": ""}cursor-pointer py-1 border-solid border-b-2`}>Review</span>
                </div>
                {tab === "tab1" &&
                    <div>
                        <div className='bg-white bg-opacity-50 border border-black-707 border-opacity-60 shadow-8F p-5 rounded-2xl mt-3'>
                            <div className='flex gap-6'>
                                <ul>
                                    <li className='mb-1'>Hair Type</li>
                                    <li className='mb-1'>Scent</li>
                                    <li className='mb-1'>Liquid Volume</li>
                                    <li className='mb-1'>Item Form</li>
                                    <li className='mb-1'>Brand</li>
                                </ul>
                                <ul className='text-black-a8a'>
                                    <li className='mb-1'>Dry</li>
                                    <li className='mb-1'>Fresh</li>
                                    <li className='mb-1'>200 ML</li>
                                    <li className='mb-1'>Liquid</li>
                                    <li className='mb-1'> Gillette</li>
                                </ul>
                            </div>
                        </div>
                        <div className='bg-white shadow-8F p-5 rounded-2xl my-5 text-black-686 bg-opacity-50 border border-black-707 border-opacity-60'>
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
                <div className='divide-y divide-black-707'>
                    {[...Array(3).keys()].map((item, idx) => (
                    <div className='py-5' key={`review${idx}`}>
                        <div className='w-auto'>
                            <div className='inline-flex items-center space-x-2'>
                                <SvgIcon.ReviewUser className='w-6 h-6 text-theme'/>
                                <h6 className='text-base text-theme'>Deepak Mathur</h6>
                                <span className='text-xs text-[#8E9298]'>2 january 2023</span>
                            </div>
                            <div className='flex gap-3 items-end'><Ratings rating={4.5} /><span>Nice Product</span></div>
                            <p className='text-[#01132F] text-xs mt-1 w-full md:w-1/2'>I work as a hairstylist in the fashion industry. A lot of my clients need to tweak their hairstyles, hair colour rather frequently. The nature of work demands</p>
                            <div className='flex items-center gap-5 mt-2'>
                                <button className='text-black-0f0 font-semibold'>Helpful</button>
                                <button className='text-[#A7A5A5]'>Report abuse</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                }
            </div>
            {tab === "tab1" &&
            <>
                <h1 className="text-2xl sm:text-3xl md:text-[40px] mt-8 text-black-text-black-241 mb-5">Related Products</h1>
                <div className='bg-white-f2 p-3'>
                    <div className='flex flex-wrap justify-center'>
                        {[...Array(3).keys()].map((item, idx) => (
                            <div className='w-full md:w-1/2 lg:w-1/3 p-3' key={"prd" + idx}>
                                <ProductBox data={item} />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default ProductDetails