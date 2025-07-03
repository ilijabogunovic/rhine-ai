import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PillarsSection from "@/components/home/PillarsSection";
import NewsSection from "@/components/home/NewsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PillarsSection />
      <NewsSection />
    </Layout>
  );
};

export default Index;
