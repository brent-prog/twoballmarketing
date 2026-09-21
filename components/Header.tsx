export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="/" aria-label="TwoBall Darts home">
          <span className="wordmark-mark" aria-hidden="true" />
          <span>TwoBall Darts</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#how-to-play">HOW TO PLAY</a>
          <a href="#scoring">SCORING</a>
          <a href="#rules">THE RULES</a>
          <a className="nav-play" href="https://play.twoballdarts.com">PLAY NOW</a>
        </nav>
      </div>
    </header>
  );
}
