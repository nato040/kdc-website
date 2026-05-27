// ─────────────────────────────────────────────────────────────
// SITE MODE — Coming Soon vs. Full Site
// ─────────────────────────────────────────────────────────────
//
// Default: Coming Soon is ON. The public sees the branded Coming Soon
// page at every URL. The full site stays in the codebase, ready to flip.
//
// TEAM PREVIEW (works in EITHER mode):
//   Visit kennydonnacollective.com/?preview=kdc2026 once per browser.
//   That unlocks the full site for that browser (remembered in localStorage)
//   while everyone else still sees Coming Soon.
//
// ─────────────────────────────────────────────────────────────
// HOW TO PUBLISH (make the full site public)
// ─────────────────────────────────────────────────────────────
//   1. vercel.com → Phase Engineering team → kennydonnacollective project
//   2. Settings → Environment Variables
//   3. Add (or edit) VITE_COMING_SOON = "false"  on the Production environment
//   4. Redeploy (Deployments tab → ⋯ menu → Redeploy on the latest build).
//      Takes ~1 minute.
//
// HOW TO REVERT TO COMING SOON
//   1. Same place: set VITE_COMING_SOON = "true"  (or delete the variable).
//   2. Redeploy. ~1 minute.
//
// You can flip this as many times as you want — every change is a new Vercel
// deployment, and the previous one stays alive at its own URL for rollback.
//
// To change the default in code (e.g. once we're permanently live), edit
// FALLBACK_DEFAULT below.
// ─────────────────────────────────────────────────────────────

// The fallback used if VITE_COMING_SOON is not set in the environment.
// While we're pre-launch, this stays `true` so any unconfigured environment
// defaults to safety. After permanent launch, flip to `false`.
const FALLBACK_DEFAULT = true;

const envRaw = import.meta.env.VITE_COMING_SOON;
const envValue =
  typeof envRaw === "string" ? envRaw.trim().toLowerCase() : undefined;

/**
 * True when the public should see the Coming Soon page.
 * Team members can still unlock the full site via the /?preview=kdc2026 URL.
 */
export const IS_COMING_SOON: boolean =
  envValue === "false" ? false : envValue === "true" ? true : FALLBACK_DEFAULT;

/** Query-string key that unlocks the full site for the current browser. */
export const PREVIEW_KEY_PARAM = "preview";
export const PREVIEW_KEY_VALUE = "kdc2026";

/** localStorage key set once the preview link has been used in this browser. */
export const PREVIEW_STORAGE_KEY = "kdc-preview";
