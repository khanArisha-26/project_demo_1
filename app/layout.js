import "./globals.css";
import Navbar from "@/components/Navbar";
import { UserProvider } from "@/components/UserContext";

export const metadata = {
  title: "Next Listing Demo",
  description: "Five page Next.js listing project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Navbar />
          <main className="p-8 bg-gray-100 min-h-screen">
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}