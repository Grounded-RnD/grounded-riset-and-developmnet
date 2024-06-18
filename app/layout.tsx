import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const open_Sans = Open_Sans({ subsets: ["latin"] });

const Glancyr = localFont({
  src: [
    {
      path: "../public/font/Glancyr-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/font/Glancyr-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/font/Glancyr-Semibold.otf",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-glancyr",
});

export const metadata: Metadata = {
  title: "Grounded | Bussiness | Riset & Development",
  description: "Till Infinity and Beyond",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`${open_Sans.className} ${Glancyr.variable}`}>{children}</body>
      <Footer />
    </html>
  );
}
