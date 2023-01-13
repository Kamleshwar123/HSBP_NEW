import { useRouter } from 'next/router';
import React from 'react'
import SvgIcon from '../../../constant/SvgIcon'

const ExploreAll = ({text, url, data = undefined}) => {
  const router = useRouter();
  const handleRedirect = () => {
      router.push({
          pathname: url,
          query: data
      }, url)
  }
  return (
    <div className='text-black-0f0 text-base flex justify-center font-medium mb-6 mt-2'>
        <div className="flex items-center gap-0 cursor-pointer explo-btn" onClick={handleRedirect}>
            <span>{text}</span><span><SvgIcon.ExploreArrow className='scale-50'/></span>
        </div>
    </div>
  )
}

export default ExploreAll