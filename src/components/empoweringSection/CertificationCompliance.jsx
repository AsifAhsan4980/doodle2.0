import React from "react";
import Certifications from "./Certifications";

function CertificationCompliance() {
  return (
    <section className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
      <div className="grow max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <header className="flex flex-col grow items-start text-sm font-semibold text-zinc-800 max-md:mt-5">
              <h2>Certification & Compliance</h2>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43fba6bd514b69a5b00d8003376b8adf043d811d4904d32e4338e1cf5ec2bc0a?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
                alt="ISO 27001:2022 Certificate"
                className="object-contain mt-6 max-w-full aspect-[3.55] w-[142px]"
              />
              <p className="mt-5">ISO 27001:2022</p>
              <p className="self-stretch font-medium">
                Information Security Management <br /> Systems Certified
              </p>
            </header>
          </section>
          <Certifications/>
        </div>
      </div>
    </section>
  );
}

export default CertificationCompliance;