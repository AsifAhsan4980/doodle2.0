import React from "react";
import style from "./static/style.module.css"

function WhyDoodleInc() {
    return (
        <section className="w-full bg-white py-10 max-md:py-8">
            <div className="container flex flex-col mx-auto px-4 text-center">
                <div className={" flex justify-center"}>
                    <h2 className="text-4xl w-2/5 font-semibold leading-tight text-zinc-800 max-md:text-3xl max-md:leading-snug">
                        Why Doodle Inc. for your ERP Implementation?
                    </h2>
                </div>

                <p className="text-lg leading-relaxed text-zinc-800 max-md:text-base max-md:leading-relaxed mt-4 mx-auto max-w-3xl">
                    Expertise, efficiency, and excellence define our Odoo ERP implementations. We deliver tailored solutions that integrate seamlessly and maximize productivity for your business.
                </p>
            </div>
        </section>
    );
}

export default WhyDoodleInc;
