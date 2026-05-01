import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Music,
  Code2,
  Trophy,
  Sparkles,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { CountdownTimer } from "@/components/site/CountdownTimer";
import { events, FEST_START, sponsors } from "@/lib/fest-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Euphoria 2026 — March 13–15 · India's Most Electric College Fest" },
      {
        name: "description",
        content:
          "Three days of music, tech, sport and madness. 50+ events, ₹10L+ in prizes. Register for Euphoria 2026.",
      },
    ],
  }),
  component: HomePage,
});

const highlights = events.slice(0, 6);

const stats = [
  { label: "Events", value: "50+" },
  { label: "Prize Pool", value: "₹10L+" },
  { label: "Footfall", value: "20K+" },
  { label: "Days of Madness", value: "3" },
];

const categoryIcons = {
  Technical: Code2,
  Cultural: Music,
  Sports: Trophy,
  Fun: Sparkles,
} as const;

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroBg}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 pt-12 pb-24 md:pt-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              March 13 – 15, 2026 · Northstar Campus
            </span>

            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9]">
              <span className="block">Euphoria</span>
              <span className="block text-gradient animate-gradient">2026</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
              Three days. One campus. Infinite energy. Step into the country's most electric
              college fest — where code meets chaos, art meets adrenaline.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/events"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm md:text-base font-semibold text-primary-foreground glow-purple hover:scale-[1.03] transition-transform"
              >
                Register Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm md:text-base font-semibold hover-lift"
              >
                View Schedule
              </Link>
            </div>

            <div className="mt-14">
              <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
                Fest begins in
              </p>
              <CountdownTimer target={FEST_START} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass-strong rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-6xl font-bold text-gradient">
                {s.value}
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-3">Featured</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Headline <span className="text-gradient">events</span>
            </h2>
          </div>
          <Link
            to="/events"
            className="group inline-flex items-center gap-2 text-sm font-medium hover:text-gradient"
          >
            All events <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((ev, i) => {
            const Icon = categoryIcons[ev.category];
            return (
              <motion.div
                key={ev.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <Link
                  to="/events/$slug"
                  params={{ slug: ev.slug }}
                  className="group relative block glass neon-border rounded-3xl p-6 h-full hover-lift"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium">
                      <Icon className="h-3 w-3" />
                      {ev.category}
                    </span>
                    <span className="text-xs text-muted-foreground">Day {ev.day}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-gradient transition-colors">
                    {ev.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">{ev.tagline}</p>
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
      </section>

      {/* SPONSORS PREVIEW */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">Powered By</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Backed by the <span className="text-gradient">best</span>
          </h2>
        </div>
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              ...sponsors.title,
              ...sponsors.gold,
              ...sponsors.silver.slice(0, 6),
            ].map((s) => (
              <div
                key={s.name}
                className="flex h-20 items-center justify-center rounded-xl bg-secondary/40 font-display font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                {s.name}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/sponsors"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-gradient"
            >
              See all partners <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-20" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              Ready to lose your <span className="text-gradient">mind</span>?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Lock in your spot before registrations close. Early-bird passes are limited.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm md:text-base font-semibold text-primary-foreground glow-purple hover:scale-[1.03] transition-transform"
              >
                Register Now <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-2">
                {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-xl glass hover-lift"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
