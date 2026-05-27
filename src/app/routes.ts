import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Signals from "./pages/Signals";
import ComingSoon from "./pages/ComingSoon";
import {
  IS_COMING_SOON,
  PREVIEW_KEY_PARAM,
  PREVIEW_KEY_VALUE,
  PREVIEW_STORAGE_KEY,
} from "./site-mode";

// The publish / coming-soon switch lives in ./site-mode.ts.
// To flip the public state, change VITE_COMING_SOON in the Vercel dashboard
// and redeploy. See site-mode.ts for the full runbook.
function shouldShowComingSoon(): boolean {
  if (!IS_COMING_SOON) return false;
  try {
    const params = new URLSearchParams(window.location.search);
    const previewParam = params.get(PREVIEW_KEY_PARAM);

    // Re-lock this browser: ?preview=off clears the unlock and shows Coming Soon.
    if (previewParam === "off") {
      localStorage.removeItem(PREVIEW_STORAGE_KEY);
      return true;
    }

    // Unlock this browser: ?preview=<key> sets the flag, then full site is visible.
    if (previewParam === PREVIEW_KEY_VALUE) {
      localStorage.setItem(PREVIEW_STORAGE_KEY, "1");
      return false;
    }

    // Already unlocked previously? Stay unlocked.
    if (localStorage.getItem(PREVIEW_STORAGE_KEY) === "1") return false;
  } catch {
    // localStorage/window unavailable — default to Coming Soon
  }
  return true;
}

const fullSiteRoutes = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "case-studies", Component: CaseStudies },
      { path: "signals", Component: Signals },
      { path: "contact", Component: Contact },
    ],
  },
];

const comingSoonRoutes = [{ path: "*", Component: ComingSoon }];

export const router = createBrowserRouter(
  shouldShowComingSoon() ? comingSoonRoutes : fullSiteRoutes
);
