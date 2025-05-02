
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TeamMemberProps {
  name: string;
  position: string;
  onClick?: () => void;
  isClickable: boolean;
}

const TeamMember = ({ name, position, onClick, isClickable }: TeamMemberProps) => {
  return (
    <Card 
      className={`bg-diplomacy-navy/30 border-diplomacy-purple/20 backdrop-blur-sm hover:shadow-md hover:shadow-diplomacy-purple/10 transition-all duration-300 ${isClickable ? 'cursor-pointer' : ''}`}
      onClick={isClickable ? onClick : undefined}
    >
      <CardContent className="p-4">
        <h3 className="text-lg font-medium text-white mb-1">{name}</h3>
        <p className="text-diplomacy-gold text-sm">{position}</p>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  // Department data with OC members
  const departments = {
    "Head of Social Media": ["Jaspal (KSN Breads)", "Divyansh Sanghal"],
    "Head of Marketing": ["Jaspal (KSN Breads)", "Divyansh Sanghal"],
    "Head of Agenda & Crisis Development": ["Madhav", "Rishika Reddy"],
    "Head of Delegate Affairs": ["Pahael Goyal", "Prapti"],
  };

  const teamMembers = [
    { name: "Manan Bhambhani", position: "Secretary General" },
    { name: "Ved Shah", position: "Director General" },
    { name: "Devansh Mishra", position: "Head of Social Media" },
    { name: "Utkarsh Singh", position: "Head of Social Media" },
    { name: "Krittika Acharya", position: "Head of Marketing" },
    { name: "Aadhya Tyagi", position: "Head of Agenda & Crisis Development" },
    { name: "Jaskaran Singh Layal", position: "Head of Delegate Affairs" },
  ];

  const handleMemberClick = (position: string) => {
    // Only handle clicks for head positions, not SG or DG
    if (position.startsWith("Head of")) {
      setSelectedDepartment(selectedDepartment === position ? null : position);
    }
  };

  const isClickablePosition = (position: string) => {
    return position.startsWith("Head of");
  };

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
          {teamMembers.map((member, index) => {
            // For the Secretary General (now first)
            const isSecretaryGeneral = member.name === "Manan Bhambhani";
            // For the Director General (now second)
            const isDirectorGeneral = member.name === "Ved Shah";
            
            // Center the last item (Delegate Affairs)
            const isLastItem = member.name === "Jaskaran Singh Layal";
            
            const isClickable = isClickablePosition(member.position);
            
            return (
              <div 
                key={index} 
                className={`${
                  isLastItem 
                    ? "col-span-1 sm:col-span-2 md:col-span-1 md:col-start-2" 
                    : ""
                } transition-all duration-500 opacity-0 translate-y-4`}
                style={{ 
                  animationName: "fade-in", 
                  animationDuration: "0.5s", 
                  animationDelay: `${0.1 * index}s`, 
                  animationFillMode: "forwards" 
                }}
              >
                <TeamMember 
                  name={member.name} 
                  position={member.position} 
                  onClick={() => handleMemberClick(member.position)}
                  isClickable={isClickable}
                />
              </div>
            );
          })}
        </div>

        {/* OC Members Section that appears when clicking on a department */}
        {selectedDepartment && (
          <div className="mt-12 max-w-2xl mx-auto animate-fade-in">
            <Card className="bg-diplomacy-navy/50 border-diplomacy-purple/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-diplomacy-gold mb-4">
                  {selectedDepartment} Team
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-white">OC Member</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {departments[selectedDepartment as keyof typeof departments].map((member, i) => (
                      <TableRow key={i}>
                        <TableCell className="text-gray-300">{member}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
