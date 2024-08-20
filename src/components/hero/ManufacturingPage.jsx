import React from "react";
import Header from "./Header";
import ContactButton from "./ContactButton";
import LearnMoreLink from "./LearnMoreLink";

function ManufacturingPage() {
  return (
    <div className="flex flex-col items-start pt-5 max-md:pr-5">
      <section className="flex flex-col justify-center items-start px-20 py-28 max-w-full rounded-none bg-neutral-100 w-[1769px] max-md:px-5 max-md:py-24">
        <div className="flex flex-col items-start mb-0 max-w-full w-[1271px] max-md:mb-2.5">
          <Header />
          <p className="mt-16 text-lg font-medium leading-10 text-zinc-800 max-md:mt-10 max-md:max-w-full">
            Leverage our partnership with Odoo ERP to accelerate your digital transformation and automation. At Doodle Inc., we deliver high-performance Odoo ERP solutions engineered to optimize operational efficiency and enhance your competitive edge.
          </p>
          <div className="flex flex-wrap gap-5 justify-between self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 self-start text-base text-center">
              <ContactButton />
              <LearnMoreLink />
            </div>
            <p className="text-sm leading-6 text-zinc-500 max-md:max-w-full">
              Your Trusted Odoo Partner for Digital Transformation, Automation, Innovation, and Excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ManufacturingPage;