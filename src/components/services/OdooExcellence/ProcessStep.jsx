import React from 'react';
// import arrowBottom from "@/Static/Image/"
import arrowDown from "@/../public/Static/Image/arrowDown.png"
import Image from 'next/image';
import style from "./static/style.module.css"

function ProcessStep({ number, title, description, steps, bgColor }) {
  return (
    <div className="flex flex-col items-start text-base leading-9 text-zinc-800">
      <div className="font-semibold self-stretch">
        {title} <br />
        <span className="text-sm leading-7 font-normal">{description}</span>
      </div>
      <div className='flex items-center'>
        <div className={`z-10 px-0 pt-1 mt-7 w-10 h-10 text-3xl font-bold leading-none text-white whitespace-nowrap ${bgColor}`}>
          {number}
        </div>
        <div className={style.thin_box}></div>
        {number==='02'?<div className={style.fat_box}></div>:''}
      </div>
      {/* <hr></hr> */}
      <div className="mt-7 font-medium">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Image src={ arrowDown} className={index===0?'hidden':'ml-3'}/>
            {step}
            <br />
            {index < steps.length - 1 && <span className="leading-[68px]"></span>}
          </React.Fragment>
        ))}
      </div>

    </div>
  );
}

export default ProcessStep;