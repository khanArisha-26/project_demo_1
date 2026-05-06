import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-white p-8 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">Next.js Listing Project</h1>

      <p className="text-gray-700 mb-4">
        This project demonstrates routing, navigation, reusable components, and listing pages.
      </p>

      <Link href="/users">
        <Button>Go to Users Page</Button>
      </Link>
    </div>
  );
}
