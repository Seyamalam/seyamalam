# AI-agent and search discoverability audit

Audit date: 2026-08-10
Scope: the portfolio source in this repository, evaluated for human accessibility, Google Search, Google generative search, ChatGPT search/agents, and evidence quality. This is not a Lighthouse-score audit.

## Executive finding

The portfolio has a strong technical base: important content is present in server-rendered HTML, navigation uses real links, the pages have meaningful headings and landmarks, and publications link to canonical research records. Those choices make it much easier for search engines, screen readers, and retrieval systems to parse than the former client-only shell.

The largest remaining weaknesses are not speed scores:

1. **The project claims are summaries, not teachable case studies.** An agent can identify the project, stack, and claimed contribution, but usually cannot learn the problem, constraints, design decisions, evaluation method, measurable result, limitations, or Seyam's exact role without leaving the site and interpreting an entire repository. This is the highest-value content opportunity.
2. **The portfolio does not yet have a strong observed search footprint.** At audit time, exact-name and `site:seyamalam.vercel.app` searches surfaced multiple third-party academic/profile records but not the portfolio in the returned results. This is a point-in-time observation, not proof that the domain is excluded from Google's index. Deployment, Search Console URL inspection, sitemap submission, and subsequent impressions must be checked before drawing a firm indexing conclusion.
3. **Crawler intent is not separated.** The current wildcard allow rule permits both OpenAI search discovery and potential training. OpenAI documents `OAI-SearchBot` as the control for ChatGPT search summaries/snippets and `GPTBot` as the separate control for potential training. The desired policy should be explicit rather than accidental. [OpenAI Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
4. **Identity markup can be more precise.** The site emits an accurate-looking `Person` object on every page. An `/about` page whose primary subject is one person is a documented use case for `ProfilePage` with `mainEntity: Person`; putting the profile-specific graph there and giving the person a stable `@id` would express the relationship more clearly. Structured data must match visible content, and eligibility is not a display or ranking guarantee. [Google ProfilePage documentation](https://developers.google.com/search/docs/appearance/structured-data/profile-page), [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
5. **The installed web-app manifest is stale.** It still describes the portfolio as “Full Stack Developer & Research Scientist,” claims “8+” publications, uses the old black theme, and references `/favicon/favicon-96x96.png`, which returned HTTP 404 locally. This does not block ordinary crawling, but it creates a contradictory machine-readable identity and one broken artifact.
6. **`llms.txt` is optional and experimental.** It may be a useful compact CV/site map for tools that intentionally fetch it, but it is explicitly a proposal rather than an IETF or W3C standard. Google says no special AI text file is needed for Search or generative-search visibility. It must not be presented as an AI-ranking feature or replace HTML, robots.txt, or the sitemap. [Original llms.txt proposal](https://llmstxt.org/), [Google AI-features guidance](https://developers.google.com/search/docs/appearance/ai-features)

### Rendered-output verification

The production build was started locally and inspected through both raw HTTP responses and a semantic browser/agent view:

- All six main routes returned useful server-rendered text with exactly one `h1`.
- All six routes emitted the correct self-referential canonical URL. The earlier source-only suspicion that child pages inherited the homepage canonical was disproved by rendered output.
- `/robots.txt` and `/sitemap.xml` returned HTTP 200; the sitemap listed all six absolute canonical routes.
- The homepage exposed a `Person` JSON-LD object with `sameAs`, employer, affiliation, location, and subject areas.
- The three résumé PDFs were machine-readable with text extraction, and all résumé/download endpoints returned HTTP 200.
- `/llms.txt` returned 404, which is not a Google Search defect because Google says no special AI file is required.

The deployed site is not yet equivalent to this verified build. On 2026-08-10, `https://seyamalam.vercel.app/` returned the older portfolio and declared `https://www.seyamalam.xyz` as canonical. The custom domain returned only a 114-byte script redirecting to `/lander`, rather than the portfolio. Until the new build is deployed and one permanent origin is selected, crawlers receive conflicting identity/canonical signals. This is the most urgent production discoverability issue.

## What “successful with AI” should mean

There is no single “AI score.” Test the site against observable tasks:

| Capability | Success test | Current assessment |
| --- | --- | --- |
| Discovery | A crawler can fetch each public route, follow internal links, and find it in the sitemap. | Strong, subject to deployment/CDN verification. |
| Identity | A system can resolve the person, name variants, occupation, location, and authoritative profiles without contradiction. | Good; `Person.sameAs`, ORCID, Scholar, and GitHub help. A stable entity `@id` and scoped `ProfilePage` would improve the graph. |
| Comprehension | From HTML alone, a system can explain what each project does and Seyam's contribution. | Moderate. Summaries are useful but too compressed for reliable explanation. |
| Teaching value | A system or reader can learn the method: problem → constraints → decision → implementation → evaluation → result → limitation. | Weak. Dedicated case studies are missing. |
| Verifiability | Important claims point to a DOI, repository location, release, benchmark, demo, or other primary artifact. | Strong for publications; moderate for projects; weak for general experience claims. |
| Freshness | Dates and current roles are accurate and visibly maintained. | Good today, but the sitemap uses one hard-coded update date and needs a maintenance rule. |
| Agent operability | An interaction agent can recognize links, menu controls, and downloads using semantic names/roles/states. | Good. Native anchors, navigation landmarks, labels, and a skip link are present. Test the `<details>` mobile menu with agent/accessibility tooling after deployment. |

## Standards and evidence

### 1. Crawlability and indexing

- `robots.txt` is standardized by the IETF Robots Exclusion Protocol. It communicates crawler access rules; it is not authentication or authorization. [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html)
- Google generally discovers links reliably when they are `<a>` elements with `href` values. Descriptive anchor text helps people and Google understand the destination. Every important page should be reachable through internal links. The site's Next `Link` navigation and normal external anchors satisfy this pattern. [Google link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- A sitemap helps discovery and should contain absolute canonical URLs, but it is only a hint and does not guarantee crawling or indexing. The current root sitemap covers all six primary routes with absolute URLs. [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- Page-level `noindex` and snippet rules are readable only when the crawler may fetch the page. Blocking a URL in robots.txt while expecting a robot meta tag on that page to control indexing is contradictory. [Google robots meta specifications](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- Google can process JavaScript, but documents additional rendering limitations and complexity. Serving the portfolio's main claims in initial HTML is the safer and more broadly interoperable choice. [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript)

### 2. Google generative search

Google's official guidance says its generative search features use the same core discovery and indexing system as Search. Eligibility requires an indexed page that may be shown with a snippet; compliance still does not guarantee indexing or inclusion. Google recommends original, experience-based material, descriptive sectioning, crawlability, good page experience, and reduced duplication. It explicitly says special AI markup, AI-only rewrites, tiny “chunks,” and `llms.txt` are unnecessary for Google Search. [Google's generative-AI search guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

For this portfolio, the practical implication is to publish first-hand engineering case studies rather than AI-targeted keyword pages. A useful case study should answer:

1. What real problem existed?
2. What constraints and failure modes mattered?
3. What was Seyam personally responsible for?
4. Which alternatives were considered, and why was this design selected?
5. How was correctness, performance, or model quality evaluated?
6. What quantitative or reproducible evidence supports the result?
7. What did not work, and what remains limited?
8. Where can a reader inspect the source, release, benchmark, paper, demo, or dataset?

This material genuinely teaches a reader and gives retrieval systems distinctive, attributable facts. Google likewise recommends original information, demonstrable first-hand expertise, clear authorship, sourcing, and evidence rather than commodity summaries. [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

### 3. ChatGPT search and interaction agents

OpenAI's first-party documentation makes three separate concerns clear:

- Allowing `OAI-SearchBot` supports possible discovery, summaries, snippets, citations, and links in ChatGPT search. Inclusion is not guaranteed.
- `GPTBot` is the separate robots user agent for potential training. Search inclusion and training permission therefore do not need to share the same policy.
- ChatGPT Agent in Atlas uses ARIA roles, labels, and states to interpret page structure and controls. Descriptive accessible semantics improve both human assistive-technology use and agent operability.

Source: [OpenAI Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq).

Recommended policy decision:

- If the goal is maximum ChatGPT search discoverability and training is acceptable, explicitly allow both crawlers.
- If search discovery is desired but potential training is not, allow `OAI-SearchBot` and disallow `GPTBot`.
- Do not add MCP or A2A merely for portfolio discovery. Those protocols expose callable tools/services between agents; they do not replace a crawlable public portfolio.

The deployed CDN/WAF must also allow the chosen crawler. An app-level robots file cannot help if edge bot protection returns a challenge or 403 before the page is served.

### 4. Semantic HTML and accessibility

The site's `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<time>`, headings, and skip link provide useful programmatic structure. W3C/WAI documents that semantic elements create landmark regions and that headings should describe and reflect the page's organization. WCAG requires programmatically determinable information and relationships, meaningful page titles, and descriptive headings and labels. [WAI semantic-region technique](https://www.w3.org/WAI/WCAG21/Techniques/html/H101), [WAI page-structure tutorial](https://www.w3.org/WAI/tutorials/page-structure/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

Audit criteria:

- Exactly one descriptive page-level `h1`; subsequent headings form a meaningful outline.
- One primary `main` landmark and labelled navigation regions.
- Native links and buttons are used according to behavior; no click-only generic containers.
- Link text is understandable in context and does not consist only of ambiguous “read more” labels.
- Images have purpose-appropriate alternatives; decorative graphics are hidden from accessibility APIs.
- Interactive controls expose an accessible name, role, current state, keyboard operation, and visible focus.
- Important facts exist as text, not only in images, animation, canvas, or CSS decoration.
- The DOM order still makes sense without the visual layout.

### 5. Structured data

Google recommends JSON-LD but requires structured data to be complete, current, relevant, and representative of visible page content. Correct markup only creates eligibility for supported features; it does not guarantee a rich result or higher ranking. [Google structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)

Current positives:

- A `Person` has `name`, `url`, image, job title, description, location, employer, affiliation, subject knowledge, and authoritative `sameAs` links.
- The markup is emitted with server HTML rather than requiring a client interaction.

Recommended refinement:

- Give the person a stable absolute identifier such as `"@id": "https://seyamalam.vercel.app/#person"` and reuse it wherever the person is referenced.
- On `/about`, use `ProfilePage` as the page entity and the `Person` as `mainEntity`; only include accurate properties visibly supported on that page.
- Give individual pages their own page-level metadata/canonical. Consider page-specific `CollectionPage`/`ItemList` or `ScholarlyArticle` markup only when the visible content and required properties warrant it; do not add schema merely to increase the number of types.
- Validate deployed markup with Google's Rich Results Test and URL Inspection. A local schema validator cannot prove crawlability or eligibility.

### 6. `llms.txt`: accurate status

Jeremy Howard's September 2024 document calls `/llms.txt` “a proposal to standardise.” It proposes a root Markdown file with an H1, summary, explanatory text, and curated link sections, mainly to provide inference-time context. It does not specify how systems must discover or process the file. [Original proposal](https://llmstxt.org/)

Therefore:

- Treat it as a small experimental convenience, not a web standard or ranking mechanism.
- It can be worthwhile for this portfolio because a concise, maintained overview could link the CV, case studies, publications, ORCID, and GitHub artifacts.
- It should contain only verified facts already supported by the human-facing site and canonical sources.
- It must not become a second, stale biography. Generate it from the same data source or give it an explicit maintenance check.
- Its impact must be measured through actual crawler logs/referrals or agent retrieval tests, not assumed from its presence.
- Google explicitly says it neither helps nor harms Google Search visibility because Google Search ignores it. [Google generative-AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

## Prioritized practical audit

### P0 — correct before relying on search visibility

- [x] Verify every route's canonical is self-referential and consistent with its sitemap URL.
- [ ] Deploy the verified Next.js 16 build; the public Vercel URL still serves the old site.
- [ ] Choose the intended permanent production origin. The old public build canonicalizes to `www.seyamalam.xyz`, while that domain currently serves a lander; the new local build canonicalizes to `seyamalam.vercel.app`.
- [ ] Redirect alternate hosts/protocols to the permanent origin only after that origin is serving the portfolio.
- [ ] Fetch each deployed route as a crawler and confirm HTTP 200, useful HTML without interaction, correct title/description/canonical, and no `noindex`.
- [ ] Verify `/robots.txt` and `/sitemap.xml` are reachable at the production root and contain the intended absolute origin.
- [ ] Decide and document separate `OAI-SearchBot` and `GPTBot` policy.
- [ ] Update the web-app manifest to match the current identity/theme and remove or create the missing 96px shortcut icon.

### P1 — make the portfolio teach and prove

- [ ] Publish a dedicated, stable URL for each flagship project.
- [ ] Use the case-study structure: problem, constraints, role, decisions, implementation, evaluation, results, limitations, artifacts.
- [ ] Add claim-level links to primary evidence: exact repository paths, releases, package registries, benchmarks, live demos, papers, datasets, or recordings.
- [ ] Include concrete dates/version identifiers so agents can distinguish current from historical work.
- [ ] State uncertainty honestly. Do not turn unverified impact, performance, authorship, employment, or adoption into precise claims.
- [ ] Add a visible “last materially reviewed” date where freshness matters; update sitemap dates only when the corresponding page materially changes.

### P2 — strengthen machine-readable identity

- [ ] Add a stable `Person` `@id` and scope an accurate `ProfilePage` graph to `/about`.
- [ ] Ensure the visible About page supports every structured-data identity and affiliation claim.
- [ ] Validate JSON-LD in Google's tools after deployment and inspect Search Console indexing/canonical reports.
- [ ] Use descriptive page titles and descriptions that differentiate Work, Research, Experience, About, and Contact.

### P3 — optional experiment

- [ ] Add `/llms.txt` only if it can be generated or maintained from the same verified data.
- [ ] Label it internally as a proposal-based experiment.
- [ ] Test a fixed question set with and without the file, and inspect server logs to determine whether target systems actually request it.

## Retrieval test set

Run these questions against Google, ChatGPT search, and a clean browsing agent after deployment. Score answer correctness and citation quality, not whether an arbitrary tool reports “AI-ready.”

1. Who is Touhidul Alam Seyam, and which profiles establish that identity?
2. What does bun-scikit implement, what was Seyam's role, and where is the evidence?
3. How did the Kaggriculture agent evaluation prevent misleading results?
4. Which of Seyam's publications are peer-reviewed, and what are their DOI records?
5. What changed between a research experiment and a production system in one flagship project?
6. Which claims on the portfolio are current as of 2026, and which are historical?
7. Can an agent download the software-engineering résumé using the control's accessible name?
8. Does every factual answer cite the portfolio page plus the strongest primary artifact rather than merely restating a snippet?

Record false claims, missing citations, stale facts, and mistaken identity separately. The target is not identical wording; it is a correct, attributable answer grounded in the intended source.
