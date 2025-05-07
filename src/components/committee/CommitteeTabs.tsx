
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { committees, Committee } from "@/data/committeeData";
import CommitteeGrid from "./CommitteeGrid";
import { useState } from "react";

const CommitteeTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredCommittees = activeTab === "all" 
    ? committees 
    : committees.filter(committee => committee.era.toLowerCase() === activeTab.toLowerCase());
    
  const eras = ["all", "mythology", "ancient", "historical", "modern", "present", "fiction"];

  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-diplomacy-navy/80 border border-diplomacy-purple/30">
          {eras.map(era => (
            <TabsTrigger
              key={era}
              value={era}
              className="text-white data-[state=active]:bg-diplomacy-purple"
              onClick={() => setActiveTab(era)}
            >
              {era.charAt(0).toUpperCase() + era.slice(1)} {era === "all" ? "Eras" : ""}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {eras.map(era => (
        <TabsContent key={era} value={era} className="mt-0">
          <CommitteeGrid committees={filteredCommittees} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CommitteeTabs;
