import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer - Tech Tamizha",
  description:
    "Important disclaimers about the content and services provided by Tech Tamizha. Understand the limitations of our educational content.",
};

export default function DisclaimerPage() {
  const lastUpdated = "February 1, 2026";

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#111111]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
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
            Disclaimer
          </h1>
          <p className="mt-4 text-gray-400">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-a:text-red-400 prose-strong:text-white">
          <section className="mb-12">
            <h2>General Disclaimer</h2>
            <p>
              The information provided on Tech Tamizha (the &quot;Website&quot;) is for
              general informational and educational purposes only. All information
              on the Website is provided in good faith; however, we make no
              representation or warranty of any kind, express or implied, regarding
              the accuracy, adequacy, validity, reliability, availability, or
              completeness of any information on the Website.
            </p>
          </section>

          <section className="mb-12">
            <h2>Educational Content Disclaimer</h2>
            <p>
              Tech Tamizha provides educational content about technology,
              programming, artificial intelligence, and related subjects. Please
              note:
            </p>
            <ul>
              <li>
                <strong>Not Professional Advice:</strong> Our content is for
                learning purposes and should not be considered professional,
                legal, or technical advice for production systems.
              </li>
              <li>
                <strong>Rapidly Evolving Field:</strong> Technology changes
                quickly. Information that was accurate at the time of publication
                may become outdated. Always refer to official documentation for
                the most current information.
              </li>
              <li>
                <strong>Code Examples:</strong> Code snippets and examples are
                provided for educational purposes. They may not be suitable for
                production use without modification and proper testing.
              </li>
              <li>
                <strong>Individual Results:</strong> Learning outcomes may vary.
                Success depends on individual effort, prior knowledge, and
                dedication.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>No Guarantees</h2>
            <p>We do not guarantee:</p>
            <ul>
              <li>
                That following our tutorials will result in employment or
                career advancement
              </li>
              <li>
                That the skills learned will apply to all situations or
                environments
              </li>
              <li>
                That any code, tool, or technique will work in your specific
                context
              </li>
              <li>
                That our recommendations for tools and products will suit your
                needs
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>External Links Disclaimer</h2>
            <p>
              The Website may contain links to external websites that are not
              provided or maintained by Tech Tamizha. Please note:
            </p>
            <ul>
              <li>
                We do not guarantee the accuracy, relevance, timeliness, or
                completeness of any information on external websites
              </li>
              <li>
                We have no control over the content, nature, or availability of
                external sites
              </li>
              <li>
                The inclusion of any links does not imply endorsement or
                recommendation
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Affiliate Disclaimer</h2>
            <p>
              Tech Tamizha is a participant in various affiliate programs. This
              means:
            </p>
            <ul>
              <li>
                Some links on our website are affiliate links, and we may earn a
                commission if you make a purchase through these links
              </li>
              <li>
                This comes at <strong>no additional cost</strong> to you
              </li>
              <li>
                We only recommend products and services that we genuinely believe
                will be valuable to our audience
              </li>
              <li>
                Our opinions and recommendations are our own and are not
                influenced by affiliate partnerships
              </li>
            </ul>
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 my-6">
              <p className="flex items-start gap-2 text-yellow-400 m-0">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <span>
                  Affiliate links are marked with an &quot;Affiliate&quot; badge on our
                  products page for transparency.
                </span>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2>YouTube Content Disclaimer</h2>
            <p>
              Our whiteboard-style YouTube videos are designed to explain complex
              concepts in simple terms:
            </p>
            <ul>
              <li>
                Explanations may be simplified for educational purposes and may
                not cover all edge cases or advanced scenarios
              </li>
              <li>
                Visual representations are approximations and may not be
                technically precise
              </li>
              <li>
                Always supplement our videos with official documentation and
                additional resources
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Products and Downloads Disclaimer</h2>
            <p>For products, apps, and downloadable resources offered on our platform:</p>
            <ul>
              <li>
                Products are provided &quot;as is&quot; without warranty of any kind
              </li>
              <li>
                We are not responsible for any damages resulting from the use of
                our products
              </li>
              <li>
                Users are responsible for ensuring compatibility with their
                systems
              </li>
              <li>
                Digital products should be scanned for viruses before use, as a
                standard security practice
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Testimonials Disclaimer</h2>
            <p>
              Any testimonials or success stories shared on the Website represent
              individual experiences. Results are not typical, and we do not claim
              that you will achieve similar results. Individual success depends on
              many factors including effort, background, and circumstances.
            </p>
          </section>

          <section className="mb-12">
            <h2>Professional Advice</h2>
            <p>
              The content on Tech Tamizha is not intended to replace professional
              advice. For matters requiring professional expertise, please consult
              qualified professionals in the relevant field.
            </p>
          </section>

          <section className="mb-12">
            <h2>Errors and Omissions</h2>
            <p>
              While we strive to provide accurate and up-to-date information, we
              cannot guarantee that the Website is free of errors. If you find any
              errors or have suggestions for improvement, please{" "}
              <Link href="/contact">contact us</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2>Limitation of Liability</h2>
            <p>
              Under no circumstances shall Tech Tamizha or its creators be liable
              for any direct, indirect, special, incidental, consequential, or
              punitive damages arising from your use of the Website or reliance on
              any information provided.
            </p>
          </section>

          <section className="mb-12">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Disclaimer, please contact us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:ashokin2film@gmail.com">ashokin2film@gmail.com</a>
              </li>
              <li>
                Contact Form: <Link href="/contact">Contact Us Page</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

