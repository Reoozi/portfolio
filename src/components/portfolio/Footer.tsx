import { Dribbble, Instagram, Linkedin, Figma } from "lucide-react";
import { Section } from "./primitives";

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Figma, label: "Behance" },
  { icon: Instagram, label: "Instagram" },
  { icon: Dribbble, label: "Dribbble" },
];

export function Footer() {
  return (
    <Section className="pt-24 pb-14">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
        <p className="text-xs text-subtle">© {new Date().getFullYear()} Yassine Romdhani. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <span className="eyebrow">Let's connect</span>
          {socials.map((s) => (
            <a
              key={s.label}
              href="#contact"
              aria-label={s.label}
              className="text-muted-foreground transition hover:text-foreground"
            >
              <s.icon className="size-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
