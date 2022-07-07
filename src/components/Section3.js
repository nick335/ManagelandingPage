import React from "react";


export default function Section3(){
  return(
    <section className="mt-8 -z-50 bg-primary">
      <div className="z-50 secbg  w-full h-fit ">
        <div className="py-24 px-6 lg:px-8 xl:px-28 lg:flex lg:justity-center lg:items-center lg:w-full lg:py-10">
          <div className="pb-4 lg:pb-0 lg:w-1/2">
            <h3 className="text-center font-primary text-4xl font-normal text-primary-light lg:font-bold lg:text-left lg:mt-10">Simplify how your team works today.</h3>
          </div>
          <div className="text-center mt-5 lg:mt-0 lg:w-l/2 lg:text-right lg:flex lg:justify-end lg:ml-auto">
            <button className="py-3 bg-primary-light px-7 rounded-full text-sm text-primary font-bold lg:hover:cursor-pointer lg:hover:bg-black shadow shadow-primary-light z-50 outline-none">Get Started</button>
          </div>
        </div>
      </div>
      
    </section>
  )
}