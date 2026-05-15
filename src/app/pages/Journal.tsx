import { useEffect, useState } from "react";

const SUBSTACK_URL = "https://kennydonnacollective.substack.com";

type Post = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  image: string | null;
};

type LoadState = "loading" | "ready" | "error";

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function Journal() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [state, setState] = useState<LoadState>("loading");

  useEffect(() => {
    let cancelled = false;

    fetch("/api/journal-posts")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: { items?: Post[]; error?: string }) => {
        if (cancelled) return;
        if (data.error || !data.items) throw new Error(data.error || "No posts");
        setPosts(data.items);
        setState("ready");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1, 7); // up to 6 in the grid (7 total visible)

  return (
    <section
      className="py-20 sm:py-28 lg:py-40 px-6 sm:px-8 lg:px-16 mt-20 sm:mt-24 lg:mt-32"
      style={{ backgroundColor: "#FCFBF8", position: "relative" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundSize: "250px 250px",
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <p
          className="text-xs tracking-widest uppercase mb-8 lg:mb-12"
          style={{ color: "#5E5954", letterSpacing: "0.15em" }}
        >
          Journal
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            color: "#171717",
            fontWeight: 300,
          }}
          className="text-3xl sm:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-3xl leading-tight"
        >
          Thoughts on brand, strategy, and building marketing that feels intentional.
        </h2>

        {/* Loading */}
        {state === "loading" && (
          <p
            className="text-base sm:text-lg"
            style={{ color: "#5E5954", fontWeight: 300 }}
          >
            Loading latest from Substack…
          </p>
        )}

        {/* Error / empty fallback */}
        {state === "error" && (
          <div className="space-y-6">
            <p
              className="text-base sm:text-lg"
              style={{ color: "#3A342F", fontWeight: 300, lineHeight: 1.8 }}
            >
              We couldn't load the latest posts right now.
            </p>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-widest uppercase transition-opacity hover:opacity-60 inline-block"
              style={{
                color: "#171717",
                letterSpacing: "0.18em",
                borderBottom: "1px solid #171717",
                paddingBottom: "4px",
              }}
            >
              Read on Substack →
            </a>
          </div>
        )}

        {state === "ready" && posts.length === 0 && (
          <div className="space-y-6">
            <p
              className="text-base sm:text-lg"
              style={{ color: "#3A342F", fontWeight: 300, lineHeight: 1.8 }}
            >
              New posts are coming soon.
            </p>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-widest uppercase transition-opacity hover:opacity-60 inline-block"
              style={{
                color: "#171717",
                letterSpacing: "0.18em",
                borderBottom: "1px solid #171717",
                paddingBottom: "4px",
              }}
            >
              Subscribe on Substack →
            </a>
          </div>
        )}

        {/* Featured + Grid */}
        {state === "ready" && featured && (
          <>
            {/* Featured Article */}
            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-16 lg:mb-32 group"
            >
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="overflow-hidden">
                  {featured.image ? (
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-[380px] sm:h-[480px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      style={{ filter: "grayscale(8%)" }}
                    />
                  ) : (
                    <div
                      className="w-full h-[380px] sm:h-[480px] lg:h-[600px]"
                      style={{ backgroundColor: "#E8E2D6" }}
                    />
                  )}
                </div>
                <div className="space-y-5 lg:space-y-6">
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#5E5954", letterSpacing: "0.15em" }}
                  >
                    Latest
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "#171717",
                      fontWeight: 300,
                    }}
                    className="text-2xl sm:text-3xl lg:text-4xl leading-tight transition-opacity group-hover:opacity-80"
                  >
                    {featured.title}
                  </h3>
                  {featured.excerpt && (
                    <p
                      className="text-base sm:text-lg"
                      style={{
                        color: "#3A342F",
                        fontWeight: 300,
                        lineHeight: 1.8,
                      }}
                    >
                      {featured.excerpt}
                    </p>
                  )}
                  <p
                    className="text-sm pt-2"
                    style={{ color: "#5E5954", fontWeight: 300 }}
                  >
                    {formatDate(featured.pubDate)}
                  </p>
                </div>
              </div>
            </a>

            {/* Article Grid */}
            {rest.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                {rest.map((post) => (
                  <a
                    key={post.link}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group space-y-5 lg:space-y-6"
                  >
                    <div className="overflow-hidden">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-[260px] sm:h-[340px] lg:h-[380px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          style={{ filter: "grayscale(8%)" }}
                        />
                      ) : (
                        <div
                          className="w-full h-[260px] sm:h-[340px] lg:h-[380px]"
                          style={{ backgroundColor: "#E8E2D6" }}
                        />
                      )}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: "#171717",
                        fontWeight: 300,
                      }}
                      className="text-xl sm:text-2xl lg:text-[1.75rem] leading-tight transition-opacity group-hover:opacity-80"
                    >
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p
                        className="text-base"
                        style={{
                          color: "#3A342F",
                          fontWeight: 300,
                          lineHeight: 1.8,
                        }}
                      >
                        {post.excerpt}
                      </p>
                    )}
                    <p
                      className="text-sm"
                      style={{ color: "#5E5954", fontWeight: 300 }}
                    >
                      {formatDate(post.pubDate)}
                    </p>
                  </a>
                ))}
              </div>
            )}

            {/* CTA to read more on Substack */}
            <div className="mt-16 lg:mt-24 text-center">
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-widest uppercase transition-opacity hover:opacity-60 inline-block"
                style={{
                  color: "#171717",
                  letterSpacing: "0.18em",
                  borderBottom: "1px solid #171717",
                  paddingBottom: "4px",
                }}
              >
                Read more on Substack →
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
