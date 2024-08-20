import React from "react";
import ManufacturingButton from "./ManufacturingButton";
import IndustriesCard from "./industriesCards/IndustriesCard";

function IndustriesExpertise() {
  return (
    <section className="pt-0 w-full max-w-[839px] text-center max-md:max-w-full">
      <h2 className="text-4xl font-semibold leading-[55px] text-zinc-800">
        Industries & Expertise
      </h2>
      <p className="text-lg font-bold leading-10 text-zinc-800">
        Guiding Your Business with Expert Insights: Understanding Your Needs, Advising Best Practices, and Tailoring Odoo ERP Solutions to Overcome Industry Challenges.
      </p>
      <div>
        <ManufacturingButton/>
      </div>
      <div className="flex gap-3">
        <IndustriesCard/>
        <IndustriesCard/>
      </div>
    </section>
  );
}

export default IndustriesExpertise;