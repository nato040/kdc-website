import { useEffect, useState } from "react";
import { SectionDivider } from "../components/SectionDivider";

/**
 * Signals — editorial landing with live Substack feed.
 * Hero remit (four pillars + cultural-listening half) → 3 most recent posts → Substack CTA.
 * Posts come from /api/journal-posts (Vercel serverless function that parses Substack RSS).
 */

type Post = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  image: string | null;
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

export default function Signals() {
  const eyebrowStyle = {
    color: "#5E5954",
    fontWeight: 500,
    letterSpacing: "0.20em",
  };

  const headingStyle = {
    fontFamily: "var(--font-serif)",
    color: "#171717",
    fontWeight: 400,
    lineHeight: "1.15",
  };

  const bodyStyle = {
    color: "#5E5954",
    fontWeight: 400,
    lineHeight: "1.6",
    maxWidth: "640px",
  };

  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/journal-posts")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        if (cancelled) return;
        const items: Post[] = Array.isArray(data?.items) ? data.items : [];
        setPosts(items.slice(0, 3));
      })
      .catch(() => {
        if (!cancelled) setLoadFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const showRecent = posts && posts.length > 0;

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      {/* Subtle texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
          backgroundSize: "250px 250px",
        }}
      />

      {/* HERO — four-pillar remit + cultural-listening half explicitly named */}
      <section
        className="px-6 lg:px-16 mt-32 relative"
        style={{ paddingTop: "96px", paddingBottom: "120px" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-6" style={eyebrowStyle}>
            SIGNALS
          </p>
          <h1
            className="text-[40px] md:text-[56px] lg:text-[72px] mb-10 max-w-4xl"
            style={{ ...headingStyle, lineHeight: "1.1" }}
          >
            A working journal and a read on the culture.
          </h1>
          <p className="text-[16px] lg:text-[18px]" style={bodyStyle}>
            Notes on brand, content, retention, and community. What we&rsquo;re seeing, what&rsquo;s shifting, what&rsquo;s next.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* RECENT — latest 3 posts pulled live from Substack via /api/journal-posts (ivory tile) */}
      <section
        className="px-6 lg:px-16 relative"
        style={{ paddingTop: "100px", paddingBottom: "120px", backgroundColor: "#F3F0EA" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] tracking-widest uppercase mb-10" style={eyebrowStyle}>
            RECENT
          </p>

          {showRecent && (
            <div className="space-y-12 lg:space-y-16">
              {posts!.map((p) => (
                <a
                  key={p.link}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="border-t pt-8" style={{ borderColor: "#D6D0CF" }}>
                    <p
                      className="text-[11px] tracking-widest uppercase mb-4"
                      style={{ color: "#5E5954", fontWeight: 500, letterSpacing: "0.18em" }}
                    >
                      {formatDate(p.pubDate)}
                    </p>
                    <h2
                      className="text-[24px] md:text-[32px] lg:text-[40px] mb-4 transition-opacity group-hover:opacity-60"
                      style={{ ...headingStyle, lineHeight: "1.2" }}
                    >
                      {p.title}
                    </h2>
                    {p.excerpt && (
                      <p
                        className="text-[15px] lg:text-[17px]"
                        style={{ color: "#5E5954", fontWeight: 400, lineHeight: "1.6", maxWidth: "720px" }}
                      >
                        {p.excerpt}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}

          {!showRecent && !loadFailed && (
            <p
              className="text-[15px]"
              style={{ color: "#5E5954", fontWeight: 400, fontStyle: "italic" }}
            >
              Loading recent posts.
            </p>
          )}

          {loadFailed && (
            <p
              className="text-[15px]"
              style={{ color: "#5E5954", fontWeight: 400, fontStyle: "italic" }}
            >
              Recent posts are over on Substack.
            </p>
          )}

          <div className="mt-16 lg:mt-20">
            <a
              href="https://kennydonnacollective.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] transition-opacity duration-700 hover:opacity-60 uppercase"
              style={{ color: "#171717", fontWeight: 400, letterSpacing: "0.15em" }}
            >
              &rarr; Read more on Substack
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
