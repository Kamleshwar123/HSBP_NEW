import React, { useState } from 'react'
import SvgIcon from '../constant/SvgIcon'

const Faqs = () => {
    const [index, setIndex] = useState("0");
    const handleIndex = (idx) => {
        setIndex(index === idx ? "" : idx);
    }
    return (
        <div className='container'>
            <div className='theme-bg text-white py-6 px-4 rounded-3xl text-center'>
                <h1 className='text-[42px] pb-2'>Frequently Asked Questions</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='faq_heading py-7'>
                <h5>Faq's</h5>
                <p>If you have any further questions you can contact us</p>
            </div>
            <div>
                {[...Array(6).keys()].map((item, idx) => (
                    <div className='accord' key={idx}>
                        <div className={idx.toString() === index ? 'ques show' : 'ques'} onClick={() => handleIndex(idx.toString())}>
                            <div>What should I do to prepare for waxing ?</div>
                            <span><SvgIcon.Arrow width={18} height={18} /></span>
                        </div>
                        {idx.toString() === index &&
                            <div className='ans'>
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