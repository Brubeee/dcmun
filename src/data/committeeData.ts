
import { LucideIcon } from "lucide-react";
import { BookText, Globe } from "lucide-react";

export interface Committee {
  name: string;
  era: string;
  period: string;
  description: string;
  image: string;
  iconType?: "bookText" | "globe";
  agendas?: string[];
}

export const committees: Committee[] = [
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
    iconType: "bookText"
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
    iconType: "globe"
  },
];
