import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Youtube, Globe } from "lucide-react";

const emailAddress = "romdhaniyassine4@gmail.com";
const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/reoozi.edit/",
    description: "Behind-the-scenes clips, edits, and updates.",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@Reoozi",
    description: "Watch the latest uploads and selected edits.",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/yassine.romdhani.391/",
    description: "Follow for updates, shares, and social posts.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-yassine-romdhani/?skipRedirect=true",
    description: "Connect for collaborations and professional updates.",
  },
  {
    icon: Mail,
    label: "Email",
    href: emailComposeUrl,
    description: "For commissions, collaborations, and project inquiries.",
  },
  {
    icon: Globe,
    label: "Portfolio",
    href: "https://yassineromdhani.me",
    description: "Visit the full portfolio and contact details.",
  },
];

export const Route = createFileRoute("/socials")({
  component: SocialsPage,
});

function SocialsPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-10 md:px-10 md:py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Let&apos;s connect</p>
            <h1 className="display mt-4 text-[clamp(2.5rem,6vw,4.5rem)]">Social links</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition hover:bg-accent"
          >
            Back home
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.75rem] border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <link.icon className="size-5 text-subtle transition group-hover:text-foreground" />
                  <h2 className="display mt-5 text-2xl">{link.label}</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background transition duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}