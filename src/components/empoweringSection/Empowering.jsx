import React from "react";
import CompanySection from "./CompanySection";
import InfoSection from "./InfoSection";

function Empowering() {
  return (
    <div className="flex flex-col">
      <section className="pt-28 pr-20 w-full bg-white max-md:pt-24 max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 sm:flex-col md:flex-row max-md:flex-col">
          <CompanySection />
          <InfoSection />
          {/* <PartnershipSection /> */}
        </div>
      </section>
    </div>
  );
}

export default Empowering;