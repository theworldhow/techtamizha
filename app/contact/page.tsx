import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Tech Tamizha",
  description:
    "Get in touch with Tech Tamizha. Send us feedback, suggestions, questions, or collaboration requests. We'd love to hear from you!",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white mb-6"
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
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            Have a question, feedback, or want to collaborate? We&apos;d love to hear
            from you! Fill out the form below or reach out through our other
            channels.
          </p>
        </div>
      </div>

      {/* Contact Form Component */}
      <ContactForm />

      {/* Additional Contact Methods */}
      <section className="border-t border-gray-800 bg-[#0a0a0a] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Other Ways to Connect
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@TecTamizha"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-gray-800 bg-gray-900/50 p-8 text-center transition-all hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                <svg
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-red-400">
                YouTube
              </h3>
              <p className="mt-2 text-gray-400">
                Subscribe for whiteboard tech tutorials and explanations
              </p>
              <span className="mt-4 text-sm text-red-400">@TecTamizha</span>
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com/TecTamizha"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-gray-800 bg-gray-900/50 p-8 text-center transition-all hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                <svg
                  className="h-8 w-8 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-red-400">
                Twitter / X
              </h3>
              <p className="mt-2 text-gray-400">
                Follow for quick updates, tech tips, and community discussions
              </p>
              <span className="mt-4 text-sm text-blue-400">@TecTamizha</span>
            </a>

            {/* Email */}
            <a
              href="mailto:ashokin2film@gmail.com"
              className="group flex flex-col items-center rounded-2xl border border-gray-800 bg-gray-900/50 p-8 text-center transition-all hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                <svg
                  className="h-8 w-8 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-red-400">
                Email
              </h3>
              <p className="mt-2 text-gray-400">
                For business inquiries, collaborations, and partnerships
              </p>
              <span className="mt-4 text-sm text-green-400">
                ashokin2film@gmail.com
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-gray-800 bg-[#111111] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">
                How quickly will I get a response?
              </h3>
              <p className="mt-2 text-gray-400">
                We typically respond within 24-48 hours during weekdays. For
                urgent matters, please mention it in your subject line.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">
                Can I request a specific topic for your videos?
              </h3>
              <p className="mt-2 text-gray-400">
                Absolutely! We love getting topic suggestions from our audience.
                Use the &quot;Content Request&quot; option in the contact form and describe
                what you&apos;d like to learn about.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">
                Do you offer collaboration opportunities?
              </h3>
              <p className="mt-2 text-gray-400">
                Yes! We&apos;re open to collaborations with other creators, tech
                companies, and educational institutions. Select &quot;Collaboration&quot; in
                the contact form with details about your proposal.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">
                How can I report a bug or issue with the website?
              </h3>
              <p className="mt-2 text-gray-400">
                Please use the &quot;Report a Bug&quot; option in the contact form. Include
                details about the issue, your browser, and steps to reproduce it.
                Screenshots are helpful!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

