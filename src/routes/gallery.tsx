import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, Play } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Euphoria 2026" },
      { name: "description", content: "Photos and videos from past editions of Euphoria." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { gradient: "from-fuchsia-500 to-purple-700", caption: "Main stage opening", span: "md:row-span-2" },
  { gradient: "from-purple-600 to-blue-600", caption: "Hackathon finals", span: "" },
  { gradient: "from-pink-500 to-rose-600", caption: "Battle of the Bands", span: "" },
  { gradient: "from-indigo-600 to-purple-700", caption: "Crowd at sundown", span: "md:col-span-2" },
  { gradient: "from-purple-700 to-pink-600", caption: "Dance off finale", span: "" },
  { gradient: "from-blue-600 to-fuchsia-600", caption: "Light show", span: "" },
  { gradient: "from-violet-700 to-pink-500", caption: "Closing fireworks", span: "md:col-span-2" },
  { gradient: "from-pink-600 to-violet-600", caption: "Rooftop open mic", span: "" },
];

const videos = [
  { title: "Aftermovie 2025", duration: "3:21" },
  { title: "Hackathon highlights", duration: "1:45" },
  { title: "Closing night", duration: "2:08" },
];

function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Memories</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold">
          Last year, <span className="text-gradient">on film</span>.
        </h1>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[260px] gap-4">
        {items.map((it, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-3xl ${it.span} hover-lift`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${it.gradient}`} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-left">
              <p className="text-sm font-medium text-white drop-shadow">{it.caption}</p>
            </div>
          </button>
        ))}
      </div>

      <h2 className="mt-20 font-display text-3xl md:text-4xl font-bold">
        On <span className="text-gradient">video</span>
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {videos.map((v, i) => (
          <div
            key={v.title}
            className="group relative overflow-hidden rounded-3xl glass aspect-video flex items-center justify-center hover-lift"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${items[i].gradient} opacity-50`} />
            <button className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 text-white fill-white ml-0.5" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm">
              <span className="font-medium text-white drop-shadow">{v.title}</span>
              <span className="text-xs text-white/80">{v.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 animate-in fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full glass"
            onClick={() => setOpen(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className={`relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-gradient-to-br ${items[open].gradient}`}
          >
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-display text-2xl font-bold text-white">{items[open].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
