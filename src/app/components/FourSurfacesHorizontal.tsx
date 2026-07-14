import brandImg from "../../imports/_DUG9698.jpg"; // rack
import contentImg from "../../imports/_DUG9734.jpg"; // iPad moodboard

/**
 * FourSurfaces — a single static block.
 *
 * All four surfaces sit together in one bounded box (2x2 on desktop, stacked
 * on mobile). The reader simply scrolls down past it — no scroll hijack, no
 * zoom, no pinned section.
 */

type Surface = {
  title: string;
  body: string;
  image: string | null;
  alt?: string;
};

const SURFACES: Surface[] = [
  {
    title: "Brand",
    body: "Voice, design, and the story that runs through every channel.",
    image: brandImg,
    alt: "On the rack",
  },
  {
    title: "Content",
    body: "The editorial layer. How the brand shows up — owned, earned, social.",
    image: contentImg,
    alt: "Curating reference imagery on iPad",
  },
  {
    title: "Retention",
    body: "Lifecycle, CRM, and the inbox. Editorial in voice, built to convert.",
    image: null,
  },
  {
    title: "Community & Partnerships",
    body: "The relationships around the brand. The people and brands it stands beside.",
    image: null,
  },
];

const PANEL_BG = ["#FAFAFA", "#F3F0EA", "#FAFAFA", "#F3F0EA"] as const;

export function FourSurfacesHorizontal() {
  return (
    <section
      className="relative px-6 lg:px-16"
      style={{ backgroundColor: "#F3F0EA", paddingTop: "32px", paddingBottom: "80px" }}
      aria-label="The Four Surfaces"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* One box; thin dividers via a 1px grid gap over a divider-coloured bg */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "1px", backgroundColor: "#E2DCD2", border: "1px solid #E2DCD2" }}
        >
          {SURFACES.map((s, i) => (
            <div
              key={s.title}
              className="flex flex-col px-8 py-10 lg:px-12 lg:py-14"
              style={{ backgroundColor: PANEL_BG[i] }}
            >
              <h3
                className="text-[26px] lg:text-[34px] mb-4"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "#171717",
                  fontWeight: 400,
                  lineHeight: "1.1",
                  letterSpacing: "0.01em",
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-[15px] lg:text-[16px]"
                style={{
                  color: "#5E5954",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  maxWidth: "460px",
                }}
              >
                {s.body}
              </p>
              {s.image && (
                <img
                  src={s.image}
                  alt={s.alt || ""}
                  className="mt-8 w-full"
                  style={{ height: "260px", objectFit: "cover" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
