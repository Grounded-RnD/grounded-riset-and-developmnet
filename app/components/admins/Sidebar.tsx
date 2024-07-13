"use client";
import DashboardIcon from "@/public/icons/DashboardIcon";
import ProjectsIcon from "@/public/icons/ProjectsIcon";
import UserIcon from "@/public/icons/UserIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo/main-logo.svg";
import LogoutIcon from "@/public/icons/LogoutIcon";
import ProfileIcon from "@/public/icons/ProfileIcon";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const sides = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      img: <DashboardIcon />,
    },
    {
      title: "Users",
      href: "/admin/users",
      img: <UserIcon />,
    },
    {
      title: "Projects",
      href: "/admin/projects",
      img: <ProjectsIcon />,
    },
  ];
  return (
    <>
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#1C1C1C]">
          <Image src={logo} alt="logo" width={160} className="mb-10 mt-6" />
          <ul className="space-y-2 font-medium">
            {sides.map((x, i) => (
              <li key={i}>
                <Link href={x.href} className="flex items-center p-2 text-surface-100 rounded-lg hover:bg-surface-800 group">
                  {x.img}
                  <span className="ms-3">{x.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button onClick={() => signOut({ callbackUrl: "/auth/login" })} className="flex items-center p-2 w-full text-surface-100 rounded-lg hover:bg-surface-800 group">
                <LogoutIcon />
                <span className="ms-3">Log Out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
