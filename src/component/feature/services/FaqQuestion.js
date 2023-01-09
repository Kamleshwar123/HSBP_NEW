import React from 'react'
import SvgIcon from '../../../constant/SvgIcon'

const FaqQuestion = ({text, active}) => {
    let _class = `p-3 cursor-pointer flex justify-between items-start gap-5${active ? " font-semibold text-black-241 bg-gray-eee" : ""}`
  return (
    <div className={_class}>
        <div className='inline-flex space-x-3'>
            <span><SvgIcon.FaqRightArrow className={active ? "":'text-[#949494]'}/></span>
            <div>{text}</div>
        </div>
        <span><SvgIcon.Arrow width={18} height={18} className={active ? 'rotate-180' : ''}/></span>
    </div>
  )
}

export default FaqQuestion