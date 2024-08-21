import React from "react";
import style from "./static/style.module.css";

function CompanySection() {
  return (
    <section className="relative flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-zinc-800 max-md:mt-10 max-md:max-w-full">
        <header className="flex flex-col md:self-end max-w-full w-[509px]">
          <div className="flex gap-3.5 self-start text-lg font-medium leading-none">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8325578f5ef7edc3f50fcbdc8bed3e05b01cbf8bc67c9b05ac7660eb8415f079?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
              alt="Doodle Inc. Logo"
              className={`object-contain shrink-0 my-auto aspect-[29.41] w-[29px] `}
            />
            <div className="basis-auto">Doodle Inc.</div>
          </div>
          <h1 className="mt-6  ml-11 text-4xl font-bold tracking-normal leading-[55px] max-md:max-w-full">
            Empowering Tomorrow, Together
          </h1>
        </header>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44a20a571168bce2ee352a4df7a18d8c058f174d1c45aed8a5ef0a2efaa65f0e?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
          alt="" 
          className={`object-contain mt-5 max-w-full aspect-[0.65] w-[250px] ${style.bg_absolute}`}
        />
      </div>
    </section>
  );
}

export default CompanySection;