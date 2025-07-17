
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-diplomacy-navy py-12 border-t border-diplomacy-purple/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-xl font-bold text-white mb-4">Diplomatic Confrontation</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A revolutionary MUN-style debate competition spanning multiple eras and testing the limits of diplomatic skill.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfbEw5bJZAoNCjp-BnpTvxuHon_Z9gSuKMSyfVHpBQFROKMog/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              <Button className="bg-diplomacy-purple hover:bg-diplomacy-lightPurple text-white">
                Registrations Open
              </Button>
            </a>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-diplomacy-lightPurple transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-diplomacy-lightPurple transition-colors">Features</a>
              </li>
              <li>
                <a href="#committees" className="text-gray-300 hover:text-diplomacy-lightPurple transition-colors">Committees</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-diplomacy-lightPurple transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-diplomacy-lightPurple transition-colors">Rules & Procedures</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-diplomacy-lightPurple transition-colors">Committee Guides</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-diplomacy-lightPurple transition-colors">Past Conferences</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-diplomacy-lightPurple transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-diplomacy-purple/20 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Diplomatic Confrontation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
