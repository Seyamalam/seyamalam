"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Largest Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime)
          }
        }
      })
      
      try {
        observer.observe({ entryTypes: ["largest-contentful-paint"] })
      } catch (e) {
        // Fallback for browsers that don't support this
      }

      // First Contentful Paint
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === "first-contentful-paint") {
            console.log("FCP:", entry.startTime)
          }
        }
      })
      
      try {
        paintObserver.observe({ entryTypes: ["paint"] })
      } catch (e) {
        // Fallback
      }

      // Cleanup
      return () => {
        observer.disconnect()
        paintObserver.disconnect()
      }
    }
  }, [])

  return null
}