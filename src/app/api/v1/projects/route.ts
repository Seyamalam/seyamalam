import { projects } from "@/data/site";
import { apiOptions, paginate, rejectWrites } from "@/lib/portfolio-api";

export function GET(request: Request) {
  return paginate(request, projects);
}

export const OPTIONS = apiOptions;
export const { POST, PUT, PATCH, DELETE } = rejectWrites;
