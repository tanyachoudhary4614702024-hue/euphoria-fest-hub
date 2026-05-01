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
      { property: "og:title", content: "Euphoria 2026 — India's Most Electric College Fest" },
      { property: "og:description", content: "Euphoria Fest Hub is a modern, responsive website for college festivals, featuring event details, registration, and a vibrant design." },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#0a0118" },
      { name: "twitter:title", content: "Euphoria 2026 — India's Most Electric College Fest" },
      { name: "description", content: "Euphoria Fest Hub is a modern, responsive website for college festivals, featuring event details, registration, and a vibrant design." },
      { name: "twitter:description", content: "Euphoria Fest Hub is a modern, responsive website for college festivals, featuring event details, registration, and a vibrant design." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f5899a1b-f14e-48ba-b610-2284f47987c2/id-preview-c61b0e00--573b8d93-9afc-4885-abc2-c1ff0b032049.lovable.app-1777619067349.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f5899a1b-f14e-48ba-b610-2284f47987c2/id-preview-c61b0e00--573b8d93-9afc-4885-abc2-c1ff0b032049.lovable.app-1777619067349.png" },
      { name: "twitter:card", content: "summary_large_image" },
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
