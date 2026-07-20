import { useEffect, useState } from "react";
import { FadeInOnScroll } from "../components/FadeInOnScroll";

/**
 * Signals — Jul 20 brief: Part 2 copy in the homepage formatting register.
 * Live Substack feed via /api/journal-posts. Post dates: hidden.
 */

type Post = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  image: string | null;
};

const kicker: React.CSSProperties = {
  fontSize: "11px",
  letterSpacing: "0.26em",
  color: "#5E5954",
  textTransform: "uppercase",
};

const serif: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontWeight: 400,
  color: "#171717",
};

const muted: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.85,
  color: "#5E5954",
  fontWeight: 300,
};

const hairline: React.CSSProperties = { borderTop: "0.5px solid #E8E8E8" };

const sectionPad = "px-6 sm:px-10" as const;

const linkUnderline: React.CSSProperties = {
  fontSize: "11px",
  letterSpacing: "0.22em",
  color: "#171717",
  borderBottom: "1px solid #171717",
  display: "inline-block",
  paddingBottom: "3px",
  textTransform: "uppercase",
};

export default function Signals() {
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
      {/* SIGNALS — hero */}
      <section
        className={`${sectionPad} text-center mt-32`}
        style={{ padding: "130px 40px 110px" }}
      >
        <FadeInOnScroll>
          <p style={kicker}>Signals</p>
          <h1
            style={{
              ...serif,
              fontSize: "clamp(27px, 3.6vw, 36px)",
              marginTop: "22px",
              lineHeight: 1.3,
            }}
          >
            A working journal and a read on the culture.
          </h1>
          <p style={{ ...muted, fontSize: "15px", marginTop: "14px" }}>
            Notes on brand, content, retention, and community.
          </p>
        </FadeInOnScroll>
      </section>

      {/* RECENT — latest 3 posts pulled live from Substack. Dates hidden. */}
      <section
        className={sectionPad}
        style={{ ...hairline, padding: "130px 40px" }}
      >
        <div className="max-w-[860px] mx-auto">
          <FadeInOnScroll>
            <p style={{ ...kicker, marginBottom: "48px" }}>Recent</p>
          </FadeInOnScroll>

          {showRecent && (
            <div>
              {posts!.map((p, i) => (
                <FadeInOnScroll key={p.link}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div
                      style={{
                        padding: "36px 0",
                        borderTop: "0.5px solid #E8E8E8",
                        borderBottom:
                          i === posts!.length - 1 ? "0.5px solid #E8E8E8" : undefined,
                      }}
                    >
                      <h2
                        className="transition-opacity group-hover:opacity-60"
                        style={{
                          ...serif,
                          fontSize: "clamp(23px, 2.9vw, 29px)",
                          lineHeight: 1.3,
                        }}
                      >
                        {p.title}
                      </h2>
                      {p.excerpt && (
                        <p style={{ ...muted, fontSize: "15px", marginTop: "12px" }}>
                          {p.excerpt}
                        </p>
                      )}
                    </div>
                  </a>
                </FadeInOnScroll>
              ))}
            </div>
          )}

          {!showRecent && !loadFailed && (
            <p style={{ ...muted, fontSize: "15px", fontStyle: "italic" }}>
              Loading recent posts.
            </p>
          )}

          {loadFailed && (
            <p style={{ ...muted, fontSize: "15px", fontStyle: "italic" }}>
              Recent posts are over on Substack.
            </p>
          )}

          <FadeInOnScroll>
            <a
              href="https://kennydonnacollective.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
              style={{ ...linkUnderline, marginTop: "48px" }}
            >
              Read the Signals &rarr;
            </a>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
