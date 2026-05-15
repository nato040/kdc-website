// Vercel serverless function — fetches Kenny Donna Collective's Substack RSS,
// parses it, and returns a JSON array of recent posts.
// Cached at the edge for 5 minutes with 1-hour stale-while-revalidate.

const SUBSTACK_FEED_URL = "https://kennydonnacollective.substack.com/feed";

type Post = {
  title: string;
  link: string;
  pubDate: string;       // ISO date string, easier for client to format
  excerpt: string;
  image: string | null;
};

export default async function handler(req: any, res: any) {
  try {
    const response = await fetch(SUBSTACK_FEED_URL, {
      headers: {
        "User-Agent":
          "KDC-Website/1.0 (+https://kennydonnacollective.com)",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    if (!response.ok) {
      res.status(502).json({
        error: `Substack feed returned ${response.status}`,
        items: [],
      });
      return;
    }

    const xml = await response.text();
    const items = parseRssItems(xml);

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=3600"
    );
    res.status(200).json({ items });
  } catch (err: any) {
    res.status(500).json({ error: String(err?.message || err), items: [] });
  }
}

function parseRssItems(xml: string): Post[] {
  const items: Post[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let m: RegExpExecArray | null;

  while ((m = itemRegex.exec(xml)) !== null) {
    const block = m[1];

    const title = decodeEntities(extractCdata(block, /<title>([\s\S]*?)<\/title>/));
    const link = extractText(block, /<link>([\s\S]*?)<\/link>/);
    const rawDate = extractText(block, /<pubDate>([\s\S]*?)<\/pubDate>/);
    const description = extractCdata(block, /<description>([\s\S]*?)<\/description>/);
    const contentEncoded = extractCdata(
      block,
      /<content:encoded>([\s\S]*?)<\/content:encoded>/
    );
    const enclosure = extractText(block, /<enclosure[^>]+url="([^"]+)"/);

    // Pick the best image: explicit enclosure, then first <img> in full content,
    // then first <img> in description.
    let image: string | null = enclosure || null;
    if (!image) {
      const imgSource = contentEncoded || description;
      const imgMatch = imgSource.match(/<img[^>]+src="([^"]+)"/i);
      image = imgMatch ? imgMatch[1] : null;
    }

    // Plain-text excerpt from description (Substack puts subtitle here)
    const excerpt = decodeEntities(
      description
        .replace(/<[^>]+>/g, "")
        .replace(/\s+/g, " ")
        .trim()
    ).slice(0, 240);

    // Normalize date to ISO
    let pubDate = rawDate;
    const d = new Date(rawDate);
    if (!isNaN(d.getTime())) pubDate = d.toISOString();

    if (title && link) {
      items.push({
        title: title.trim(),
        link: link.trim(),
        pubDate,
        excerpt,
        image,
      });
    }
  }

  return items;
}

function extractText(text: string, regex: RegExp): string {
  const m = text.match(regex);
  return m ? m[1] : "";
}

function extractCdata(text: string, regex: RegExp): string {
  const m = text.match(regex);
  if (!m) return "";
  return m[1].replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "");
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#x2019;/g, "'")
    .replace(/&#x2018;/g, "'")
    .replace(/&#x201C;/g, '"')
    .replace(/&#x201D;/g, '"')
    .replace(/&hellip;/g, "…")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&nbsp;/g, " ");
}
