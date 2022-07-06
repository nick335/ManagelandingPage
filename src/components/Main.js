import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

// lg:bg-primary-bg lg:w-full lg:bg-no-repeat move3 lg:bg-origin-border lg:h-fit lg:bg-[length:350px_350px]
export default function Main(){
  return(
    <main className="lg:bg-primary-bg lg:w-full lg:bg-no-repeat move3 lg:bg-origin-border lg:h-fit lg:bg-[length:720px_720px]">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  )
}