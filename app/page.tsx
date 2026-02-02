import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]" role="main">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark-glow">
        <div className="absolute inset-0 bg-dark-grid"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/Logo.png"
                alt="Tech Tamizha Logo"
                width={160}
                height={160}
                priority
                className="h-32 w-32 rounded-xl object-contain sm:h-40 sm:w-40"
              />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Tech Tamizha
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 sm:text-2xl">
              Learn and Discuss Modern Technologies for Students, Teens, and IT Pros
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#explore"
                className="rounded-lg bg-red-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/30 transition-all hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Get Started
              </Link>
              <Link
                href="/videos"
                className="rounded-lg border-2 border-gray-500 px-6 py-3 text-base font-semibold text-gray-300 transition-all hover:border-gray-400 hover:bg-gray-800/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                Explore Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="explore" className="bg-[#111111] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Explore Our Platform
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Discover learning resources and connect with the tech community
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Link
              href="/videos"
              className="group flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-red-500/10 hover:border-red-500/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                <svg
                  className="h-6 w-6 text-red-500"
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
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-red-400 transition-colors">Videos</h3>
              <p className="mt-2 flex-1 text-gray-400">
                Watch tutorials and learn from expert developers sharing their knowledge
              </p>
              <div className="mt-4 flex items-center text-sm text-red-400">
                <span>Watch now</span>
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
            <Link
              href="/articles"
              className="group flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-red-500/10 hover:border-red-500/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                <svg
                  className="h-6 w-6 text-red-500"
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
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-red-400 transition-colors">Articles</h3>
              <p className="mt-2 flex-1 text-gray-400">
                Read in-depth articles about the latest technologies and best practices
              </p>
              <div className="mt-4 flex items-center text-sm text-red-400">
                <span>Read more</span>
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
            <Link
              href="/products"
              className="group flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-red-500/10 hover:border-red-500/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                <svg
                  className="h-6 w-6 text-red-500"
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
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-red-400 transition-colors">Products</h3>
              <p className="mt-2 flex-1 text-gray-400">
                Discover apps, tools, and resources to boost your tech learning journey
              </p>
              <div className="mt-4 flex items-center text-sm text-red-400">
                <span>Explore products</span>
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </main>
  );
}

