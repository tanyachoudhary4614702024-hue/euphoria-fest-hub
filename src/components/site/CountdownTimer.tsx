import { useEffect, useState } from "react";

interface Props {
  target: string; // ISO datetime
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownTimer({ target }: Props) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, new Date(target).getTime() - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const items = [
    { label: "Days", value: days },
    { label: "Hours", value: pad(hours) },
    { label: "Minutes", value: pad(minutes) },
    { label: "Seconds", value: pad(seconds) },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl">
      {items.map((it) => (
        <div
          key={it.label}
          className="glass rounded-2xl px-2 sm:px-4 py-4 sm:py-6 text-center hover-lift"
        >
          <div className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-gradient tabular-nums">
            {it.value}
          </div>
          <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
