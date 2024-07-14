import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import InitialAOS from "@/services/InitialAOS";
import ProgressBarProvider from "./utilities/ProgressBarProvider";
import Wrapper from "@/services/Wrapper";
import toast, { Toaster } from "react-hot-toast";

import AuthProvider from "@/services/AuthProvider";
import clsx from "clsx";

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
      <body className={clsx(Glancyr.variable)}>
        <AuthProvider>
          <Wrapper>
            <InitialAOS>
              <ProgressBarProvider>{children}</ProgressBarProvider>
            </InitialAOS>
          </Wrapper>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
