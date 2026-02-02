import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-red-500">
                Tech Tamizha
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Learn and discuss modern technologies for students, teens, and IT
              professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Topics
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/videos?category=AI"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/videos?category=Web+Development"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/videos?category=Cybersecurity"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/videos?category=Cloud+Computing"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Cloud Computing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 transition-colors hover:text-red-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Tech Tamizha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

