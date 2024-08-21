import React from "react";
import Header from "./Header";
import ContactButton from "./ContactButton";
import LearnMoreLink from "./LearnMoreLink";
import Image from "next/image";
import HeroImage from '../../../public/Static/Image/heroImage.png';
import heroTopArrow from '../../../src/assets/svg/heroTopArrow.svg';
import heroDownArrow from '../../../src/assets/svg/heroDownArrow.svg';

function ManufacturingPage() {
  return (
    <div className="flex flex-col items-start pt-5 max-md:pr-5">
      <section className="relative grid grid-cols-5 pl-[170px] py-[110px] max-w-full bg-neutral-100 w-[1769px] rounded-br-[60px]">
        <div className="col-span-3 flex flex-col items-start mb-0 w-[800px] max-md:mb-2.5">
          <Header />
          <div className="w-[832px]">
          <p className="mt-10 text-lg font-semibold leading-10 text-zinc-800">
            Leverage our partnership with Odoo ERP to accelerate your digital transformation and<br/>automation. At Doodle Inc., we deliver high-performance Odoo ERP solutions engineered to<br/>optimize operational efficiency and enhance your competitive edge.
          </p>
          </div>
          <div className="flex flex-wrap gap-5 justify-between self-stretch mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 self-start text-base text-center">
              <ContactButton />
              <LearnMoreLink />
            </div>
            {/* <p className="text-sm leading-6 text-zinc-500">
              Your Trusted Odoo Partner for Digital Transformation, Automation, Innovation, and Excellence.
            </p> */}
          </div>
        </div>
        <div className="col-span-2 -ml-36 w-[47rem] -mt-[20px]">
          <div>
           <Image
             src={HeroImage}
             width={1200}
             height={1200}
             alt="Hero Image"
           />
          </div>
          <div className="mt-10 w-[65%] -ml-5">
              <small className="text-[#838383] text-[14px]">Your Trusted Odoo Partner for Digital Transformation, Automation, Innovation, and Excellence.</small>
          </div>
          <div className="absolute bottom-[165px] right-[759px]">
           <Image
             src={heroDownArrow}
             width={54}
             height={80}
             alt="Hero down arrow"
           />
          </div>
        </div>
      <Image className="absolute -top-[20px] right-[737px]" src={heroTopArrow} alt="Hero top arrow" width={230} height={175}/>
      </section>
    </div>
  );
}

export default ManufacturingPage;