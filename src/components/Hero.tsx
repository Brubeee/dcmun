
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/mun conference.jpg')" }} // change filename as needed
    >

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background dark overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0"></div>

        
        <div className="absolute w-64 h-64 bg-diplomacy-gold/5 rounded-full blur-xl top-1/2 left-1/3"></div>
        
        {/* World Map Pattern - Subtle background */}
        <div className="absolute inset-0 opacity-3 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCI+PHBhdGggZD0iTTAgMEwxMjAwIDBoLTEwMDELMTAwIDgwMEgwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto text-center space-y-8 md:space-y-12">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block font-display">Diplomatic Confrontation</span>
            <span className="text-xl md:text-2xl lg:text-3xl mt-4 block font-light text-diplomacy-lightPurple">
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
            <ChevronDown className="text-diplomacy-lightPurple w-8 h-8" />
            </div>
          </div>

          <br></br>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSczMZFNTdVQ41kAAZ6x_xa9xBiIz_2kHMFeO-zrtC7X8tkSxw/viewform?usp=sf_link" // ← replace this with your real link
                target="_blank"
                rel="noopener noreferrer"
             >
              <Button className="bg-diplomacy-purple hover:bg-diplomacy-lightPurple text-white text-lg px-8 py-6">
                Register Now
              </Button>
            </a>
            <Button 
              variant="outline" 
              className="border-diplomacy-gold text-diplomacy-gold hover:bg-diplomacy-gold/10 text-lg px-8 py-6"
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
