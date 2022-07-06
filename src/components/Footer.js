import React from "react";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg"
import twitter from "../images/icon-twitter.svg"
import youtube from "../images/icon-youtube.svg"
import pinterest from "../images/icon-pinterest.svg"
import logo from "../images/logo2.svg"

const items= "font-primary text-light-gray tracking-6 text-xs font-normal pt-4"
const img = "h-8 w-8 lg:mr-3 lg:h-5 lg:w-5"

export default function Footer(){
  return(
    <footer className="bg-secondary-dark">
      <div className="px-4 py-10 flex flex-col lg:px-8 xl:px-24 lg:flex-row-reverse lg:justify-between">
        <div className="w-full flex justify-end">
          <input placeholder="updates in your box inbox..."
          type='text'
          className="py-2 w-[70%] lg:h-fit rounded-full pl-3 placeholder:text-xs outline-0  placeholder:text-secondary-light"/>
          <button className="py-2 px-7 lg:h-fit rounded-full text-primary-light text-[12px] bg-primary uppercase font-bold font-primary ml-2 text-center">Go</button>
        </div>
        <div className="py-10 lg:py-0 flex justify-between w-full items-start px-10 lg:px-0 lg:-ml-[10%] lg:justify-start">
          <ul className="lg:mr-[40%]">
            <li className={`${items}`}>Home</li>
            <li className={`${items}`}>Pricing</li>
            <li className={`${items}`}>Products</li>
            <li className={`${items}`}>About Us</li>
          </ul>
          <ul>
            <li className={`${items}`}>Careers</li>
            <li className={`${items}`}>Community</li>
            <li className={`${items}`}>Privacy Policy</li>
          </ul>
        </div>
        <div className="pb-2 lg:pb-0  w-full lg:flex lg:flex-col-reverse lg:justify-between">
          <div className="flex w-full justify-between px-5 lg:px-0  lg:justify-start">
            <img className={`${img}`} alt="facebook" src={facebook} />
            <img className={`${img}`} alt="youtube" src={youtube}/>
            <img className={`${img}`} alt="twitter" src={twitter}/>
            <img className={`${img}`} alt="pinterest" src={pinterest}/>
            <img className={`${img}`} alt="instagram" src={instagram}/>
         </div>
         <div className="w-full flex justify-center pt-16 lg:pt-0 lg:justify-start">
          <img alt="logo" src={logo} className="lg:mt-4"/>
         </div>
        </div>
      </div>
      <div className="pb-10 lg:pb-0 lg:w-full lg:px-8 xl:px-24 lg:relative">
        <p className="text-center text-secondary-light font-normal lg:text-xs lg:absolute lg:-top-24 lg:right-8 xl:right-24">Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  )
}