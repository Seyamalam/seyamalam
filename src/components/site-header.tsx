import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { HeaderTools } from "@/components/site-tools";

const navigation = [
  ["Work", "/projects"],
  ["Research", "/research"],
  ["Experience", "/experience"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav aria-label={mobile ? "Mobile navigation" : "Primary navigation"} className={mobile ? "mobile-links" : "nav-links"}>
      {navigation.map(([label, href]) => (
        <Link key={href} href={href} data-transition="nav-swap">
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header" style={{ viewTransitionName: "site-header" }}>
      <div className="shell header-inner">
        <Link href="/" className="wordmark" aria-label="Touhidul Alam Seyam, home" data-transition="nav-back">
          <BrandMark className="wordmark-mark" />
          <span className="wordmark-copy"><strong>Seyam Alam</strong><small>systems / intelligence</small></span>
        </Link>
        <NavigationLinks />
        <p className="header-status"><i />Dhaka time · open to remote</p>
        <HeaderTools />
      </div>
    </header>
  );
}
