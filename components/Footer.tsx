import { AssetImage } from "@/components/AssetImage";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <AssetImage
            src="/brand/twoball-logo.webp"
            alt="TwoBall Darts"
            width={440}
            height={152}
            className="footer-logo"
            fallback={<strong>TwoBall Darts</strong>}
          />
          <p>No gimmes. Just throw.</p>
        </div>

        <div className="footer-rockpail">
          <span>ROCKPAIL PRODUCTION</span>
          <strong>KEEP FUN SIMPLE</strong>
          <a href="https://rockpail.com">Visit RockPail</a>
        </div>

        <div className="footer-meta">
          <a href="mailto:info@twoballdarts.com">Contact / Feedback</a>
          <p>© 2026 TwoBall Darts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
