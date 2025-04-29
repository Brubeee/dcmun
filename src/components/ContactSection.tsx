
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // Show success message (would use a toast in a real app)
    alert("Thank you for your message. We'll get back to you soon!");
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="col-span-1 lg:col-span-2 bg-diplomacy-navy/30 border-diplomacy-purple/20 backdrop-blur-sm">
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="bg-diplomacy-navy/50 border-diplomacy-purple/30 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="bg-diplomacy-navy/50 border-diplomacy-purple/30 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    required
                    rows={5}
                    className="bg-diplomacy-navy/50 border-diplomacy-purple/30 text-white placeholder:text-gray-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-diplomacy-purple hover:bg-diplomacy-lightPurple text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </Card>

          <Card className="bg-diplomacy-navy/30 border-diplomacy-purple/20 backdrop-blur-sm flex flex-col justify-center">
            <div className="p-6 space-y-8">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Contact Information</h3>
                <p className="text-gray-300 mb-4">
                  Our team is ready to assist you with any inquiries about our unique diplomatic competition.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-diplomacy-purple/20 mr-4">
                    <Mail className="h-5 w-5 text-diplomacy-lightPurple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">info@diplomaticconfrontation.org</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-diplomacy-purple/20 mr-4">
                    <Phone className="h-5 w-5 text-diplomacy-lightPurple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="outline" className="w-full border-diplomacy-gold text-diplomacy-gold hover:bg-diplomacy-gold/10">
                  Register Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
