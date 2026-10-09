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
          <p className="lede">Looking for a way to play golf on a dartboard? TwoBall Darts turns a standard board into an 18-hole course. Two darts per player, per hole. Lowest score wins.</p>
          <div className="cta-row" style={{ marginBottom: 65 }}>
            <a className="button button-primary" href="https://play.twoballdarts.com/">PLAY AND KEEP SCORE</a>
            <Link className="button button-ghost" href="/">EXPLORE TWOBALL</Link>
          </div>

          <section aria-labelledby="play-rules" style={{ marginBottom: 64 }}>
            <h2 id="play-rules" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>THE GAME IN FOUR STEPS.</h2>
            <ol style={{ fontSize: 18, lineHeight: 1.85, paddingLeft: 26 }}>
              <li>Start with number 1 on your dartboard. That number is the first hole.</li>
              <li>Each player throws exactly two darts at the current hole number.</li>
              <li>Score the two throws like golf: Eagle, Birdie, Par, Bogey, Double Bogey or Triple Bogey.</li>
              <li>Play numbers 1 through 18 in order. The lowest total score wins.</li>
            </ol>
          </section>

          <section aria-labelledby="scoring-guide" style={{ marginBottom: 64 }}>
            <h2 id="scoring-guide" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>GOLF DARTS SCORING.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: 750 }}>Every hole is par 3. A single hit on the current number is a target hit. A double or triple on that number is a power hit. Your two throws determine your score:</p>
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
            <h2 id="hazards" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>WATCH THE HAZARDS.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>In TwoBall Darts, the entire 19 and 20 wedges and the bull are hazards. A dart completely off the board is a hazard too. A dart that stays on the board but misses your target number is a safe miss, unless it lands in a hazard.</p>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>Tied after 18 holes? Each tied player throws one dart. Closest to the bull wins the tie-break.</p>
          </section>

          <section aria-labelledby="golf-variations" style={{ marginBottom: 60 }}>
            <h2 id="golf-variations" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>IS THIS THE SAME AS TRADITIONAL GOLF DARTS?</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>Golf darts has several rule variations. TwoBall is a specific version built around exactly two darts per hole, a full 18-hole course, golf-style scores and defined hazards. These are the rules for TwoBall, not a claim that every golf darts variation plays the same way.</p>
          </section>

          <div style={{ borderTop: "1px solid rgba(245,232,198,.3)", paddingTop: 38 }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>READY FOR THE FIRST TEE?</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6 }}>No special board. No complicated math. Open the free scorer and throw.</p>
            <a className="button button-primary" href="https://play.twoballdarts.com/">PLAY TWOBALL DARTS</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
