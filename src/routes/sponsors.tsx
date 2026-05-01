import { createFileRoute } from "@tanstack/react-router";
import { sponsors } from "@/lib/fest-data";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors — Euphoria 2026" },
      { name: "description", content: "Title, Gold and Silver sponsors backing Euphoria 2026." },
    ],
  }),
  component: SponsorsPage,
});

function Tier({
  label,
  size,
  items,
}: {
  label: string;
  size: "xl" | "lg" | "md";
  items: { name: string }[];
}) {
  const sizes = {
    xl: "h-40 text-3xl md:text-4xl",
    lg: "h-32 text-2xl md:text-3xl",
    md: "h-24 text-lg md:text-xl",
  };
  const cols = {
    xl: "grid-cols-1",
    lg: "grid-cols-1 md:grid-cols-3",
    md: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };
  return (
    <div className="mb-16">
      <h2 className="text-center text-xs uppercase tracking-[0.3em] text-accent mb-6">{label}</h2>
      <div className={`grid gap-4 ${cols[size]}`}>
        {items.map((s) => (
          <div
            key={s.name}
            className={`flex items-center justify-center rounded-3xl glass neon-border font-display font-bold text-muted-foreground hover:text-gradient transition-colors hover-lift ${sizes[size]}`}
          >
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}

function SponsorsPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Partners</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold">
          Made possible by <span className="text-gradient">these legends</span>.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Brands that believe in students, ideas and the next generation of creators.
        </p>
      </div>

      <div className="mt-16">
        <Tier label="Title Sponsor" size="xl" items={sponsors.title} />
        <Tier label="Gold Sponsors" size="lg" items={sponsors.gold} />
        <Tier label="Silver Sponsors" size="md" items={sponsors.silver} />
      </div>

      <div className="mt-16 glass-strong rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Want to <span className="text-gradient">sponsor us</span>?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Reach 20,000+ college students across 3 days of high-energy programming.
        </p>
        <a
          href="mailto:sponsors@euphoria26.in"
          className="mt-6 inline-flex rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-purple hover:scale-[1.03] transition-transform"
        >
          Get the brochure
        </a>
      </div>
    </section>
  );
}
