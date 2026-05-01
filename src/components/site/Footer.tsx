import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube, Linkedin, Sparkles, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-xl font-bold">
                Euphoria <span className="text-gradient">'26</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Three days. One campus. Infinite energy. The country's most electric college fest
              returns this March with bigger stages, brighter lights and bolder ideas.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass hover-lift"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/events" className="hover:text-gradient transition-colors">Events</Link></li>
              <li><Link to="/schedule" className="hover:text-gradient transition-colors">Schedule</Link></li>
              <li><Link to="/team" className="hover:text-gradient transition-colors">Team</Link></li>
              <li><Link to="/gallery" className="hover:text-gradient transition-colors">Gallery</Link></li>
              <li><Link to="/sponsors" className="hover:text-gradient transition-colors">Sponsors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
              Reach Us
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                hello@euphoria26.in
              </li>
              <li>+91 98765 43210</li>
              <li>Northstar Campus,<br />Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Euphoria. Crafted with neon and caffeine.</p>
          <p>March 13 – 15, 2026 · Northstar Campus</p>
        </div>
      </div>
    </footer>
  );
}
