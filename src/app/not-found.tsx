import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-page shell">
      <div>
        <p className="eyebrow">Error 404</p>
        <h1>Wrong coordinate.</h1>
        <p>The page does not exist. Use the site map below, or open the agent-readable index to recover.</p>
        <p><Link href="/sitemap.xml">Sitemap</Link> · <Link href="/llms.txt">Agent index</Link> · <Link href="/projects">Projects</Link></p>
        <Link className="button button-primary" href="/" data-transition="nav-back">Return home <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
