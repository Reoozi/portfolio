import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowDown, X } from "lucide-react";
import ysn from "@/assets/ysn.png";
import resumeImage from "@/assets/Yassine Romdhani.png";
import { Eyebrow, PillButton, Section, Sparkle } from "./primitives";

export function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (!isResumeOpen) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isResumeOpen]);

  const resumePreview =
    isResumeOpen && typeof document !== "undefined"
      ? createPortal(
          <div className="fixed inset-0 z-[9999] flex items-start justify-center overflow-hidden bg-black/80 px-4 py-6 backdrop-blur-xl sm:px-6 lg:px-8">
            <button
              type="button"
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setIsResumeOpen(false)}
              aria-label="Close resume preview"
            />
            <div className="relative z-10 mt-4 w-full max-w-7xl rounded-[2rem] border border-white/10 bg-background/95 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-3">
              <button
                type="button"
                onClick={() => setIsResumeOpen(false)}
                className="absolute right-3 top-3 z-20 flex size-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground transition hover:scale-105"
                aria-label="Close resume preview"
              >
                <X className="size-4" />
              </button>
              <img
                src={resumeImage}
                alt="Yassine Romdhani resume"
                className="max-h-[92vh] w-full rounded-[1.25rem] object-contain"
              />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <Section className="relative pt-16 pb-0 md:pt-24">
      <div className="grid items-end gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <div className="fade-up pb-16 md:pb-28">
          
          <h2 className="mt-4 text-[14px] font-semibold uppercase tracking-[0.28em] text-foreground/95 sm:text-[16px]">
            Mohamed Yassine Romdhani
          </h2>
          <h1 className="display mt-3 text-[clamp(3.2rem,9vw,7rem)]">
            Video
            <br />
            <span className="ml-2 text-red-500 sm:ml-7">Editor</span>
          </h1>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            I’m a video editor and motion designer who loves turning simple ideas into visuals
             that actually grab attention. I mix clean editing, creative motion, 
             and a cinematic eye to make every project feel unique.

          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <PillButton href="https://www.youtube.com/@Reoozi">View my work</PillButton>
            <button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/80 underline underline-offset-8 transition hover:text-foreground"
            >
              <ArrowDown className="size-4" />
              Check Resume
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] md:ml-auto">
          <div
            className="pointer-events-none absolute -left-8 top-10 hidden size-[320px] rounded-full border border-border/80 md:block"
            aria-hidden="true"
          />
          <Sparkle className="absolute -left-2 top-4 z-10 text-foreground/70" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-[0_25px_80px_rgba(0,0,0,0.16)]">
            <img
              src={ysn}
              alt="Portrait of Yasin, video editor"
              width={900}
              height={1200}
              className="h-[500px] w-full object-cover object-center  sm:h-[580px] md:h-[700px]"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="absolute bottom-6 right-4 flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 backdrop-blur">
            <span className="size-1.5 rounded-full bg-foreground/80" />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Available for freelance
            </span>
          </div>
        </div>
      </div>

      {resumePreview}
    </Section>
  );
}
