"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { achievements, profile, projects, publications, skillGroups } from "@/data/site";

const routes = [
  { title: "Home", detail: "Overview and selected work", href: "/", kind: "Route" },
  { title: "Projects", detail: "Eleven complete engineering case studies", href: "/projects", kind: "Route" },
  { title: "Research", detail: "Ten published research works", href: "/research", kind: "Route" },
  { title: "Experience", detail: "Roles, hackathon results, and leadership", href: "/experience", kind: "Route" },
  { title: "About", detail: "Background, principles, and technical range", href: "/about", kind: "Route" },
  { title: "Contact", detail: "Email, profiles, and resume library", href: "/contact", kind: "Route" },
] as const;

const resumes = [
  { title: "Software Engineer resume", detail: "ATS-ready editorial edition · PDF", href: "/resume/software-engineer-ats.pdf", kind: "Resume" },
  { title: "ML, AI & Agents resume", detail: "ATS-ready blueprint edition · PDF", href: "/resume/ml-research-ats.pdf", kind: "Resume" },
  { title: "Full-stack compact resume", detail: "ATS-ready product sheet · PDF", href: "/resume/full-stack-compact-ats.pdf", kind: "Resume" },
  { title: "Universal resume", detail: "ATS-ready universal edition · PDF", href: "/resume/universal-ats.pdf", kind: "Resume" },
  { title: "Complete resume pack", detail: "All PDF and editable DOCX files · ZIP", href: "/resume/ats-resume-pack.zip", kind: "Resume" },
] as const;

const searchItems = [
  ...routes,
  ...projects.map((project) => ({ title: project.title, detail: `${project.status} · ${project.summary}`, href: `/projects/${project.slug}`, kind: "Project", keywords: `${project.stack.join(" ")} ${project.contribution}` })),
  ...publications.map((publication) => ({ title: publication.title, detail: `${publication.kind} · ${publication.venue} · ${publication.year}`, href: publication.href, kind: "Research" })),
  ...achievements.map((achievement) => ({ title: achievement.title, detail: `${achievement.result} · ${achievement.organizer}`, href: achievement.href ?? "/experience", kind: "Recognition", keywords: achievement.note })),
  ...skillGroups.flatMap((group) => group.skills.map((skill) => ({ title: skill, detail: group.label, href: "/about", kind: "Skill" }))),
  ...resumes,
  { title: "GitHub", detail: "Source code and repository archive", href: profile.github, kind: "Profile" },
  { title: "LinkedIn", detail: "Professional profile", href: profile.linkedin, kind: "Profile" },
  { title: "Google Scholar", detail: "Publication and citation profile", href: profile.scholar, kind: "Profile" },
];

function openCommandPalette() {
  window.dispatchEvent(new Event("site:command"));
}

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const sync = () => setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
    window.requestAnimationFrame(sync);
    window.addEventListener("site:theme", sync);
    return () => window.removeEventListener("site:theme", sync);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.themeAnimating = "true";
    window.setTimeout(() => {
      document.documentElement.dataset.theme = next;
      localStorage.setItem("seyam-theme", next);
      setTheme(next);
      window.dispatchEvent(new Event("site:theme"));
    }, 170);
    window.setTimeout(() => delete document.documentElement.dataset.themeAnimating, 720);
  };

  return { theme, toggle };
}

export function HeaderTools() {
  const [sidebar, setSidebar] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    if (!sidebar) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setSidebar(false); };
    document.body.classList.add("overlay-open");
    window.addEventListener("keydown", close);
    return () => {
      document.body.classList.remove("overlay-open");
      window.removeEventListener("keydown", close);
    };
  }, [sidebar]);

  return (
    <div className="header-tools">
      <button className="tool-button tool-search" type="button" onClick={openCommandPalette} data-tooltip="Search the entire site">
        <span>Search</span><kbd>⌘K</kbd>
      </button>
      <button className="tool-button theme-button" type="button" onClick={toggle} data-tooltip={`Use ${theme === "dark" ? "light" : "dark"} theme`} aria-label={`Use ${theme === "dark" ? "light" : "dark"} theme`}>
        <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
      </button>
      <button className="tool-button sidebar-trigger" type="button" onClick={() => setSidebar(true)} aria-label="Open navigation">
        <span>Menu</span><b aria-hidden="true">+</b>
      </button>
      <div className="sidebar-scrim" data-open={sidebar} onClick={() => setSidebar(false)} />
      <aside className="animated-sidebar" data-open={sidebar} aria-hidden={!sidebar} aria-label="Site navigation">
        <div className="sidebar-top"><span>INDEX / 06</span><button type="button" onClick={() => setSidebar(false)} aria-label="Close navigation">×</button></div>
        <nav>
          {routes.map((route, index) => (
            <Link key={route.href} href={route.href} onClick={() => setSidebar(false)} data-transition="nav-swap">
              <span>{String(index + 1).padStart(2, "0")}</span><strong>{route.title}</strong><b>↗</b>
            </Link>
          ))}
        </nav>
        <div className="sidebar-actions">
          <button type="button" onClick={() => { setSidebar(false); openCommandPalette(); }}>Search everything <kbd>⌘K</kbd></button>
          <a href="/resume/universal-ats.pdf" download>Universal resume <span>↓</span></a>
        </div>
      </aside>
    </div>
  );
}

export function SiteTools() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggle } = useTheme();

  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const filtered = terms.length === 0 ? searchItems : searchItems.filter((item) => {
      const haystack = `${item.title} ${item.detail} ${"keywords" in item ? item.keywords ?? "" : ""}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
    return filtered.slice(0, 12);
  }, [query]);

  useEffect(() => {
    const command = () => setOpen(true);
    const keys = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("site:command", command);
    window.addEventListener("keydown", keys);
    return () => {
      window.removeEventListener("site:command", command);
      window.removeEventListener("keydown", keys);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overlay-open");
      window.requestAnimationFrame(() => inputRef.current?.focus());
    } else document.body.classList.remove("overlay-open");
    return () => document.body.classList.remove("overlay-open");
  }, [open]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".deferred-section, .project-card, .case-story > section, .case-decisions li, .publication-list li"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.dataset.revealed = "true");
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).dataset.revealed = "true";
        observer.unobserve(entry.target);
      }
    }), { rootMargin: "0px 0px -8%", threshold: 0.08 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  const onPaletteKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") { event.preventDefault(); setActive((value) => Math.min(value + 1, results.length - 1)); }
    if (event.key === "ArrowUp") { event.preventDefault(); setActive((value) => Math.max(value - 1, 0)); }
    if (event.key === "Enter" && results[active]) {
      event.preventDefault();
      document.getElementById(`command-result-${active}`)?.click();
    }
  };

  return (
    <>
      <div className="theme-blinds" aria-hidden="true">{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</div>
      <div className="command-scrim" data-open={open} onMouseDown={() => setOpen(false)} />
      <section className="command-palette" data-open={open} role="dialog" aria-modal="true" aria-label="Search the entire site">
        <div className="command-input-row">
          <span aria-hidden="true">⌕</span>
          <input ref={inputRef} value={query} onChange={(event) => { setQuery(event.target.value); setActive(0); }} onKeyDown={onPaletteKey} placeholder="Search projects, research, skills, wins, resumes…" aria-label="Search query" />
          <kbd>ESC</kbd>
        </div>
        <div className="command-meta"><span>{query ? `${results.length} matches` : "Site index"}</span><span>↑↓ navigate · ↵ open</span></div>
        <div className="command-results" role="listbox">
          {results.map((item, index) => (
            <a id={`command-result-${index}`} key={`${item.kind}-${item.title}`} href={item.href} className={index === active ? "is-active" : ""} onMouseEnter={() => setActive(index)} onClick={() => setOpen(false)} role="option" aria-selected={index === active}>
              <span>{item.kind}</span><div><strong>{item.title}</strong><small>{item.detail}</small></div><b aria-hidden="true">↗</b>
            </a>
          ))}
          {results.length === 0 && <p className="command-empty">No exact match. Try a technology, project name, or “resume”.</p>}
        </div>
      </section>

      <nav className="preview-rail" aria-label="Quick route preview">
        {routes.map((route) => <Link key={route.href} href={route.href} className={pathname === route.href ? "is-active" : ""} data-label={route.title} data-transition="nav-swap"><i /></Link>)}
      </nav>

      <nav className="mobile-dock" aria-label="Mobile navigation">
        <Link href="/" className={pathname === "/" ? "is-active" : ""} data-transition="nav-back"><span>⌂</span><small>Home</small></Link>
        <Link href="/projects" className={pathname.startsWith("/projects") ? "is-active" : ""} data-transition="nav-swap"><span>◇</span><small>Work</small></Link>
        <button type="button" onClick={openCommandPalette}><span>⌕</span><small>Search</small></button>
        <a href="/resume/universal-ats.pdf" download><span>↓</span><small>Resume</small></a>
        <button type="button" onClick={toggle}><span>{theme === "dark" ? "☼" : "◐"}</span><small>Theme</small></button>
      </nav>
    </>
  );
}
