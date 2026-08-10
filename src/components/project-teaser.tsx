export function ProjectTeaser({ slug }: { slug: string }) {
  if (slug === "bun-scikit") {
    return <div className="teaser teaser-native" aria-hidden="true"><span /><span /><span /><i>fit → zig</i></div>;
  }

  if (slug === "robofusion") {
    return <div className="teaser teaser-risk" aria-hidden="true"><span /><span /><span /><b>65</b><i>critical</i></div>;
  }

  if (slug === "asrro-portal") {
    return <div className="teaser teaser-portal" aria-hidden="true"><span /><span /><span /><i /></div>;
  }

  if (slug === "kaggriculture-agent") {
    return <div className="teaser teaser-agent" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <span key={index} />)}<b>A</b><i>B</i></div>;
  }

  if (slug === "fold-safe-ml-pipelines") {
    return <div className="teaser teaser-fold" aria-hidden="true"><span /><span /><span /><span /><span /><b>.96919</b></div>;
  }

  return <div className="teaser teaser-zodic" aria-hidden="true"><span>{"{"}</span><i>email ✓</i><i>age ×</i><span>{"}"}</span></div>;
}
