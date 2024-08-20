import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import TestimonialCard from './TestimonialCard';
import Image from "next/image";

import MySvg from "@/assets/svg/yellow_highlight_bold_05 2@2x.svg"
import TestimonialCarousel from "@/components/services/SuccessStories/TestimonialCarusol";

const caseStudies = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f96bd0445a6108da96256cae88a70dd805e62fec5c3e15ea8b7754a033fc615d?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c",
    title: "Monitoring your business growth on a daily basis.",
    description: "In the tumultuous business of cutting-in and attending to a whale, there is much running.",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e96377bb6f0190a62757053c32d74926273418b657e11f185ba0b33a176305a2?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c",
    title: "While now the fated Pequod had been so long",
    description: "In the tumultuous business of cutting-in and attending to a whale, there is much running.",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f8fd534d22185547747a7036e0d008e5d36517d9b5013c2b10057c19e3c36cb?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c",
    title: "Financial needs for a great strategic advisor",
    description: "In the tumultuous business of cutting-in and attending to a whale, there is much running.",
  },
];

const testimonials = [
  {
    content: "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
    name: "Shalima Hayden",
    role: "Product Designer",
    elevated: true,
  },
  {
    content: "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
    name: "Shalima Hayden",
    role: "Product Designer",
    elevated: false,
  },
  {
    content: "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
    name: "Shalima Hayden",
    role: "Product Designer",
    elevated: true,
  },
];

function SuccessStories() {
  return (
    <section className="flex flex-col items-center px-2 py-28 w-full bg-white max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1570px] max-md:max-w-full">
        <header className="mr-5 w-full max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-3 text-zinc-800 max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/617e7342b02624508bf4139980eb8d6d30306ed5c72cde1b2d20dc2adf067327?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain shrink-0 self-start mt-3.5 aspect-[31.25] w-[31px]" />
                <div className="flex flex-col grow shrink-0 basis-0 w-fit relative">
                  <h2 className="self-start text-lg font-medium leading-none">Success Stories</h2>
                  {/*<Image src={img1} height={500} width={500} alt={"img"}/>*/}
                  <div className="block">
                    <h1 className="mt-6 text-4xl font-bold tracking-normal leading-none flex items-center">
                      <div>Latest Case</div>
                      {/*{console.log("MySvg: ",MySvg)}*/}
                      <div
                        className="text-black relative w-2/5 "  style={{ backgroundImage:`url("${MySvg.src}")`,backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center" }}>
                        <span className="absolute z-20 top-[20%] left-2 text-white">Studies</span>
                        {/*<Image className={`absolute right-0 top-0 w-full`} src={MySvg} alt="My SVG" width={500} height={500}/>*/}
                      </div>
                       </h1>

                  </div>


                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
              <p className="mt-14 text-lg leading-10 text-black max-md:mt-10 max-md:max-w-full">
                Lorem Ipsum. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.
              </p>
            </div>
          </div>
        </header>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
        <div className="flex gap-4 self-start mt-14 text-lg font-medium leading-none whitespace-nowrap text-zinc-800 max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a4858e6f01b789361d872ed52bb7c2b6b575f3744e3babc2414e4e59094ffd?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain shrink-0 my-auto aspect-[31.25] w-[31px]" />
          <h2 className="basis-auto">Testimonials</h2>
        </div>
        <div className="mt-8 mr-10 ml-6 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <h2 className="text-4xl font-bold tracking-normal leading-[55px] text-zinc-800 max-md:mt-10 max-md:max-w-full">
                What is our Customer&apos;s Feedback on this?
              </h2>
            </div>
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <p className="mt-2.5 text-lg leading-10 text-black max-md:mt-10 max-md:max-w-full">
                Discover our tailored services crafted to elevate and streamline your business operations. From innovative solutions to expert support, we&apos;re here to transform your challenges into opportunities for growth. Explore our comprehensive range of services designed to meet your unique needs and drive success. Let us help you optimize your operations and achieve your business goals.
              </p>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
          {/*<div className="flex gap-5 max-md:flex-col">*/}
          {/*  {testimonials.map((testimonial, index) => (*/}
          {/*    <TestimonialCard key={index} {...testimonial} />*/}
          {/*  ))}*/}
          {/*</div>*/}
          <TestimonialCarousel/>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd6f87e6ff8b4a47f52fa8b8dde2d1024d3b52da77f408473ad8d5e444737c7a?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain mt-20 -mb-6 max-w-full aspect-[50] w-[150px] max-md:mt-10 max-md:mb-2.5" />
      </div>
    </section>
  );
}

export default SuccessStories;