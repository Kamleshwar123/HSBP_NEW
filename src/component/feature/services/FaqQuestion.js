import React from 'react'
import SvgIcon from '../../../constant/SvgIcon'

const FaqQuestion = ({text, active, onClick}) => {
    let _class = `p-2 cursor-pointer flex justify-between items-center gap-5${active ? " font-semibold text-black-241 bg-gray-eee" : ""}`
  return (
    <div className={_class} onClick={onClick}>
        <div className='inline-flex space-x-3'>
            <span className='scale-75'><SvgIcon.FaqRightArrow className={active ? "":'text-[#949494]'}/></span>
            <div>{text}</div>
        </div>
        <span><SvgIcon.Arrow width={14} height={14} className='-rotate-90'/></span>
    </div>
  )
}

export default FaqQuestion