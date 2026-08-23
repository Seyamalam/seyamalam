import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import { profile, projects, publications } from "@/data/site";

const readOnlyAnnotations = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
} as const;

export const portfolioMcpHandler = createMcpHandler((server) => {
  server.registerTool(
    "get_profile",
    {
      title: "Get professional profile",
      description: "Get Touhidul Alam Seyam's published professional profile and contact links.",
      inputSchema: z.object({}).strict(),
      outputSchema: z.object({ profile: z.record(z.string(), z.unknown()) }),
      annotations: readOnlyAnnotations,
    },
    async () => ({
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: { profile },
    }),
  );

  server.registerTool(
    "list_projects",
    {
      title: "List software projects",
      description: "List published software projects and their primary evidence URLs.",
      inputSchema: z.object({}).strict(),
      outputSchema: z.object({ projects: z.array(z.record(z.string(), z.unknown())) }),
      annotations: readOnlyAnnotations,
    },
    async () => ({
      content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
      structuredContent: { projects: [...projects] },
    }),
  );

  server.registerTool(
    "list_research",
    {
      title: "List research publications",
      description: "List published research with DOI or primary-record URLs.",
      inputSchema: z.object({}).strict(),
      outputSchema: z.object({ publications: z.array(z.record(z.string(), z.unknown())) }),
      annotations: readOnlyAnnotations,
    },
    async () => ({
      content: [{ type: "text", text: JSON.stringify(publications, null, 2) }],
      structuredContent: { publications: [...publications] },
    }),
  );
}, {
  serverInfo: { name: "seyam-alam-portfolio", version: "1.0.0" },
  instructions: "Use these read-only tools to retrieve published portfolio, project, research, and contact information.",
});
