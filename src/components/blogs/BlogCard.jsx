import React from 'react';

const BlogCard = ({ imageSrc, title, description, isDark }) => {
	const cardClasses = isDark
		? "bg-stone-500 text-white"
		: "bg-white text-stone-500";

	return (
		<article className="flex flex-col rounded-none">
			<div className="flex relative flex-col px-4 pt-96 pb-4 w-full rounded-lg aspect-[0.625] max-md:pt-24">
				<img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
				<div className={`flex relative flex-col px-6 py-7 rounded-lg ${cardClasses} max-md:px-5`}>
					<h2 className="text-2xl font-semibold leading-8 max-md:mr-2.5">
						{title}
					</h2>
					<p className="mt-5 text-base leading-6">
						{description}
					</p>
					<a href="#" className="self-start mt-6 text-sm font-medium">
						Read More
					</a>
					<div className={`flex shrink-0 h-1 ${isDark ? 'bg-orange-500' : 'bg-red-400'} w-[68px]`} />
				</div>
			</div>
		</article>
	);
};

export default BlogCard;