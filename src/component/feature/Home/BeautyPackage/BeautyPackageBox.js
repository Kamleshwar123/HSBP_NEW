import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'

const BeautyPackageBox = ({item}) => {
    const router = useRouter();
    return (
        <div className='pt-[75px] h-full'>
            <div className='rounded-3xl bg-white shadow-4D p-5 cursor-pointer h-full relative' onClick={()=> router.push("/booknow")}>
                <div className='-mt-[95px] pb-20'>
                    <div className='text-center w-[120px] h-[150px] relative mx-auto'>
                        <Image src={item?.PackageImage} alt="beauty" className="scale_img rounded-2xl pkgclip" fill/>
                    </div>
                    <div className='content'>
                        <h3 className='text-lg text-theme font-bold mb-1 mt-1 capitalize'>{item?.PackageName?.toLowerCase()}</h3>
                        {item?.PackageProductList && item?.PackageProductList?.length > 0 && item?.PackageProductList?.map((pkgProduct,n_idx)=> (
                            <p className='mb-1' key={"pkgProduct"+n_idx}>{pkgProduct}</p>
                        ))}
                    </div>
                    <div className='absolute left-1/2 transform -translate-x-1/2 bottom-5'>
                        <div className='my-3'><span className='text-black-0f0 text-base font-bold'><span className='rupee-sym'>₹</span>{item?.PackagePrice}</span><span className='text-black-a8a ml-3 line-through rupee-sym'>₹{item?.PackageDiscountPrice}</span></div>
                        <button className='custom_button py-2 px-9 whitespace-nowrap'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeautyPackageBox