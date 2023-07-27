import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CreatiAIverse",
  description:
    "CreatiAIverse is an advanced AI system capable of generating diverse forms of content, including text, audio, and video, to unlock limitless creative possibilities. Powered by state-of-the-art deep learning models and natural language processing algorithms, CreatiAIverse can craft engaging stories, compose unique music tracks, and generate stunning visuals. Whether you need a captivating short story, a personalized soundtrack, or a visually mesmerizing video, CreatiAIverse is your creative companion, pushing the boundaries of AI-generated content.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
