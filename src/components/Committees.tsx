
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookText, Globe, Magic } from "lucide-react";

const Committees = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const committees = [
    {
      name: "Council of Hastinapura",
      era: "Mythology",
      period: "Mahabharata Era",
      description: "Navigate the complex political landscape of ancient India, balancing duty, honor, and the looming threat of devastating war.",
      image: "bg-gradient-to-br from-yellow-900/70 to-yellow-700/40",
    },
    {
      name: "Roman Senate",
      era: "Ancient",
      period: "During the Punic Wars",
      description: "Direct Rome's strategy against Carthage while managing internal political rivalries during the republic's greatest challenge.",
      image: "bg-gradient-to-br from-red-900/70 to-red-700/40",
    },
    {
      name: "Salem Witch Trial Committee",
      era: "Historical",
      period: "1692",
      description: "Determine the fate of the accused in an atmosphere of religious hysteria, fear, and mounting social tensions.",
      image: "bg-gradient-to-br from-gray-800/70 to-gray-600/40",
    },
    {
      name: "Manhattan Project Advisory Council",
      era: "Modern",
      period: "1944–45",
      description: "Advise on the ethical and strategic implications of the world's first nuclear weapons as WWII reaches its climax.",
      image: "bg-gradient-to-br from-amber-700/70 to-amber-600/40",
    },
    {
      name: "Emergency Middle East Peace Conference",
      era: "Present",
      period: "Present Day",
      description: "Forge a path to lasting peace amidst entrenched conflicts and rapidly escalating regional tensions.",
      image: "bg-gradient-to-br from-blue-900/70 to-blue-700/40",
    },
    {
      name: "The Wizarding Council of Great Britain",
      era: "Fiction",
      period: "Post-Second Wizarding War",
      description: "Magic, Power, and Policy in the Post-War World",
      agendas: [
        "Reforming the Ministry of Magic after the Second Wizarding War",
        "Legalizing Magical Creatures' Rights and Representation",
        "Regulating the Use of Unforgivable Curses by Law Enforcement"
      ],
      image: "bg-gradient-to-br from-purple-900/70 to-purple-700/40",
      icon: <Magic className="text-diplomacy-gold" />
    },
    {
      name: "The Global Abortion Summit",
      era: "Present",
      period: "Present Day",
      description: "Choice. Control. Controversy.",
      agendas: [
        "Global Recognition of Reproductive Rights as Basic Human Rights",
        "Balancing Religious, Cultural, and Legal Norms in Abortion Policy",
        "Decriminalization and Safe Access in Developing Nations"
      ],
      image: "bg-gradient-to-br from-green-900/70 to-green-700/40",
      icon: <Globe className="text-diplomacy-gold" />
    },
  ];

  const filteredCommittees = activeTab === "all" 
    ? committees 
    : committees.filter(committee => committee.era.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="committees" className="py-20 bg-diplomacy-navy/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-diplomacy-gold">Committees</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From ancient mythology to speculative futures, each committee offers unique challenges
            and opportunities for diplomatic excellence.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-diplomacy-navy/80 border border-diplomacy-purple/30">
              <TabsTrigger
                value="all"
                className="text-white data-[state=active]:bg-diplomacy-purple"
                onClick={() => setActiveTab("all")}
              >
                All Eras
              </TabsTrigger>
              <TabsTrigger
                value="mythology"
                className="text-white data-[state=active]:bg-diplomacy-purple"
                onClick={() => setActiveTab("mythology")}
              >
                Mythology
              </TabsTrigger>
              <TabsTrigger
                value="ancient"
                className="text-white data-[state=active]:bg-diplomacy-purple"
                onClick={() => setActiveTab("ancient")}
              >
                Ancient
              </TabsTrigger>
              <TabsTrigger
                value="historical"
                className="text-white data-[state=active]:bg-diplomacy-purple"
                onClick={() => setActiveTab("historical")}
              >
                Historical
              </TabsTrigger>
              <TabsTrigger
                value="modern"
                className="text-white data-[state=active]:bg-diplomacy-purple"
                onClick={() => setActiveTab("modern")}
              >
                Modern
              </TabsTrigger>
              <TabsTrigger
                value="present"
                className="text-white data-[state=active]:bg-diplomacy-purple"
                onClick={() => setActiveTab("present")}
              >
                Present
              </TabsTrigger>
              <TabsTrigger
                value="fiction"
                className="text-white data-[state=active]:bg-diplomacy-purple"
                onClick={() => setActiveTab("fiction")}
              >
                Fiction
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCommittees.map((committee, index) => (
                <Card
                  key={index}
                  className={`${committee.image} border border-white/10 hover:border-diplomacy-gold/50 transition-all duration-300 overflow-hidden h-full`}
                >
                  <div className="absolute inset-0 backdrop-blur-sm bg-diplomacy-navy/30 z-0"></div>
                  <div className="relative z-10">
                    <CardHeader>
                      <div className="inline-block px-2 py-1 bg-diplomacy-purple/70 text-xs rounded mb-2 flex items-center gap-1">
                        {committee.icon && committee.icon}
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
              ))}
            </div>
          </TabsContent>
          
          {["mythology", "ancient", "historical", "modern", "present", "fiction"].map((era) => (
            <TabsContent key={era} value={era} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCommittees.map((committee, index) => (
                  <Card
                    key={index}
                    className={`${committee.image} border border-white/10 hover:border-diplomacy-gold/50 transition-all duration-300 overflow-hidden h-full`}
                  >
                    <div className="absolute inset-0 backdrop-blur-sm bg-diplomacy-navy/30 z-0"></div>
                    <div className="relative z-10">
                      <CardHeader>
                        <div className="inline-block px-2 py-1 bg-diplomacy-purple/70 text-xs rounded mb-2 flex items-center gap-1">
                          {committee.icon && committee.icon}
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
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Committees;
