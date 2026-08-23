const apiHeaders = {
  "Cache-Control": "public, max-age=0, s-maxage=300",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Accept, Content-Type",
};

export function apiJson(data: unknown) {
  return Response.json(data, { headers: apiHeaders });
}

export function apiProblem(status: number, code: string, detail: string, resolution: string) {
  return Response.json({
    type: `https://seyamalam.vercel.app/developers#${code.replaceAll("_", "-")}`,
    title: status === 400 ? "Invalid request" : "API error",
    status,
    code,
    detail,
    resolution,
  }, {
    status,
    headers: { ...apiHeaders, "Content-Type": "application/problem+json" },
  });
}

export function paginate<T>(request: Request, items: readonly T[]) {
  const { searchParams } = new URL(request.url);
  const limitValue = searchParams.get("limit");
  const cursorValue = searchParams.get("cursor");
  const limit = limitValue === null ? items.length : Number(limitValue);
  const offset = cursorValue === null ? 0 : Number(cursorValue);

  if (!Number.isInteger(limit) || limit < 1 || limit > 50) {
    return apiProblem(400, "invalid_limit", "The limit query parameter must be an integer from 1 through 50.", "Remove limit to retrieve the complete collection, or provide an integer from 1 through 50.");
  }

  if (!Number.isInteger(offset) || offset < 0 || offset > items.length) {
    return apiProblem(400, "invalid_cursor", "The cursor query parameter is not a valid collection offset.", "Use the nextCursor value returned by a previous response, or omit cursor to start at the beginning.");
  }

  const data = items.slice(offset, offset + limit);
  const nextOffset = offset + data.length;

  return apiJson({
    data,
    count: data.length,
    total: items.length,
    nextCursor: nextOffset < items.length ? String(nextOffset) : null,
  });
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
