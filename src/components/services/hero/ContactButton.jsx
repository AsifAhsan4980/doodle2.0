import * as React from "react";

function ContactButton() {
  return (
    <button 
      className="flex gap-2.5 justify-center items-center self-start px-6 py-3 mt-5 text-base font-semibold text-center text-white bg-orange-500 rounded-xl max-md:px-5" 
      tabindex="0"
    >
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f3af8018e027ec4908ff10b1bc86877bb56c5ec42ef3c02a9acfe7c386a740c?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" 
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]" 
        alt="Contact Icon"
      />
      <span className="self-stretch my-auto">Contact Now</span>
    </button>
  );
}

export default ContactButton;