// Legacy articles lib - kept for backward compatibility during migration
// New implementation uses Supabase via lib/supabase/content.ts

import { createClient } from "@/lib/supabase/client";
import type { ArticlePreview, Article } from "@/lib/supabase/types";

// Re-export types for backward compatibility
export type { Article, ArticlePreview } from "@/lib/supabase/types";

// Synchronous fallback functions for static generation
// These are used during build time and return empty arrays
// Runtime fetching happens in client components via Supabase

export function getAllArticles(): ArticlePreview[] {
  // This is a fallback for static generation
  // Actual data fetching happens client-side via Supabase
  return [];
}

export function getArticleBySlug(): Article | null {
  // This is a fallback for static generation
  // Actual data fetching happens client-side via Supabase
  return null;
}

export function getAllCategories(): string[] {
  return ["school", "college", "professional", "teens", "it-pros"];
}

export function getAllTags(): string[] {
  // Return common tags as fallback
  return [
    "AI",
    "Machine Learning",
    "Web Development",
    "JavaScript",
    "React",
    "TypeScript",
    "Quantum",
    "Security",
  ];
}

// Async functions for server components using Supabase
export async function getArticlesAsync(): Promise<ArticlePreview[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("articles")
    .select(
      "id, slug, title, description, author, category, tags, read_time, featured, published_at"
    )
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching articles:", error);
    return [];
  }

  return data || [];
}

export async function getArticleBySlugAsync(
  slug: string
): Promise<Article | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) {
    console.error("Error fetching article:", error);
    return null;
  }

  return data;
}

export async function getAllTagsAsync(): Promise<string[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("articles")
    .select("tags")
    .eq("is_published", true);

  if (error) {
    console.error("Error fetching tags:", error);
    return [];
  }

  const tagsSet = new Set<string>();
  data?.forEach((article) => {
    article.tags?.forEach((tag: string) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

// For sitemap generation - returns article data with minimal fields
export function getSortedArticlesData(): { slug: string; date: string }[] {
  // This returns empty for static generation
  // Sitemap should ideally fetch from Supabase at build time
  return [];
}
