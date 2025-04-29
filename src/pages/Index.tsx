
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Committees from "@/components/Committees";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-diplomacy-navy text-white">
      <Navbar />
      <Hero />
      <Features />
      <Committees />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
