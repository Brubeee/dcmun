
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
      {/* Background with conference image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img 
            src="/mun conference.jpg" 
            alt="MUN Conference" 
            className={`w-full h-full object-cover object-center transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        {/* Very subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="container relative z-10 mx-auto text-center space-y-8 md:space-y-12">
        <div className="animate-fade-in">
          <img
              src="/logo (3).png"
              alt="DCMUN Logo"
              className="mx-auto h-20 w-auto mb-8"
          />

          {/* Large welcome text similar to the reference image */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-wide">
            <span className="block font-display text-white mb-2">Welcome to</span>
            <span className="block font-display text-white">DCMUN!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto my-12">
            Experience diplomacy across timelines — from ancient civilizations to speculative futures.
            An Online debate competition challenging your adaptability, strategy, and negotiation skills.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSczMZFNTdVQ41kAAZ6x_xa9xBiIz_2kHMFeO-zrtC7X8tkSxw/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-600 hover:bg-amber-500 text-white text-lg px-8 py-6">
                OC Applications- Apply Now
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-300 hover:bg-gray-300/10 text-lg px-8 py-6"
              onClick={scrollToFeatures}
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div
              className="animate-bounce cursor-pointer"
              onClick={scrollToFeatures}
            >
              <ChevronDown className="text-white w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
