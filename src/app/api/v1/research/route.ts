import { publications } from "@/data/site";
import { apiJson, apiOptions, rejectWrites } from "@/lib/portfolio-api";

export function GET() {
  return apiJson({ data: publications, count: publications.length });
}

export const OPTIONS = apiOptions;
export const { POST, PUT, PATCH, DELETE } = rejectWrites;
