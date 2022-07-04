import React from "react";
import heroImg from "../images/illustration-intro.svg";

export default function HeroSection(){
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


  const mobileBg = windowSize.innerWidth > 414 ? '' : 'bg-primary-bg w-full bg-contain pb-28 bg-no-repeat move2 bg-origin-border h-fit bg-[length:350px_350px]'

  return (
    <section className={`mt-10 px-4 flex flex-col font-primary text-secondary lg:flex-row-reverse xl:px-28 lg:px-8 ${mobileBg}`}>
      <div className="lg:w-[55%] flex lg:justify-end">
        <img alt="heroImg" src={heroImg} className="lg:h-[500px] lg:w-[500px]
        xl:h-[550px] xl:w-[550px] object-cover"/>
      </div>
      <div className="flex flex-col justify-center items-center lg:justify-start lg:pt-8 mt-4 lg:items-start lg:w-[45%]">
        <h1 className="font-bold text-4xl font-primary text-center  lg:text-left lg:text-5xl xl:text-6xl">Bring everyone together to build better products.</h1>
        <p className="text-base text-center lg:text-left text-secondary-light font-normal pt-4 tracking-wide lg:mr-16 xl:mr-24">Manage makes it simple for software teams to plan day-to-day 
        tasks while keeping the larger team goals in view.</p>
        <button className="py-3 bg-primary px-7 rounded-full text-xs text-primary-light hover:cursor-pointer hover:opacity-50 shadow shadow-primary mt-5 h-fit w-fit">Get Started</button>
      </div>
    </section>
  )
}