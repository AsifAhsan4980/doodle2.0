import React from "react";
import ImageComponent from "./ImageComponent";

function LearnMoreButton() {
  return (
    <button className="flex gap-6 self-start mt-10 text-orange-500 max-md:mt-10">
      <span>Learn More</span>
      <ImageComponent
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/98452aabe530c18348f9d7c4a35f8369d8a7f24568c2357a61f16fd3284ea9ab?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb"
        alt=""
        className="object-contain shrink-0 self-start w-4 aspect-square"
      />
    </button>
  );
}

export default LearnMoreButton;