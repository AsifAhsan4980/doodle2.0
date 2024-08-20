import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from "@/components/services/SuccessStories/TestimonialCard";

const testimonials = [
	{
		content: "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
		name: "Shalima Hayden",
		role: "Product Designer",
		elevated: true,
	},
	{
		content: "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
		name: "Shalima Hayden",
		role: "Product Designer",
		elevated: false,
	},
	{
		content: "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
		name: "Shalima Hayden",
		role: "Product Designer",
		elevated: true,
	},
	{
		content: "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
		name: "Shalima Hayden",
		role: "Product Designer",
		elevated: false,
	},
];
function TestimonialCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		appendDots: dots => <ul>{dots}</ul>,
		customPaging: i => (
			<div className="h-1 bg-gray-300 mx-2 rounded-md" /> // Custom dot as a flat line
		),
		responsive: [
			{
				breakpoint: 768, // Adjust for mobile view
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	return (
		<div className="self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
			<Slider {...settings}>
				{testimonials.map((testimonial, index) => (
					<TestimonialCard key={index} {...testimonial} />
				))}
			</Slider>
		</div>
	);
}

export default TestimonialCarousel;
