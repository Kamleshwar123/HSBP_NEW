import Image from 'next/image'
import {useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import ICONS from '../../../constant/icons'
import IMAGES from '../../../constant/images'
import SvgIcon from '../../../constant/SvgIcon'
import OutsideClick from '../../../hooks/useOutClick'
import SeeAll from '../../common/SeeAll'

const Salon = () => {
    const router = useRouter();
    const [search,setSearch] = useState("");
    const [showAutoComplete,setShowAutoComplete] = useState(false);

    const serviceData = ["Hair Care", "Body Care", "Skin Care",'Makeup Services'];
    const filteredData =
    search === ''
      ? serviceData
      : serviceData.filter((_val) => {
          return _val?.toLowerCase()?.includes(search?.toLowerCase());
    })
    return (
        <div>
            <div className='text-xl md:text-3xl text-black-2e2 text-center'>Discover the best salons near you</div>
            <div className='grid grid-cols-12 items-center gap-6 p-6 mx-auto md:w-11/12 lg:w-2/3'>
                <div className='flex w-full col-span-12 md:col-span-4'>
                    <label htmlFor="selectcity" className="relative block w-full">
                        <SvgIcon.LocationTheme className="scale-75 pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"/>
                        <select className='form-control rounded-xl salonboxinput pl-10' id="selectcity">
                            <option>Select City</option>
                            <option>Noida</option>
                            <option>Agra</option>
                            <option>Delhi</option>
                            <option>Jaipur</option>
                        </select>
                    </label>
                </div>
                <div className='w-full col-span-12 md:col-span-8'>
                <OutsideClick open={showAutoComplete} setOpen={setShowAutoComplete}>
                    <div className="flex w-full flex-wrap items-stretch">
                        <SvgIcon.Search className="text-theme pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3"/>
                        <input type="text" placeholder="Search for Services" className="salonboxinput form-control rounded-xl pl-10" onChange={(e)=> setSearch(e.target.value)} onFocus={()=> setShowAutoComplete(true)}/>
                    </div>
                    {showAutoComplete &&
                    <ul className='absolute z-10 mt-0 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                        {filteredData?.length > 0 ? filteredData?.map((item,idx) => (
                        <li 
                            className='cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-theme hover:text-white' 
                            key={`serviceauto${idx}`}
                            onClick={()=> router.push("/services")}
                        >
                            {item}
                        </li>
                        ))
                        :
                        (<div className='select-none py-2 pl-3 pr-9'>Nothing found.</div>)
                        }
                    </ul>
                    }
                </OutsideClick>
                </div>
            </div>
            <div className='text-theme-light text-base font-medium'>Near by Salons</div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 py-6'>
                {[...Array(4).keys()].map((item, idx) => (
                    <div key={"salon" + idx}>
                        <div>
                            <div className='shadow-[13px_13px_15px_#00000029] bg-white rounded-3xl pb-4 border border-black-707 border-opacity-60'>
                                <div className='text-center'>
                                    <Image src={IMAGES.Salon} alt="Salon" className="scale_img" />
                                </div>
                                <div className='py-4 px-3 flex justify-between gap-3'>
                                    <div>
                                        <h3 className='text-theme text-base font-bold pb-2'>HSBP Studio</h3>
                                        <p className='text-xs'>Near Mahagun Mall,</p>
                                        <p className='text-xs'>Vaishali, Ghaziabad</p>
                                    </div>
                                    <div className='text-right justify-self-end'>
                                        <div className='flex justify-end text-white-fc mb-1'><span className='flex gap-1 bg-green items-center px-3 py-1 rounded'><span>4.5</span><span><SvgIcon.Rating /></span></span></div>
                                        <p className='text-[10px] mb-2 text-black-0f0'>482 Reviews</p>
                                        <div className='flex gap-1 items-center justify-end'>
                                            <a href="tel:+4733378901">
                                                <Image src={ICONS.Scall} alt="Scall" className="h-7 w-auto"/>
                                            </a>
                                            <a href="https://www.google.com/maps/place/1,+Block+B,+Sector+34,+Gurugram,+Haryana+122015/@28.4327897,77.0111773,17z/data=!3m1!4b1!4m5!3m4!1s0x390d181cdf34ffbb:0xc492782cb98402e1!8m2!3d28.432785!4d77.013366" rel="noopener noreferrer" target="_blank">
                                                <Image src={ICONS.Slocation} alt="Slocation" className="h-7 w-auto"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center mt-2'>
                                    <button className='custom_button' onClick={()=> router.push('/salons/1')}>Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <SeeAll text={"See All Salons"} url={"/salons"}/>
        </div>
    )
}

export default Salon