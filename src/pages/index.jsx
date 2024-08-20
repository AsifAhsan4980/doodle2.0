import Blogs from "@/components/blogs/Blogs";
import BusinessNeeds from "@/components/businessNeedsSection/BusinessNeeds";
import Empowering from "@/components/empoweringSection/Empowering";
import Features from "@/components/features/Features";
import Feedback from "@/components/feedback/Feedback";
import ManufacturingPage from "@/components/hero/ManufacturingPage";
import IndustriesExpertise from "@/components/industriesSection/IndustriesExpertise";
import ReviewProsCons from "@/components/reviewProsCons/ReviewProsCons";
import WhyDoodleInc from "@/components/whyDoodleInc/WhyDoodleInc";
import Layout from "@/layout/layout";


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
        <Feedback/>
        <Blogs/>
      </Layout>
    </div>

  );
}
