import "./globals.css";
import Navbar from "@/components/Navbar";
import ReduxProvider from "@/components/ReduxProvider";

export const metadata = {
  title: "Next Listing Demo",
  description: "Five page Next.js listing project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />

          <main className="p-8 bg-gray-100 min-h-screen">
            {children}
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}