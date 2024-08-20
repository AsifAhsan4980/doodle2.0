import React from 'react';

function ProcessStep({ number, title, description, steps, bgColor }) {
  return (
    <div className="flex flex-col items-start text-base leading-9 text-zinc-800">
      <div className="self-stretch font-semibold">
        {title} <br />
        <span className="text-sm leading-7">{description}</span>
      </div>
      <div className={`px-1.5 mt-7 w-10 h-10 text-3xl font-bold leading-none text-white whitespace-nowrap ${bgColor}`}>
        {number}
      </div>
      <div className="mt-7 font-medium">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {step}
            <br />
            {index < steps.length - 1 && <span className="leading-[68px]"></span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProcessStep;