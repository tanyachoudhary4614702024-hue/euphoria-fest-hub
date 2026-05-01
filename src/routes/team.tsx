import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { team } from "@/lib/fest-data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Euphoria 2026" },
      { name: "description", content: "Meet the organizing team behind Euphoria 2026." },
    ],
  }),
  component: TeamPage,
});

const gradients = [
  "from-[oklch(0.7_0.22_305)] to-[oklch(0.82_0.18_335)]",
  "from-[oklch(0.7_0.2_260)] to-[oklch(0.7_0.22_305)]",
  "from-[oklch(0.82_0.18_335)] to-[oklch(0.7_0.2_260)]",
];

function TeamPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">The Crew</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold">
          Powered by <span className="text-gradient">people</span>.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          200+ student volunteers. One mission: make Euphoria 2026 unforgettable.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="glass neon-border rounded-3xl p-6 text-center hover-lift"
          >
            <div
              className={`mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center font-display text-3xl font-bold text-primary-foreground`}
            >
              {m.initials}
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">{m.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/60 hover:bg-secondary transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
