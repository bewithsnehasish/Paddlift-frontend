import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PaddleLift - Your Gateway to Career Success",
  description:
    "Find your dream job with JobHub, the premier job search platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter}  bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="fixed inset-0 z-[-1]"></div>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
