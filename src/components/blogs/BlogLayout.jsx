import React from 'react';
import BlogHeader from './BlogHeader';
import BlogDescription from './BlogDescription';

function BlogLayout() {
	return (
		<main className="container mx-auto flex gap-5 max-md:flex-col">
			<div className="flex flex-col w-[35%] max-md:w-full">
				<BlogHeader />
			</div>
			<div className="flex flex-col w-[65%] max-md:w-full">
				<BlogDescription />
			</div>
		</main>
	);
}

export default BlogLayout;
