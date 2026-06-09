/**
 * SectionDivider — editorial chapter break between sections.
 * Renders ~80px of breathing room on each side, a centered typographic dot,
 * and a thin inset rule that signals "this chapter is over."
 * Used between every section across the site. Adjust here, propagates everywhere.
 */
export function SectionDivider() {
  return (
    <div
      className="px-6 lg:px-16"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
      aria-hidden="true"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center">
          <span
            style={{
              color: "#5E5954",
              fontSize: "18px",
              lineHeight: "1",
              marginBottom: "20px",
              letterSpacing: "0",
            }}
          >
            &middot;
          </span>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#D6D0CF",
            }}
          />
        </div>
      </div>
    </div>
  );
}
