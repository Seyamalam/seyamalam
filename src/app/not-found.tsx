import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-page shell">
      <div>
        <p className="eyebrow">Error 404</p>
        <h1>Wrong coordinate.</h1>
        <p>The page does not exist, but the rest of the system is still online.</p>
        <Link className="button button-primary" href="/">Return home <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
