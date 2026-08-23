import { NextResponse, type NextRequest } from "next/server";
import { knownPagePaths, notFoundMarkdown, portfolioMarkdown } from "@/lib/agent-content";

const vary = "Accept, Accept-Encoding, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch";

export function proxy(request: NextRequest) {
  const acceptsMarkdown = request.headers.get("accept")?.toLowerCase().includes("text/markdown");

  if (acceptsMarkdown && (request.method === "GET" || request.method === "HEAD")) {
    const pathname = request.nextUrl.pathname;
    const found = knownPagePaths.has(pathname);
    const markdown = found ? portfolioMarkdown(pathname) : notFoundMarkdown(pathname);
    const body = pathname === "/"
      ? `---\ntitle: Touhidul Alam Seyam\ndescription: Software engineer and applied AI researcher in Chattogram, Bangladesh.\ncanonical: https://seyamalam.vercel.app/\nlast-updated: 2026-08-23\n---\n\n${markdown}`
      : markdown;
    return new Response(request.method === "HEAD" ? null : body, {
      status: found ? 200 : 404,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "public, max-age=0, s-maxage=3600",
        Vary: vary,
      },
    });
  }

  const response = NextResponse.next();
  response.headers.set("Vary", vary);
  return response;
}

export const config = {
  matcher: ["/", "/about", "/contact", "/experience", "/privacy", "/projects/:path*", "/research", "/((?!api|_next|favicon|resume|project-media|projects/.*\\.(?:png|webp|webm)$|.*\\..*).*)"],
};
