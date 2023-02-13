import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import SmartText from '../../component/common/SmartText'
import ICONS from '../../constant/icons'
const Ratings = dynamic(() => import('../../component/common/Ratings'), { ssr: false })

const SelectcityPage = () => {
  const router = useRouter();
  const { citySlug } = router.query;
  const beautyServices = [
    {id:1, icon: ICONS.CityService1, title: "Waxing - Body", des: "To be relax do body wrap spa treatment and keeps cellulite away. HSBP help you de-stress, make your body free from cellulite completely. Do the waxing keep away dead skin cells and reducing cellulite."},
    {id:2, icon: ICONS.CityService2, title: "Facial - Skin", des: "A facial is not just about pampering yourself, it also does wonders for your skin! A facial done by a professional, deep cleans and hydrates your skin as well as relieves acne. A good facial also improves blood circulation, giving your skin a healthy glow. At HSBP, we use products containing vital minerals and nutrien"},
    {id:3, icon: ICONS.CityService3, title: "Manicure", des: "Your hands help you hold your baby's head, your partners hands, and help you feel the world around you. So why not take good care of them? A manicure at HSBP ensures you have the softest, most beautiful hands ever! HSBP offers 3 special manicures – Spa Manicure, Radiant Manicure and Intense Moisturising Manicure."},
    {id:4, icon: ICONS.CityService4, title: "Manicure", des: "A pedicure is so much more than a cut and file for your nails. It releases the tension from your feet, relieving stress from your entire body. At HSBP, we specialise in 3 types of pedicure – Radiant Pedicure, Intense Moisturising Pedicure and Spa Pedicure. The Radiant Pedicure is best suited for tanned feet."},
    {id:5, icon: ICONS.CityService5, title: "Hair Spa", des: "Theres nothing more relaxing than a good hair spa treatment. At HSBP, we pamper every strand of your hair thanks to the gifted, gentle hands of our hair care professionals. Hair spa is a healthy indulgence that exfoliates your hair, stimulates your scalp and promotes hair growth."},
    {id:6, icon: ICONS.CityService6, title: "Face Bleaching", des: "Face bleaching at HSBP beauty parlour is effective yet gentle on your skin. Face bleaching is the best way to de-tan quickly, while adding brightness to your skin. HSBP beauty parlours skincare professionals bleach your face using techniques that do not damage,"}
  ]
  return (
    <div className='container mt-3'>
      <div className='rounded-2xl overflow-hidden city-upper-box-bg'>
        <div className='theme-heading-box py-5 text-center text-lg'>Beauty Parlor And Salon Service At Home In Noida</div>
        <div className='p-6'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 md:col-span-7'>
              <div className='bg-theme px-4 py-1.5 shadow-[0px_0px_16px_#00000021] rounded-lg mb-3 inline-block'>
                <div className='flex items-center gap-3 text-white text-xs'>
                  <Ratings rating={4} size={"16px"}/>
                  <div>4.5/5</div>
                  <div>216 Reviews</div>
                </div>
              </div>
              <div className='text-xs'>
                <p className='mb-2'>Taking appointment, sparing time to go to parlour and wait for your turn there is the most hectic task to solve our beauty woes. Now <b className='text-theme'>Home Service Beauty Parlour</b> or HSBP has come up with a solution to all these problems where you can take online appointment for a <b className='text-theme'>perfectly qualified, experienced and trained beautician in Noida at your home</b> allowing you to relax and avail the salon services at home in Noida without going out or caring about missing your appointment at the salons.</p>
                <h6 className='text-sm text-theme font-bold mb-2'>MAKE-UP ARTISTS AND HAIR STYLIST AT HOME IN NOIDA</h6>
                <p className='mb-2'>Home service beauty parlour or hsbp provide you with a complete beauty salon service like face cleanup, makeover, threading, waxing, spa, massage, manicure, pedicure and many more at your home. we guarantee a neat, clean and hygienic parlour service at home. ou professional beautician use high quality and genuine product for your service.</p>
                <h6 className='text-sm text-theme font-bold mb-2'>Hair Salon At Home</h6>
                <p className='mb-2'>At hsbp, beauticians are well experienced and keep update of latest hair styling and hair coloring which can give a stunning and new look to women.</p>
                <p className='mb-2'>One of the major concerns at a wedding is the <b className='text-theme'>bridal makeup on a wedding</b> and ceremonies like <b className='text-theme'>mehandi ceremony</b> etc. we all tend to look amazing and have a perfect makeup for the same but often tend to loose that because of the certain problems like time issue, distance issue or missed parlour appointment issue etc.</p>
                <p className='mb-2'>Now getting a perfect look for the wedding and having a perfect makeup just got amazing close and easier. all it takes for you is to just appoint a beautician online who will come to your house on mentioned date & time and will be take care of a <b className='text-theme'>bridal make up and need for that wedding day</b>.</p>
                <p className='mb-2'>Hsbp also provides offers and packages for beauty parlour service where more than two services are club together at one price and user has the option to choose any of them and avail salon them at your doorstep</p>
                <p className='text-black-241 font-semibold mb-2'>Now render our amazing beauty salon services while staying at doorstep in noida...!!.</p>
              </div>
            </div>
            <div className='col-span-12 md:col-span-5'>
              <div className='bg-[#EEEEEE] shadow-[0px_6px_16px_#00000059] p-5 rounded-3xl'>
                <div className='text-[#5B0F35] font-semibold text-base text-center'>QUERY FORM</div>
                <div className='mt-3 queryform'>
                    <div className='mb-3'>
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder='Enter Name' />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" placeholder='10 Digital Mobile No.' />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Email Address</label>
                        <input type="text" className="form-control" placeholder='Enter Email Address' />
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6'>
                        <div className='mb-3'>
                            <label className="form-label">Pin Code</label>
                            <input type="text" className="form-control" placeholder='Enter Pin Code' />
                        </div>
                        <div className='mb-3'>
                            <label className="form-label">City</label>
                            <select className='form-control'>
                                <option>Select City</option>
                                <option>Agra</option>
                                <option>Delhi</option>
                                <option>Jaipur</option>
                            </select>
                        </div>
                    </div>
                    <div className='mb-3'>
                    <label className="form-label">Query</label>
                        <textarea type="text" rows={5} className="form-control" placeholder='Enter your Query' />
                    </div>
                    <div className='grid grid-cols-12'>
                    <div className='md:col-span-12 mb-3'>
                    <div className='recaptcha'>
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_SITE_KEY || "6LdT4gckAAAAALAO8LIr88ZGcCtkO2s6dGOmOwcq"}
                        />
                    </div>
                    </div>
                    </div>
                    <div className='text-center'>
                        <button className='custom_button' style={{paddingRight: "50px",paddingLeft: "50px"}}>SUBMIT</button>
                    </div>
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className='rounded-3xl overflow-hidden mt-6 city-lower-box-bg'>
        <div className='theme-heading-box py-2'>Beauty Parlour Services</div>
        <div className='p-6'>
          {beautyServices.map((item,idx)=> (
          <div className='pb-3' key={"beautyservicebox"+idx}>
            <div className='flex items-center gap-2'>
              <div><Image src={item?.icon} alt="Category2" className='w-4 h-4 ml-0'/></div>
              <h6 className='font-bold text-theme'>{item.title}</h6>
            </div>
            <SmartText length={260} styleClass='text-xs text-black-2a3 mt-2' text={item.des}/>
          </div>))}
        </div>
      </div>
      <div className='text-center my-6'>
        <div>
        <a href="tel:+919911027026" className='custom_button py-3 inline-flex items-cener text-sm'>CALL FOR APPOINTMENT: <span className='ml-4 mr-2 mt-[2px]'><Image src={ICONS.CityPhone} height={16} alt="CityPhone"/></span> +91-9911-027-026</a>
        </div>
        <p className='mt-5 text-xl font-semibold w-4/5 mx-auto'>Beautician and Parlour Near Locality in Noida for Home Services.</p>
      </div>
      <div className='bg-white-f2 py-4 px-6 rounded-3xl shadow-nearcity'>
        <ul className='grid grid-cols-12 gap-x-6 gap-y-2'>
          {[...Array(15).fill().map((item,idx)=> (
            <li className='col-span-12 sm:col-span-6 md:col-span-4' key={"locationbox"+idx}>
              <Link href={`/locality/${citySlug}/${"sector-68-noida"}`} className='text-theme font-semibold cursor-pointer'>Service At Home in Sector-58, Noida</Link>
            </li>
          ))]}
        </ul>
      </div>
    </div>
  )
}

export default SelectcityPage