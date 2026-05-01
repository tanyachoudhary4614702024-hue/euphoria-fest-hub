import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, MapPin, Trophy, Code2, Music, Sparkles } from "lucide-react";
import { events, type EventCategory } from "@/lib/fest-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Euphoria 2026" },
      {
        name: "description",
        content:
          "Browse all events at Euphoria 2026 — Technical, Cultural, Sports and Fun. Filter, search and register.",
      },
    ],
  }),
  component: EventsPage,
});

const categoryIcons = {
  Technical: Code2,
  Cultural: Music,
  Sports: Trophy,
  Fun: Sparkles,
} as const;

const categories: ("All" | EventCategory)[] = ["All", "Technical", "Cultural", "Sports", "Fun"];

function EventsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = events.filter(
    (e) =>
      (filter === "All" || e.category === filter) &&
      (query === "" ||
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.tagline.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Lineup</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
          Every <span className="text-gradient">event</span>, one stage.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          50+ competitions, performances and workshops across three electric days.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events..."
            className="w-full glass rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/60"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                filter === c
                  ? "bg-gradient-primary text-primary-foreground glow-purple"
                  : "glass hover:bg-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((ev, i) => {
          const Icon = categoryIcons[ev.category];
          return (
            <motion.div
              key={ev.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <Link
                to="/events/$slug"
                params={{ slug: ev.slug }}
                className="group relative block glass neon-border rounded-3xl p-6 h-full hover-lift"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium">
                    <Icon className="h-3 w-3" /> {ev.category}
                  </span>
                  <span className="text-xs text-muted-foreground">Day {ev.day}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-gradient transition-colors">
                  {ev.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{ev.tagline}</p>
                <p className="text-xs text-accent font-medium mb-4">Prize: {ev.prize}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {ev.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> {ev.venue}
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="mt-20 text-center text-muted-foreground">
          No events match your search. Try another keyword.
        </div>
      )}
    </section>
  );
}
