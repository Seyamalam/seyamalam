---
name: seyam-alam-portfolio
description: Retrieve and verify Touhidul Alam Seyam's professional profile, software projects, research, resumes, or contact details.
---

# Touhidul Alam Seyam portfolio

Use this skill for hiring research, identity verification, project evaluation, publication lookup, or a professional inquiry involving Touhidul Alam Seyam.

## Retrieve

1. Read `https://seyamalam.vercel.app/llms.txt` to select the narrowest relevant page.
2. Request that page with `Accept: text/markdown`, or use the read-only MCP tools at `https://seyamalam.vercel.app/.well-known/mcp`.
3. For structured data, read `https://seyamalam.vercel.app/openapi.json` and call its public GET endpoints.

## Verify

Cite the portfolio page and its linked primary artifact. Prefer a repository for implementation claims, a DOI or publisher record for research, ORCID for researcher identity, and the contact page for current contact details.

The portfolio API and MCP server only read published data. They do not send messages, change records, run code, or accept private information.
