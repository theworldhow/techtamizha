"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/supabase/content";
import type { Product } from "@/lib/supabase/types";

// Product categories for filtering
const CATEGORIES = [
  { value: "all", label: "All Products" },
  { value: "apps", label: "Apps" },
  { value: "tools", label: "Tools" },
  { value: "resources", label: "Resources" },
  { value: "ai", label: "AI Products" },
  { value: "affiliate", label: "Affiliate Recommendations" },
] as const;

type CategoryFilter = (typeof CATEGORIES)[number]["value"];

// Map categories for filtering
const categoryMapping: Record<string, string[]> = {
  all: [],
  apps: ["iOS App", "Android App"],
  tools: ["Web Tool"],
  resources: ["Downloadable PDF", "Resource"],
  ai: ["AI Product"],
  affiliate: ["Affiliate"],
};

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch products on mount
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategory !== "all") {
      const allowedCategories = categoryMapping[selectedCategory];
      if (selectedCategory === "affiliate") {
        result = result.filter((product) => product.is_affiliate);
      } else {
        result = result.filter((product) =>
          allowedCategories.includes(product.category)
        );
      }
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          (product.description?.toLowerCase().includes(query) ?? false) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [products, selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-800 bg-[#111111]">
        <div className="absolute inset-0 bg-dark-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Discover My{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Tools & Products
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
              Download apps, try AI tools, and access resources explained in my
              whiteboard YouTube videos. Everything you need to learn modern
              technologies.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mt-8 max-w-md">
              <label htmlFor="product-search" className="sr-only">
                Search products
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
                  id="product-search"
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-700 bg-gray-900/50 py-3 pl-12 pr-4 text-white placeholder-gray-500 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-800 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div
            className="flex flex-wrap items-center justify-center gap-2"
            role="group"
            aria-label="Filter products by category"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                aria-pressed={selectedCategory === category.value}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  selectedCategory === category.value
                    ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-red-500" />
            <p className="mt-4 text-gray-400">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-16 text-center"
            role="status"
            aria-live="polite"
          >
            <svg
              className="h-16 w-16 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
            <h2 className="mt-4 text-xl font-semibold text-white">
              No products found
            </h2>
            <p className="mt-2 text-gray-400">
              Try adjusting your search or filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <p
              className="mb-6 text-sm text-gray-500"
              role="status"
              aria-live="polite"
            >
              Showing {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
              {selectedCategory !== "all" &&
                ` in ${CATEGORIES.find((c) => c.value === selectedCategory)?.label}`}
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}

        {/* Affiliate Disclosure */}
        <div className="mt-12 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
          <p className="flex items-start gap-2 text-sm text-yellow-400">
            <svg
              className="mt-0.5 h-4 w-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <span>
              <strong>Affiliate Disclosure:</strong> Some links on this page are
              affiliate links. I may earn a commission at no extra cost to you.
              I only recommend products I personally use and believe in.
            </span>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-800 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Want Something Custom?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Check my YouTube channel for more ideas, tutorials, and in-depth
              explanations of all these tools and products!
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.youtube.com/@TecTamizha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/30 transition-all hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/40 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </a>
              <Link
                href="/videos"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-600 px-6 py-3 text-base font-semibold text-gray-300 transition-all hover:border-gray-500 hover:bg-gray-800/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Browse Video Library
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
