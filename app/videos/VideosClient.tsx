"use client";

import { useState, useEffect, useMemo } from "react";
import AudienceFilter, {
  AudienceLevel,
  AUDIENCE_LEVELS,
} from "@/components/AudienceFilter";
import RelatedContent from "@/components/RelatedContent";
import { getVideos, getRelatedContent } from "@/lib/supabase/content";
import type { Video, RelatedContent as RelatedContentType } from "@/lib/supabase/types";

// Audience level type for videos
type VideoAudienceLevel = Exclude<AudienceLevel, "all">;

export default function VideosClient() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [relatedItems, setRelatedItems] = useState<RelatedContentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [audienceLevel, setAudienceLevel] = useState<AudienceLevel>("all");

  // Fetch videos and related content on mount
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [videosData, relatedData] = await Promise.all([
          getVideos(),
          getRelatedContent({ limit: 5 }),
        ]);
        setVideos(videosData);
        setRelatedItems(relatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredVideos = useMemo(() => {
    let result = videos;

    // Filter by audience level
    if (audienceLevel !== "all") {
      result = result.filter((video) => video.level === audienceLevel);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (video) =>
          video.title.toLowerCase().includes(query) ||
          (video.description?.toLowerCase().includes(query) ?? false) ||
          video.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [videos, searchQuery, audienceLevel]);

  const clearFilters = () => {
    setSearchQuery("");
    setAudienceLevel("all");
  };

  const getLevelLabel = (level: VideoAudienceLevel) => {
    return AUDIENCE_LEVELS.find((l) => l.value === level)?.label || level;
  };

  // Map related content to the format expected by RelatedContent component
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
            Tech Videos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            Whiteboard explanations of the latest technologies. Learn
            programming, web development, and IT concepts through visual
            tutorials.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl">
            <label htmlFor="video-search" className="sr-only">
              Search videos
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
                id="video-search"
                type="text"
                placeholder="Search videos by title, description, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-700 bg-gray-900/50 py-3 pl-12 pr-4 text-white placeholder-gray-500 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-describedby="search-description"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-white focus:outline-none"
                  aria-label="Clear search"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            <p id="search-description" className="sr-only">
              Type to filter videos by title, description, or category
            </p>
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
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Videos Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-red-500" />
                <p className="mt-4 text-gray-400">Loading videos...</p>
              </div>
            ) : filteredVideos.length === 0 ? (
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <h2 className="mt-4 text-xl font-semibold text-white">
                  No videos found
                </h2>
                <p className="mt-2 text-gray-400">
                  Try adjusting your search query or filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <p
                  className="mb-6 text-sm text-gray-500"
                  role="status"
                  aria-live="polite"
                >
                  Showing {filteredVideos.length} video
                  {filteredVideos.length !== 1 ? "s" : ""}
                  {searchQuery && ` for "${searchQuery}"`}
                  {audienceLevel !== "all" &&
                    ` • ${AUDIENCE_LEVELS.find((l) => l.value === audienceLevel)?.label}`}
                </p>
                <div
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                  role="list"
                  aria-label="Video list"
                >
                  {filteredVideos.map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      getLevelLabel={getLevelLabel}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1" aria-label="Sidebar">
            <div className="sticky top-20 space-y-6">
              <RelatedContent items={mappedRelatedContent} title="You Might Also Like" />

              {/* Quick Stats */}
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Video Library
                </h3>
                <ul className="mt-4 space-y-3" aria-label="Video statistics">
                  <li className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Total Videos</span>
                    <span className="font-medium text-white">
                      {videos.length}
                    </span>
                  </li>
                  <li className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Categories</span>
                    <span className="font-medium text-white">
                      {new Set(videos.map((v) => v.category)).size}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

interface VideoCardProps {
  video: Video;
  getLevelLabel: (level: VideoAudienceLevel) => string;
}

function VideoCard({ video, getLevelLabel }: VideoCardProps) {
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 transition-all hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 focus-within:ring-2 focus-within:ring-red-500"
      role="listitem"
    >
      {/* Video Embed with Lazy Loading */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-800">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtube_id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>

      {/* Video Info */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap gap-2">
          <span className="inline-block rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-400">
            {video.category}
          </span>
          <span className="inline-block rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-gray-300">
            {getLevelLabel(video.level as VideoAudienceLevel)}
          </span>
        </div>
        <h2 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
          {video.title}
        </h2>
        <p className="mt-2 flex-1 text-sm text-gray-400 line-clamp-3">
          {video.description}
        </p>
      </div>
    </article>
  );
}
