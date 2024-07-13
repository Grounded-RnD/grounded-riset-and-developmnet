"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, FormEventHandler, useState } from "react";
import logo from "@/public/logo/main-logo.svg";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import usePasswordToggle from "@/hooks/UsePasswordToggle";

export default function AdminLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { data: session, status } = useSession();
  const [visible, setIsVisible] = useState(false);
  const InputType = visible ? "text" : "password";
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
        callbackUrl: "/admin/dashboard/",
      });
      if (!res?.ok) {
        toast.error("Failed to Log In");
        setError(`status: ${res?.status}, Failed to Log In`);
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  if (status === "authenticated") {
    router.push("/admin/dashboard");
  }

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-lg xl:p-0 bg-dark-100 border-surface-900">
          <Link href="/" className="flex items-center text-2xl font-semibold text-surface-50">
            <Image src={logo} alt="logo" width={160} className="mb-10 mt-6 mx-auto" />
          </Link>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-10" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5 "
                  placeholder="admin@grounded.or.id"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type={InputType as string}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5 "
                  required
                />
                <button className="text-sm mt-4 text-warning-300" type="button" onClick={() => setIsVisible((visible) => !visible)}>
                  {visible ? "Hide Passwords" : "Show Password"}
                </button>{" "}
              </div>

              <button
                type="submit"
                className="font-semibold text-[16px] w-full py-2 text-warning-200 border-2 rounded-[12px] border-warning-400 px-4 hover:ring-2 hover:ring-warning-200 hover:bg-gradient-to-r hover:from-warning-400 hover:to-warning-300 transition-all duration-200 hover:text-surface-50 focus:ring-2 focus:bg-warning-400 focus:text-surface-50 focus:ring-warning-100 "
              >
                Sign in
              </button>
            </form>
            <p className="text-sm font-normal text-surface-400">
              <i>Only Co Founder of Grounded can access admin page</i>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
