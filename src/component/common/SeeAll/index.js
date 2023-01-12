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
    <div className='text-theme-light font-base flex justify-end font-semibold'>
        <div className="flex items-center gap-0 cursor-pointer" onClick={handleRedirect}>
            <span>{text}</span><span><SvgIcon.ExploreArrow className='scale-50'/></span>
        </div>
    </div>
  )
}

export default SeeAll