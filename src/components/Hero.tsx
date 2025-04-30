import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    // Preload image to ensure it's loaded properly
    const img = new Image();
    img.src = '/mun conference.jpg';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      {/* Background with dark gradient and subtle image */}
      <div className="absolute inset-0 overflow-hidden bg-[#121620]">
        <img 
          src="/subtle-diplomacy-bg.jpg" 
          alt="Diplomatic Background" 
          className={`w-full h-full object-cover opacity-20 mix-blend-overlay transition-opacity duration-500 ${imageLoaded ? 'opacity-20' : 'opacity-0'}`}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121620]/90 to-[#121620]/70"></div>
      </div>
      
      <div className="container relative z-10 mx-auto text-center space-y-8 md:space-y-12">
        <div className="animate-fade-in">
          <img
              src="/logo (3).png"
              alt="DCMUN Logo"
              className="mx-auto h-20 w-auto mb-6"
          />

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block font-display text-white">Diplomatic <span className="text-amber-500">Confrontation</span></span>
            <span className="text-xl md:text-2xl lg:text-3xl mt-4 block font-light text-gray-200">
              Timeless Diplomacy, Modern Pressure
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience diplomacy across timelines — from ancient civilizations to speculative futures.
            A debate competition challenging your adaptability, strategy, and negotiation skills.
          </p>
          <div className="mt-16 flex justify-center">
            <div
              className="animate-bounce cursor-pointer"
              onClick={scrollToFeatures}
            >
              <ChevronDown className="text-white w-8 h-8" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSczMZFNTdVQ41kAAZ6x_xa9xBiIz_2kHMFeO-zrtC7X8tkSxw/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-indigo-700 hover:bg-indigo-600 text-white text-lg px-8 py-6">
                Register Now
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500/10 text-lg px-8 py-6"
              onClick={scrollToFeatures}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
