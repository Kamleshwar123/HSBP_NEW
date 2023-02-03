import Head from 'next/head'
import React from 'react'
import Services from '../../component/feature/services/Services'

const ServicesPage = () => {
  return (
    <div>
      <Head>
        <title>Beauty parlour service at doorstep near me price list | VLCC home service - HSBP</title>
        <meta name="description" content="Find beauty parlour near me (ब्यूटी पार्लर नियर में) provide service at doorstep at lowest price. Check beauty services price list and book online, get VLCC certified beautician at home."/>
        <meta name="keywords" content="ब्यूटी पार्लर नियर में, near me, Beauty parlour service at doorstep, woman salon service, wax, manicure, pedicure, VLCC home service."/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Beauty parlour service at doorstep near me price list | VLCC home service - HSBP" />
        <meta property="og:description" content="Find beauty parlour near me (ब्यूटी पार्लर नियर में) provide service at doorstep at lowest price. Check beauty services price list and book online, get VLCC certified beautician at home." />
        <meta property="og:url" content="https://homeservicebeautyparlour.com/" />
        <meta property="og:site_name" content="Home Service Beauty Parlour" />
      </Head>
        <Services/>
    </div>
  )
}

export default ServicesPage