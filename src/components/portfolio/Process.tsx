import { Search, Target, Palette, Code2, Rocket } from "lucide-react";
import { Eyebrow, Section } from "./primitives";

const steps = [
  { n: "01", title: "Discover", desc: "Audit, interviews, competitive scan.", icon: Search },
  { n: "02", title: "Define", desc: "Sharpen the problem and success metrics.", icon: Target },
  { n: "03", title: "Design", desc: "Systems, layouts and visual language.", icon: Palette },
  { n: "04", title: "Develop", desc: "Build, hand-off and QA with engineers.", icon: Code2 },
  { n: "05", title: "Deliver", desc: "Ship, measure and iterate.", icon: Rocket },
];

export function Process() {
  return (
    <Section id="process" className="pt-28 md:pt-36">
      <Eyebrow>How I work</Eyebrow>
      <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.25rem)]">My design process</h2>

      <div className="relative mt-14">
        <div
          className="absolute left-0 right-0 top-3 hidden border-t border-dashed border-border md:block"
          aria-hidden="true"
        />
        <div className="grid gap-10 md:grid-cols-5 md:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <span className="relative inline-block bg-background pr-3 text-[11px] font-medium uppercase tracking-[0.18em] text-subtle">
                {s.n}
              </span>
              <h3 className="display mt-5 text-lg">{s.title}</h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <s.icon className="mt-5 size-5 text-subtle" strokeWidth={1.25} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
