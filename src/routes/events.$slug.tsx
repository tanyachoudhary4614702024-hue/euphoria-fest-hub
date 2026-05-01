import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Calendar, MapPin, Trophy, Phone, Mail, User, CheckCircle2 } from "lucide-react";
import { events } from "@/lib/fest-data";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.event.title ?? "Event"} — Euphoria 2026` },
      { name: "description", content: loaderData?.event.tagline ?? "" },
    ],
  }),
  component: EventDetail,
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="font-display text-4xl">Event not found</h1>
      <Link to="/events" className="mt-6 inline-block text-gradient">
        Back to events
      </Link>
    </div>
  ),
});

function EventDetail() {
  const { event } = Route.useLoaderData();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", college: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <Link
        to="/events"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> All events
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-3 py-1 text-xs font-medium">
                {event.category} · Day {event.day}
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold">
                {event.title}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{event.tagline}</p>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold mb-3">About</h2>
            <p className="text-muted-foreground leading-relaxed">{event.description}</p>
          </div>

          <div className="glass rounded-3xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold mb-4">Rules</h2>
            <ul className="space-y-3">
              {event.rules.map((r: string) => (
                <li key={r} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold mb-4">Organizer</h2>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" /> {event.organizer.name}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" /> {event.organizer.phone}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" /> {event.organizer.email}
              </p>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="glass rounded-3xl p-6 sticky top-28">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" />
                <div>
                  <div className="text-xs text-muted-foreground">Date</div>
                  <div className="font-medium">{event.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <div>
                  <div className="text-xs text-muted-foreground">Venue</div>
                  <div className="font-medium">{event.venue}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-accent" />
                <div>
                  <div className="text-xs text-muted-foreground">Prize</div>
                  <div className="font-medium">{event.prize}</div>
                </div>
              </div>
            </div>

            <div className="my-6 h-px bg-border" />

            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="font-display text-xl font-bold">You're in!</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Confirmation sent to {form.email}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3">
                <h3 className="font-display text-lg font-bold mb-1">Register</h3>
                <input
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary/60 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/60"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary/60 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/60"
                />
                <input
                  required
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-secondary/60 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/60"
                />
                <input
                  required
                  placeholder="College"
                  value={form.college}
                  onChange={(e) => setForm({ ...form, college: e.target.value })}
                  className="w-full bg-secondary/60 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/60"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-primary py-3 text-sm font-semibold text-primary-foreground glow-purple hover:scale-[1.02] transition-transform"
                >
                  Confirm Registration
                </button>
              </form>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
