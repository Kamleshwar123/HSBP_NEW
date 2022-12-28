import Link from 'next/link'
import React from 'react'
import SvgIcon from '../../../constant/SvgIcon'

const SeeAll = ({text, url}) => {
  return (
    <div className='text-theme-light font-base mt-3 flex justify-end'>
        <Link href={url} legacyBehavior>
            <a className="flex items-center gap-2"><span>{text}</span><span><SvgIcon.LinkArrow className='scale-75'/></span></a>
        </Link>
    </div>
  )
}

export default SeeAll