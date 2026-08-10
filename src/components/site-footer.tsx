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
          <a href={profile.orcid}>ORCID <span aria-hidden="true">↗</span></a>
          <a href={profile.scholar}>Scholar <span aria-hidden="true">↗</span></a>
          <Link href="/contact#resumes">Resumes <span aria-hidden="true">↓</span></Link>
          <Link href="/contact">Contact <span aria-hidden="true">→</span></Link>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} Touhidul Alam Seyam</p>
      </div>
    </footer>
  );
}
