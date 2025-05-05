
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
  isLeadership?: boolean;
}

const TeamMember = ({ name, position, onClick, isClickable, isLeadership }: TeamMemberProps) => {
  return (
    <Card 
      className={`bg-diplomacy-navy/30 border-diplomacy-purple/20 backdrop-blur-sm hover:shadow-md hover:shadow-diplomacy-purple/10 transition-all duration-300 ${isClickable ? 'cursor-pointer' : ''} ${isLeadership ? 'h-full' : ''}`}
      onClick={isClickable ? onClick : undefined}
    >
      <CardContent className={`p-4 ${isLeadership ? 'py-6' : ''} text-center`}>
        <h3 className={`font-medium text-white mb-1 ${isLeadership ? 'text-xl' : 'text-lg'}`}>{name}</h3>
        <p className="text-diplomacy-gold text-sm">{position}</p>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  // Department data with OC members - Updated Delegate Affairs and fixed spelling of Diyansh
  const departments = {
    "Head of Media Production": ["Jaspal", "Divyansh Sanghal"],
    "Head of Marketing": ["Jaspal", "Diyansh Sanghal"],
    "Head of Agenda & Crisis Development": ["Madhav", "Rishika Reddy"],
    "Head of Delegate Affairs": ["Suhana", "Samiksha hadia", "Prapti Shetty", "Pahel Goyal"],
  };

  // Separate leadership (SG and DG) from other team members
  const leadershipMembers = [
    { name: "Manan Bhambhani", position: "Secretary General" },
    { name: "Ved Shah", position: "Director General" },
  ];

  const teamMembers = [
    { name: "Devansh Mishra", position: "Head of Marketing" },
    { name: "Utkarsh Singh", position: "Head of Marketing" },
    { name: "Jaskaran Singh Layal", position: "Head of Delegate Affairs" },
    { name: "Aadhya Tyagi", position: "Head of Agenda & Crisis Development" },
    { name: "Krittika Acharya", position: "Head of Media Production" },
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

        {/* Leadership row - SG and DG */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {leadershipMembers.map((member, index) => (
            <div 
              key={index}
              className="transition-all duration-500 opacity-0 translate-y-4"
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
                isClickable={false}
                isLeadership={true}
              />
            </div>
          ))}
        </div>

        {/* Secretariat members grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => {
            const isClickable = isClickablePosition(member.position);
            
            return (
              <div 
                key={index} 
                className="transition-all duration-500 opacity-0 translate-y-4"
                style={{ 
                  animationName: "fade-in", 
                  animationDuration: "0.5s", 
                  animationDelay: `${0.1 * (index + leadershipMembers.length)}s`, 
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
                <h3 className="text-xl font-medium text-diplomacy-gold mb-4 text-center">
                  {selectedDepartment} Team
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-white text-center">OC Member</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {departments[selectedDepartment as keyof typeof departments].map((member, i) => (
                      <TableRow key={i}>
                        <TableCell className="text-gray-300 text-center">{member}</TableCell>
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
