import React from "react";
import Feedback from "./FeedbackDiv";
import { FeedBackData } from "./Data/FeedBackData";
import { nanoid } from "nanoid";

const Data = FeedBackData
export default function Section2(){
  const delay = 2500;

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);
  const elements = Data.map(each => {
    return <Feedback 
             img= {each.img}
             title= {each.title}
             feedback = {each.feedback} 
             key = {nanoid()}
            />
  })

  const dots = Data.map(() => {
    return <div className="h-2 w-2 rounded-full border border-primary inline-block mr-1" key={nanoid()}></div>
  })
  return(
    <section className="pt-8">
      <div>
        <h3 className="text-center text-4xl font-bold font-primary text-secondary">What they’ve said</h3>
      </div>
      <div className="pt-20 overflow-hidden w-screen">
        <div className="whitespace-nowrap ease-linear duration-1000"
          style={{transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
         {elements}
        </div>
      </div>
      <div className="text-center mt-4">
        {dots}
      </div>
    </section>
  )
}