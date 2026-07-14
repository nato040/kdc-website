/**
 * SectionDivider — a quiet hairline rule.
 * With the single light ground (2026-07 formatting pass), section breaks are
 * carried by this centered rule instead of alternating background tones.
 */
export function SectionDivider() {
  return (
    <div className="px-6 lg:px-16" aria-hidden="true">
      <div
        className="max-w-[1280px] mx-auto"
        style={{ borderTop: "1px solid #D6D0CF" }}
      />
    </div>
  );
}
