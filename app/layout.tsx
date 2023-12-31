import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/modal-provider";
import { ToasterProvider } from "@/components/toaster-provider";
import { CrispProvider } from "@/components/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "creatiAIverse",
  description:
    "creatiAIverse is an advanced AI system capable of generating diverse forms of content, including text, audio, and video, to unlock limitless creative possibilities. Powered by state-of-the-art deep learning models and natural language processing algorithms, creatiAIverse can craft engaging stories, compose unique music tracks, and generate stunning visuals. Whether you need a captivating short story, a personalized soundtrack, or a visually mesmerizing video, creatiAIverse is your creative companion, pushing the boundaries of AI-generated content.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
