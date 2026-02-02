"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";
  layout?: string;
  className?: string;
}

// AdSense component - replace data-ad-client with your actual client ID
export default function AdBanner({
  slot,
  format = "auto",
  layout,
  className = "",
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Push ads when component mounts
      if (typeof window !== "undefined" && (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle) {
        ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div
      ref={adRef}
      className={`ad-container overflow-hidden ${className}`}
      aria-label="Advertisement"
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXX" // Replace with your AdSense client ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Placeholder component for development/preview
export function AdPlaceholder({
  type = "horizontal",
  className = "",
}: {
  type?: "horizontal" | "vertical" | "square" | "leaderboard" | "sidebar";
  className?: string;
}) {
  const sizes = {
    horizontal: "h-24 w-full",
    vertical: "h-[600px] w-[160px]",
    square: "h-[250px] w-[300px]",
    leaderboard: "h-[90px] w-full max-w-[728px]",
    sidebar: "h-[250px] w-full max-w-[300px]",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-gray-700 bg-gray-900/30 ${sizes[type]} ${className}`}
      aria-label="Advertisement placeholder"
    >
      <div className="text-center">
        <p className="text-xs font-medium text-gray-500">ADVERTISEMENT</p>
        <p className="mt-1 text-[10px] text-gray-600">Ad Space - {type}</p>
      </div>
    </div>
  );
}

// In-article ad for content pages
export function InArticleAd({ className = "" }: { className?: string }) {
  return (
    <div
      className={`my-8 flex flex-col items-center ${className}`}
      role="complementary"
      aria-label="Sponsored content"
    >
      <p className="mb-2 text-[10px] uppercase tracking-wider text-gray-500">
        Sponsored
      </p>
      <AdPlaceholder type="horizontal" />
    </div>
  );
}

// Sidebar ad component
export function SidebarAd({ className = "" }: { className?: string }) {
  return (
    <div
      className={`sticky top-20 ${className}`}
      role="complementary"
      aria-label="Sidebar advertisement"
    >
      <p className="mb-2 text-center text-[10px] uppercase tracking-wider text-gray-500">
        Sponsored
      </p>
      <AdPlaceholder type="sidebar" />
    </div>
  );
}

