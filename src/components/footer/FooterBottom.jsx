import React from "react";
import LinkedinIcon from "../Icon/LinkedinIcon";
import InstargamIcon from "../Icon/InstagramIcon";
import FacebookIcon from "../Icon/FacebookIcon";

const FooterBottom = () => {
    return <div className="grid grid-cols-12 gap-5 pt-4">

        <div className="grid col-span-12 md:col-span-6 lg:col-span-4">
            <div className="flex justify-start items-center my-auto">
                <h1 className="font-semibold">@2024 Doodle inc. All rights reserved</h1>
            </div>
        </div>



        <div className="col-span-12 md:col-span-6 lg:col-span-5 my-auto px-2">
            <div className="grid grid-cols-2">
                <h1 className='font-semibold text-xs py-2 px-0 lg:px-3'>Privacy policy</h1>
                <h1 className='font-semibold text-xs py-2 px-0 lg:px-3'>Tearms and conditions</h1>
            </div>

        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="flex justify-end items-center gap-3 my-auto">
                <LinkedinIcon/>
                <InstargamIcon/>
                <FacebookIcon/>
                
            </div>
        </div>

    </div>
}

export default FooterBottom