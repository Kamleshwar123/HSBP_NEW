import React from 'react'

const ActiveShadow = ({val}) => {
  return (
    <div className={`${val ? "shadow-tab-active": "shadow-tab"} bg-white h-3 rounded-3xl`}></div>
  )
}

export default ActiveShadow