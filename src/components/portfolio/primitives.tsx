import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-[1240px] px-6 transition-all duration-700 ease-out motion-reduce:transition-none md:px-10",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function PillButton({
  children,
  href = "#contact",
  variant = "solid",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:brightness-95"
          : "text-foreground/85 hover:text-foreground",
      )}
    >
      {children}
      <ArrowUpRight className="size-4" strokeWidth={2} />
    </a>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-3xl border border-border bg-card p-7", className)}>{children}</div>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5 twinkle", className)} aria-hidden="true">
      <path
        d="M12 0c.6 6.2 5.2 10.8 12 12-6.8 1.2-11.4 5.8-12 12-.6-6.2-5.2-10.8-12-12C6.8 10.8 11.4 6.2 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
