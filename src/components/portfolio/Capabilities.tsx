import { useState } from "react";
import { Boxes, Compass, Layers, MousePointerClick, PenTool, Shapes } from "lucide-react";
import { Card, Eyebrow, Section } from "./primitives";
import { Highlight } from "./highlight";

import securinets2026 from "@/assets/experience/Securinets 2026.jpg";
import securinets20262 from "@/assets/experience/Securinets 2026 2.jpeg";
import rakshapentest2025 from "@/assets/experience/Rakshapentest 2025.jpg";
import nuitdinfo2025 from "@/assets/experience/nuit d'info 2025.jpg";
import kairouanTrainingVideo from "@/assets/experience/Kairouan educational assoc training 3.mp4";
import kairouanTraining from "@/assets/experience/Kairouan educational assoc training.jpg";
import kairouanTraining2 from "@/assets/experience/Kairouan educational assoc training 2.jpg";
import ismaikTraining2026 from "@/assets/experience/ISMAIK TRAINING 2026.jpg";
import ismaikTraining20262 from "@/assets/experience/ISMAIK TRAINING 2026 2.jpg";
import gamingFreaks2024 from "@/assets/experience/Gaming freaks 2024.jpg";

const capabilities = [
  { icon: Compass, title: "Video Editing", desc: "Clean pacing, narrative flow, and emotional impact." },
  { icon: Layers, title: "Social Content", desc: "Short-form edits built for reels, shorts, and ads." },
  { icon: PenTool, title: "Motion Graphics", desc: "Titles, lower thirds, and animated transitions." },
  { icon: MousePointerClick, title: "Brand Storytelling", desc: "Visuals that feel on-brand and conversion-ready." },
  { icon: Boxes, title: "Post-Production", desc: "Color grading, sound cleanup, and final polish." },
  { icon: Shapes, title: "Storyboarding", desc: "Concepts and shot plans that make production smoother." },
];

const experiences = [
  { title: "Securinets 2026", tag: "Cybersecurity event", media: securinets2026, mediaType: "image" as const },
  { title: "Securinets 2026 II", tag: "Cybersecurity event", media: securinets20262, mediaType: "image" as const },
  { title: "Rakshapentest 2025", tag: "Event coverage", media: rakshapentest2025, mediaType: "image" as const },
  { title: "Nuit d'Info 2025", tag: "Hackathon event", media: nuitdinfo2025, mediaType: "image" as const, focalPoint: "center 22%" },
  { title: "Kairouan Training", tag: "Association training", media: kairouanTraining, mediaType: "image" as const },
  { title: "Kairouan Training II", tag: "Association training", media: kairouanTraining2, mediaType: "image" as const },
  { title: "Kairouan Training III", tag: "Association training", media: kairouanTrainingVideo, mediaType: "video" as const, focalPoint: "center 18%" },
  { title: "ISMAIK Training 2026", tag: "Training session", media: ismaikTraining2026, mediaType: "image" as const },
  { title: "ISMAIK Training 2026 II", tag: "Training session", media: ismaikTraining20262, mediaType: "image" as const },
  { title: "Gaming Freaks 2024", tag: "Club event", media: gamingFreaks2024, mediaType: "image" as const },
];

export function Capabilities() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const visibleExperiences = showAllExperiences ? experiences : experiences.slice(0, 3);

  return (
    <Section id="capabilities" className="pt-28 md:pt-36">
      <div>
        <Eyebrow>Core capabilities</Eyebrow>
        <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.25rem)]">What I do</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((c) => (
            <Card
              key={c.title}
              className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/40 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]"
            >
              <c.icon
                className="size-5 text-subtle transition-transform duration-300 group-hover:scale-110 group-hover:text-foreground"
                strokeWidth={1.5}
              />
              <h3 className="mt-5 text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </Card>
          ))}
        </div>

        <Highlight
          experiences={experiences}
          visibleExperiences={visibleExperiences}
          showAllExperiences={showAllExperiences}
          onToggle={() => setShowAllExperiences((value) => !value)}
        />
      </div>
    </Section>
  );
}
