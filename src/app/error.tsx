"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="error-page shell">
      <div>
        <p className="eyebrow">Runtime interruption</p>
        <h1>Signal lost.</h1>
        <p>This page failed to render. Retry the route; if it repeats, the error has been logged for diagnosis.</p>
        <button className="button button-primary" type="button" onClick={reset}>Try again</button>
      </div>
    </section>
  );
}
