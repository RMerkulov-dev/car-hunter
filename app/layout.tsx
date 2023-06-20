import "./globals.css";
import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "CAR HUNTER",
  description: "The amazing place with amazing cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
