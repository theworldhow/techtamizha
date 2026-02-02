"use client";

interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  originalPrice?: string;
  rating?: number;
  affiliateUrl: string;
  badge?: string;
}

// Sample affiliate products - replace with your actual affiliate links
const defaultProducts: AffiliateProduct[] = [
  {
    id: "1",
    name: "Web Development Bootcamp Course",
    description:
      "Complete web development course covering HTML, CSS, JavaScript, React, Node.js and more.",
    image: "/images/products/course-webdev.jpg",
    price: "₹499",
    originalPrice: "₹3,999",
    rating: 4.8,
    affiliateUrl: "https://example.com/affiliate/webdev-course",
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Programming Laptop - High Performance",
    description:
      "Perfect for developers with 16GB RAM, 512GB SSD, and powerful processor.",
    image: "/images/products/laptop.jpg",
    price: "₹65,999",
    originalPrice: "₹79,999",
    rating: 4.5,
    affiliateUrl: "https://example.com/affiliate/dev-laptop",
    badge: "Top Pick",
  },
  {
    id: "3",
    name: "Cloud Computing Certification",
    description:
      "Get certified in AWS, Azure, or Google Cloud. Industry-recognized certification.",
    image: "/images/products/cloud-cert.jpg",
    price: "₹999",
    originalPrice: "₹4,999",
    rating: 4.7,
    affiliateUrl: "https://example.com/affiliate/cloud-cert",
  },
];

interface AffiliateLinksProps {
  products?: AffiliateProduct[];
  title?: string;
  className?: string;
}

export default function AffiliateLinks({
  products = defaultProducts,
  title = "Recommended Resources",
  className = "",
}: AffiliateLinksProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-800 bg-gray-900/50 p-6 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="rounded-full bg-red-500/20 px-2 py-1 text-[10px] font-medium text-red-400">
          Affiliate
        </span>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <a
            key={product.id}
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex gap-4 rounded-xl border border-gray-800 bg-gray-900/30 p-4 transition-all hover:border-red-500/50 hover:bg-gray-800/50"
          >
            {/* Product Image Placeholder */}
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-800">
              <div className="flex h-full w-full items-center justify-center text-gray-600">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              {product.badge && (
                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-white group-hover:text-red-400 transition-colors line-clamp-1">
                {product.name}
              </h4>
              <p className="mt-1 text-xs text-gray-400 line-clamp-2">
                {product.description}
              </p>
              <div className="mt-2 flex items-center gap-2">
                {product.price && (
                  <span className="text-sm font-bold text-red-400">
                    {product.price}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.rating && (
                  <span className="flex items-center gap-1 text-xs text-yellow-500">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {product.rating}
                  </span>
                )}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-4 text-[10px] text-gray-500">
        * As an affiliate, we earn from qualifying purchases. Prices may vary.
      </p>
    </div>
  );
}

// Inline affiliate link for use within article content
export function InlineAffiliateLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center gap-1 text-red-400 underline decoration-red-400/30 underline-offset-2 transition-colors hover:text-red-300 hover:decoration-red-300"
    >
      {children}
      <svg
        className="h-3 w-3"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </a>
  );
}

