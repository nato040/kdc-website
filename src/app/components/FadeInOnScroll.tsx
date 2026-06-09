import { useEffect, useRef, useState, ReactNode } from "react";

/**
 * FadeInOnScroll — fades + slight rise as the element enters the viewport.
 * 700ms transition, threshold 0.15. One-shot (disconnects after first reveal).
 * Respects prefers-reduced-motion (renders content immediately, no animation).
 *
 * Used across Home and Work to give prose sections a quiet reveal on scroll
 * so the page flows rather than stamping each block in at full opacity.
 */
export function FadeInOnScroll({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 700ms ease, transform 700ms ease",
      }}
    >
      {children}
    </div>
  );
}
