/**
 * FourSurfaces — editorial index.
 *
 * Four ruled rows (numeral, serif title, one-line description), matching the
 * index treatment on The Approach page. Images return with the new photoshoot
 * assets in a dedicated pass; component name kept so callers don't change.
 */

type Surface = {
  numeral: string;
  title: string;
  body: string;
};

const SURFACES: Surface[] = [
  {
    numeral: "I.",
    title: "Brand",
    body: "Voice, design, and the story that runs through every channel.",
  },
  {
    numeral: "II.",
    title: "Content",
    body: "The editorial layer. How the brand shows up — owned, earned, social.",
  },
  {
    numeral: "III.",
    title: "Retention",
    body: "Lifecycle, CRM, and the inbox. Editorial in voice, built to convert.",
  },
  {
    numeral: "IV.",
    title: "Community & Partnerships",
    body: "The relationships around the brand. The people and brands it stands beside.",
  },
];

export function FourSurfacesHorizontal() {
  return (
    <section
      className="relative px-6 lg:px-16"
      style={{ backgroundColor: "#FAFAFA", paddingTop: "8px", paddingBottom: "80px" }}
      aria-label="The Four Surfaces"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="space-y-12 lg:space-y-14">
          {SURFACES.map((s) => (
            <div
              key={s.title}
              className="border-t pt-8"
              style={{ borderColor: "#D6D0CF" }}
            >
              <p
                className="text-[11px] tracking-widest uppercase mb-4"
                style={{ color: "#5E5954", fontWeight: 500, letterSpacing: "0.18em" }}
              >
                {s.numeral}
              </p>
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
                  maxWidth: "560px",
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
