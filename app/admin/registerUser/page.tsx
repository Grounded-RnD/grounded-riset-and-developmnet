"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEventHandler, FormEvent, FormEventHandler, useState } from "react";
import toast from "react-hot-toast";

export default function RegisterUser() {
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [visible, setIsVisible] = useState(false);
  const InputType = visible ? "text" : "password";

  const [error, setError] = useState<string | undefined>("");
  const router = useRouter();
  const { fullname, email, password } = userInfo;
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify(userInfo),
    });
    const res = await response.json();
    try {
      if (response.status === 401) {
        setError(res.message || "All fields are required");
        toast.error("Failed to Create User");
      }
      if (response.status === 522) {
        setError(res.message || "Password must be at least 8 characters");
        toast.error("Failed to Create User");
      }
      if (response.status === 403) {
        setError(res.message || "Only email @grounded.or.id can register");
        toast.error("Failed to Create User");
      }
      if (response.status === 455) {
        setError(res.message || "Email is already exist.");
        toast.error("Failed to Create User");
      }
      if (!response.ok) {
        setError(res.message || "Failed to Create User");
        toast.error("Failed to Create User");
      }
      if (response.ok) {
        toast.success("User Created Successfully");
        router.push("/admin/users");
      }
    } catch (error) {
      console.log((error as Error).message);
      setError((error as Error).message || "Failed to Create User");
      toast.error("Failed to Create User");
    }
  };

  return (
    <>
      <h1 className="font-semibold text-[32px] text-oranges-400 text-center">Create new Admin</h1>
      <p className="font-medium text-[20px] text-surface-200 text-center">Grounded Admin Page</p>
      <section>
        <div className="flex flex-col items-center justify-center mt-16 mx-auto lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-lg lg:max-w-xl xl:p-0 bg-dark-100 border-surface-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-10">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={fullname}
                    onChange={handleChange}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5 "
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5 "
                    placeholder="admin@grounded.or.id"
                    required
                  />
                </div>
                <div className="relative">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type={InputType as string}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={handleChange}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5 "
                    required
                  />
                  <button className="text-sm mt-4 text-warning-300" type="button" onClick={() => setIsVisible((visible) => !visible)}>
                    {visible ? "Hide Passwords" : "Show Password"}
                  </button>
                </div>

                <button
                  type="submit"
                  className="font-semibold text-[16px] w-full py-2 text-warning-200 border-2 rounded-[12px] border-warning-400 px-4 hover:ring-2 hover:ring-warning-200 hover:bg-gradient-to-r hover:from-warning-400 hover:to-warning-300 transition-all duration-200 hover:text-surface-50 focus:ring-2 focus:bg-warning-400 focus:text-surface-50 focus:ring-warning-100 "
                >
                  Add Admin
                </button>
              </form>
              <p className="text-sm font-normal text-red-500">
                <i>{error}</i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
