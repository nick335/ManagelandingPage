//WHATS DIFFERENT ABOUT MANAGE SECTION
import React from "react";
import { manageData } from "./Data/ManageData";
import ManageDiv from "./ManageDiv";
import {nanoid} from 'nanoid'

export default function Section1(){

  const data = manageData

  const elements = data.map(each => {
    return <ManageDiv 
              num = {each.num}
              head = {each.head}
              para = {each.para}
              key = {nanoid()}
            />
  })
  return(
    <section>
      <div className="flex flex-col items-center justify-center lg:flex-row xl:px-28 lg:px-8 lg:justify-start lg:items-start mt-10">
        <div className="lg:px-0 px-4 lg:w-[45%]">
          <h2 className="font-bold text-3xl font-primary text-center text-secondary tracking-wide lg:text-left xl:text-4xl lg:h-full">What’s different about Manage?</h2>
          <p className="font-primary text-base text-center text-secondary-light font-normal mt-3 tracking-wide mb-2 lg:text-left lg:mr-16 xl:mr-24">
            Manage provides all the functionality your team needs, without 
            the complexity. Our software is tailor-made for modern digital 
            product teams. 
          </p>
        </div>
        <div className="lg:w-[55%] xl:ml-[10%]">
          {elements}
        </div>
      </div>
    </section>
  )
}