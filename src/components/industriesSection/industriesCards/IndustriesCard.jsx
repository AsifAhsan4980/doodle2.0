import React from "react";
import ImageComponent from "./ImageComponent";
import LearnMoreButton from "./LearnMoreButton";

function IndustriesCard() {
  return (
    <article className="flex flex-col text-base font-semibold rounded-none max-w-[595px]">
      <section className="flex flex-col px-10 py-10 w-full bg-white rounded-3xl shadow-[0px_0px_35px_rgba(0,0,0,0.15)] max-md:px-5 max-md:max-w-full">
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/658e0e5ce5e8a2f4fd6efdcf1cc5b341b3fd2a7bc5ec06b397900cbc245bc4ab?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
          alt="Odoo Manufacturing Industry 4.0 Cloud MRP illustration"
          className="object-contain w-full aspect-[1.46] max-md:max-w-full"
        />
        <h2 className="mt-11 text-3xl leading-10 text-zinc-600 max-md:mt-10 max-md:max-w-full">
          Odoo Manufacturing - Industry 4.0 Cloud MRP
        </h2>
        <p className="mt-8 leading-8 text-zinc-800 max-md:max-w-full">
          Transform your manufacturing operations with Odoo comprehensive Industry 4.0 Cloud MRP, including{" "}
          <span className="font-semibold text-orange-500">
            MRP, MES, PLM, Quality, and more.
          </span>{" "}
          Our team excels in integrating additional Odoo apps to meet specific needs. Leveraging extensive experience, we customize solutions to tackle unique industry challenges effectively.
        </p>
        <LearnMoreButton />
      </section>
    </article>
  );
}

export default IndustriesCard;