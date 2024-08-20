import React from 'react';
import style from "./static/style.module.css"
import arrowbottom from "@/../public/Static/Image/arrowBottom.png"
import Image from 'next/image';


function TeamSection() {
  return (
    <div className="container">
      <div className=' mx-auto my-auto px-5 py-10 max-md:py-5'>
        <div className=" w-full text-lg font-medium text-zinc-800">
          <div className="flex justify-center leading-8">
            <div className='mr-5'>New Feature</div>
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b463afefbb50d762080cadf7ffdde0b39751dda3544daa4aa759ae49297da3aa?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" 
              alt="" 
              // className="object-contain aspect-[1.93] w-[29px] mx-auto md:mx-0" 
            />
          </div>
          <div className="mt-48 flex justify-center gap-4 leading-6 max-md:mt-10">
            <div className='mr-5 '>
              New Feature <br /> Stories Tasks
            </div>
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d87fb72c4f5c5de4f21b35607a3050eb82752e5241fd4b3eda6dca8fd83adeb?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" 
              alt="" 
              className="object-contain aspect-[1.93] w-[29px] mt-2.5 mx-auto md:mx-0" 
            />
          </div>
        </div>
        </div>
      <div className={`${style.absolute_project} ${style.caveatFont}`}>
       <Image className='ml-28 mb-[-35px]' src={arrowbottom}/>
        Project <br /> Team Follow
        
      </div>
    </div>
  );
}

export default TeamSection;
