import { Metadata } from "next";
import VideosClient from "./VideosClient";

export const metadata: Metadata = {
  title: "Tech Videos - Whiteboard Explanations of Latest Tech",
  description:
    "Watch educational tech videos with whiteboard explanations covering the latest technologies, programming tutorials, and IT concepts for students, teens, and professionals.",
  keywords: [
    "tech videos",
    "programming tutorials",
    "whiteboard explanations",
    "technology education",
    "coding tutorials",
  ],
  openGraph: {
    title: "Tech Videos - Whiteboard Explanations of Latest Tech",
    description:
      "Watch educational tech videos with whiteboard explanations covering the latest technologies.",
    type: "website",
  },
};

export default function VideosPage() {
  return <VideosClient />;
}
