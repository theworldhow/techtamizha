import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Tech Tamizha",
  description:
    "Read the terms and conditions for using Tech Tamizha website and services. Understand your rights and responsibilities.",
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-gray-400">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-a:text-red-400 prose-strong:text-white">
          <section className="mb-12">
            <h2>Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of
              the Tech Tamizha website, including any content, functionality, and
              services offered on or through techtamizha.com (the &quot;Service&quot;).
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, you may not access
              the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2>Intellectual Property Rights</h2>
            <p>
              The Service and its original content, features, and functionality are
              owned by Tech Tamizha and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property or
              proprietary rights laws.
            </p>
            <h3>Our Content</h3>
            <ul>
              <li>
                All videos, articles, tutorials, and educational materials are the
                property of Tech Tamizha.
              </li>
              <li>
                You may not reproduce, distribute, modify, create derivative works
                of, publicly display, or commercially exploit our content without
                written permission.
              </li>
              <li>
                You may share links to our content and embed our YouTube videos
                according to YouTube&apos;s terms of service.
              </li>
            </ul>
            <h3>Your Content</h3>
            <ul>
              <li>
                By posting content (comments, article ideas, feedback), you grant
                us a non-exclusive, royalty-free license to use, modify, and display
                that content.
              </li>
              <li>
                You retain ownership of your original content but grant us
                permission to use it in connection with our services.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate and
              complete information. You are responsible for:
            </p>
            <ul>
              <li>Maintaining the security of your account and password</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>
            <p>
              We reserve the right to terminate accounts that violate these Terms or
              for any other reason at our sole discretion.
            </p>
          </section>

          <section className="mb-12">
            <h2>Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>
                Violate any applicable laws, regulations, or third-party rights
              </li>
              <li>
                Post or transmit harmful, threatening, abusive, or hateful content
              </li>
              <li>Spam, phish, or distribute malware</li>
              <li>
                Attempt to gain unauthorized access to our systems or other users&apos;
                accounts
              </li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Collect or harvest user information without consent</li>
              <li>
                Use automated systems (bots, scrapers) without our written permission
              </li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Educational Content Disclaimer</h2>
            <p>
              The educational content provided on Tech Tamizha is for informational
              and learning purposes only. While we strive to provide accurate and
              up-to-date information:
            </p>
            <ul>
              <li>
                Technology and programming concepts evolve rapidly; information may
                become outdated
              </li>
              <li>
                Our content should not be considered professional advice for
                production systems
              </li>
              <li>
                Always verify information and best practices from official
                documentation
              </li>
              <li>
                We are not responsible for any errors in code examples or tutorials
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Products and Purchases</h2>
            <p>
              For any products, downloadables, or paid content offered through our
              platform:
            </p>
            <ul>
              <li>All sales are final unless otherwise stated</li>
              <li>
                Digital products are for personal use only and may not be
                redistributed
              </li>
              <li>
                Refund requests will be evaluated on a case-by-case basis within 7
                days of purchase
              </li>
              <li>
                We reserve the right to modify prices and discontinue products at
                any time
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Affiliate Links</h2>
            <p>
              Some links on our website are affiliate links. This means we may earn
              a commission if you click on the link and make a purchase. This comes
              at no additional cost to you.
            </p>
            <p>
              We only recommend products and services we believe in and that we
              think will be valuable to our audience.
            </p>
          </section>

          <section className="mb-12">
            <h2>Third-Party Links</h2>
            <p>
              Our Service may contain links to third-party websites or services that
              are not owned or controlled by Tech Tamizha. We have no control over,
              and assume no responsibility for, the content, privacy policies, or
              practices of any third-party websites or services.
            </p>
          </section>

          <section className="mb-12">
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Tech Tamizha shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation:
            </p>
            <ul>
              <li>Loss of profits, data, or use</li>
              <li>Cost of procuring substitute services</li>
              <li>Any damages arising from your use of the Service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Tech Tamizha and its
              officers, directors, employees, and agents from any claims, damages,
              obligations, losses, or expenses arising from:
            </p>
            <ul>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party right</li>
              <li>Your use of the Service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If
              a revision is material, we will try to provide at least 30 days&apos;
              notice prior to any new terms taking effect.
            </p>
            <p>
              Your continued use of the Service after any changes constitutes
              acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2>Contact Us</h2>
            <p>If you have questions about these Terms, please contact us:</p>
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

