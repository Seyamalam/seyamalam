import Link from "next/link";
import { profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-title">Build carefully. Measure honestly.</p>
          <p className="footer-copy">
            Software engineering and applied AI from {profile.location}.
          </p>
        </div>
        <div className="footer-links" aria-label="External profiles">
          <a href={profile.github}>GitHub <span aria-hidden="true">↗</span></a>
          <a href={profile.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
          <a href={profile.orcid}>ORCID <span aria-hidden="true">↗</span></a>
          <a href={profile.scholar}>Scholar <span aria-hidden="true">↗</span></a>
          <Link href="/contact#resumes" data-transition="nav-swap">Resumes <span aria-hidden="true">↓</span></Link>
          <Link href="/contact" data-transition="nav-swap">Contact <span aria-hidden="true">↗</span></Link>
          <Link href="/privacy" data-transition="nav-swap">Privacy <span aria-hidden="true">↗</span></Link>
          <Link href="/developers" data-transition="nav-swap">For agents <span aria-hidden="true">↗</span></Link>
          <a href="/.well-known/mcp">MCP <span aria-hidden="true">↗</span></a>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} Touhidul Alam Seyam</p>
      </div>
    </footer>
  );
}
