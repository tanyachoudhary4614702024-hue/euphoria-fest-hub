import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { events, type EventCategory } from "@/lib/fest-data";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — Euphoria 2026" },
      { name: "description", content: "Day-wise schedule for Euphoria 2026, March 13–15." },
    ],
  }),
  component: SchedulePage,
});

const days = [
  { num: 1 as const, label: "Day 1", date: "March 13, 2026" },
  { num: 2 as const, label: "Day 2", date: "March 14, 2026" },
  { num: 3 as const, label: "Day 3", date: "March 15, 2026" },
];

const filters: ("All" | EventCategory)[] = ["All", "Technical", "Cultural", "Sports", "Fun"];

function SchedulePage() {
  const [day, setDay] = useState<1 | 2 | 3>(1);
  const [cat, setCat] = useState<(typeof filters)[number]>("All");

  const list = events
    .filter((e) => e.day === day && (cat === "All" || e.category === cat))
    .sort((a, b) => a.time.localeCompare(b.time));

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Timeline</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold">
          Three days. <span className="text-gradient">Plan it.</span>
        </h1>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-3">
        {days.map((d) => (
          <button
            key={d.num}
            onClick={() => setDay(d.num)}
            className={`text-left rounded-2xl p-5 transition-all ${
              day === d.num
                ? "bg-gradient-primary text-primary-foreground glow-purple"
                : "glass hover-lift"
            }`}
          >
            <div className="font-display text-2xl font-bold">{d.label}</div>
            <div className={`text-sm mt-1 ${day === d.num ? "opacity-90" : "text-muted-foreground"}`}>
              {d.date}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setCat(f)}
            className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition ${
              cat === f ? "bg-secondary text-foreground" : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 relative">
        <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        <ul className="space-y-4">
          {list.map((ev) => (
            <li key={ev.slug} className="relative pl-10 md:pl-14">
              <span className="absolute left-0 md:left-1 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary glow-purple">
                <span className="h-2 w-2 rounded-full bg-background" />
              </span>
              <Link
                to="/events/$slug"
                params={{ slug: ev.slug }}
                className="block glass rounded-2xl p-5 hover-lift"
              >
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <div className="text-xs text-accent uppercase tracking-widest">
                      {ev.category}
                    </div>
                    <h3 className="font-display text-xl font-bold mt-1">{ev.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{ev.tagline}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1.5 justify-end">
                      <Clock className="h-3.5 w-3.5" /> {ev.time}
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <MapPin className="h-3.5 w-3.5" /> {ev.venue}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
          {list.length === 0 && (
            <li className="text-muted-foreground pl-10 md:pl-14">No events for this filter.</li>
          )}
        </ul>
      </div>
    </section>
  );
}
