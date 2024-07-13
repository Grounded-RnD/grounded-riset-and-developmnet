"use client";
import { useSession } from "next-auth/react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function SessionProfile() {
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <div className="max-w-md w-full bg-surface-900 rounded-xl px-4 py-3 flex gap-x-4 items-center">
      <Image src={session?.user?.user_img as string} width={30} height={20} alt="user img" className="rounded-full " />
      <p>{session?.user?.name}</p>
    </div>
  );
}
