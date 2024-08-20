import React from "react";

function ContactButton() {
  return (
    <button className="flex gap-2.5 justify-center items-center px-6 py-3 font-semibold text-white bg-orange-500 rounded-xl max-md:px-5">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/147337f2becccb61d0d751120efc9403f4a1ed4ee269127d3105b005f882bd64?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]" alt="" />
      <span className="self-stretch my-auto">Contact Now</span>
    </button>
  );
}

export default ContactButton;