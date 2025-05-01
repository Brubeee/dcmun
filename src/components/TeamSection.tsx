
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  position: string;
}

const TeamMember = ({ name, position }: TeamMemberProps) => {
  return (
    <Card className="bg-diplomacy-navy/30 border-diplomacy-purple/20 backdrop-blur-sm hover:shadow-md hover:shadow-diplomacy-purple/10 transition-all duration-300">
      <CardContent className="p-4">
        <h3 className="text-lg font-medium text-white mb-1">{name}</h3>
        <p className="text-diplomacy-gold text-sm">{position}</p>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  const teamMembers = [
    { name: "Ved Shah", position: "Director General" },
    { name: "Manan Bhambhani", position: "Secretary General" },
    { name: "Devansh Mishra", position: "Head of Social Media" },
    { name: "Utkarsh Singh", position: "Head of Social Media" },
    { name: "Krittika Acharya", position: "Head of Marketing" },
    { name: "Aadhya Tyagi", position: "Head of Agenda & Crisis Development" },
    { name: "Jaskaran Singh Layal", position: "Head of Delegate Affairs" },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-diplomacy-navy to-diplomacy-navy/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-diplomacy-gold">Leadership</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the brilliant minds behind Diplomatic Confrontation MUN
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`${
                index === teamMembers.length - 1 && teamMembers.length % 3 === 1 
                  ? "sm:col-span-2 md:col-span-1 md:mx-auto" 
                  : ""
              } transition-all duration-500 opacity-0 translate-y-4`}
              style={{ 
                animationName: "fade-in", 
                animationDuration: "0.5s", 
                animationDelay: `${0.1 * index}s`, 
                animationFillMode: "forwards" 
              }}
            >
              <TeamMember name={member.name} position={member.position} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
