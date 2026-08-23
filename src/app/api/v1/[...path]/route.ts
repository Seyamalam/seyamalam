import { apiNotFound, apiOptions, rejectWrites } from "@/lib/portfolio-api";

export async function GET(request: Request) {
  return apiNotFound(new URL(request.url).pathname);
}

export const OPTIONS = apiOptions;
export const { POST, PUT, PATCH, DELETE } = rejectWrites;
