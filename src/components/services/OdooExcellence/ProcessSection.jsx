import React from 'react';
import TeamSection from './TeamSection';
import ValueValidation from './ValueValidation';
import style from "./static/style.module.css";
import ProcessStep from './ProcessStep';
import arrowLeft from "@/../public/Static/Image/arrowLeft.png"
import Image from 'next/image';
import arrowbottom from "@/../public/Static/Image/arrowBottom.png"
import dotShape from "@/../public/Static/Image/dot-shape.png"


const processSteps = [
  {
    number: '01',
    title: 'Define',
    description: 'Lorem ipsum suspendis seadipisicing elit, sed do eiusmod tempor.',
    steps: ['Backlog', 'Analysis', 'Ready'],
    bgColor: 'bg-zinc-800'
  },
  {
    number: '02',
    title: 'Build',
    description: 'Lorem ipsum suspendis seadipisicing elit, sed do eiusmod tempor.',
    steps: ['Develop', 'Unit Test', 'Code Review'],
    bgColor: 'bg-orange-500'
  },
  {
    number: '03',
    title: 'Validate',
    description: 'Lorem ipsum suspendis seadipisicing elit, sed do eiusmod tempor.',
    steps: ['Stage', 'Smoke Test', 'QA/UAT'],
    bgColor: 'bg-zinc-800'
  },
  {
    number: '04',
    title: 'Validate',
    description: 'Lorem ipsum suspendis seadipisicing elit, sed do eiusmod tempor.',
    steps: ['Stage', 'Smoke Test', 'QA/UAT'],
    bgColor: 'bg-zinc-800'
  }
];

function ProcessSection() {
  return (
    <section className=" overflow-x-scroll font-poppins flex flex-col">
      <div className="min-w-[1440px] relative pt-28 pr-20 pb-7 w-full bg-gray-100 max-md:pt-24 max-md:pr-5 max-md:max-w-full">
        <div className="py-20 flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
            <div className=" flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <header className="flex flex-col items-start self-center max-w-full font-bold text-zinc-800 w-[918px]">
                <div className="flex gap-4 text-lg font-medium leading-none">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a4858e6f01b789361d872ed52bb7c2b6b575f3744e3babc2414e4e59094ffd?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain shrink-0 my-auto aspect-[31.25] w-[31px]" />
                  <h2 className="basis-auto">Our Process</h2>
                </div>
                <h1 className="self-stretch mt-6 ml-11 text-4xl tracking-normal leading-[55px] max-md:max-w-full">
                  Discover How Doodle Inc. Delivers Excellence with Every Odoo Implementation
                </h1>
                <div className={style.absolute4}>
                  <h3 className={`mt-20 text-3xl tracking-normal leading-8 text-stone-500 max-md:mt-10 ${style.caveatFont}`}>
                    Core Team <br /> Follow
                  </h3>
                  <Image className='ml-24 mt-[-25px]' src={arrowLeft}/>
                </div>
              </header>
              <div className="flex ml-20 mt-28 justify-between items-start tracking-normal max-md:max-w-full">
                <TeamSection />
                {processSteps.map((step, index) => (
                  <ProcessStep key={index} {...step} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className={`mt-20 text-3xl tracking-normal leading-8 text-stone-500 max-md:mt-10 ${style.caveatFont}`}>
            <Image className='ml-28 mb-[-35px]' src={arrowbottom}/>
            Project <br /> Team Follow
          </div> */}
          <ValueValidation />
          
      <img className={style.absolute_img} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b13a46e4ddabdb73bbacb01047c483f94b0d2ffd4dccd4d9297686a2fba38e85?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain shrink-0 mt-[-50px] self-end aspect-[0.57] w-[94px] " />
      </div>

    </section>
  );
}

export default ProcessSection;