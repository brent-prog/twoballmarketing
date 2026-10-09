import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { scoring } from "@/data/scoring";

const url = "https://twoballdarts.com/golf-darts";
export const metadata: Metadata = {
  title: "Golf Darts Rules: Play Golf on a Dartboard",
  description: "How to play golf darts with TwoBall: 18 holes, two darts per hole, golf-style scoring, hazards and a free online scorekeeper.",
  alternates: { canonical: "/golf-darts" },
  openGraph: {
    title: "Golf Darts Rules | TwoBall Darts",
    description: "Turn a standard dartboard into an 18-hole golf course. Learn the TwoBall variation and start playing.",
    url,
    type: "article",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": url + "#webpage",
  url,
  name: "Golf Darts Rules: Play Golf on a Dartboard",
  description: "Rules and scoring for TwoBall Darts, an 18-hole, two-dart golf-style darts game.",
  isPartOf: { "@id": "https://twoballdarts.com/#website" },
  about: { "@id": "https://twoballdarts.com/#game" },
};

export default function GolfDartsPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <main style={{ background: "var(--green)", color: "var(--cream)", minHeight: "80vh" }}>
        <div className="shell" style={{ paddingTop: 38, paddingBottom: 92, maxWidth: 900 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 65 }}>
            <Link href="/" style={{ color: "var(--gold)", textDecoration: "underline" }}>TwoBall Darts</Link> / Golf Darts Rules
          </nav>
          <p className="eyebrow">GOLF SCORING ON A DARTBOARD</p>
          <h1 style={{ fontSize: "clamp(46px, 8vw, 86px)", lineHeight: 0.98, marginBottom: 30 }}>HOW TO PLAY<br />GOLF DARTS.</h1>
          <p className="lede">Your dartboard has been hiding a golf course this whole time. Grab a couple of darts, bring your friends and play 18 holes of TwoBall. Two darts per hole. Lowest score wins. Bragging rights? Absolutely.</p>
          <div className="cta-row" style={{ marginBottom: 65 }}>
            <a className="button button-primary" href="https://play.twoballdarts.com/">PLAY AND KEEP SCORE</a>
            <Link className="button button-ghost" href="/">EXPLORE TWOBALL</Link>
          </div>

          <section aria-labelledby="play-rules" style={{ marginBottom: 64 }}>
            <h2 id="play-rules" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>FOUR STEPS. ONE GREAT GAME.</h2>
            <ol style={{ fontSize: 18, lineHeight: 1.85, paddingLeft: 26 }}>
              <li>First tee: number 1. That's your target for the opening hole.</li>
              <li>Two darts each. Make them count.</li>
              <li>Eagle? Nice shot. Triple Bogey? Your friends will let you know. Score each hole like golf.</li>
              <li>Keep moving through 18 holes. Lowest score wins. Let the chirping begin.</li>
            </ol>
          </section>

          <section aria-labelledby="scoring-guide" style={{ marginBottom: 64 }}>
            <h2 id="scoring-guide" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>BIRDIES. BOGEYS. BRAGGING RIGHTS.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: 750 }}>Every hole is par 3, but two darts can change everything. Hit the right number and you're in business. Nail its double or triple and you're looking good. Here's how the scorecard works:</p>
            <div style={{ display: "grid", gap: 0, borderTop: "1px solid rgba(245,232,198,.3)" }}>
              {scoring.map((item) => (
                <div key={item.name} style={{ display: "grid", gridTemplateColumns: "75px 1fr", gap: 16, padding: "20px 0", borderBottom: "1px solid rgba(245,232,198,.3)" }}>
                  <strong style={{ color: "var(--gold)", fontSize: 28 }}>{item.relative}</strong>
                  <div><h3 style={{ marginBottom: 6, fontSize: 20 }}>{item.name}</h3><p style={{ lineHeight: 1.5, marginBottom: 0 }}>{item.description}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="hazards" style={{ marginBottom: 64 }}>
            <h2 id="hazards" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>WATER HAZARDS. ON A DARTBOARD.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>The 19, 20 and bull? That's the water. Land anywhere in those wedges and you've found a hazard. Completely miss the board? Also a hazard. Hit another number on the board and you're safe, even if it wasn't the shot you wanted.</p>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>Still tied after 18? One dart each. Closest to the bull takes it. No arguing over the scorecard.</p>
          </section>

          <section aria-labelledby="golf-variations" style={{ marginBottom: 60 }}>
            <h2 id="golf-variations" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>GOLF DARTS. WITH A TWIST.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>There are a few ways to play golf darts. We think TwoBall is the most fun. Two throws. Eighteen holes. Hazards that can wreck a great round. Enough skill to keep it competitive, enough surprises to keep everybody laughing. It's golf without the greens fees, the dress code or a five-hour round.</p>
          </section>

          <div style={{ borderTop: "1px solid rgba(245,232,198,.3)", paddingTop: 38 }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>YOUR NEXT GAME NIGHT IS SORTED.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6 }}>Same dartboard. Whole new game. Get your crew together, fire up the free scorer and see who's buying the next round.</p>
            <a className="button button-primary" href="https://play.twoballdarts.com/">LET'S PLAY TWOBALL</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
