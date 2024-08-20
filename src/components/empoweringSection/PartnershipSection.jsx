import React from "react";

function PartnershipSection() {
  return (
    <section className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-5 text-sm text-zinc-800 max-md:mt-10">
        <div className="flex flex-col flex-1 items-start font-semibold">
          <h2>Partnership</h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/199ceddfb1cef086744200cc9b85b807393599e69a5323b07864bcae712a873a?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
            alt="Trusted Odoo Partner in Innovation"
            className="object-contain mt-6 max-w-full aspect-[3.17] w-[127px]"
          />
          <p className="mt-5 font-medium">Driving Excellence</p>
          <p className="self-stretch">
            Trusted Odoo Partner <br /> in Innovation.
          </p>
        </div>
        <div className="flex flex-col flex-1 items-start self-end mt-12 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b927b602386c65193001e406d8e65f23f154a2016ecc32784996c2438c3a1b6?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
            alt="Trusted AWS Partner in Cloud Innovation"
            className="object-contain aspect-[1.68] w-[67px]"
          />
          <p className="self-stretch mt-4 font-medium">Driving Business Agility</p>
          <p className="font-semibold">
            Trusted AWS Partner <br /> in Cloud Innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PartnershipSection;