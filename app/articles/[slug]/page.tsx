import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import ArticleContent from "./ArticleContent";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Fetch article by slug
async function getArticle(slug: string) {
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

// Get all article slugs for static generation
async function getAllSlugs(): Promise<string[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("articles")
    .select("slug")
    .eq("is_published", true);

  if (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }

  if (!data || !Array.isArray(data)) {
    return [];
  }

  return data.map((a: { slug: string }) => a.slug);
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} - Tech Tamizha`,
    description: article.description || article.title,
    keywords: article.tags,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description || article.title,
      type: "article",
      publishedTime: article.published_at,
      authors: [article.author],
      tags: article.tags,
    },
  };
}

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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111111]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/articles"
            className="inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Articles
          </Link>

          {/* Article Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                categoryColors[article.category] || "bg-gray-700 text-gray-300"
              }`}
            >
              {categoryLabels[article.category] || article.category}
            </span>
            <span className="text-sm text-gray-500">{article.read_time}</span>
            <span className="text-sm text-gray-500">
              {new Date(article.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          {/* Description */}
          <p className="mt-4 text-lg text-gray-400">{article.description}</p>

          {/* Author & Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  {article.author}
                </p>
                <p className="text-xs text-gray-500">Author</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <ArticleContent content={article.content} />

        {/* Share & Navigation */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/articles"
              className="inline-flex items-center rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              All Articles
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
            >
              Browse Products
              <svg
                className="ml-2 h-4 w-4"
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
            </Link>
          </div>
        </div>

        {/* Related Topics */}
        <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
          <h3 className="text-lg font-semibold text-white">Related Topics</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag: string) => (
              <Link
                key={tag}
                href={`/articles?tag=${encodeURIComponent(tag)}`}
                className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-400 transition-colors hover:bg-red-500/20 hover:text-red-400"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
