import React from "react";
import Facebook from "./svg/Facebook";
import Twitter from "./svg/Twitter";
import Instagram from "./svg/Instagram";
import Youtube from "./svg/Youtube";
import Pinterest from "./svg/Pinterest";
import logo from "../images/logo2.svg";
import validator from "validator";

const items= "font-primary text-light-gray tracking-6 text-xs font-normal pt-4 lg:cursor-pointer lg:hover:text-primary "
const iconClass = "h-9 w-9 lg:mr-3 lg:h-5 lg:w-5 lg:cursor-pointer fill-current text-light-gray lg:hover:text-primary"

export default function Footer(){
  const [inputData, setInputData] = React.useState('')
  const [error, setError]= React.useState({
    empty: false,
    format: false
  })
  const [success, setSuccess] = React.useState(false)

  let message = ''
  let errorstyle = ''
  let borderstyle = ''

  if(error.empty === true){
    message = 'input empty'
    errorstyle = 'block text-primary'
    borderstyle = 'border-primary border-2 '
  }else if(error.format === true){
    message = 'email invalid'
    errorstyle = 'block text-primary'
    borderstyle = 'border-primary border-2'
  }else if(success){
    message = 'success'
    errorstyle = 'block text-green-300'
  }

  function handleChange(event){
    setInputData(event.target.value)
  }
  function handleInput(){
    if(inputData === ""){
      setError(prev => {
        return {
          ...prev,
          empty: true
        }
      })
    }else if(validator.isEmail(inputData) === false){
      setError(prev => {
        return{
          ...prev,
          format: true
        }
      })
    }else{
      setSuccess(true)
    }
  }
  function handleClick(){
    setError(prev => {
      return{
        ...prev,
        empty:false,
        format:false
      }
    })
    setSuccess(false)
  }

  return(
    <footer className="bg-secondary-dark opacity-100">
      <div className="px-4 py-10 flex flex-col lg:px-8 xl:px-24 lg:flex-row-reverse lg:justify-between">
        <div className="w-full flex lg:justify-end relative ml-3 lg:ml-0">
          <input placeholder="updates in your box inbox..."
          type='text'
          className={`py-2 w-[70%] lg:h-fit rounded-full pl-3 placeholder:text-xs outline-0  placeholder:text-secondary-light text-xs text-secondary-light ${borderstyle} `}
          onChange={handleChange}
          onClick = {handleClick}
          value={inputData}
          />
          <p className={`absolute top-10 lg:left-[11%] xl:left-[15%] text-primary text-[10px] italic font-primary font-normal tracking-wide ml-3 lg:ml-0 ${errorstyle}`}>{message}</p>
          <button className="py-2 px-7 lg:h-fit rounded-full text-primary-light text-[12px] bg-primary uppercase font-bold font-primary ml-2 text-center lg:hover:opacity-90 z-30"
          onClick={handleInput}
          >Go</button>
        </div>
        <div className="py-10 lg:py-0 flex justify-between w-full items-start px-10 lg:px-0  lg:justify-start">
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
            <Facebook 
              class={iconClass}
            />
            <Youtube 
              class={iconClass}
            />
            <Twitter 
              class={iconClass}
            />
            <Pinterest 
              class={iconClass}
            />
            <Instagram 
              class={iconClass}
            />
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