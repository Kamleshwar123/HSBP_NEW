import React from 'react'
import { useEffect } from 'react';
import SvgIcon from '../../../constant/SvgIcon'

const BackToTop = () => {

  function scrollFunction() {
    let mybutton = document.getElementById("backToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'inline-block';
    } else {
      mybutton.style.display = 'none';
    }
  }
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    let mybutton = document.getElementById("backToTopButton");
    window.addEventListener("scroll", scrollFunction);
    mybutton.addEventListener("click", backToTop)
    return () => {
      window.removeEventListener("scroll", scrollFunction);
      mybutton.removeEventListener("click", backToTop)
    }
  })
  
  return (
    <button
      type="button"
      className="z-10 hidden w-10 h-10 p-3 bg-theme text-white font-bold text-xs leading-tight uppercase rounded-[50%] shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out bottom-5 right-5 fixed"
      id="backToTopButton"
    >
    <SvgIcon.BackToTop className="w-4 h-4"/>
    </button>
  )
}

export default BackToTop