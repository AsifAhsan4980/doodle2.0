import React from "react";
import style from "./static/style.module.css"

function WhyDoodleInc() {
  return (
    <section className=" flex justify-center pt-0 w-full  max-md:max-w-full">
      <div className="max-w-[837px]">
        <h2 className={`${style.font_600} text-4xl leading-[55px] max-w-[550px] text-zinc-800 text-center`}>
          Why Doodle Inc. for your ERP Implementation?
        </h2>
        <p className="text-lg   font-bold leading-10 text-zinc-800 text-center mt-4">
          Expertise, efficiency, and excellence define our Odoo ERP implementations. We deliver tailored solutions that integrate seamlessly and maximize productivity for your business.
        </p>
      </div>
    </section>
  );
}

export default WhyDoodleInc;