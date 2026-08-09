import { ArrowUpRight } from "lucide-react";

type ExperienceItem = {
  title: string;
  tag: string;
  media: string;
  mediaType: "image" | "video";
  focalPoint?: string;
};

type HighlightProps = {
  experiences: ExperienceItem[];
  visibleExperiences: ExperienceItem[];
  showAllExperiences: boolean;
  onToggle: () => void;
};

export function Highlight({
  experiences,
  visibleExperiences,
  showAllExperiences,
  onToggle,
}: HighlightProps) {
  return (
    <div className="mt-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-subtle">Career highlights</p>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.25rem)]">Experiences</h2>
        </div>
        {experiences.length > 3 ? (
          <button
            type="button"
            onClick={onToggle}
            className="hidden shrink-0 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition hover:text-foreground md:block"
          >
            {showAllExperiences ? "Show less experiences ←" : "Show more experiences →"}
          </button>
        ) : null}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {visibleExperiences.map((experience) => (
          <div
            key={experience.title}
            className="group overflow-hidden rounded-3xl border border-border bg-card"
          >
            <div className="overflow-hidden">
              {experience.mediaType === "video" ? (
                <video
                  src={experience.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={experience.title}
                  style={{ objectPosition: experience.focalPoint ?? "center" }}
                  className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <img
                  src={experience.media}
                  alt={experience.title}
                  loading="lazy"
                  style={{ objectPosition: experience.focalPoint ?? "center" }}
                  className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              )}
            </div>
            <div className="flex items-end justify-between gap-4 p-6">
              <div>
                <p className="eyebrow">{experience.tag}</p>
                <h3 className="display mt-2 text-xl">{experience.title}</h3>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card transition duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
