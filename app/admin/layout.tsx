import { Metadata } from "next";
import SessionProfile from "../components/admins/SessionProfile";
import Sidebar from "../components/admins/Sidebar";

export const metadata: Metadata = {
  title: "Admin Page - Grounded",
  description: "Till Infinity and Beyond",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Sidebar />
        <div className="max-w-full ml-80 mt-10 mr-16">{children}</div>
        <div className="absolute top-6 right-6">
          <SessionProfile />
        </div>
      </body>
    </html>
  );
}
