import Link from "next/link";

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
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="wordmark" aria-label="Touhidul Alam Seyam, home">
          <span className="wordmark-mark" aria-hidden="true">S/</span>
          <span>Seyam Alam</span>
        </Link>
        <NavigationLinks />
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <NavigationLinks mobile />
        </details>
      </div>
    </header>
  );
}
