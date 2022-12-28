import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
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
            <div className='mt-4 mb-7 text-black-0f0'>
                <h1 className='text-[42px]'>Product Details</h1>
                <p className='text-black-686'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna dolor sit eiusmod consectetur adipiscing tempor amet aliqua.</p>
            </div>
            <div className='p-4 bg-white-f2 bg-opacity-50 shadow-8F rounded-3xl'>
                <div className='grid md:grid-cols-[40%,_60%] gap-5 p-5'>
                    <div className='p-5 text-center shadow-4D rounded-3xl'>
                            <Image src={IMAGES.Product} alt="Appointment" className="scale_img" />
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
                    <p className='text-686'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                }
                {tab === "tab2" &&
                <div>
                    {[...Array(3).keys()].map((item, idx) => (
                    <div className='flex gap-5 py-3' key={`review${idx}`}>
                        <div className='rounded-[50%] bg-white-f2 w-20 h-20 flex items-center justify-center'>
                            {/* <SvgIcon.User/> */}
                            <p className='text-3xl text-[#D8D4D4]'>A</p>
                        </div>
                        <div className='px-2'>
                            <h6 className='text-lg text-black-241'>Annu</h6>
                            <div className='py-2'><Ratings rating={4.5} /></div>
                            <p className='text-[#7D7D7D]'>I work as a hairstylist in the fashion industry. A lot of my clients need to tweak their hairstyles, hair colour rather frequently. The nature of work demands</p>
                        </div>
                    </div>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}

export default ProductDetails