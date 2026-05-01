import { Outlet, createRootRoute, HeadContent, Scripts, ScrollRestoration } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { AuroraBackground } from "@/components/site/Background";
import { Link } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass rounded-3xl p-10">
        <h1 className="font-display text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Lost in the lights</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page didn't make it past the security check.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-purple"
          >
            Back to the fest
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Euphoria 2026 — India's Most Electric College Fest" },
      {
        name: "description",
        content:
          "Euphoria 2026 — three days of music, tech, sport and madness. March 13–15 at Northstar Campus. Register now.",
      },
      { property: "og:title", content: "Euphoria 2026" },
      { property: "og:description", content: "March 13–15, 2026. Three days of pure energy." },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#0a0118" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
