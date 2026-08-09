import { useEffect, useMemo, useRef, useState } from "react";
import { Award, Briefcase, Clock, Users } from "lucide-react";
import { Section } from "./primitives";

const stats = [
  { icon: Clock, value: "08+", label: "Years experience" },
  { icon: Briefcase, value: "100+", label: "Projects shipped" },
  { icon: Users, value: "22", label: "Happy clients" },
  { icon: Award, value: "31", label: "Projects delivered" },
];

function AnimatedValue({ value, isVisible }: { value: string; isVisible: boolean }) {
  const target = useMemo(() => Number.parseInt(value, 10), [value]);
  const suffix = useMemo(() => value.replace(/[0-9]/g, ""), [value]);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let frame = 0;
    const duration = 900;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(target * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [isVisible, target]);

  return <p className="display text-4xl">{displayValue}{suffix}</p>;
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Section className="relative z-10 -mt-8 md:-mt-12">
      <div
        ref={containerRef}
        className="grid grid-cols-2 divide-border rounded-3xl border border-border bg-card md:grid-cols-4 md:divide-x"
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2 px-6 py-8 text-center">
            <s.icon className="size-4 text-subtle" strokeWidth={1.5} />
            <AnimatedValue value={s.value} isVisible={isVisible} />
            <p className="eyebrow">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
