import React from "react";
import Certifications from "./Certifications";
import CertificationCompliance from "./CertificationCompliance";
import PartnershipSection from "./PartnershipSection";


function InfoSection() {
  return (
    <section className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
      <article className="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <p className="mr-6 px-5 text-lg leading-10 text-zinc-800 max-md:mr-2.5 max-md:max-w-full">
          With over 12 years of expertise, Doodle Inc. specializes in Application Development & Implementing ERP solutions tailored to the complex needs of various governments, large enterprises, and Fortune 500 companies. With a dedicated team of over 100 professionals spread across 4 international offices, we serve clients in more than 8 countries, cater to over 500,000 daily users, and manage a portfolio valued at approximately 45M USD. Doodle Inc. is proud to be ISO 9001 and ISO 27001 certified, underscoring our commitment to quality management and information security. This extensive experience and robust global presence equip us to deliver unparalleled digital transformation solutions.
        </p>
        <div className="flex gap-3 self-start mt-16 text-base font-semibold text-center text-orange-500 max-md:mt-10" role="button" tabIndex="0">
          <div>Learn More</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f8f2dea092c4cfc9ac0d3e0b06c3fad16e0c76b69c7dffe04be63a755fcfa3b?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
            alt=""
            className="object-contain shrink-0 my-auto aspect-square w-[15px]"
          />
        </div>
        <section className="mt-10 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <CertificationCompliance />
            <PartnershipSection/>
            {/* <Certifications /> */}
          </div>
        </section>
      </article>
    </section>
  );
}

export default InfoSection;