import ServicesSection from '@/components/services/BuisnessNeed/ServicesSection';
import Introduction from '@/components/services/hero/Introduction';
import ProcessSection from '@/components/services/OdooExcellence/ProcessSection';
import CaseStudyCard from '@/components/services/SuccessStories/CaseStudyCard';
import SuccessStories from '@/components/services/SuccessStories/SuccessStories';
import Layout from '@/layout/Layout';

function Services() {
  return (
    <main className="flex flex-col">
        <Layout>
        <Introduction />
        <ServicesSection/>
        <ProcessSection/>
        <SuccessStories/>
        </Layout>
    </main>
  );
}

export default Services;