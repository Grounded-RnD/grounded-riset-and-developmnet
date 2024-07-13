import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  redirect("/api/auth/signin");
  return <div>page</div>;
}
