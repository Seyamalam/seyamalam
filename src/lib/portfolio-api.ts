const apiHeaders = {
  "Cache-Control": "public, max-age=0, s-maxage=300",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Accept, Content-Type",
};

export function apiJson(data: unknown) {
  return Response.json(data, { headers: apiHeaders });
}

export function apiOptions() {
  return new Response(null, { status: 204, headers: apiHeaders });
}

export function methodNotAllowed() {
  return Response.json({
    type: "https://seyamalam.vercel.app/developers#method-not-allowed",
    title: "Method not allowed",
    status: 405,
    code: "method_not_allowed",
    detail: "The portfolio API is read-only and accepts GET, HEAD, and OPTIONS requests.",
    resolution: "Use GET to retrieve the published resource.",
  }, {
    status: 405,
    headers: { ...apiHeaders, "Content-Type": "application/problem+json", Allow: "GET, HEAD, OPTIONS" },
  });
}

export function apiNotFound(pathname: string) {
  return Response.json({
    type: "https://seyamalam.vercel.app/developers#not-found",
    title: "API resource not found",
    status: 404,
    code: "api_resource_not_found",
    detail: `No portfolio API resource exists at ${pathname}.`,
    resolution: "Read /openapi.json or use /api/v1/profile, /api/v1/projects, or /api/v1/research.",
  }, {
    status: 404,
    headers: { ...apiHeaders, "Content-Type": "application/problem+json" },
  });
}

export const rejectWrites = {
  POST: methodNotAllowed,
  PUT: methodNotAllowed,
  PATCH: methodNotAllowed,
  DELETE: methodNotAllowed,
};
