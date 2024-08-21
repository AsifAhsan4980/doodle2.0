import React from 'react';

function BlogHeader() {
    return (
        <header className="flex flex-col text-zinc-800 max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden relative z-10 flex-col px-12 pt-0 text-lg font-medium leading-none whitespace-nowrap aspect-[5] w-[95px] max-md:pl-5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf13ed52d8b16f51485550772d89acce6d425916f16ff574962675a40a1a52ef?placeholderIfAbsent=true&apiKey=f657d172884e47fb95c0f9a4c68ba602" className="object-cover absolute inset-0 size-full" alt="" />
                Blogs
            </div>
            <h1 className="mt-7 ml-11 text-4xl font-bold tracking-normal leading-[55px] max-md:max-w-full">
                Insights & <span className="text-white">Innovations: </span>The Doodle Inc. Blog
            </h1>
        </header>
    );
}

export default BlogHeader;