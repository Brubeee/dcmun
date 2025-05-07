
import { LucideIcon } from "lucide-react";
import { BookText, Globe, Gavel, Atom, Cross, Users } from "lucide-react";

export interface Committee {
  name: string;
  era: string;
  period: string;
  description: string;
  image: string;
  iconType?: "bookText" | "globe" | "gavel" | "atom" | "cross" | "people";
  agendas?: string[];
}

export const committees: Committee[] = [
  {
    name: "Council of Hastinapura",
    era: "Mythology",
    period: "Mahabharata Era",
    description: "Deliberate on war, dharma, and dynastic politics as ancient India stands on the edge of civil war.",
    image: "bg-gradient-to-br from-purple-900/70 to-purple-700/40",
    iconType: "gavel",
    agendas: [
      "Succession to the Throne of Hastinapura",
      "The Rights of Pandavas vs. Kauravas in Governance",
      "Diplomatic Solutions to Prevent the Kurukshetra War"
    ]
  },
  {
    name: "Roman Senate During the Punic Wars",
    era: "Ancient",
    period: "218-201 BCE",
    description: "Debate Carthage, military expansion, and the survival of the Republic at Rome's most pivotal hour.",
    image: "bg-gradient-to-br from-red-900/70 to-orange-700/40",
    iconType: "people",
    agendas: [
      "Military Strategy Against Hannibal's Forces",
      "Economic Reforms to Sustain the War Effort",
      "The Future of Roman Territorial Expansion"
    ]
  },
  {
    name: "Salem Witch Trial Committee",
    era: "Historical",
    period: "1692",
    description: "Balance fear, justice, and religion during a community's descent into hysteria and persecution.",
    image: "bg-gradient-to-br from-gray-900/70 to-gray-700/40",
    iconType: "cross",
    agendas: [
      "Standards of Evidence for Witchcraft Accusations",
      "The Role of Religious Testimony in Legal Proceedings",
      "Protection of the Accused from Mob Justice"
    ]
  },
  {
    name: "Manhattan Project Advisory Council",
    era: "Modern",
    period: "1944-45",
    description: "Navigate the ethics, strategy, and future consequences of the atomic bomb's creation and use.",
    image: "bg-gradient-to-br from-blue-900/70 to-blue-700/40",
    iconType: "atom",
    agendas: [
      "Target Selection for First Atomic Strike",
      "Scientists' Ethical Responsibility in Weapons Development",
      "Post-War International Control of Nuclear Technology"
    ]
  },
  {
    name: "International Abortion Council",
    era: "Present",
    period: "Present Day",
    description: "Legalizing Abortion Worldwide — Healthcare or Homicide?",
    image: "bg-gradient-to-br from-green-900/70 to-green-700/40",
    iconType: "globe",
    agendas: [
      "Universal Access to Safe Abortion Services",
      "Religious and Cultural Considerations in Abortion Policy",
      "Medical Standards for Abortion Providers Globally"
    ]
  },
  {
    name: "The Harry Potter Committee",
    era: "Fiction",
    period: "Post-Second Wizarding War",
    description: "Integration of Muggle-borns and the Collapse of Blood Purity Politics",
    image: "bg-gradient-to-br from-purple-900/70 to-purple-600/40",
    iconType: "bookText",
    agendas: [
      "Educational Reform at Hogwarts for Muggle Integration",
      "Anti-Discrimination Legislation in Magical Employment",
      "Truth and Reconciliation Process for Former Death Eaters"
    ]
  }
];
