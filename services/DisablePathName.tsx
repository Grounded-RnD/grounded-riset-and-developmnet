// "use client";
// import Sidebar from "@/app/components/admins/Sidebar";
// import Footer from "@/app/components/Footer";
// import Navbar from "@/app/components/Navbar";
// import { usePathname } from "next/navigation";
// import React, { ReactNode } from "react";

// export default function DisablePathName({ children }: { children: ReactNode }) {
//   const pathname = usePathname();
//   const loginAdminPathName = ["/auth/login"];
//   const disableLoginPath = loginAdminPathName.includes(pathname);
//   return (
//     <>
//       {disableLoginPath ? (
//         <>{children}</>
//       ) : (
//         <>
//           <Navbar />
//           {children}
//           <Footer />
//         </>
//       )}
//     </>
//   );
// }
