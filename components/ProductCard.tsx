"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product, ProductCTA } from "@/lib/supabase/types";

interface ProductCardProps {
  product: Product;
}

const ctaIcons: Record<string, React.ReactNode> = {
  appstore: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  playstore: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  ),
  download: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  ),
  launch: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  external: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  ),
};

const categoryColors: Record<string, string> = {
  "iOS App": "bg-blue-500/20 text-blue-400",
  "Android App": "bg-green-500/20 text-green-400",
  "Web Tool": "bg-purple-500/20 text-purple-400",
  "Downloadable PDF": "bg-orange-500/20 text-orange-400",
  "AI Product": "bg-pink-500/20 text-pink-400",
  Affiliate: "bg-yellow-500/20 text-yellow-400",
  Resource: "bg-cyan-500/20 text-cyan-400",
};

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const imageUrl = product.image_url;
  const ctaButtons = product.cta_buttons || [];
  const hasImage = imageUrl && !imageError;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 transition-all hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10">
      {/* Badge */}
      {product.badge && (
        <div className="absolute left-4 top-4 z-10">
          <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
            {product.badge}
          </span>
        </div>
      )}

      {/* Affiliate indicator */}
      {product.is_affiliate && (
        <div className="absolute right-4 top-4 z-10">
          <span
            className="rounded-full bg-yellow-500/20 px-2 py-1 text-[10px] font-medium text-yellow-400"
            title="Affiliate link"
          >
            Affiliate
          </span>
        </div>
      )}

      {/* Image or Placeholder */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        {hasImage ? (
          <Image
            src={imageUrl}
            alt={`${product.title} preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <svg
              className="h-16 w-16 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category & Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              categoryColors[product.category] || "bg-gray-700 text-gray-300"
            }`}
          >
            {product.category}
          </span>
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm text-gray-400 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        {product.price && (
          <div className="mt-4">
            <span
              className={`text-lg font-bold ${
                product.price_type === "free"
                  ? "text-green-400"
                  : "text-white"
              }`}
            >
              {product.price}
            </span>
            {product.price_type === "subscription" && (
              <span className="ml-1 text-sm text-gray-500">/month</span>
            )}
          </div>
        )}

        {/* CTAs */}
        {ctaButtons.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {ctaButtons.map((action: ProductCTA, index: number) => (
              <a
                key={index}
                href={action.href}
                target="_blank"
                rel={product.is_affiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  action.type === "primary"
                    ? "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/30"
                    : "border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {action.icon && ctaIcons[action.icon]}
                {action.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
