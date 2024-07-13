"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEventHandler, FormEvent, FormEventHandler, useState } from "react";
import toast from "react-hot-toast";

export default function AddProjects() {
  const [projectInfo, setProjectInfo] = useState({
    title: "",
    desc: "",
  });
  const [visible, setIsVisible] = useState(false);
  const InputType = visible ? "text" : "password";

  const [error, setError] = useState<string | undefined>("");
  const router = useRouter();
  const { title, desc } = projectInfo;
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setProjectInfo({ ...projectInfo, [name]: value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/project", {
      method: "POST",
      body: JSON.stringify(projectInfo),
    });

    const res = await response.json();
    if (!response.ok) {
      setError(res.message || "Failed to Create User");
      toast.error("Failed to Create Projects");
    }
    if (response.ok) {
      toast.success("Project Created Successfully");
      router.push("/admin/projects");
    }
  };
  return (
    <>
      <h1 className="font-semibold text-[32px] text-oranges-400 text-center">Create new Project</h1>
      <p className="font-medium text-[20px] text-surface-200 text-center">Grounded Admin Page</p>
      <section>
        <div className="flex flex-col items-center justify-center mt-16 mx-auto lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-lg lg:max-w-xl xl:p-0 bg-dark-100 border-surface-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-10">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={handleChange}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5 "
                    placeholder="Project Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                    Description
                  </label>
                  <input
                    type="text"
                    name="desc"
                    id="desc"
                    value={desc}
                    onChange={handleChange}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5 "
                    placeholder="Project Description"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="font-semibold text-[16px] w-full py-2 text-warning-200 border-2 rounded-[12px] border-warning-400 px-4 hover:ring-2 hover:ring-warning-200 hover:bg-gradient-to-r hover:from-warning-400 hover:to-warning-300 transition-all duration-200 hover:text-surface-50 focus:ring-2 focus:bg-warning-400 focus:text-surface-50 focus:ring-warning-100 "
                >
                  Add Project
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
