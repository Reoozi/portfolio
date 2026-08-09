import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Section } from "./primitives";

const videos = [
  {
    title: "24K Magic",
    tag: "Edit",
    videoId: "neV6G1Za8os",
    youtubeUrl: "https://www.youtube.com/watch?v=neV6G1Za8os",
  },
  {
    title: "Rap Edit Collab",
    tag: "Collaboration",
    videoId: "z2OvYUhUQHA",
    youtubeUrl: "https://www.youtube.com/watch?v=z2OvYUhUQHA",
  },
  {
    title: "Don't Let the Devil",
    tag: "Collaboration",
    videoId: "ZDw506-s8_g",
    youtubeUrl: "https://www.youtube.com/watch?v=ZDw506-s8_g",
  },
  {
    title: "Change",
    tag: "Edit",
    videoId: "2HY4rx2k5uQ",
    youtubeUrl: "https://www.youtube.com/watch?v=2HY4rx2k5uQ",
  },
  {
    title: "Are We Still Friends?",
    tag: "4K edit",
    videoId: "cSTwDY0SU9o",
    youtubeUrl: "https://www.youtube.com/watch?v=cSTwDY0SU9o",
  },
  {
    title: "Morals",
    tag: "Edit",
    videoId: "PgiKT4BnRT0",
    youtubeUrl: "https://www.youtube.com/watch?v=PgiKT4BnRT0",
  },
  {
    title: "Flower Dance MMV",
    tag: "MMV edit",
    videoId: "CIKYGTtj9ZA",
    youtubeUrl: "https://www.youtube.com/watch?v=CIKYGTtj9ZA",
  },
  {
    title: "Donda x One Piece",
    tag: "AMV edit",
    videoId: "6GJTJG8O79Y",
    youtubeUrl: "https://www.youtube.com/watch?v=6GJTJG8O79Y",
  },
  {
    title: "Newest Tank Collab",
    tag: "Collaboration",
    videoId: "e2nsILWA8RI",
    youtubeUrl: "https://www.youtube.com/watch?v=e2nsILWA8RI",
  },
];

export function Work() {
  const [showAllVideos, setShowAllVideos] = useState(false);
  const visibleVideos = showAllVideos ? videos : videos.slice(0, 3);

  return (
    <>
      <Section id="work" className="pt-28 md:pt-36">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>Recent edits</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.25rem)]">Reoozi uploads</h2>
          </div>
          <button
            type="button"
            onClick={() => setShowAllVideos((value) => !value)}
            className="hidden shrink-0 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition hover:text-foreground md:block"
          >
            {showAllVideos ? "Show less videos ←" : "Watch more videos →"}
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {visibleVideos.map((video) => (
            <div
              key={video.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-end justify-between gap-4 p-6">
                <div>
                  <p className="eyebrow">{video.tag}</p>
                  <h3 className="display mt-2 text-xl">{video.title}</h3>
                </div>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card transition duration-300 hover:rotate-45"
                  aria-label={`Open ${video.title} on YouTube`}
                >
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
