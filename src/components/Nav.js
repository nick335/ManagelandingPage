import React from "react";
import logo from "../images/logo.svg"
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'

export default function Nav(){
  let list = 'pb-6 lg:pb-0 lg:pr-10 lg:hover:cursor-pointer lg:hover:text-secondary-light'
  const [menu, setMenu] = React.useState(false)
  const menuOverlay = menu ? 'block' : 'hidden'
  const ulActive = menu ? ' bg-white mt-24 ml-auto mr-auto  flex-col  rounded-lg' : ''
  const fixed = menu ? 'fixed right-4' : ''
  function toggleMenu(){
    setMenu(prev => !prev)
  }
  return(
    <nav className="font-primary xl:mx-28 lg:mx-8 ">
      <div className="flex justify-between pt-10 px-4 items-center">
        <div className="flex justify-center items-center">
        <img alt="logo" src={logo} className="mt-2"/>
        </div>
        <div className={`fixed z-50 top-0 left-0 h-screen w-screen bg-gradient-to-b from-light-rgba to-dark-rgba ${menuOverlay} lg:static lg:block lg:h-full lg:w-auto lg:bg-gradient-to-t lg:from-transparent lg:to-transparent`}>
          <ul className={`text-sm font-bold font-primary  text-secondary  
          pt-10 pb-4 flex w-10/12 justify-between items-center ${ulActive} lg:mt-0 lg:ml-0 lg:mr-0 lg:flex-row lg:justify-center lg:pt-0 lg:pb-0 lg:w-full`}>
            <li className={`${list}`}>Pricing</li>
            <li className={`${list}`}>Product</li>
            <li className={`${list}`}>About Us</li>
            <li className={`${list}`}>Careers</li>
            <li className={`${list}`}>Community</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="lg:py-3 lg:bg-primary lg:px-7 lg:rounded-full text-xs text-primary-light hover:cursor-pointer lg:hover:opacity-50 shadow shadow-primary">Get Started</button>
        </div>
        <div className={`z-50 lg:hidden ${fixed}`} onClick={toggleMenu}>
          <img  src={ menu ? close : hamburger } alt='menu'/>
        </div>
      </div>
    </nav>
  )
}