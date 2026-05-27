import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Smooth-scrolls to the URL hash on route change.
 * Mount once inside Root so cross-page anchor links (e.g. /about#why)
 * land on the right section after React renders the destination.
 */
export function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    const id = hash.slice(1);
    // Wait a frame for the destination route to render before scrolling.
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [hash, pathname]);

  return null;
}
