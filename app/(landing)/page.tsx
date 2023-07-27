import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-6xl text-green-400">Hello Ai SaaS Unprotected</h1>
      <Link href="/sign-in">
        <Button variant="secondary">Login </Button>
      </Link>
      <Link href="/sign-up">
        <Button variant="secondary">Register </Button>
      </Link>
    </main>
  );
}
