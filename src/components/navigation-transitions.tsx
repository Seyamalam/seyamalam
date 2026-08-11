"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type NativeTransitionDocument = Document & {
  startViewTransition: (options: {
    update: () => Promise<void> | void;
    types?: string[];
  }) => ViewTransition;
};

function waitForPath(target: URL) {
  return new Promise<void>((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      observer.disconnect();
      window.clearTimeout(timeout);
      resolve();
    };
    const matches = () => window.location.pathname === target.pathname && window.location.search === target.search;
    const observer = new MutationObserver(() => { if (matches()) finish(); });
    const timeout = window.setTimeout(finish, 1200);
    observer.observe(document.body, { childList: true, subtree: true });
    if (matches()) finish();
  });
}

export function NavigationTransitions() {
  const router = useRouter();
  const navigating = useRef(false);

  useEffect(() => {
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

      const target = new URL(anchor.href, window.location.href);
      if (target.origin !== window.location.origin) return;
      if (target.pathname === window.location.pathname && target.search === window.location.search) return;

      event.preventDefault();
      event.stopPropagation();
      if (navigating.current) return;

      const type = anchor.dataset.transition ?? "nav-swap";
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const canTransition = "startViewTransition" in document && !reducedMotion;

      if (!canTransition) {
        router.push(`${target.pathname}${target.search}${target.hash}`);
        return;
      }

      navigating.current = true;
      document.documentElement.dataset.transition = type;

      const transition = (document as NativeTransitionDocument).startViewTransition({
        types: [type],
        update: async () => {
          router.push(`${target.pathname}${target.search}${target.hash}`);
          await waitForPath(target);
        },
      });

      const watchdog = window.setTimeout(() => {
        if (window.location.pathname !== target.pathname) transition.skipTransition();
      }, 900);

      transition.finished.finally(() => {
        window.clearTimeout(watchdog);
        navigating.current = false;
        delete document.documentElement.dataset.transition;
      });
    };

    document.addEventListener("click", navigate, true);
    return () => document.removeEventListener("click", navigate, true);
  }, [router]);

  return null;
}
