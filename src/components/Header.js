import React from "react";
import Nav from "./Nav";
import HeroSection from "./HeroSection";


export default function Header(){
  return(
    <header className="bg-primary-bg w-full h-fit  bg-no-repeat move object-cover lg:h-screen bg-[length:450px_450px] xl:bg-[length:750px_750px] lg:bg-[length:650px_650px]">
      <Nav />
      <HeroSection />
    </header>
  )
}