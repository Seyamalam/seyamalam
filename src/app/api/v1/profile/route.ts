import { profile } from "@/data/site";
import { apiJson, apiOptions, rejectWrites } from "@/lib/portfolio-api";

export function GET() {
  return apiJson({ data: profile });
}

export const OPTIONS = apiOptions;
export const { POST, PUT, PATCH, DELETE } = rejectWrites;
