import { PillButton } from "./primitives";

const links = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="display text-2xl">
          YR
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <PillButton>Let's talk</PillButton>
      </div>
    </header>
  );
}
