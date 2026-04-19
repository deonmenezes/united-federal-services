import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "United Federal Services — Est. 1789",
  description: "United Federal Services"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="announce">An Official Government Services Portal · .gov equivalent · For Official Use</div>
        <header className="top">
          <Link href="/" className="brand">
            <span className="crest">UFS</span>
            <span>
              United Federal Services
              <span className="brand-sub">Est. 1789</span>
            </span>
          </Link>
          <nav>
            <Link href="/search">Services</Link>
            <Link href="/comments">Forums</Link>
            <Link href="/tools">Help</Link>
            <Link href="/login" className="cta">Sign In</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-inner">
            <div>
              <h4>United Federal Services</h4>
              <p style={{ margin: 0, color: "#525252", fontSize: "0.85rem" }}>
                Serving clients since 1789.
              </p>
            </div>
            <div>
              <h4>Services</h4>
              <Link href="/search">Overview</Link>
              <Link href="/search">Products</Link>
              <Link href="/search">Pricing</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="/comments">Forums</Link>
              <Link href="/tools">Help</Link>
              <Link href="/bounty">Security</Link>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="/.well-known/security.txt">security.txt</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="legal">
            <span>© {new Date().getFullYear()} United Federal Services. All rights reserved.</span>
            <span>Est. 1789.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
