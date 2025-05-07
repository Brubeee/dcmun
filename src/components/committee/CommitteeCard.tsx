
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Committee } from "@/data/committeeData";
import { BookText, Globe, Gavel, Atom, Cross, People } from "lucide-react";

interface CommitteeCardProps {
  committee: Committee;
}

const CommitteeCard = ({ committee }: CommitteeCardProps) => {
  // Render the appropriate icon based on the iconType
  const renderIcon = () => {
    switch (committee.iconType) {
      case "bookText":
        return <BookText className="text-diplomacy-gold" />;
      case "globe":
        return <Globe className="text-diplomacy-gold" />;
      case "gavel":
        return <Gavel className="text-diplomacy-gold" />;
      case "atom":
        return <Atom className="text-diplomacy-gold" />;
      case "cross":
        return <Cross className="text-diplomacy-gold" />;
      case "people":
        return <People className="text-diplomacy-gold" />;
      default:
        return null;
    }
  };

  return (
    <Card
      className={`${committee.image} border border-white/10 hover:border-diplomacy-gold/50 transition-all duration-300 overflow-hidden h-full`}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-diplomacy-navy/30 z-0"></div>
      <div className="relative z-10">
        <CardHeader>
          <div className="inline-block px-2 py-1 bg-diplomacy-purple/70 text-xs rounded mb-2 flex items-center gap-1">
            {committee.iconType && renderIcon()}
            {committee.era}
          </div>
          <CardTitle className="text-xl font-display text-white">
            {committee.name}
          </CardTitle>
          <CardDescription className="text-gray-200">
            {committee.period}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-2">{committee.description}</p>
          {committee.agendas && (
            <div className="mt-3">
              <h4 className="text-diplomacy-gold text-sm mb-2">Agendas:</h4>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {committee.agendas.map((agenda, i) => (
                  <li key={i} className="pl-1">{agenda}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default CommitteeCard;
