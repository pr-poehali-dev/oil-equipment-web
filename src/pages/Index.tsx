import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Advantages from "@/components/Advantages";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <Advantages />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
