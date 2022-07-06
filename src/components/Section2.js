import React from "react";
import Feedback from "./FeedbackDiv";
import { FeedBackData } from "./Data/FeedBackData";
import { nanoid } from "nanoid";

const Data = FeedBackData
export default function Section2(){
  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  
  
  const delay = 2500;

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
 
  const size = windowSize.innerWidth < 512 ? `translate3d(${-index * 100}vw, 0, 0)` : ''
  
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
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

  const dots = Data.map((_, ind) => {
    
    return <div className={`h-2 w-2 rounded-full border border-primary inline-block mr-1 ${
      index === ind ? 'bg-primary' : ''
    }`} key={nanoid()}
    onClick={() => {
      setIndex(ind);
    }}
    ></div>
  })
  return(
    <section className="pt-8">
      <div>
        <h3 className="text-center text-4xl font-bold font-primary text-secondary">What they’ve said</h3>
      </div>
      <div className="pt-20 overflow-hidden">
        <div className="whitespace-nowrap ease-linear duration-1000 w-screen  lg:flex  lg:overflow-x-scroll scrollbar-hide"
          style={{transform: size }}
        >
         {elements}
        </div>
      </div>
      <div className="text-center mt-4 lg:hidden">
        {dots}
      </div>
      <div className="mt-4  flex justify-center">
        <button className="py-3 bg-primary px-7 rounded-full text-xs text-primary-light lg:hover:cursor-pointer lg:hover:opacity-50 shadow shadow-primary">Get Started</button>
      </div>
    </section>
  )
}