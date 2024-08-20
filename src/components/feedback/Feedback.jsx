import React from 'react'
import FeedbackCard from './FeedbackCard'
import FeedbackSection from './FeedbackSection'

const Feedback = () => {
  return (
    <div>
        <div>
        <div><h3>What is our Customer&apos;s Feedback on this?</h3></div>
        <div>
            <p>Discover our tailored services crafted to elevate and streamline your business operations. From innovative solutions to expert support, we're here to transform your challenges into opportunities for growth. Explore our comprehensive range of services designed to meet your unique needs and drive success. Let us help you optimize your operations and achieve your business goals.s</p>
        </div>
        </div>
        <div className='flex gap-3'>
            <FeedbackSection/>
            <FeedbackSection/>
            <FeedbackSection/>
        </div>
    </div>
  )
}

export default Feedback