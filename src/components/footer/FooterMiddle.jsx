import React from 'react';
import Logo from './Logo';


const FooterMiddle = () => {
    const industries = ['Manufacturing', 'Logistics & Supply Chain', 'Hospitality', 'Education', 'Service Sector'];
    const services = ['Odoo Implementation', 'Odoo Customization & Development', 'Odoo Integration', 'Migrate to Odoo'];
    const company = ['About Us', 'Our Services', 'Contact Us'];

    return (
        <div className='grid grid-cols-12 gap-5'>
            <div className='py-5 pr-5 grid col-span-12 md:col-span-6 lg:col-span-4'>
                <Logo />
                <h1 className='pt-6 text-[12px] font-semibold leading-6'>Communities are increasingly recognizing the need for collective action. Local initiatives, such as tree-planting drives, community gardens, and renewable energy projects, are helping to reduce carbon footprints and build resilience to climate impacts.</h1>
            </div>
             
            <div className='col-span-12 md:col-span-6 lg:col-span-5'>
            <div className='grid grid-cols-2 py-5 px-0 lg:px-2'>
                <div className='px-0 lg:px-3'>
                    <h1 className='font-bold text-sm'>Industries & Expertise</h1>
                    <div className='pt-3'>
                        {
                            industries.map((item) => (
                                <h1 className='font-semibold text-xs py-2'>{item}</h1>
                            ))
                        }
                    </div>
                </div>

                <div className='px-3'>
                    <h1 className='font-bold text-sm'>Services</h1>
                    <div className='pt-3'>
                        {
                            services.map((item) => (
                                <h1 className='font-semibold text-xs py-2'>{item}</h1>
                            ))
                        }
                    </div>
                </div>
            </div>
            </div>
            
            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                <div className='px-0 lg:px-2 py-5'>
                    <h1 className='font-bold text-sm'>Company</h1>
                    <div className='pt-3'>
                        {
                            company.map((item) => (
                                <h1 className='font-semibold text-xs py-2'>{item}</h1>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};



export default FooterMiddle;
