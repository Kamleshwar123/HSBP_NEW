import React, { useEffect, useState } from 'react'

const Services = () => {
    const [tab, setTab] = useState("tab1");
    useEffect(() => {
        setTab("tab1");
        return () => { }
    }, [])

    const handleTab = (data) => {
        setTab(data);
    }
  return (
    <div className='container'>
        <div className='grid grid-cols-3 justify-center rounded-3xl text-center bg-gray-e8e'>
            <div className='py-10 bg-theme'>Beauty Services</div>
            <div className='py-10'>Beauty Packages</div>
            <div className='py-10'>Bridal Packages</div>
        </div>
    </div>
  )
}

export default Services