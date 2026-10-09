import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AssetImage } from "@/components/AssetImage";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How Thursday nights throwing darts after hockey turned into TwoBall Darts. Two darts. Eighteen holes. One hell of a good time.",
  alternates: { canonical: "/story" },
  openGraph: {
    title: "Our Story | TwoBall Darts",
    description: "Two darts. Eighteen holes. One hell of a good time. The real story behind TwoBall Darts.",
    url: "https://twoballdarts.com/story",
    type: "article",
    images: [{ url: "/brand/twoball-logo.webp", width: 1294, height: 1216, alt: "TwoBall Darts" }],
  },
};

const storySchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://twoballdarts.com/story#about",
  url: "https://twoballdarts.com/story",
  name: "Our Story - TwoBall Darts",
  description: "The origin of TwoBall Darts, created through Thursday-night games by Brent and Evan, with help from Turner.",
  isPartOf: { "@id": "https://twoballdarts.com/#website" },
  about: { "@id": "https://twoballdarts.com/#game" },
};

const chapters = [
  {
    eyebrow: "01 / THE GARAGE",
    title: "IT STARTED ON THURSDAYS.",
    paragraphs: [
      "Every Thursday night after hockey, my nephew Evan and I would get together in my garage, throw some darts, and have a few laughs.",
      "But we weren’t playing traditional darts. We were trying to figure out how to play golf on a dartboard.",
      "Not just borrow golf terminology or keep score like golf. We wanted it to actually feel like golf.",
      "The excitement of making a birdie. The satisfaction of saving par. Or the frustration of turning a great first shot into a complete disaster.",
      "We’d tried another version of golf darts, but it didn’t quite capture what we were looking for.",
      "So we started messing around with the rules. We’d play, change something, try again the next Thursday, and keep refining things.",
      "Until eventually, something clicked.",
    ],
  },
  {
    eyebrow: "02 / THE LIGHTBULB MOMENT",
    title: "WHY THE HELL ARE WE THROWING THREE DARTS?",
    paragraphs: [
      "Think about playing a par-three hole.",
      "Your first shot puts you in position. Maybe you’ve hit the green and have a chance at birdie. Maybe you’ve missed the green and you’re trying to save par.",
      "But even if you’ve hit a fantastic first shot, you can still screw it up. Three-putt the damn thing and walk away with a bogey.",
      "That’s golf, right?",
      "And that’s what we’d been trying to recreate.",
      "Once we switched from three darts to two, the whole game started making sense.",
      "Your first dart puts you in position. Your second determines what happens next.",
    ],
    pull: "Two darts. One hole. Anything can happen.",
  },
  {
    eyebrow: "03 / THE REAL TEST",
    title: "THEN TURNER JOINED US.",
    paragraphs: [
      "We were still messing around with the rules and keeping score on a whiteboard when we invited my son Turner to play.",
      "Turner was eighteen, loved golf, but wasn’t really a darts player.",
      "And he was hooked pretty much immediately.",
      "First time playing, and he wanted to keep going. He even started helping us refine some of the rules.",
      "And I think that’s when Evan and I realized we might actually be onto something.",
      "I mean, we’d been playing this thing for months. Of course we thought it was fun. But here’s somebody who doesn’t normally play darts, and now he wants to play with us.",
      "Maybe we’d actually created something other people would enjoy just as much as we did.",
    ],
  },
  {
    eyebrow: "04 / KEEP FUN SIMPLE",
    title: "GOODBYE, WHITEBOARD.",
    paragraphs: [
      "Now, there was still one problem.",
      "We’d been keeping score on a whiteboard, writing out holes one through eighteen like a golf scorecard.",
      "And it worked. Mostly.",
      "Every once in a while, even we’d forget how to score a particular combination.",
      "“Hang on. You hit the triple, but then missed the board completely. Is that a bogey or double bogey?”",
      "We invented the damn game, and even we occasionally had to stop and figure out the score.",
      "So I wrote down the rules and decided to build a simple scoring app.",
      "Initially, it was just about getting rid of the whiteboard. But then we added something called Score by Darts.",
      "Tell the app where your first dart landed. Tell it where your second landed.",
      "That’s it. The app figures out your score.",
      "Eagle, birdie, par, bogey, or something considerably worse.",
      "No memorizing scoring combinations. No math. No debating whether somebody made par or bogey.",
      "And here’s the thing.",
      "We’d spent months figuring out how to make the game work, but nobody else should have to figure all that shit out just to enjoy it.",
      "We wanted to Keep Fun Simple.",
      "And now we could.",
    ],
  },
  {
    eyebrow: "05 / THE COURSE",
    title: "A RIVER RUNS THROUGH IT.",
    paragraphs: [
      "There was another little thing we figured out along the way.",
      "A dartboard has twenty numbered sections and a bullseye. But our golf course only needs eighteen holes.",
      "So what do we do with the 19, 20, and bull?",
      "Simple. They’re the water hazard.",
      "Imagine a river running through the course, connecting those three sections.",
      "Now you’ve got eighteen holes to play and a river you’d rather avoid.",
      "And you don’t need a special dartboard. It’s the same dartboard you’ve always played on. You’re just looking at it differently.",
      "You’re not just throwing darts at numbers anymore. You’re playing your way around a golf course.",
    ],
  },
  {
    eyebrow: "06 / TOO GOOD TO KEEP TO OURSELVES",
    title: "THE CHIRPING IS HALF THE FUN.",
    paragraphs: [
      "The more we played, the more we realized just how much fun we were having.",
      "And it’s not just about throwing darts.",
      "It’s the competition. Making a birdie and giving your buddy a hard time because he just made bogey. Or watching somebody completely blow a hole they thought they had in the bag.",
      "And then, of course, having the exact same thing happen to you on the next hole.",
      "There’s always a little chirping going on.",
      "That’s half the fun.",
      "And the best part is, you don’t have to be particularly good at darts to enjoy it. Hell, you don’t even have to play golf.",
      "But if you are a golfer, you’ll recognize the feeling immediately.",
      "Eventually, I started introducing other people to TwoBall, and I found myself explaining it the same way every time.",
      "“Imagine a dart game that actually makes you feel like you just scored a birdie on the golf course.”",
      "That’s usually enough to get somebody interested.",
      "Then I show them how the game works, how two darts can turn into an eagle, birdie, par, or triple bogey.",
      "And that’s when they start to get it.",
      "We weren’t trying to build a business or reinvent darts.",
      "We were just two guys who enjoyed golf, enjoyed throwing darts, and wanted to figure out how to combine the two into something we’d have a hell of a lot of fun playing.",
      "And somewhere along the way, with a little help from Turner, we created something we genuinely believe other people should experience.",
      "Because at the end of the day, that’s what TwoBall is really about.",
      "Getting together with other people. Having a little competition. Sharing a few laughs.",
      "And having fun.",
    ],
  },
] as const;

export default function StoryPage() {
  return (
    <>
      <JsonLd data={storySchema} />
      <Header />
      <main className="story">
        <div className="story-hero">
          <div className="shell story-hero-inner">
            <div>
              <p className="eyebrow">A ROCKPAIL PRODUCTION · KEEP FUN SIMPLE</p>
              <h1>OUR <span>STORY.</span></h1>
              <p className="story-deck">Two darts. Eighteen holes.<br /><strong>One hell of a good time.</strong></p>
              <p className="story-intro">A couple of guys. A garage. A dartboard. And a Thursday-night idea that turned into something worth sharing.</p>
            </div>
            <AssetImage src="/brand/twoball-logo.webp" alt="TwoBall Darts" width={1294} height={1216} className="story-hero-mark" fallback={<strong>TwoBall Darts</strong>} />
          </div>
        </div>

        <div className="story-chapters">
          {chapters.map((chapter, index) => (
            <section className={"story-chapter " + (index % 2 ? "story-chapter-alt" : "")} key={chapter.eyebrow}>
              <div className="shell story-chapter-grid">
                <div className="story-chapter-heading">
                  <p className="story-index">{chapter.eyebrow}</p>
                  <h2>{chapter.title}</h2>
                </div>
                <div className="story-prose">
                  {chapter.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                  {"pull" in chapter && <blockquote>{chapter.pull}</blockquote>}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="story-outro">
          <div className="shell story-outro-inner">
            <p className="eyebrow">YOUR TURN</p>
            <h2>LESS SCROLLING.<br /><span>MORE THROWING.</span></h2>
            <div className="story-outro-copy">
              <p>So grab a couple of friends, find a dartboard, and fire up the scoring app.</p>
              <p>You don’t need golf clubs. You don’t need to be a darts expert. And you definitely don’t need to memorize a bunch of complicated rules.</p>
              <p>Just throw some darts and have some fun.</p>
              <p className="story-last-line">Two darts. Eighteen holes. One hell of a good time.</p>
              <p className="story-tagline">No gimmes. Just throw.</p>
              <a className="button button-primary" href="https://play.twoballdarts.com/">PLAY TWOBALL DARTS →</a>
              <p className="story-back"><Link href="/">Back to TwoBall Darts</Link></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .story { overflow: hidden; }
        .story-hero { background: radial-gradient(circle at 80% 40%,#0b5137 0%,#04281d 36%,#02140f 78%); border-bottom: 1px solid rgba(208,169,72,.35); }
        .story-hero-inner { min-height: 580px; padding-top: 105px; padding-bottom: 105px; display: grid; grid-template-columns: 1.3fr .7fr; align-items: center; gap: 55px; }
        .story-hero h1 { font-size: clamp(75px,12vw,165px); line-height: .82; margin-bottom: 35px; }
        .story-hero h1 span { color: #e3211b; }
        .story-deck { font-size: clamp(24px,3vw,39px); line-height: 1.22; color: var(--bright); margin-bottom: 24px; }
        .story-deck strong { color: var(--gold); font-weight: 700; }
        .story-intro { font-size: 17px; line-height: 1.65; max-width: 570px; color: rgba(245,232,198,.78); }
        .story-hero-mark { width: 100%; height: auto; filter: drop-shadow(0 24px 38px rgba(0,0,0,.35)); }
        .story-chapter { background: var(--paper); color: var(--ink); padding: 105px 0; }
        .story-chapter-alt { background: #092d22; color: var(--cream); }
        .story-chapter-grid { display: grid; grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr); gap: clamp(40px,7vw,110px); }
        .story-chapter-heading { align-self: start; position: sticky; top: 125px; }
        .story-index { font-size: 12px; letter-spacing: .17em; color: #9b392e; font-weight: 700; margin-bottom: 26px; }
        .story-chapter-alt .story-index { color: var(--gold); }
        .story-chapter h2 { font-size: clamp(40px,5.5vw,76px); line-height: .95; overflow-wrap: break-word; }
        .story-prose { max-width: 650px; }
        .story-prose p { font-size: 18px; line-height: 1.76; margin: 0 0 22px; }
        .story-prose p:last-child { margin-bottom: 0; }
        .story-prose blockquote { margin: 40px 0 0; border-left: 5px solid var(--red); padding: 10px 0 10px 24px; font-family: var(--font-display),Arial,sans-serif; font-size: clamp(27px,3vw,43px); line-height: 1.12; color: var(--gold); }
        .story-outro { padding: 120px 0 105px; background: linear-gradient(135deg,#02140f,#063927); }
        .story-outro-inner { max-width: 970px; }
        .story-outro h2 { font-size: clamp(53px,8vw,105px); }
        .story-outro h2 span { color: #e3211b; }
        .story-outro-copy { max-width: 670px; }
        .story-outro-copy p { font-size: 19px; line-height: 1.65; margin-bottom: 21px; }
        .story-outro-copy .story-last-line { color: var(--gold); font-weight: 700; font-size: 23px; }
        .story-outro-copy .story-tagline { font-family: var(--font-display),Arial,sans-serif; font-size: 26px; color: var(--bright); }
        .story-outro .button { margin-top: 18px; }
        .story-back { margin-top: 35px; font-size: 14px !important; }
        .story-back a { text-decoration: underline; text-underline-offset: 4px; }
        @media(max-width:900px) { .story-hero-inner { grid-template-columns: 1fr; min-height: 0; padding-top: 75px; padding-bottom: 75px; } .story-hero-mark { max-width: 310px; justify-self: center; } .story-chapter-grid { grid-template-columns: 1fr; gap: 20px; } .story-chapter-heading { position: static; } .story-chapter { padding: 75px 0; } }
        @media(max-width:620px) { .story-hero h1 { font-size: clamp(66px,15vw,96px); } .story-hero-inner { gap: 28px; } .story-chapter h2 { font-size: clamp(39px,10vw,57px); } .story-prose p { font-size: 17px; line-height: 1.72; } .story-outro { padding: 80px 0; } }
      `}</style>
    </>
  );
}
