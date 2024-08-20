import React from 'react';

function ValueValidation() {
  return (
    <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start mt-40 w-full tracking-normal max-md:mt-10">
        <h3 className="text-4xl font-bold leading-9 text-center text-stone-500">
          Value <br /> Validation
        </h3>
        <div className="flex gap-2.5 items-start mt-3 text-base font-semibold leading-9 text-zinc-800">
          <div className="self-end mt-16 basis-auto max-md:mt-10">
            Deploy <br />
            <span className="text-sm leading-7">Lorem ipsum suspendis seadipisicing elit, sed do eiusmod tempor.</span>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/444002517319809d4f900d765aa918ea97686ac249f26ac688512333c3603c6e?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain shrink-0 self-start aspect-[0.52] w-[49px]" />
        </div>
        <div className="px-1.5 mt-7 w-10 h-10 text-3xl font-bold leading-none text-white whitespace-nowrap bg-zinc-800">
          04
        </div>
        <div className="flex gap-10 items-start mt-7">
          <div className="self-start text-base font-medium leading-9 text-zinc-800">
            Stage <br />
            <span className="leading-[68px]">Smoke Test</span> <br />
            <span className="leading-[68px]">QA/UAT</span>
          </div>
          <div className="flex flex-col items-start self-end mt-20 text-4xl font-bold leading-9 text-center text-orange-500 whitespace-nowrap max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25b7d775937659ab092b8ebb0639b3bdd1f636f6597cd33741466835c6b9f223?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" alt="" className="object-contain aspect-[0.79] w-[70px]" />
            <div className="mt-5 ml-3.5 max-md:ml-2.5">
              Released <br /> Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValueValidation;