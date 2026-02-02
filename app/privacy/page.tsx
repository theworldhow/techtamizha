import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Tech Tamizha",
  description:
    "Learn how Tech Tamizha collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-400">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-a:text-red-400 prose-strong:text-white">
          <section className="mb-12">
            <h2>Introduction</h2>
            <p>
              Welcome to Tech Tamizha (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website
              and use our services.
            </p>
            <p>
              By accessing or using Tech Tamizha, you agree to this Privacy
              Policy. If you do not agree with the terms of this policy, please
              do not access the site.
            </p>
          </section>

          <section className="mb-12">
            <h2>Information We Collect</h2>

            <h3>Information You Provide</h3>
            <ul>
              <li>
                <strong>Contact Information:</strong> When you contact us through
                our contact form, we collect your name, email address, and message
                content.
              </li>
              <li>
                <strong>Account Information:</strong> If you create an account for
                our services, we collect your email address and
                chosen username.
              </li>
              <li>
                <strong>Article Submissions:</strong> When you submit article ideas,
                we collect the information you provide in the submission form.
              </li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <ul>
              <li>
                <strong>Usage Data:</strong> We automatically collect information
                about how you interact with our website, including pages visited,
                time spent on pages, and navigation patterns.
              </li>
              <li>
                <strong>Device Information:</strong> We collect information about
                your device, including browser type, operating system, and screen
                resolution.
              </li>
              <li>
                <strong>IP Address:</strong> We may collect your IP address for
                analytics and security purposes.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies and similar tracking
                technologies to enhance your experience. See our Cookie section
                below for more details.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates about new content, if you&apos;ve opted in</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on
              our website and hold certain information. Cookies are files with a
              small amount of data that are stored on your device.
            </p>
            <h3>Types of Cookies We Use:</h3>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors
                interact with our website (Google Analytics).
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and
                preferences (e.g., dark/light mode).
              </li>
            </ul>
            <p>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, some features of our website
              may not function properly without cookies.
            </p>
          </section>

          <section className="mb-12">
            <h2>Third-Party Services</h2>
            <p>We may use third-party services that collect information:</p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> For website analytics and
                performance monitoring.
              </li>
              <li>
                <strong>YouTube:</strong> For embedded video content.
              </li>
              <li>
                <strong>Supabase:</strong> For authentication and database
                services.
              </li>
            </ul>
            <p>
              These third parties have their own privacy policies governing the use
              of your information. We encourage you to review their policies.
            </p>
          </section>

          <section className="mb-12">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method of
              transmission over the Internet or electronic storage is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided below.
            </p>
          </section>

          <section className="mb-12">
            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are intended for users of all ages, including students.
              We do not knowingly collect personal information from children under
              13 without parental consent. If you believe we have collected
              information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page and
              updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-12">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:ashokin2film@gmail.com">ashokin2film@gmail.com</a>
              </li>
              <li>
                Contact Form:{" "}
                <Link href="/contact">Contact Us Page</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

