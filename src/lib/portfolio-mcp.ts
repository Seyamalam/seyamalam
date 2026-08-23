import { profile, projects, publications } from "@/data/site";

type RpcRequest = {
  jsonrpc?: string;
  id?: string | number | null;
  method?: string;
  params?: { name?: string; arguments?: Record<string, unknown> };
};

const serverInfo = { name: "seyam-alam-portfolio", version: "1.0.0" };

const tools = [
  {
    name: "get_profile",
    description: "Get Touhidul Alam Seyam's published professional profile and contact links.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "list_projects",
    description: "List published software projects and their primary evidence URLs.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "list_research",
    description: "List published research with DOI or primary-record URLs.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
];

function result(id: RpcRequest["id"], value: unknown) {
  return { jsonrpc: "2.0", id: id ?? null, result: value };
}

function toolPayload(name: string | undefined) {
  if (name === "get_profile") return profile;
  if (name === "list_projects") return projects;
  if (name === "list_research") return publications;
  return null;
}

export async function handleMcpPost(request: Request) {
  let message: RpcRequest;
  try {
    message = (await request.json()) as RpcRequest;
  } catch {
    return Response.json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }, { status: 400 });
  }

  if (message.method === "initialize") {
    const requestedVersion = (message.params as { protocolVersion?: string } | undefined)?.protocolVersion;
    return Response.json(result(message.id, {
      protocolVersion: requestedVersion ?? "2025-06-18",
      capabilities: { tools: {} },
      serverInfo,
      instructions: "Use these read-only tools to retrieve published portfolio, project, research, and contact information.",
    }));
  }

  if (message.method === "notifications/initialized") return new Response(null, { status: 202 });
  if (message.method === "ping") return Response.json(result(message.id, {}));
  if (message.method === "tools/list") return Response.json(result(message.id, { tools }));

  if (message.method === "tools/call") {
    const payload = toolPayload(message.params?.name);
    if (payload) {
      return Response.json(result(message.id, {
        content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
        structuredContent: payload,
      }));
    }
    return Response.json({ jsonrpc: "2.0", id: message.id ?? null, error: { code: -32602, message: "Unknown tool" } }, { status: 400 });
  }

  return Response.json({ jsonrpc: "2.0", id: message.id ?? null, error: { code: -32601, message: "Method not found" } }, { status: 404 });
}

export function mcpDiscovery() {
  return Response.json({
    name: serverInfo.name,
    description: "Read-only MCP server for Touhidul Alam Seyam's portfolio.",
    version: serverInfo.version,
    protocol: "mcp",
    transport: "streamable-http",
    endpoint: "https://seyamalam.vercel.app/.well-known/mcp",
    capabilities: { tools: tools.map(({ name, description }) => ({ name, description })) },
  }, { headers: { "Cache-Control": "public, max-age=3600" } });
}
