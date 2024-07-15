import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";

const open_Sans = Open_Sans({ subsets: ["latin"] });

const Glancyr = localFont({
  src: [
    {
      path: "../../public/font/Glancyr-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Glancyr-Medium.otf",
      weight: "500",
      style: "medium",
    },
  ],
  variable: "--font-glancyr",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(Glancyr.variable, open_Sans.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
