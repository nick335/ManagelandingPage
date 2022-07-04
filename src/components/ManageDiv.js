import React from "react";

export default function ManageDiv(props){
  return(
    <>
      <div className="flex  bg-primary-light rounded-l-full mt-8 font-primary lg:mt-0 lg:bg-transparent ">
        <div className="lg:w-[18%]">
          <h3 className="font-primary text-light-gray text-base bg-primary py-2 px-7 rounded-full lg:w-fit">{props.num}</h3>
        </div>
        <h3 className="py-2 pl-4 font-bold text-base text-secondary lg:pl-0">{props.head}</h3>
      </div>
      <div className="lg:flex lg:justify-end ">
        <p className="font-primary mt-4 text-secondary-light text-left text-sm font-normal leading-6 mr-4 lg:mr-0 lg:text-base lg:tracking-wide lg:w-[82%] lg:mt-2 lg:mb-6">
        {props.para}
        </p>
      </div>
      
    </>
  )
} 