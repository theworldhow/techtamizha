import { Metadata } from "next";
import SubmitForm from "./SubmitForm";

export const metadata: Metadata = {
  title: "Submit Article Idea - Tech Tamizha",
  description:
    "Share your article ideas with Tech Tamizha. Suggest topics you'd like us to cover on AI, programming, web development, and more.",
};

export default function SubmitArticlePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Submit an Article Idea
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Have a topic you&apos;d like us to cover? Share your ideas and
            we&apos;ll consider writing about it!
          </p>
        </div>

        {/* Form */}
        <div className="mt-12">
          <SubmitForm />
        </div>

        {/* Info Section */}
        <div className="mt-12 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
          <h2 className="text-lg font-semibold text-white">
            What makes a good article idea?
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li className="flex items-start">
              <svg
                className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span>
                <strong className="text-white">Specific topics</strong> - e.g.,
                &quot;How does blockchain work?&quot; instead of just
                &quot;Blockchain&quot;
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span>
                <strong className="text-white">Target audience</strong> -
                Mention if it&apos;s for beginners, intermediate, or advanced
                readers
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span>
                <strong className="text-white">Real-world applications</strong>{" "}
                - Topics that solve actual problems
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span>
                <strong className="text-white">Trending technologies</strong> -
                New tools, frameworks, or concepts
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

