import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AssetImage } from "@/components/AssetImage";
import { scoring } from "@/data/scoring";
import { rules } from "@/data/rules";
import { howToSchema, siteSchema, brandSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[siteSchema, brandSchema, howToSchema]} />
      <Header />
      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">THE GAME HIDING IN YOUR DARTBOARD</p>
              <h1>
                <span className="hero-line hero-line-ivory">GOLF SCORING.</span>
                <span className="hero-line hero-line-red">TWO DARTS.</span>
                <span className="hero-line hero-line-ivory">EIGHTEEN HOLES.</span>
              </h1>
              <p className="lede">Play the numbers 1 through 18 as holes. Throw exactly two darts at each. Lowest score wins.</p>
              <div className="cta-row">
                <a className="button button-primary" href="https://play.twoballdarts.com">PLAY NOW</a>
                <a className="button button-ghost" href="#how-to-play">Learn the game</a>
              </div>
            </div>

            <div className="hero-visual">
              <AssetImage
                src="/brand/twoball-badge.webp"
                alt="TwoBall Darts badge"
                width={1294}
                height={1216}
                className="hero-badge"
                priority
                fallback={<strong className="hero-logo-fallback">TwoBall Darts</strong>}
              />

              <div className="hero-stats" aria-label="Game format">
                <div><strong>18</strong><span>HOLES</span></div>
                <div><strong>2</strong><span>DARTS</span></div>
                <div><strong>3</strong><span>PAR</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-to-play" className="section light how-section">
          <div className="shell">
            <p className="eyebrow dark">THE WHOLE GAME IN 30 SECONDS</p>
            <h2 className="how-heading"><span>IF YOU CAN COUNT TO 18</span><span>YOU CAN PLAY TWOBALL.</span></h2>
            <div className="steps">
              <article><b>01</b><h3>PICK THE HOLE</h3><p>Start at number 1 on the dartboard. That number is the only target that matters.</p></article>
              <article><b>02</b><h3>THROW TWO DARTS</h3><p>Singles are good. Doubles and triples are better. Off the board or throwing into hazards hurts.</p></article>
              <article><b>03</b><h3>SCORE IT LIKE GOLF</h3><p>Your two darts make an Eagle, Birdie, Par, Bogey, Double or Triple Bogey.</p></article>
              <article><b>18</b><h3>FINISH THE COURSE</h3><p>Move through numbers 1 to 18. The player with the lowest total score wins.</p></article>
            </div>
          </div>
        </section>

        <section id="scoring" className="section score-section">
          <div className="shell score-shell">
            <div className="section-heading">
              <p className="eyebrow">THE SCORECARD</p>
              <h2>EVERY THROW<br />MEANS SOMETHING.</h2>
              <p className="section-intro">Better target hits lower your score. Hazards raise it. Every hole is par 3 and your worst possible score is Triple Bogey.</p>
            </div>

            <div className="score-grid">
              {scoring.map((item) => (
                <article className="score-card" key={item.name}>
                  <div className="score-number">{item.relative}</div>
                  <div className="score-copy">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span>{item.strokes} {item.strokes === 1 ? "STROKE" : "STROKES"}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="rules" className="section rules-section">
          <div className="shell">
            <div className="rules-heading">
              <p className="eyebrow dark">NO RULEBOOK REQUIRED</p>
              <h2>THE RULES YOU'LL<br />REMEMBER BY HOLE THREE.</h2>
              <p className="section-intro dark-copy">TwoBall rewards accuracy without turning game night into a math test.</p>
            </div>

            <div className="board-wrap">
              <AssetImage
                src="/images/twoball-board.webp"
                alt="Official TwoBall dartboard with the complete 20 wedge, complete 19 wedge, and bull marked blue"
                width={1000}
                height={1000}
                className="board-image"
                fallback={<div className="board-ring">TwoBall</div>}
              />
            </div>
            <p className="hazard-note"><strong>Blue means hazard.</strong> The complete 20 and 19 wedges and the bull are hazards.</p>

            <ol className="rules-list">
              {rules.map((rule, index) => (
                <li key={rule}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <span>{rule}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-grid">
            <div>
              <h2>READY TO<br />PLAY A ROUND?</h2>
            </div>
            <div className="final-copy">
              <h3>YOUR DARTBOARD ALREADY HAS A GOLF COURSE ON IT.</h3>
              <p>You just needed a game worth playing.</p>
              <a className="button button-primary" href="https://play.twoballdarts.com">PLAY A ROUND</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
