"use client";

import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Image,
  MessageSquare,
  Music,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
const DashboardPage = () => {
  const router = useRouter();

  const tools = [
    {
      lable: "Conversation",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      href: "/conversation",
    },
    {
      lable: "Music Generation",
      icon: Music,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      href: "/music",
    },
    {
      lable: "Image Generation",
      icon: Image,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: "/image",
    },
    {
      lable: "Video Generation",
      icon: Video,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: "/video",
    },
    {
      lable: "Code Generation",
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: "/code",
    },
  ];

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h1 className="text-2xl font-bold mb:text-4xl text-center">
          Explore the power of AI
        </h1>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with power of AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-24 space-y-4">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            onClick={() => router.push(tool.href)}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.lable}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
