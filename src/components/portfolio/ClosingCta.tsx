import { useState } from "react";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PillButton, Section, Sparkle } from "./primitives";

const contacts = [
  { icon: Mail, label: "romdhaniyassine4@gmail.com" },
  { icon: Phone, label: "+216 28 814 531" },
  { icon: MapPin, label: "Kairouan, Tunisia" },
  { icon: Globe, label: "yassineromdhani.me" },
]; 

export function ClosingCta() {
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  return (
    <Section id="contact" className="pt-28 md:pt-36">
      <div className="group relative rounded-[2rem]">
        <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-white/10 opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="metal relative rounded-[2rem] p-[1px] transition-transform duration-500 ease-out group-hover:scale-[1.008]">
          <div
            className="relative grid gap-10 overflow-hidden rounded-[2rem] bg-card/80 p-9 backdrop-blur transition-transform duration-500 ease-out md:grid-cols-[1.2fr_0.8fr] md:p-14"
            onMouseMove={(event) => {
              const bounds = event.currentTarget.getBoundingClientRect();
              setGlowPosition({
                x: ((event.clientX - bounds.left) / bounds.width) * 100,
                y: ((event.clientY - bounds.top) / bounds.height) * 100,
              });
            }}
            onMouseLeave={() => setGlowPosition({ x: 50, y: 50 })}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(255,255,255,0.12), transparent 45%)`,
              }}
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
            </div>
            <div className="relative z-10">
              <Sparkle className="text-foreground/70" />
              <h2 className="display mt-6 text-[clamp(2rem,5vw,3.75rem)]">
                Let's create
                <br />
                something extraordinary
              </h2>
              <div className="mt-8">
                <Link
                  to="/socials"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition hover:brightness-95"
                >
                  Let&apos;s work together
                </Link>
              </div>
            </div>

            <ul className="relative z-10 space-y-5 md:justify-self-end md:text-right">
              {contacts.map((c) => (
                <li key={c.label} className="flex items-center gap-3 md:flex-row-reverse">
                  <c.icon className="size-4 shrink-0 text-subtle" strokeWidth={1.5} />
                  <span className="text-sm text-muted-foreground">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
