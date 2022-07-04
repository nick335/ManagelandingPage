import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

// lg:bg-primary-bg lg:w-full lg:bg-no-repeat move3 lg:bg-origin-border lg:h-fit lg:bg-[length:350px_350px]
export default function Main(){
  return(
    <main className="">
      <Section1 />
      <Section2 />
    </main>
  )
}