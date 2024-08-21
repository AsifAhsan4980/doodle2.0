import React from "react";
import ManufacturingButton from "./ManufacturingButton";
import IndustriesCard from "./industriesCards/IndustriesCard";

function IndustriesExpertise() {
    return (
        <section className="w-full text-center bg-white py-10 max-md:py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold leading-[55px] text-zinc-800 max-md:text-3xl max-md:leading-[45px]">
                    Industries & Expertise
                </h2>
                <p className="text-lg font-bold leading-10 text-zinc-800 max-md:text-base max-md:leading-7 mt-4">
                    Guiding Your Business with Expert Insights: Understanding Your Needs, Advising Best Practices, and Tailoring Odoo ERP Solutions to Overcome Industry Challenges.
                </p>
                <div className="mt-6">
                    <ManufacturingButton />
                </div>
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                    <IndustriesCard />
                    <IndustriesCard />
                </div>
            </div>
        </section>
    );
}

export default IndustriesExpertise;
