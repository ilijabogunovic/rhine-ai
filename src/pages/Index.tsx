import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import DirectionsSection from "@/components/home/DirectionsSection";
import NewsSection from "@/components/home/NewsSection";
import ApplyBand from "@/components/home/ApplyBand";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DirectionsSection />
      <NewsSection />
      <ApplyBand />
    </Layout>
  );
};

export default Index;
