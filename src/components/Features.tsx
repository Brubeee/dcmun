
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Timeline-Based Committees",
      description:
        "Debate across eras, from ancient mythology to speculative futures. Each committee authentically represents its historical or fictional context.",
      icon: (
        <svg className="h-10 w-10 text-diplomacy-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Dynamic Crisis Format",
      description:
        "React to rapidly evolving scenarios that test your problem-solving abilities. Form alliances and craft meaningful solutions under pressure.",
      icon: (
        <svg className="h-10 w-10 text-diplomacy-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Individual Performance Focus",
      description:
        "Shine through individual defense in 'The Hot Seat' round, where your knowledge, rhetoric, and quick thinking are put to the ultimate test.",
      icon: (
        <svg className="h-10 w-10 text-diplomacy-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const rounds = [
    {
      number: "01",
      title: "The Hot Seat",
      description: "Individual defense followed by live questioning. Present your stance and defend it against challenging inquiries from committee members."
    },
    {
      number: "02",
      title: "Crisis Response",
      description: "Quick alliance-building and crisis escalation. As unexpected scenarios unfold, form strategic partnerships to address urgent challenges."
    },
    {
      number: "03",
      title: "Regional Power Politics",
      description: "Coalition-building and joint strategy development. Collaborate to create comprehensive solutions while maintaining your strategic interests."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-diplomacy-navy to-diplomacy-navy/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            What Makes This <span className="text-diplomacy-gold">Different</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Diplomatic Confrontation reimagines the traditional MUN format with innovative elements 
            designed to challenge even the most experienced delegates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-diplomacy-navy/50 border border-diplomacy-purple/20 hover:border-diplomacy-purple/50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-display text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-center font-display text-2xl md:text-3xl font-bold mb-12">
            The <span className="text-diplomacy-gold">3-Round</span> Format
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rounds.map((round) => (
              <div key={round.number} className="relative">
                <div className="absolute -left-4 -top-4 flex items-center justify-center w-12 h-12 rounded-full bg-diplomacy-gold text-diplomacy-navy font-bold text-xl">
                  {round.number}
                </div>
                <Card className="bg-gradient-to-br from-secondary/90 to-secondary/50 border-diplomacy-purple/20 h-full pl-2">
                  <CardHeader>
                    <CardTitle className="font-display text-xl">{round.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{round.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
