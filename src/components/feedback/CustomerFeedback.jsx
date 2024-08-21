import React from "react";
import FeedbackHeader from "./FeedbackHeader";
import FeedbackContent from "./FeedbackContent";

function CustomerFeedback() {
	return (
		<main className="container mx-auto flex gap-5 max-md:flex-col px-4">
			<FeedbackHeader />
			<FeedbackContent />
		</main>
	);
}

export default CustomerFeedback;
