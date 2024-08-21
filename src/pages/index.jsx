
import BusinessNeeds from "@/components/businessNeedsSection/BusinessNeeds";
import Empowering from "@/components/empoweringSection/Empowering";
import Features from "@/components/features/Features";
import ManufacturingPage from "@/components/hero/ManufacturingPage";
import IndustriesExpertise from "@/components/industriesSection/IndustriesExpertise";
import ReviewProsCons from "@/components/reviewProsCons/ReviewProsCons";
import WhyDoodleInc from "@/components/whyDoodleInc/WhyDoodleInc";
import Layout from "@/layout/layout";
import CustomerFeedback from "@/components/feedback/CustomerFeedback";
import BlogLayout from "@/components/blogs/BlogLayout";
import TestimonialCarousel from "@/components/services/SuccessStories/TestimonialCarusol";
import BlogCardGrid from "@/components/blogs/BlogCardGrid";


export default function Home() {
  return (
    <div>
      <Layout>
        <ManufacturingPage/>
        <Empowering/>
        <BusinessNeeds/>
        <IndustriesExpertise/>
        <WhyDoodleInc/>
        <ReviewProsCons/>
        <Features/>
        <CustomerFeedback/>
        <TestimonialCarousel/>
        <BlogLayout/>
        <BlogCardGrid/>
      </Layout>
    </div>

  );
}
