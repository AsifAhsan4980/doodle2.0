import React from 'react';

function ImageComponent() {
  return (
    <section className="w-full">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/050d379808c5a6ae4b5d72cffcc0bd225d4d591932b1211bdbe4d28d4f1d6c9a?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" 
        alt="Descriptive image content" 
        className="object-contain w-full aspect-[1.76]" 
        loading="lazy"
      />
    </section>
  );
}

export default ImageComponent;