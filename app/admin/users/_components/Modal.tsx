import { UserWithLastlog } from "@/lib/database/User.query";
import { updateUserWithId } from "@/lib/database/userGetServerSession";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";

interface Proops {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  data?: UserWithLastlog | null;
}

export default function Modal({ setOpenModal, data }: Proops) {
  const [skills, setSkills] = useState(data?.skills || [{ skill: "", tech_stack: [""] }]);
  const [experience, setExperience] = useState(data?.experience || [""]);

  const addSkill = () => {
    setSkills([...skills, { skill: "", tech_stack: [""] }]);
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_: any, i: any) => i !== index));
  };

  const handleSkillChange = (index: number, key: string, value: string) => {
    const newSkills: any = [...skills];
    newSkills[index][key] = value;
    setSkills(newSkills);
  };

  const handleTechStackChange = (skillIndex: number, stackIndex: number, value: string) => {
    const newSkills = [...skills];
    newSkills[skillIndex].tech_stack[stackIndex] = value;
    setSkills(newSkills);
  };

  const addTechStack = (skillIndex: number) => {
    const newSkills = [...skills];
    newSkills[skillIndex].tech_stack.push("");
    setSkills(newSkills);
  };

  const removeTechStack = (skillIndex: number, stackIndex: number) => {
    const newSkills = [...skills];
    newSkills[skillIndex].tech_stack = newSkills[skillIndex].tech_stack.filter((_: any, i: any) => i !== stackIndex);
    setSkills(newSkills);
  };

  const addExperience = () => {
    setExperience([...experience, ""]);
  };

  const removeExperience = (index: number) => {
    setExperience(experience.filter((_: any, i: any) => i !== index));
  };

  const handleExperienceChange = (index: number, value: string) => {
    const newExperience = [...experience];
    newExperience[index] = value;
    setExperience(newExperience);
  };

  async function update(formdata: FormData) {
    formdata.append("skills", JSON.stringify(skills));
    formdata.append("experience", JSON.stringify(experience));

    console.log("Form Data: ", Array.from(formdata.entries()));

    const toastId = toast.loading("Loading...");
    const result = await updateUserWithId(data?.id as string, formdata);
    if (!result.error) {
      toast.success(result.message, { id: toastId });
      setOpenModal(false);
    } else {
      toast.error(result.message, { id: toastId });
    }
  }

  return (
    <section className={`w-full -mt-10 h-screen fixed transition-all duration-300 bg-black/80 z-40 scroll-smooth`}>
      <div className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative p-4 w-full max-w-3xl mx-auto max-h-full">
          <div className="relative bg-dark-50 rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-medium text-surface-50">Edit Profile</h3>
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
                  <Image src={data?.user_img as string} width={100} height={100} alt="Image Profile" />
                </div>
                <div className="my-4">
                  <label htmlFor="user_img" className="block mb-2 text-sm font-medium text-white">
                    Image Profile
                  </label>
                  <input
                    type="url"
                    name="user_img"
                    id="user_img"
                    defaultValue={data?.user_img ?? ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="img url"
                    required
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={data?.email ?? ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-white">
                    FullName
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    defaultValue={data?.fullname ?? ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="FullName"
                    required
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="role" className="block mb-2 text-sm font-medium text-white">
                    Role
                  </label>
                  <select
                    name="role"
                    id="role"
                    defaultValue={data?.role ?? "Users"}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    required
                  >
                    <option value="Users">Users</option>
                    <option value="Member">Member</option>
                    <option value="CoFounder">CoFounder</option>
                  </select>
                </div>
                <div className="my-4">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    defaultValue={data?.phone ?? ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="Phone"
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="addrress" className="block mb-2 text-sm font-medium text-white">
                    Address
                  </label>
                  <input
                    type="text"
                    name="addrress"
                    id="addrress"
                    defaultValue={data?.addrress ?? ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="Address"
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="member_since" className="block mb-2 text-sm font-medium text-white">
                    Member Since
                  </label>
                  <input
                    type="date"
                    name="member_since"
                    id="member_since"
                    defaultValue={data?.member_since ?? ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="Member Since"
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="jabatan" className="block mb-2 text-sm font-medium text-white">
                    Jabatan
                  </label>
                  <input
                    type="text"
                    name="jabatan"
                    id="jabatan"
                    defaultValue={data?.jabatan ?? ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="Jabatan"
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="bidang" className="block mb-2 text-sm font-medium text-white">
                    Bidang
                  </label>
                  <input
                    type="text"
                    name="bidang"
                    id="bidang"
                    defaultValue={data?.bidang ?? ""}
                    className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                    placeholder="Bidang"
                  />
                </div>
                <main className="grid grid-cols-2 gap-x-4 my-4">
                  <div>
                    <label htmlFor="webTitle" className="block mb-2 text-sm font-medium text-white">
                      Web Title
                    </label>
                    <input
                      type="text"
                      name="webTitle"
                      id="webTitle"
                      defaultValue={data?.web?.title ?? ""}
                      className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                      placeholder="Web Title"
                    />
                  </div>
                  <div>
                    <label htmlFor="webHref" className="block mb-2 text-sm font-medium text-white">
                      Web Href
                    </label>
                    <input
                      type="url"
                      name="webHref"
                      id="webHref"
                      defaultValue={data?.web?.href ?? ""}
                      className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                      placeholder="Web Href"
                    />
                  </div>
                </main>
                <main className="grid grid-cols-2 gap-x-4 my-4">
                  <div>
                    <label htmlFor="linkedinTitle" className="block mb-2 text-sm font-medium text-white">
                      LinkedIn Title
                    </label>
                    <input
                      type="text"
                      name="linkedinTitle"
                      id="linkedinTitle"
                      defaultValue={data?.linkedin?.title ?? ""}
                      className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                      placeholder="LinkedIn Title"
                    />
                  </div>
                  <div>
                    <label htmlFor="linkedinHref" className="block mb-2 text-sm font-medium text-white">
                      LinkedIn Href
                    </label>
                    <input
                      type="url"
                      name="linkedinHref"
                      id="linkedinHref"
                      defaultValue={data?.linkedin?.href ?? ""}
                      className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                      placeholder="LinkedIn Href"
                    />
                  </div>
                </main>
                <main className="grid grid-cols-2 gap-x-4 my-4">
                  <div>
                    <label htmlFor="instagramTitle" className="block mb-2 text-sm font-medium text-white">
                      Instagram Title
                    </label>
                    <input
                      type="text"
                      name="instagramTitle"
                      id="instagramTitle"
                      defaultValue={data?.instagram?.title ?? ""}
                      className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                      placeholder="Instagram Title"
                    />
                  </div>
                  <div>
                    <label htmlFor="instagramHref" className="block mb-2 text-sm font-medium text-white">
                      Instagram Href
                    </label>
                    <input
                      type="url"
                      name="instagramHref"
                      id="instagramHref"
                      defaultValue={data?.instagram?.href ?? ""}
                      className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                      placeholder="Instagram Href"
                    />
                  </div>
                </main>
                <main className="grid grid-cols-2 gap-x-4 my-4">
                  <div>
                    <label htmlFor="githubTitle" className="block mb-2 text-sm font-medium text-white">
                      GitHub Title
                    </label>
                    <input
                      type="text"
                      name="githubTitle"
                      id="githubTitle"
                      defaultValue={data?.github?.title ?? ""}
                      className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                      placeholder="GitHub Title"
                    />
                  </div>
                  <div>
                    <label htmlFor="githubHref" className="block mb-2 text-sm font-medium text-white">
                      GitHub Href
                    </label>
                    <input
                      type="url"
                      name="githubHref"
                      id="githubHref"
                      defaultValue={data?.github?.href ?? ""}
                      className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                      placeholder="GitHub Href"
                    />
                  </div>
                </main>
                <main className="grid grid-cols-2 gap-x-4 my-4">
                  <div>
                    <label htmlFor="whatsappTitle" className="block mb-2 text-sm font-medium text-white">
                      WhatsApp Title
                    </label>
                    <input
                      type="text"
                      name="whatsappTitle"
                      id="whatsappTitle"
                      defaultValue={data?.whatsapp?.title ?? ""}
                      className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                      placeholder="WhatsApp Title"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsappHref" className="block mb-2 text-sm font-medium text-white">
                      WhatsApp Href
                    </label>
                    <input
                      type="url"
                      name="whatsappHref"
                      id="whatsappHref"
                      defaultValue={data?.whatsapp?.href ?? ""}
                      className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                      placeholder="WhatsApp Href"
                    />
                  </div>
                </main>

                <div className="my-4 mt-10">
                  <label htmlFor="skills" className="block mb-2 text-sm font-medium text-white">
                    Skills
                  </label>
                  {skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="mb-10">
                      <div className="flex items-center">
                        <input
                          type="text"
                          name={`skills[${skillIndex}].skill`}
                          value={skill.skill}
                          onChange={(e) => handleSkillChange(skillIndex, "skill", e.target.value)}
                          className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-1/2 p-2.5 mb-5"
                          placeholder="Skill"
                          required
                        />
                        <button type="button" onClick={() => removeSkill(skillIndex)} className="text-red-500 ml-2">
                          Remove Skill
                        </button>
                      </div>
                      {skill.tech_stack.map((tech, stackIndex) => (
                        <div key={stackIndex} className="flex items-center mb-2">
                          <input
                            type="text"
                            name={`skills[${skillIndex}].tech_stack[${stackIndex}]`}
                            value={tech}
                            onChange={(e) => handleTechStackChange(skillIndex, stackIndex, e.target.value)}
                            className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-1/2 p-2.5"
                            placeholder="Tech Stack"
                            required
                          />
                          <button type="button" onClick={() => removeTechStack(skillIndex, stackIndex)} className="text-red-500 ml-2">
                            Remove Tech Stack
                          </button>
                        </div>
                      ))}
                      <button type="button" onClick={() => addTechStack(skillIndex)} className="text-surface-50">
                        Add Tech Stack
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={addSkill} className="text-warning-400">
                    Add Skill
                  </button>
                </div>

                <div className="my-4 mt-10">
                  <label htmlFor="experience" className="block mb-2 text-sm font-medium text-white">
                    Experience
                  </label>
                  {experience.map((exp, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        name={`experience[${index}]`}
                        value={exp}
                        onChange={(e) => handleExperienceChange(index, e.target.value)}
                        className="bg-dark-400 border border-surface-900 text-white rounded-lg focus:ring-2 focus:border outline-none focus:ring-warning-400/40 focus:border-warning-400 block w-full p-2.5"
                        placeholder="Experience"
                        required
                      />
                      <button type="button" onClick={() => removeExperience(index)} className="text-red-500 ml-2">
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={addExperience} className="text-warning-400">
                    Add Experience
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
