import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InitialAOS from "@/services/InitialAOS";
import ProgressBarProvider from "./utilities/ProgressBarProvider";
import Wrapper from "@/services/Wrapper";

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
  ],
  variable: "--font-glancyr",
});

export const metadata: Metadata = {
  title: "Grounded | Bussiness | Riset & Development",
  description: "Till Infinity and Beyond",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Wrapper>
        <InitialAOS>
          <body className={`${open_Sans.className} ${Glancyr.variable}`}>
            <ProgressBarProvider>
              <Navbar />
              {children}
              <Footer />
            </ProgressBarProvider>
          </body>
        </InitialAOS>
      </Wrapper>
    </html>
  );
}
