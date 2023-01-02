import { useRouter } from 'next/router';
import React from 'react'
import SvgIcon from '../../../constant/SvgIcon'

const SeeAll = ({text, url, data = undefined}) => {
  const router = useRouter();
  const handleRedirect = () => {
      router.push({
          pathname: url,
          query: data
      }, url)
  }
  return (
    <div className='text-theme-light font-base mt-3 flex justify-end'>
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleRedirect}>
            <span>{text}</span><span><SvgIcon.LinkArrow className='scale-75'/></span>
        </div>
    </div>
  )
}

export default SeeAll