import { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products & Tools - Tech Tamizha | Apps, AI Tools, Downloads for Learning Modern Tech",
  description:
    "Discover apps, AI tools, downloadable resources, and recommended products by Tech Tamizha. Download iOS apps, try AI tools, and access resources explained in our whiteboard YouTube videos.",
  keywords: [
    "tech tools",
    "AI apps",
    "learning resources",
    "iOS apps",
    "Android apps",
    "AI products",
    "tech education",
    "downloadable PDFs",
    "programming tools",
  ],
  openGraph: {
    title: "Products & Tools - Tech Tamizha",
    description:
      "Discover apps, AI tools, downloadable resources, and recommended products for learning modern technologies.",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}

