import React from "react";
import Header from "./Header";
import ContactButton from "./ContactButton";
import LearnMoreLink from "./LearnMoreLink";

function ManufacturingPage() {
  return (
    <div>
      <div className="grid grid-cols-12  pl-5 md:pl-10 lg:pl-16 xl:pl-28 2xl:pl-36 py-10 bg-neutral-100 mr-5 md:mr-10 lg:mr-16 xl:mr-28 2xl:mr-36 rounded-br-[40px]">

        <div className="grid cols-span-12 lg:col-span-7">
          <div className="flex flex-col items-start mb-0 max-w-full max-md:mb-2.5">
            <Header />
            <p className="pt-12 text-md font-medium leading-10 text-zinc-800 max-md:mt-10 max-md:max-w-full">
              Leverage our partnership with Odoo ERP to accelerate your digital transformation and automation. At Doodle Inc., we deliver high-performance Odoo ERP solutions engineered to optimize operational efficiency and enhance your competitive edge.
            </p>
            <div className="flex flex-wrap gap-5 justify-between self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 self-start text-base text-center">
                <ContactButton />
                <LearnMoreLink />
              </div>
            </div>
          </div>
        </div>

        <div className="grid col-span-12 lg:col-span-5 relative">
          <p className="text-sm absolute bottom-8 -left-3">
            Your Trusted Odoo Partner for Digital Transformation, Automation, Innovation, and Excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ManufacturingPage;