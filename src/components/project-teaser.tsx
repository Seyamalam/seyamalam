export function ProjectTeaser({ slug }: { slug: string }) {
  if (slug === "bun-scikit") {
    return <div className="teaser teaser-native" aria-hidden="true"><span /><span /><span /><i>fit → zig</i></div>;
  }

  if (slug === "robofusion") {
    return <div className="teaser teaser-risk" aria-hidden="true"><span /><span /><span /><b>65</b><i>critical</i></div>;
  }

  if (slug === "huntrix-delta") {
    return <div className="teaser teaser-delta" aria-hidden="true"><span>offline</span><b>mesh</b><i>sync ↗</i></div>;
  }

  if (slug === "blood-league-kickoff") {
    return <div className="teaser teaser-game" aria-hidden="true"><span /><span /><b>⚽</b><i>05</i></div>;
  }

  if (slug === "careerpath") {
    return <div className="teaser teaser-career" aria-hidden="true"><span /><span /><span /><b>78%</b><i>next skill →</i></div>;
  }

  if (slug === "microops") {
    return <div className="teaser teaser-ops" aria-hidden="true"><span>202</span><i>→</i><span>job</span><i>→</i><span>S3</span></div>;
  }

  if (slug === "asrro-portal") {
    return <div className="teaser teaser-portal" aria-hidden="true"><span /><span /><span /><i /></div>;
  }

  if (slug === "paris-summit-platform") {
    return <div className="teaser teaser-paris" aria-hidden="true"><span>01</span><span>06</span><b>10 directions</b><i>selected → live</i></div>;
  }

  if (slug === "kaggriculture-agent") {
    return <div className="teaser teaser-agent" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <span key={index} />)}<b>A</b><i>B</i></div>;
  }

  if (slug === "fold-safe-ml-pipelines") {
    return <div className="teaser teaser-fold" aria-hidden="true"><span /><span /><span /><span /><span /><b>.96919</b></div>;
  }

  return <div className="teaser teaser-zodic" aria-hidden="true"><span>{"{"}</span><i>email ✓</i><i>age ×</i><span>{"}"}</span></div>;
}
