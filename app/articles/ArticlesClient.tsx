"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { getArticles, getArticleTags, getRelatedContent } from "@/lib/supabase/content";
import type { ArticlePreview, RelatedContent as RelatedContentType } from "@/lib/supabase/types";
import AudienceFilter, { AudienceLevel } from "@/components/AudienceFilter";
import RelatedContent from "@/components/RelatedContent";

// Map categories to audience levels
const categoryToAudience: Record<string, AudienceLevel> = {
  school: "school",
  college: "college",
  professional: "it-pros",
  teens: "teens",
  "it-pros": "it-pros",
};

const categoryLabels: Record<string, string> = {
  school: "School",
  college: "College",
  professional: "Professional",
  teens: "Teens",
  "it-pros": "IT Professionals",
};

const categoryColors: Record<string, string> = {
  school: "bg-green-500/20 text-green-400",
  college: "bg-blue-500/20 text-blue-400",
  professional: "bg-purple-500/20 text-purple-400",
  teens: "bg-orange-500/20 text-orange-400",
  "it-pros": "bg-pink-500/20 text-pink-400",
};

export default function ArticlesClient() {
  const [articles, setArticles] = useState<ArticlePreview[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [relatedItems, setRelatedItems] = useState<RelatedContentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [audienceLevel, setAudienceLevel] = useState<AudienceLevel>("all");

  // Fetch articles and related data on mount
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [articlesData, tagsData, relatedData] = await Promise.all([
          getArticles(),
          getArticleTags(),
          getRelatedContent({ limit: 5 }),
        ]);
        setArticles(articlesData);
        setTags(tagsData);
        setRelatedItems(relatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Get unique categories from articles
  const categories = useMemo(() => {
    const cats = new Set(articles.map((a) => a.category));
    return Array.from(cats);
  }, [articles]);

  const filteredArticles = useMemo(() => {
    let result = articles;

    // Filter by audience level
    if (audienceLevel !== "all") {
      if (audienceLevel === "teens") {
        // Teens can access school and some college content
        result = result.filter(
          (article) =>
            article.category === "school" ||
            article.category === "college" ||
            article.category === "teens"
        );
      } else {
        result = result.filter(
          (article) => categoryToAudience[article.category] === audienceLevel
        );
      }
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter(
        (article) => article.category === selectedCategory
      );
    }

    // Filter by tag
    if (selectedTag) {
      result = result.filter((article) =>
        article.tags.includes(selectedTag)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          (article.description?.toLowerCase().includes(query) ?? false) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [articles, selectedCategory, selectedTag, searchQuery, audienceLevel]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedTag("");
    setAudienceLevel("all");
  };

  const hasActiveFilters =
    searchQuery || selectedCategory || selectedTag || audienceLevel !== "all";

  // Map related content for the component
  const mappedRelatedContent = relatedItems.map((item) => ({
    id: item.id,
    title: item.title,
    type: item.content_type as "video" | "article" | "product" | "external",
    category: item.category || "General",
    href: item.href,
  }));

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header Section */}
      <div className="border-b border-gray-800 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Tech Articles
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            In-depth articles on AI, quantum computing, web development, and
            more. Content tailored for students, college learners, and
            professionals.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl">
            <label htmlFor="article-search" className="sr-only">
              Search articles
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <input
                id="article-search"
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-700 bg-gray-900/50 py-3 pl-12 pr-4 text-white placeholder-gray-500 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Audience Level Filter */}
          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-gray-400">
              Filter by audience:
            </p>
            <AudienceFilter
              selectedLevel={audienceLevel}
              onLevelChange={setAudienceLevel}
            />
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-lg border border-gray-700 bg-gray-900/50 px-3 py-2 text-sm text-white focus:border-red-500 focus:outline-none"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {categoryLabels[category] || category}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Tag:</span>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="rounded-lg border border-gray-700 bg-gray-900/50 px-3 py-2 text-sm text-white focus:border-red-500 focus:outline-none"
              >
                <option value="">All Tags</option>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="rounded-lg bg-gray-800 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Articles List */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-red-500" />
                <p className="mt-4 text-gray-400">Loading articles...</p>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-800 bg-gray-900/50 py-16 text-center">
                <svg
                  className="h-16 w-16 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  No articles found
                </h3>
                <p className="mt-2 text-gray-400">
                  Try adjusting your filters or search query.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-sm text-gray-500">
                  Showing {filteredArticles.length} article
                  {filteredArticles.length !== 1 ? "s" : ""}
                </p>
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Submit Article Idea */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">
                Have an Article Idea?
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Share your topic suggestions with us!
              </p>
              <Link
                href="/articles/submit"
                className="mt-4 inline-block rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
              >
                Submit Idea
              </Link>
            </div>

            {/* Category Quick Links */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">Categories</h3>
              <div className="mt-4 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-red-500/20 text-red-400"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {categoryLabels[category] || category}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">Popular Tags</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.slice(0, 10).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    aria-pressed={selectedTag === tag}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      selectedTag === tag
                        ? "bg-red-500 text-white"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Related Content */}
            <RelatedContent
              items={mappedRelatedContent}
              title="Related Videos & Content"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function ArticleCard({ article }: { article: ArticlePreview }) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <article className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              categoryColors[article.category] || "bg-gray-700 text-gray-300"
            }`}
          >
            {categoryLabels[article.category] || article.category}
          </span>
          <span className="text-xs text-gray-500">{article.read_time}</span>
          <span className="text-xs text-gray-500">
            {new Date(article.published_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        <h2 className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-red-400">
          {article.title}
        </h2>
        <p className="mt-2 text-gray-400 line-clamp-2">{article.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center text-sm text-red-400">
          <span>Read more</span>
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}
