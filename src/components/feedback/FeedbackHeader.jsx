import React from "react";

function FeedbackHeader() {
	return (
		<section className="flex flex-col w-[39%] max-md:w-full">
			<div className="max-md:mt-10 max-md:max-w-full">
				<div className="flex gap-5 max-md:flex-col">
					<div className="flex flex-col w-3/12 max-md:w-full">
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ee6b97d8f4aef4c07d38627f3e82b3db41940130d0f5f2749bd0bf71871d4cf?placeholderIfAbsent=true&apiKey=f657d172884e47fb95c0f9a4c68ba602"
							alt="Customer Feedback Icon"
							className="object-contain max-w-full aspect-[0.93] w-[157px]"
						/>
					</div>
					<div className="flex flex-col w-9/12 max-md:w-full">
						<h1 className="mt-36 text-6xl font-bold leading-[60px] text-zinc-800 max-md:mt-10 max-md:text-4xl max-md:leading-10">
							What is our Customer's Feedback on this?
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeedbackHeader;
