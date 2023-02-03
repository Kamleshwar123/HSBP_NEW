import React, { useState } from 'react'
import SvgIcon from '../../constant/SvgIcon';

const Faqs = () => {
    const [index, setIndex] = useState("0");
    const handleIndex = (idx) => {
        setIndex(index === idx ? "" : idx);
    }
    const showCss = 'font-semibold flex justify-between items-center py-3 px-5 bg-[#e6e6e6] text-black-2e2';
    const noShow = 'font-semibold flex justify-between items-center py-3 px-5 text-black-605';
    return (
        <div className='container my-3'>
            <div className='faq-bg text-white py-6 px-4 rounded-3xl text-center'>
                <h1 className='text-4xl pb-2'>Frequently Asked Questions</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='py-7'>
                <h5 className='text-lg text-black-605'>Faq's</h5>
                <p className='text-black-605 mt-2'>If you have any further questions you can contact us</p>
            </div>
            <div>
                {[...Array(6).keys()].map((item, idx) => (
                    <div className='accord border mb-5 border-text-black-2e2 rounded-[8px] overflow-hidden' key={idx}>
                        <div className={idx.toString() === index ? showCss : noShow} onClick={() => handleIndex(idx.toString())}>
                            <div>What should I do to prepare for waxing ?</div>
                            <span><SvgIcon.Arrow width={18} height={18} className={idx.toString() === index ? 'rotate-180' : ''}/></span>
                        </div>
                        {idx.toString() === index &&
                            <div className='text-black-605 px-5 py-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        }
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Faqs