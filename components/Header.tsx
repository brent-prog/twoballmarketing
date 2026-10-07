import { AssetImage } from "@/components/AssetImage";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="/" aria-label="TwoBall Darts home">
          <span className="brand-logo-lockup" style={{ position: "relative", display: "inline-block", lineHeight: 0 }}>
          <AssetImage
            src="/brand/twoball-logo.webp"
            alt="TwoBall Darts™"
            width={440}
            height={152}
            className="header-logo"
            priority
            fallback={
              <>
                <span className="wordmark-mark" aria-hidden="true" />
                <span>TwoBall Darts™</span>
              </>
            }
          />
          <span className="brand-tm" aria-hidden="true" style={{ position: "absolute", top: "5px", right: "18px", color: "#f5e8c6", fontSize: "10px", lineHeight: 1, fontWeight: 700 }}>™</span>
          </span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#how-to-play">HOW TO PLAY</a>
          <a href="#scoring">SCORING</a>
          <a href="#rules">THE RULES</a>
          <a className="nav-play" href="https://play.twoballdarts.com" target="_blank" rel="noreferrer">PLAY NOW</a>
        </nav>
      </div>
    </header>
  );
}
