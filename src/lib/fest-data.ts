export type EventCategory = "Technical" | "Cultural" | "Sports" | "Fun";

export interface FestEvent {
  slug: string;
  title: string;
  category: EventCategory;
  tagline: string;
  description: string;
  rules: string[];
  date: string; // ISO-ish display
  day: 1 | 2 | 3;
  time: string;
  venue: string;
  organizer: { name: string; phone: string; email: string };
  prize: string;
}

export const FEST_START = "2026-03-13T10:00:00";

export const events: FestEvent[] = [
  {
    slug: "hackathon-24",
    title: "Hackathon 24",
    category: "Technical",
    tagline: "Code through the night.",
    description:
      "A 24-hour hackathon where teams build innovative solutions to real-world problems. Mentors, free food and serious prizes.",
    rules: [
      "Teams of 2 to 4 members",
      "All code must be written during the event",
      "Use of public APIs and open-source libraries allowed",
      "Final demo limited to 5 minutes",
    ],
    date: "Mar 13 – 14, 2026",
    day: 1,
    time: "10:00 AM",
    venue: "CSE Block, Lab 4",
    organizer: { name: "Aarav Mehta", phone: "+91 98765 43210", email: "hackathon@euphoria26.in" },
    prize: "₹1,00,000",
  },
  {
    slug: "battle-of-bands",
    title: "Battle of the Bands",
    category: "Cultural",
    tagline: "Loud. Live. Legendary.",
    description:
      "College bands across the country compete on the main stage with a panel of industry judges and a roaring live crowd.",
    rules: [
      "3 to 6 members per band",
      "20-minute set including sound check",
      "Original compositions earn bonus points",
      "Bring your own instruments; backline provided",
    ],
    date: "Mar 14, 2026",
    day: 2,
    time: "7:00 PM",
    venue: "Main Amphitheatre",
    organizer: { name: "Riya Sharma", phone: "+91 99887 76655", email: "music@euphoria26.in" },
    prize: "₹75,000",
  },
  {
    slug: "ai-pitchfest",
    title: "AI Pitchfest",
    category: "Technical",
    tagline: "Pitch the future.",
    description:
      "Pitch your AI-driven startup idea to a jury of investors and founders. Selected ideas get incubation support.",
    rules: [
      "Solo or teams up to 3",
      "7-minute pitch + 3-minute Q&A",
      "Working prototype not mandatory but a plus",
      "Submit deck 24h before the event",
    ],
    date: "Mar 14, 2026",
    day: 2,
    time: "11:00 AM",
    venue: "Auditorium B",
    organizer: { name: "Kabir Singh", phone: "+91 90909 80808", email: "pitch@euphoria26.in" },
    prize: "₹50,000 + Incubation",
  },
  {
    slug: "dance-off",
    title: "Neon Dance Off",
    category: "Cultural",
    tagline: "Move under the lights.",
    description:
      "Solo and group dance battles under UV lights. Any style, any genre — bring your A-game.",
    rules: [
      "Solo or groups up to 8",
      "Performance time: 3 to 5 minutes",
      "Music submitted 12h prior",
      "No props with open flames",
    ],
    date: "Mar 15, 2026",
    day: 3,
    time: "6:30 PM",
    venue: "Main Amphitheatre",
    organizer: { name: "Sana Iyer", phone: "+91 91234 56789", email: "dance@euphoria26.in" },
    prize: "₹40,000",
  },
  {
    slug: "futsal-cup",
    title: "Euphoria Futsal Cup",
    category: "Sports",
    tagline: "Five-a-side glory.",
    description:
      "Knockout-style 5-a-side football tournament across two days under floodlights.",
    rules: [
      "5 players + 3 substitutes",
      "Two halves of 12 minutes",
      "Standard FIFA futsal rules",
      "Shin guards mandatory",
    ],
    date: "Mar 13 – 14, 2026",
    day: 1,
    time: "4:00 PM",
    venue: "Sports Arena",
    organizer: { name: "Devansh Rao", phone: "+91 98989 12121", email: "sports@euphoria26.in" },
    prize: "₹60,000",
  },
  {
    slug: "esports-arena",
    title: "Esports Arena: Valorant",
    category: "Sports",
    tagline: "Aim. Clutch. Conquer.",
    description: "5v5 Valorant tournament on a custom-built LAN setup with live shoutcasting.",
    rules: [
      "Teams of 5 + 1 sub",
      "BO1 group, BO3 playoffs, BO5 final",
      "No coaching during matches",
      "Cheating = lifetime ban",
    ],
    date: "Mar 14, 2026",
    day: 2,
    time: "10:00 AM",
    venue: "Gaming Lounge",
    organizer: { name: "Ishaan Verma", phone: "+91 99887 11223", email: "esports@euphoria26.in" },
    prize: "₹50,000",
  },
  {
    slug: "treasure-hunt",
    title: "Campus Treasure Hunt",
    category: "Fun",
    tagline: "Solve. Sprint. Win.",
    description: "A campus-wide hunt with cryptic clues, AR puzzles and a final mystery prize.",
    rules: [
      "Teams of 3 to 5",
      "No vehicles allowed",
      "Stay within marked campus zones",
      "Phones allowed for scanning AR clues only",
    ],
    date: "Mar 15, 2026",
    day: 3,
    time: "11:00 AM",
    venue: "Main Quad",
    organizer: { name: "Nisha Kapoor", phone: "+91 98123 45678", email: "fun@euphoria26.in" },
    prize: "Mystery box",
  },
  {
    slug: "open-mic",
    title: "Midnight Open Mic",
    category: "Cultural",
    tagline: "Stories under the stars.",
    description: "Stand-up, poetry and acoustic sets in an intimate rooftop setting.",
    rules: [
      "Solo performances only",
      "5-minute slot per artist",
      "Family-friendly content",
      "Sign up 24h in advance",
    ],
    date: "Mar 13, 2026",
    day: 1,
    time: "9:30 PM",
    venue: "Rooftop Lounge",
    organizer: { name: "Arnav Joshi", phone: "+91 90011 22334", email: "openmic@euphoria26.in" },
    prize: "Featured artist slot",
  },
  {
    slug: "robowars",
    title: "RoboWars",
    category: "Technical",
    tagline: "Metal meets mayhem.",
    description: "Custom-built combat robots clash in an armoured arena. Last bot standing wins.",
    rules: [
      "Bot weight ≤ 15 kg",
      "No flammable or liquid weapons",
      "3-minute matches",
      "Safety inspection mandatory",
    ],
    date: "Mar 15, 2026",
    day: 3,
    time: "2:00 PM",
    venue: "ME Workshop",
    organizer: { name: "Vihaan Nair", phone: "+91 98765 00112", email: "robowars@euphoria26.in" },
    prize: "₹70,000",
  },
];

export const team = [
  { name: "Aanya Kapoor", role: "Festival Director", initials: "AK" },
  { name: "Rohan Desai", role: "Head of Operations", initials: "RD" },
  { name: "Meera Bhatia", role: "Cultural Lead", initials: "MB" },
  { name: "Yash Malhotra", role: "Technical Lead", initials: "YM" },
  { name: "Tara Nair", role: "Sponsorship Head", initials: "TN" },
  { name: "Karan Joshi", role: "Marketing Lead", initials: "KJ" },
  { name: "Sara Pillai", role: "Design Lead", initials: "SP" },
  { name: "Aditya Rao", role: "Logistics Head", initials: "AR" },
];

export const sponsors = {
  title: [{ name: "NovaTech" }],
  gold: [{ name: "Pulse Energy" }, { name: "Quantum Labs" }, { name: "Vertex Bank" }],
  silver: [
    { name: "Bytewave" },
    { name: "Lumen+" },
    { name: "Orbit Mobility" },
    { name: "Stellar Foods" },
    { name: "Echo Studios" },
    { name: "Helix Cloud" },
  ],
};
