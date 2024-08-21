import React from 'react';
import BlogCard from './BlogCard';

const blogData = [
	{
		imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ebcda5299aa83377d4df44b1a3fb3e4bc6a51169169eb2a65263b8decae44416?placeholderIfAbsent=true&apiKey=f657d172884e47fb95c0f9a4c68ba602",
		title: "How to make a website look more attractive with illustrations",
		description: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
		isDark: false
	},
	{
		imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fbfa377d78c3c5fa48c8f3a6c67028aef9b7c611d90af49b4f971a09f79f2a23?placeholderIfAbsent=true&apiKey=f657d172884e47fb95c0f9a4c68ba602",
		title: "How to make a website look more attractive with illustrations",
		description: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
		isDark: false
	},
	{
		imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d04d29617b0a2fad72345ea60788b2d6d27f71df21e07924721dcbfac52ba025?placeholderIfAbsent=true&apiKey=f657d172884e47fb95c0f9a4c68ba602",
		title: "How to make a website look more attractive with illustrations",
		description: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
		isDark: true
	},
	{
		imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/896f7eb4f93abf19fd7d24740a06b04966d378875e7f719f4e6c83a17321e076?placeholderIfAbsent=true&apiKey=f657d172884e47fb95c0f9a4c68ba602",
		title: "How to make a website look more attractive with illustrations",
		description: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
		isDark: false
	},
	{
		imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/84dfe161e0d47d6abd659a3fa490e1fbc397d79ec3e33b7251f71dfaebb3ec2b?placeholderIfAbsent=true&apiKey=f657d172884e47fb95c0f9a4c68ba602",
		title: "How to make a website look more attractive with illustrations",
		description: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
		isDark: false
	}
];

const BlogCardGrid = () => {
	return (
		<main className=" mx-auto grid mt-10 grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-5">
			{blogData.map((blog, index) => (
				<BlogCard
					key={index}
					imageSrc={blog.imageSrc}
					title={blog.title}
					description={blog.description}
					isDark={blog.isDark}
				/>
			))}
		</main>
	);
};

export default BlogCardGrid;
