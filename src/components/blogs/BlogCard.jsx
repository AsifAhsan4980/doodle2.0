import React from 'react';

const BlogCard = ({ imageUrl, title, description }) => {
  return (
    <article className="flex flex-col rounded-none max-w-[400px]">
      <div className="flex relative flex-col px-4 pt-96 pb-4 w-full rounded-lg aspect-[0.625]">
        <img loading="lazy" src={imageUrl} alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col px-6 py-7 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold leading-8 text-stone-500">{title}</h2>
          <p className="mt-5 text-base leading-6 text-zinc-800">{description}</p>
          <a href="#" className="self-start mt-6 text-sm font-medium text-zinc-800">Read More</a>
          <div className="flex shrink-0 h-1 bg-red-400 w-[68px]" />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;