import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  
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
    img.onload = () => {
      setImageLoaded(true);
      // Add a small delay before showing content for a smoother transition
      setTimeout(() => setContentLoaded(true), 300);
    };
  }, []);

  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-b from-diplomacy-navy to-diplomacy-navy/95"
    >
      {/* Background with conference image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Removed the black background div that was causing the rectangle */}
        
        {/* Overlay for text readability - slightly darker for mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30"></div>
      </div>
      
      <div className="container relative z-10 mx-auto text-center space-y-6 md:space-y-12 px-4">
        <div className={`transition-all duration-1000 transform ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img
              src="/logo (5).png"
              alt="DCMUN Logo"
              className="mx-auto h-64 sm:h-80 w-auto mb-8 sm:mb-16"
          />

          {/* Large welcome text with better mobile scaling */}
           <h1
              style={{
                color: "white",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                padding: "100px 20px", // Fixed duplicate padding property
                fontSize: "2.5rem", // Optional: increase font size
                fontWeight: "bold", // Optional: bold text
                borderRadius: "12px" // Optional: smooth edges
              }}
            >
              {/* Blurred Background Image */}
              <div
                style={{
                  backgroundImage: "url('/mun conference.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(8px)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                  opacity: 0.4,
                }}
              ></div>   

              <span className="block font-display text-white mb-1 sm:mb-2 text-shadow-md">Welcome to</span>
              <span className="block font-display text-white text-shadow-md">DCMUN!</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto my-6 sm:my-12 text-shadow-sm">
            Experience diplomacy across timelines — from ancient civilizations to speculative futures.
            An Online debate competition challenging your adaptability, strategy, and negotiation skills.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSczMZFNTdVQ41kAAZ6x_xa9xBiIz_2kHMFeO-zrtC7X8tkSxw/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="bg-amber-600 hover:bg-amber-500 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                OC Applications- Apply Now
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-100 hover:bg-gray-300/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto mt-3 sm:mt-0"
              onClick={scrollToFeatures}
            >
              Learn More
            </Button>
          </div>
      
          <div className="mt-12 sm:mt-16 flex justify-center">
            <div
              className="animate-bounce cursor-pointer"
              onClick={scrollToFeatures}
            >
              <ChevronDown className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Loading spinner */}
      {!contentLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-diplomacy-gold"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
