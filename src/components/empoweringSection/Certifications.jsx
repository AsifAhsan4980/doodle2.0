import React from "react";

function Certifications() {
  return (
    <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-12 w-full max-md:mt-10">
        <div className="flex gap-7 self-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/55b2bbbfc52722288ed42b7e27f77421421d4b3c7884532b83a790135adc7bdb?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
            alt="ISO 9001:2015 Certificate"
            className="object-contain shrink-0 max-w-full aspect-[3.55] w-[142px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5a83c6f4c41f51e9be6fd55359527588ab1b619250170e28ef7992a1cf2ca2a?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
            alt=""
            className="object-contain shrink-0 aspect-[0.83] w-[33px]"
          />
        </div>
        <div className="flex gap-5 mt-5 text-sm text-zinc-800">
          <div className="flex flex-col">
            <p className="self-start font-semibold">ISO 9009:2015</p>
            <p className="font-medium">
              Quality Management <br /> Certified
            </p>
          </div>
          <div className="flex flex-col self-start">
            <p className="self-start font-medium">Secured by</p>
            <p className="font-semibold">Advanced DLP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;