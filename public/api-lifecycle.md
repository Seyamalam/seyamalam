---
title: Portfolio API lifecycle policy
description: Versioning and deprecation policy for the public read-only portfolio API.
canonical: https://seyamalam.vercel.app/api-lifecycle.md
last-updated: 2026-08-23
---

# Portfolio API lifecycle policy

The current API version is `v1`. Additive fields may be introduced without a version change. Removing or changing a documented field requires a new URL version.

If an API version is deprecated, its documentation and responses will carry a deprecation notice for at least 90 days before removal. A planned removal will include an HTTP `Sunset` header with the retirement date and a `Link` header pointing to its successor or migration guide.

The API is public and read-only. It has no authenticated, billable, or mutating operations.
