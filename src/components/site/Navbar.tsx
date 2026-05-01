import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/schedule", label: "Schedule" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary animate-pulse-glow">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-lg md:text-xl font-bold tracking-tight">
              Euphoria <span className="text-gradient">'26</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-primary" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.03] transition-transform glow-purple"
            >
              Register Now
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-2 animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === l.to
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="p-2">
                <Link
                  to="/events"
                  className="block text-center rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Register Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
