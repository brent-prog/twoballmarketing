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

        <div className="footer-partners">
          <a
            className="footer-partner-link"
            href="https://rockpail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit RockPail"
          >
            <AssetImage
              src="/brand/rockpail-production-white.png"
              alt="A RockPail Production"
              width={2048}
              height={980}
              className="footer-rockpail-logo"
              fallback={<strong>RockPail</strong>}
            />
          </a>

          <a
            className="footer-partner-link"
            href="https://keepfunsimple.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Keep Fun Simple"
          >
            <AssetImage
              src="/brand/keepfunsimple-logo-white.svg"
              alt="Keep Fun Simple"
              width={1129}
              height={1026}
              className="footer-kfs-logo"
              fallback={<strong>Keep Fun Simple</strong>}
            />
          </a>
        </div>

        <div className="footer-meta">
          <a href="mailto:info@twoballdarts.com">Contact / Feedback</a>
          <p>© 2026 TwoBall Darts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
