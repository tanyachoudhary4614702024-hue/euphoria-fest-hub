import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Euphoria 2026" },
      { name: "description", content: "Get in touch with the Euphoria 2026 team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Say Hi</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold">
          Talk to the <span className="text-gradient">team</span>.
        </h1>
      </div>

      <div className="mt-12 grid lg:grid-cols-2 gap-8">
        <div className="glass rounded-3xl p-8">
          {sent ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold">Message sent</h2>
              <p className="text-sm text-muted-foreground mt-2">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <h2 className="font-display text-2xl font-bold mb-2">Drop us a line</h2>
              <input
                required
                placeholder="Your name"
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
              <textarea
                required
                placeholder="Your message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/60 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/60 resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-purple hover:scale-[1.03] transition-transform"
              >
                Send message <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          <div className="glass rounded-3xl p-6 flex items-start gap-4 hover-lift">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
              <Mail className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
              <div className="font-medium">hello@euphoria26.in</div>
              <div className="text-sm text-muted-foreground">sponsors@euphoria26.in</div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 flex items-start gap-4 hover-lift">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
              <Phone className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
              <div className="font-medium">+91 98765 43210</div>
              <div className="text-sm text-muted-foreground">Mon – Sat, 10am – 7pm</div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 flex items-start gap-4 hover-lift">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Venue</div>
              <div className="font-medium">Northstar Campus</div>
              <div className="text-sm text-muted-foreground">Bengaluru, India 560100</div>
            </div>
          </div>

          <div className="glass rounded-3xl overflow-hidden h-56 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-[oklch(0.7_0.2_260)]/30" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative h-full flex items-center justify-center">
              <div className="glass-strong rounded-2xl px-5 py-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Northstar Campus, Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
