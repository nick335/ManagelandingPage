

export default function Feedback(props){
  return(
    <div className="lg:pt-10 h-[300px] min-h-full w-full rounded inline-flex flex-col whitespace-normal lg:w-[42%] xl:w-[35%] lg:min-h-0 lg:shrink-0 lg:pr-4 lg:cursor-pointer select-none">
      <div className="bg-light-gray relative h-[300px] min-h-full">
        <img alt="ali" src={props.img} className="h-24 w-24 absolute -top-10 left-1/2 -translate-x-1/2"/>
        <h3 className="pt-20 mx-4 text-center text-xl font-primary text-secondary font-bold">{props.title}</h3>
        <p className="pt-8 pb-10 px-4 text-center font-primary text-secondary-light text-sm font-normal leading-6">
        {props.feedback}
        </p>
      </div>
    </div>
  )
}