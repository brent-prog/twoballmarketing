import { AssetImage } from "@/components/AssetImage";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="/" aria-label="TwoBall Darts home">
          <AssetImage
            src="/brand/twoball-approved-full.svg"
            alt="TwoBall Darts™"
            width={1200}
            height={402}
            className="header-logo"
            priority
            fallback={
              <>
                <span className="wordmark-mark" aria-hidden="true" />
                <span>TwoBall Darts™</span>
              </>
            }
          />
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
