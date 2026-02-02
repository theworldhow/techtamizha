import { Metadata } from "next";
import ArticlesClient from "./ArticlesClient";

export const metadata: Metadata = {
  title: "Tech Articles - Learn Technology Concepts",
  description:
    "Read in-depth articles about AI, quantum computing, web development, cybersecurity, and more. Educational content for students, college learners, and professionals.",
  keywords: [
    "tech articles",
    "programming tutorials",
    "technology education",
    "AI articles",
    "web development guides",
  ],
  openGraph: {
    title: "Tech Articles - Learn Technology Concepts",
    description:
      "Read in-depth articles about AI, quantum computing, web development, and more.",
    type: "website",
  },
};

export default function ArticlesPage() {
  return <ArticlesClient />;
}
