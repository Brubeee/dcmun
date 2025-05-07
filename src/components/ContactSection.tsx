
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-diplomacy-navy/90 to-diplomacy-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-diplomacy-gold">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about Diplomatic Confrontation? Interested in participating or sponsoring? 
            Reach out to us and our team will respond shortly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-diplomacy-navy/30 border-diplomacy-purple/20 backdrop-blur-sm">
            <div className="p-8 space-y-8">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-4">Contact Information</h3>
                <p className="text-gray-300 mb-6">
                  Our team is ready to assist you with any inquiries about our unique diplomatic competition.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-diplomacy-purple/20 mr-5">
                    <Mail className="h-6 w-6 text-diplomacy-lightPurple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white text-lg">thedcmun@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-diplomacy-purple/20 mr-5">
                    <Phone className="h-6 w-6 text-diplomacy-lightPurple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white text-lg">+91 9327911591</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSczMZFNTdVQ41kAAZ6x_xa9xBiIz_2kHMFeO-zrtC7X8tkSxw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-diplomacy-gold text-diplomacy-gold hover:bg-diplomacy-gold/10">
                    Registrations Open
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
