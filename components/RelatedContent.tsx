"use client";

import Link from "next/link";

interface RelatedItem {
  id: string;
  title: string;
  type: "video" | "article" | "product" | "external";
  category: string;
  href: string;
}

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
  className?: string;
}

const typeIcons = {
  video: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.258.232-.423.557-.328l5.603 2.113z"
      />
    </svg>
  ),
  article: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  ),
  product: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
      />
    </svg>
  ),
  external: (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  ),
};

const typeLabels = {
  video: "Video",
  article: "Article",
  product: "Product",
  external: "External",
};

export default function RelatedContent({
  items,
  title = "Related Content",
  className = "",
}: RelatedContentProps) {
  if (items.length === 0) return null;

  return (
    <aside
      className={`rounded-2xl border border-gray-800 bg-gray-900/50 p-6 ${className}`}
      aria-label="Related content"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <nav aria-label="Related content links">
        <ul className="mt-4 space-y-3">
          {items.map((item) => {
            const isExternal = item.href.startsWith("http");
            const LinkComponent = isExternal ? "a" : Link;
            const linkProps = isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <li key={item.id}>
                <LinkComponent
                  href={item.href}
                  {...linkProps}
                  className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <span
                    className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800 text-gray-400 group-hover:bg-red-500/20 group-hover:text-red-400"
                    aria-hidden="true"
                  >
                    {typeIcons[item.type]}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white line-clamp-2">
                      {item.title}
                      {isExternal && (
                        <svg
                          className="ml-1 inline h-3 w-3 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      )}
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                      <span>{typeLabels[item.type]}</span>
                      <span aria-hidden="true">•</span>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </LinkComponent>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
