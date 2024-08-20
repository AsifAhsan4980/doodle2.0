import React from "react";

const FooterBottom = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
        <div className="flex justify-start items-center">
            <h1 className="font-semibold">@2024 Doodle inc. All rights reserved</h1>
        </div>


        <div className="grid grid-cols-2 py-5 px-2">
            <h1 className='font-semibold text-xs py-2 px-0 lg:px-3'>Privacy policy</h1>
            <h1 className='font-semibold text-xs py-2 px-0 lg:px-3'>Tearms and conditions</h1>
        </div>


        <div className="flex justify-end items-center">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d232cd42a6522b4c741f006990d673d64ad6944c538f7213689a4b0d991bc334?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb" className="object-contain shrink-0 rounded-xl aspect-[3.66] float-right w-[88px]" alt="" />
        </div>
    </div>
}

export default FooterBottom