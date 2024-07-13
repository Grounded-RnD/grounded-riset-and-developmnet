import { updateProjectsWithId } from "@/lib/database/projectGetServerSession";
import { ProjectPayLoad } from "@/lib/database/User.query";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
interface Proops {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  data?: ProjectPayLoad | null;
}

export default function Modal({ setOpenModal, data }: Proops) {
  const [ProjectType, setProjectType] = useState(data?.type || [""]);

  const addProject = () => {
    setProjectType([...ProjectType, ""]);
  };

  const removeProject = (index: number) => {
    setProjectType(ProjectType.filter((_, i) => i !== index));
  };

  const handleProjectChange = (index: number, value: string) => {
    const newExperience = [...ProjectType];
    newExperience[index] = value;
    setProjectType(newExperience);
  };
  async function update(formdata: FormData) {
    formdata.append("type", JSON.stringify(ProjectType));

    const toastId = toast.loading("Loading...");
    const result = await updateProjectsWithId(data?.id as string, formdata);
    if (!result.error) {
      toast.success(result.message, { id: toastId });
      setOpenModal(false);
    } else toast.error(result.message, { id: toastId });
  }
  return (
    <section className="`w-full -mt-10 h-screen fixed transition-all duration-300 bg-black/80 z-40 scroll-smooth">
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-3xl mx-auto max-h-full">
          <div className="relative bg-dark-50 rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-medium text-surface-50">Edit Project</h3>
              <button
                onClick={() => setOpenModal(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-surface-900 hover:text-surface-100 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-hide="static-modal"
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formdata = new FormData(e.currentTarget);
                  update(formdata);
                }}
              >
                <div className="my-4">
                  <Image src={data?.imgUrl as string} width={100} height={100} alt="Image Profile" />
                </div>
                <div className="my-4">
                  <label htmlFor="imgUrl" className="block mb-2 text-sm font-medium text-white">
                    Image
                  </label>
                  <input
                    type="text"
                    name="imgUrl"
                    id="imgUrl"
                    defaultValue={data?.imgUrl ?? ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="imgUrl"
                    required
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    defaultValue={data?.title ?? ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="Title"
                    required
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">
                    Description
                  </label>
                  <input
                    type="text"
                    name="desc"
                    id="description"
                    defaultValue={data?.desc || ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="description"
                    required
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="link" className="block mb-2 text-sm font-medium text-white">
                    Project Url
                  </label>
                  <input
                    type="text"
                    name="link"
                    id="link"
                    defaultValue={data?.link || ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="link"
                    required
                  />
                </div>

                <div className="my-4">
                  <label htmlFor="type" className="block mb-2 text-sm font-medium text-white">
                    Type
                  </label>
                  {ProjectType.map((x, i) => (
                    <div key={i} className="flex gap-x-2 my-3">
                      <input
                        type="text"
                        name={`Type ${x}`}
                        id="type"
                        defaultValue={x}
                        onChange={(e) => handleProjectChange(i, e.target.value)}
                        className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-1/2 p-2.5"
                        placeholder="type"
                        required
                      />
                      <button type="button" onClick={() => removeProject(i)} className="text-red-500 ml-2">
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={addProject} className="text-warning-400">
                    Add Type
                  </button>
                </div>
                <div className="flex items-center justify-center gap-x-6 p-4 md:p-5 border-t border-surface-800 rounded-b">
                  <button
                    type="submit"
                    className="font-semibold w-full text-[16px] text-warning-200 border-2 rounded-[12px] border-warning-400 px-4 py-1 hover:ring-2 hover:ring-warning-200 hover:bg-gradient-to-r hover:from-warning-400 hover:to-warning-300 transition-all duration-200 hover:text-surface-50 focus:ring-2 focus:bg-warning-400 focus:text-surface-50 focus:ring-warning-100"
                  >
                    Edit Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
