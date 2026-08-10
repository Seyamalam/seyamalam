# Resume source audit: Touhidul Alam Seyam

Audit date: 2026-08-10 (Asia/Dhaka)

This note reconciles the existing portfolio data and PDF resume with first-party public sources. It is evidence for drafting a resume, not a finished resume. Facts marked **confirm with Seyam** should not be presented as current or exact until confirmed.

## Identity and contact

- Preferred public name appears to be **Touhidul Alam Seyam**. This exact name is used by the [GitHub profile](https://github.com/Seyamalam), [ORCID record](https://orcid.org/0009-0007-7512-1893), and the 2026 [Springer conference chapter](https://link.springer.com/chapter/10.1007/978-3-032-15764-5_45). The first 2024 Springer article instead prints **Touhidul Seyam Alam**; preserve the publication's author order only inside that citation.
- Public professional location: **Chattogram, Bangladesh**. GitHub currently says Agrabad, Chattogram; ORCID says Bangladesh; publisher affiliations consistently say Chattogram.
- Public links: [GitHub](https://github.com/Seyamalam), [ORCID](https://orcid.org/0009-0007-7512-1893), [Google Scholar](https://scholar.google.com/citations?user=gRkTVYEAAAAJ&hl=en), and the intended personal domain `seyamalam.xyz`. LinkedIn is conflicted: current GitHub profile metadata links [`/in/touhidul-alam-b675b521b`](https://www.linkedin.com/in/touhidul-alam-b675b521b/), while the portfolio config and ORCID point to [`/in/touhidulalamseyam`](https://www.linkedin.com/in/touhidulalamseyam). Confirm the canonical live profile before publishing.
- Email conflict: the checked-in PDF and publication correspondence use **seyamalam41@gmail.com**, while `src/config/site.config.ts` uses **seyamalam.41@gmail.com**. Gmail normally treats dots as equivalent, but an ATS-facing resume should display one canonical spelling. **Confirm with Seyam; `seyamalam41@gmail.com` has the strongest documentary support.**
- Phone in the site data is **+880 1311-104804**. It is personal/self-asserted and should be confirmed before publishing.
- The configured `www.seyamalam.xyz` and non-`www` domain currently serve a tiny script that redirects to a generic `/lander` page rather than the portfolio. The [Vercel deployment](https://seyamalam.vercel.app) is live. **Use the Vercel URL temporarily or fix the custom domain before featuring it on a resume.**

## Education

- **B.Sc. (Hons.) in Computer Science & Engineering, BGC Trust University Bangladesh — January 2023 to expected December 2026.** The public ORCID education record gives 2023-01-01 through 2026-12-31 and identifies the institution through ROR. As of the audit date, describe this as **Expected Dec 2026**, not as a completed degree. [ORCID](https://orcid.org/0009-0007-7512-1893)
- Existing PDF only: HSC (Science), Chattogram Cantonment Public College, 2021, GPA 4.83; SSC (Science), Gomdandi Pilot Model High School, 2019, GPA 5.00. These are self-asserted in the old resume but were not independently verified in a first-party public record. They are reasonable to retain only after user confirmation, and can be omitted from experienced-professional variants.

## Professional experience

### Strongly supported

- **Software Engineer, Application Development — Hello World Communications Ltd.** ORCID gives a start date of **19 August 2024** with no end date. GitHub currently lists the company and was updated in July 2026, supporting (but not conclusively proving) that the role remains current. Use **Aug 2024–Present** only after a quick user confirmation; otherwise use **Aug 2024–[confirmed end/current]**. [ORCID](https://orcid.org/0009-0007-7512-1893), [GitHub](https://github.com/Seyamalam)

### Plausible but needs confirmation

- **Research Assistant, BGC Trust University Bangladesh — July 2023–Present** appears in the old PDF. A publisher biography dated 2025 also calls Seyam a current research assistant, but ORCID does not contain this employment. The 2026 Springer chapter confirms only a BGC Trust University affiliation, not the job title. Confirm exact title, start month, current status, supervisor/lab, and 2–3 measurable contributions before using. [2025 publisher biography](https://sciencepublishinggroup.com/article/10.11648/j.mlr.20251001.11), [2026 Springer affiliation](https://link.springer.com/chapter/10.1007/978-3-032-15764-5_45)
- **Freelance Developer — March 2021–Present** appears in the PDF, while the portfolio data says 2020–Present and splits the work into overlapping “Data Analytics & AI Developer” and “Backend Developer” entries. This should become one role only. Confirm start month/year, whether it is still active, representative clients that may be named, and outcomes.
- **Executive Tech Team Member, BGC Trust University IT Club — 2024–Present** appears only in the old PDF. Confirm whether it is employment, leadership, or volunteering and whether it is current; likely place it under Leadership/Activities rather than Experience.

### Claims not yet evidenced

The portfolio's generic descriptions (“leading initiatives,” “scalable applications,” “clients worldwide,” “e-commerce, healthcare, and agricultural domains”) have no linked work artifacts or metrics. Do not copy them verbatim. Ask for scope, team size, named systems, users, latency/cost/revenue improvements, deployments, or delivery dates.

## Verified publications

The existing portfolio says “8+ publications.” ORCID currently contains eight works (one is an arXiv preprint); a 2026 Springer chapter and one 2025 institutional-journal article are also directly verifiable, giving **ten source-backed works in this audit**. Use a selected-publications section on a one-page resume and link ORCID/Scholar for the full list. Do not call all ten peer-reviewed, IEEE, or Springer publications.

1. Touhidul Seyam Alam, Chandni Barua Jowthi, and Abhijit Pathak. “Comparing pre-trained models for efficient leaf disease detection: a study on custom CNN.” *Journal of Electrical Systems and Information Technology* 11, article 12 (2024). Published 23 Feb 2024. DOI: [10.1186/s43067-024-00137-1](https://doi.org/10.1186/s43067-024-00137-1).
2. Touhidul Alam Seyam and Abhijit Pathak. “AgriScan: Next.js powered cross-platform solution for automated plant disease diagnosis and crop health management.” *Journal of Electrical Systems and Information Technology* 11, article 45 (2024). Published 24 Oct 2024. DOI: [10.1186/s43067-024-00169-7](https://doi.org/10.1186/s43067-024-00169-7). The publisher contribution statement says Seyam was corresponding author and led the custom model, training, dataset preparation, manuscript, application development/design, maintenance, and hosting.
3. Abhijit Pathak et al., including Touhidul Alam Seyam. “Application of Machine Learning K-Means Clustering and Linear Regression in Determining the Risk Level of Pulmonary Tuberculosis.” *2024 IEEE International Conference on Computing, Applications and Systems (COMPAS)*, pp. 1–6. DOI: [10.1109/COMPAS60761.2024.10796963](https://doi.org/10.1109/COMPAS60761.2024.10796963).
4. Abhijit Pathak, Touhidul Alam Seyam, et al. “Enhancing Cardiovascular Risk Prediction Using Support Vector Machines and Advanced Machine Learning Algorithms.” *COMPAS 2024*, pp. 1–6. DOI: [10.1109/COMPAS60761.2024.10796805](https://doi.org/10.1109/COMPAS60761.2024.10796805).
5. Sazzad Hossain, Touhidul Alam Seyam, et al. “Fine-tuning LLaMA 2 interference: a comparative study of language implementations for optimal efficiency.” *arXiv:2502.01651* (2025). This is a **preprint**, not a journal article. [arXiv](https://arxiv.org/abs/2502.01651).
6. Avijit Chowdhury, Touhidul Alam Seyam, et al. “Efficient Malware Classification Using Multiprocessing and Bag-of-Words Vectorization.” *Advances in Networks* 12(1), 19–28 (2025). Published 21 Mar 2025. DOI: [10.11648/j.net.20251201.12](https://doi.org/10.11648/j.net.20251201.12).
7. Sazzad Hossain, Touhidul Alam Seyam, et al. “Enhancing Agricultural Diagnostics: Advanced Training of Pre-Trained CNN Models for Paddy Leaf Disease Detection.” *Machine Learning Research* 10(1), 1–13 (2025). Published 31 Mar 2025. DOI: [10.11648/j.mlr.20251001.11](https://doi.org/10.11648/j.mlr.20251001.11).
8. Touhidul Alam Seyam et al. “Next-Generation K-Means Clustering: Mojo-Driven Performance for Big Data.” *International Journal of Intelligent Information Systems* 14(1), 7–19 (2025). Published 31 Mar 2025. DOI: [10.11648/j.ijiis.20251401.12](https://doi.org/10.11648/j.ijiis.20251401.12).
9. Touhidul Alam Seyam et al. “Architectures for AI-Driven Visual Assistance: Evaluating Server-Mediated Mobile and Direct Access Desktop Client Implementations.” *Proceedings of the 3rd International Conference on Big Data, IoT and Machine Learning*, LNNS 1800, 631–646 (2026). First online 1 Apr 2026. DOI: [10.1007/978-3-032-15764-5_45](https://doi.org/10.1007/978-3-032-15764-5_45). This new Springer chapter is missing from the checked-in portfolio and old PDF.
10. Abhijit Pathak, Touhidul Alam Seyam, Zarin Hadika, Arifur Rahaman, and Bulbul Ahamed. “Comparative Performance Evaluation of Classical Machine Learning and Quantum SVM for Heart Disease Prediction using a Quantum-Featured Dataset.” *Sonargaon University Journal* 5(1), 1–17 (2025). The institution-hosted [journal PDF](https://su.edu.bd/web_assets/journal/journal_five/journal3.pdf) and a coauthor's [university faculty publication list](https://baiust.ac.bd/arifur-rahaman/) support it; it is absent from the current ORCID record.

### Publication corrections to the current portfolio

- Leaf-disease paper uses **article number 12**, not pages “1–26” as the primary citation field.
- AgriScan uses **article number 45** and is 1–23 pages; listing “pages: 45” is misleading.
- The LLaMA work is an **arXiv preprint/CoRR record**. The title itself says “interference” even though the abstract discusses inference; reproduce the official title and do not silently “correct” it.
- “Machine Learning Journal” and “International Journal” in `portfolio.ts` are inaccurate/underspecified. Use **Machine Learning Research** and **International Journal of Intelligent Information Systems**.
- The 2026 Springer paper raises the directly verified publication count beyond the portfolio's old list.

## GitHub and software portfolio

- [GitHub profile](https://github.com/Seyamalam): public identity and current company match the resume; the account currently exposes **173 public repositories**. Do not use that number as an achievement without noting that many are forks. Repository count, stars, and follower counts are volatile.
- [bun-scikit](https://github.com/Seyamalam/bun-scikit) (2026): owned TypeScript repository for a scikit-learn-inspired ML library for Bun, with native Zig acceleration for core training paths, MIT license, CI, and benchmark workflows. This is stronger and more current than several generic landing-page projects in the old resume.
- [RoboFusion](https://github.com/Seyamalam/Robofusion) (2026): owned Python project for a multi-hazard smart-campus safety system. The repository documents ESP32 reference firmware/simulation, authenticated FastAPI services, SQLite/WAL persistence, a WebSocket dashboard, RBAC, incident lifecycle, automated tests, and load/benchmark tooling. Do not claim a competition placement unless Seyam supplies official results.
- [ASRRO Portal](https://github.com/Seyamalam/asrro) (2026): owned TypeScript/Next.js portal for the Andromeda Space and Robotics Research Organization, with a public site, member application/approval, role-aware operations, event management, reports, finance views, Convex, and authentication.
- [Kaggriculture](https://github.com/Seyamalam/Kaggriculture) (2026): owned Python repository for reproducible autonomous-agent evaluation in Kaggle's Kaggriculture simulation. The technical claims—seeded slot-swapped tournaments, replay corpus, regression gates, attribution—are evidenced in the repo. Ratings/win records are author-reported; use them only with an official Kaggle profile/submission link or screenshot.
- [Playground Series S6E8](https://github.com/Seyamalam/playground-series-s6e8) (2026): owned Python repository with leakage-safe target encoding, LightGBM/XGBoost/CatBoost experiments, OOF evaluation, and rank blending. The README reports a day-one rank of 6 and public AUC 0.96919; the position was explicitly time-sensitive and needs official Kaggle evidence before entering a resume.
- [Zodic](https://pypi.org/project/zodic/) (2025): a Zod-inspired Python validation library. PyPI identifies Touhidul Alam Seyam as author, `seyamalam` as maintainer, latest release 0.2.0 on 27 Jun 2025, MIT license, and Python 3.9+ support. This is the best externally verifiable packaged-software project.
- Older portfolio sites—Parishad Barta, Professor Sazzad, Luxe Retreats, Gravity Gym, BGCTUB IT Club, TechFest, and Ecom Five—are self-authored portfolio claims and/or deployments. They may be useful for a frontend resume, but verify that each live URL works and clarify ownership/client permission before implying sole authorship or production usage.

## Certifications

The [Certificates repository](https://github.com/Seyamalam/Certificates) and [PDF archive](https://github.com/Seyamalam/Certificates_PDF) contain evidence for many credentials, including Cisco Python Essentials 1/2, IBM Applied Data Science with Python, IBM Deep Learning with TensorFlow, University of Helsinki Elements of AI, HackerRank Problem Solving, Redis for Python Developers, and numerous IBM/Kaggle course certificates.

For an ATS resume, list at most 3–5 directly relevant credentials with exact issuer/title and year. The repository inventory is user-controlled evidence, not issuer-side verification; where possible, add issuer credential URLs/IDs. Avoid presenting short course completions as professional certifications.

## Safe, evidence-based positioning

Recommended headline variants:

- **Software Engineer | Full-Stack & Applied AI**
- **Software Engineer and Machine Learning Researcher**
- **Full-Stack Engineer | Next.js, TypeScript, Python, PostgreSQL**

Avoid **“AI/ML Expert,” “Research Scientist,” “Next.js Expert,”** and similar unqualified seniority claims. Public evidence supports applied research, engineering, publications, and open-source work; it does not establish an “expert” level or a formal Research Scientist role.

## Questions that block a fully accurate resume

1. Is Hello World Communications still current, and is **Software Engineer** the exact title? Which start date is correct: July 2024 (old PDF) or 19 Aug 2024 (ORCID)?
2. Is the BGC Trust University Research Assistant role still current? What lab/supervisor and measurable deliverables can be named?
3. Did freelance work begin in 2020 or March 2021, and should it still be listed as current?
4. Which email spelling and phone number should be public?
5. Is the expected graduation still December 2026? Current CGPA (only if strong and desired)?
6. Can official Kaggle/competition result links or screenshots substantiate rank/placement claims?
7. Which projects were solo work, team work, freelance/client work, or forks/adaptations? What was Seyam's specific role?
8. What production impact can be stated for Hello World projects: users, transactions, latency, uptime, delivery time, team size, or business outcome?

## Source reliability notes

- Highest confidence: publisher/DOI pages, IEEE records, Springer records, PyPI metadata, ORCID, institution-hosted journal files.
- Strong for code facts: owned GitHub repository code/README and GitHub API metadata; distinguish these from forked repositories and author-reported performance/competition claims.
- Supporting/self-asserted only: the existing PDF resume, checked-in portfolio data, publisher biography copy, GitHub profile biography, and certificate repository.
- Excluded: search snippets for people with similar names, unlinked claims from aggregators, and achievements that could not be tied to the GitHub/email/ORCID identity anchors.
