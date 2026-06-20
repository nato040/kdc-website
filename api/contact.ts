// Vercel serverless function — receives Contact questionnaire submissions
// from the public site and forwards them to contact@ via Resend.
//
// Required env vars on Vercel:
//   RESEND_API_KEY   — API key from resend.com
//   CONTACT_TO       — (optional) destination address; defaults to contact@kennydonnacollective.com
//   RESEND_FROM      — (optional) From line; defaults to "KDC Website <noreply@kennydonnacollective.com>".
//                      Domain must be verified in Resend for this to work.

type Body = {
  brand?: string;
  website?: string;
  category?: string;
  stage?: string;
  notConnecting?: string;
  surfaces?: string[];
  name?: string;
  email?: string;
  preferred?: string;
};

const DEFAULT_TO = "contact@kennydonnacollective.com";
const DEFAULT_FROM = "KDC Website <noreply@kennydonnacollective.com>";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const body: Body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});

    // Basic validation — three fields are required to make a usable email.
    const brand = (body.brand || "").trim();
    const notConnecting = (body.notConnecting || "").trim();
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();

    if (!brand || !notConnecting || !name || !email) {
      res.status(400).json({ error: "Missing required fields." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ error: "Email looks malformed." });
      return;
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("contact.ts: RESEND_API_KEY not set");
      res.status(500).json({ error: "Email service is not configured." });
      return;
    }

    const to = process.env.CONTACT_TO || DEFAULT_TO;
    const from = process.env.RESEND_FROM || DEFAULT_FROM;
    const surfaces = Array.isArray(body.surfaces) ? body.surfaces : [];

    const lines = [
      `Brand: ${brand}`,
      body.website ? `Website: ${body.website.trim()}` : null,
      body.category ? `Category: ${body.category.trim()}` : null,
      body.stage ? `Where the brand is now:\n${body.stage.trim()}` : null,
      `What isn't connecting:\n${notConnecting}`,
      surfaces.length ? `Surfaces: ${surfaces.join(", ")}` : null,
      "",
      `From: ${name} <${email}>`,
      body.preferred ? `Best way to reach: ${body.preferred.trim()}` : null,
    ].filter(Boolean);

    const text = lines.join("\n\n");

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New conversation request: ${brand}`,
        text,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text().catch(() => "");
      console.error("contact.ts: Resend returned", resp.status, detail);
      res.status(502).json({ error: "Email service rejected the message." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("contact.ts: unexpected error", err);
    res.status(500).json({ error: "Unexpected error." });
  }
}
