"use client";

import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

const App = dynamic(() => import("@/frontend/app"), { ssr: false });

export default function Shell() {
  return <App />;
}