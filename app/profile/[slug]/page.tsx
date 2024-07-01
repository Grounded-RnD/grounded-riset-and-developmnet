"use client";
import React, { useEffect, useState } from "react";
import Haza from "@/./public/profile/haza.png";
import WebsiteIcon from "@/./public/icons/website-color.svg";
import InstagramIcon from "@/./public/icons/instagram-color.svg";
import LinkedInIcon from "@/./public/icons/linkedin-color.svg";
import GithubIcon from "@/./public/icons/github-color.svg";
import Image from "next/image";
import SkillWebFront from "@/./public/skill/web-frontend.svg";
import SkillMobile from "@/./public/skill/android.svg";
import SkillDataScience from "@/./public/skill/data-science.svg";
import { getData } from "@/services/FetchDataUser";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ModalProfile from "@/app/components/utils/ModalProfile";

const ProfilePage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const [user, setUser] = useState<UserProops | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (slug) {
      fetch(`/api/data/${slug}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
            setUser(null);
          } else {
            setUser(data);
            setError(null);
          }
        })
        .catch((err) => {
          setError("Failed to fetch data");
          setUser(null);
        });
    }
  }, [slug]);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return (
      <>
        <div className="bg-dark-300 text-surface-50 pt-10">
          <main className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <section className="col-span-1 bg-dark-50 p-6 rounded-2xl flex flex-col items-center justify-center">
              {/* <Image src={Haza} alt="Profile" className="rounded-full w-[150px] md:w-[206px] mx-auto" /> */}
              <h2 className="text-center font-semibold text-[24px] mt-4"></h2>
              <i>
                <p className="text-center text-[18px] opacity-60">
                  <br />
                  {/* Mobile Developer */}
                </p>
              </i>
            </section>
            <section className="col-span-1 md:col-span-2 bg-dark-50 p-6 rounded-2xl">
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="divide-y divide-zinc-700 h-80">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium"> </td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium"></td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium"></td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium"></td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium"></td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium"></td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="col-span-1 bg-dark-50 p-6 rounded-2xl h-80">
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="divide-y divide-zinc-700">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">{/* <Image src={WebsiteIcon} alt="Website" className="w-[20px] md:w-[28px] mx-auto" /> */}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">{/* <Image src={LinkedInIcon} alt="LinkedIn" className="w-[20px] md:w-[28px] mx-auto" /> */}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">{/* <Image src={InstagramIcon} alt="Instagram" className="w-[20px] md:w-[28px] mx-auto" /> */}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light"></td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">{/* <Image src={GithubIcon} alt="Github" className="w-[20px] md:w-[28px] mx-auto" /> */}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="col-span-1 bg-dark-50 p-6 rounded-2xl ">
              <h2 className="text-xl md:text-xl font-normal mb-4"></h2>
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="divide-y divide-zinc-700">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">{/* <Image src={SkillWebFront} alt="Website" className="w-[25px] md:w-[33px] mx-auto" /> */}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">
                              <p className="text-[16px] md:text-[16px]"></p>
                              <p className="text-[10px] md:text-[12px]"></p>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">{/* <Image src={SkillMobile} alt="LinkedIn" className="w-[20px] md:w-[28px] mx-auto" /> */}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">
                              <p className="text-[16px] md:text-[16px]"></p>
                              <p className="text-[10px] md:text-[12px]"></p>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">{/* <Image src={SkillDataScience} alt="Instagram" className="w-[20px] md:w-[28px] mx-auto" /> */}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">
                              <p className="text-[16px] md:text-[16px]"></p>
                              <p className="text-[10px] md:text-[12px]"></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="col-span-1 bg-dark-50 p-6 rounded-2xl ">
              <h2 className="text-xl md:text-xl mb-4 "></h2>
              <p className="text-[16px]"></p>
            </section>
          </main>
        </div>
      </>
    );
  }

  function displayArrayWithMaxLength(array: string[], maxLength: number) {
    if (array?.length > maxLength) {
      return array.slice(0, maxLength).map(String);
    }
    return array.map(String);
  }

  const maxLength = 3;
  const dataUser = user.experience;

  const result = displayArrayWithMaxLength(dataUser, maxLength);

  function handleClose() {
    setIsVisible(false);
  }

  return (
    <div className="bg-dark-300 text-surface-50 pt-10">
      <ModalProfile onCloce={handleClose} onOpen={isVisible} user={user.fullname}>
        {user.experience.map((e, i) => (
          <div key={i} className="px-6 py-4 whitespace-nowrap border-b border-b-zinc-700">
            <p className="text-[16px] leading-relaxed">
              {i + 1}. {e}
            </p>
          </div>
        ))}
      </ModalProfile>
      <main className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <section className="col-span-1 bg-dark-50 p-6 rounded-2xl flex flex-col items-center justify-center">
          <Image src={user.img} alt="Profile" className="rounded-full w-[150px] md:w-[206px] mx-auto" />
          <h2 className="text-center font-semibold text-[24px] mt-4">{user.fullname}</h2>
          <i>
            <p className="text-center text-[18px] opacity-60">
              {user.jabatan}
              <br />
              {user.bidang}
            </p>
          </i>
        </section>
        <section className="col-span-1 md:col-span-2 bg-dark-50 p-6 rounded-2xl">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-zinc-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium">Full Name</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">{user.fullname}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium">Email</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">{user.email}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium">Phone</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">{user.phone}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium">Address</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">{user.address}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium">Member Since</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">{user.member_since.toString()}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium">Role</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">{user.role}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-1 bg-dark-50 p-6 rounded-2xl ">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-zinc-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Image src={WebsiteIcon} alt="Website" className="w-[20px] md:w-[28px] mx-auto" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">
                          <Link target="_blank" className="hover:underline" href={user.web.href}>
                            {user.web.title}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Image src={LinkedInIcon} alt="LinkedIn" className="w-[20px] md:w-[28px] mx-auto" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">
                          <Link target="_blank" className="hover:underline" href={user.linkedin.href}>
                            {user.linkedin.title}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Image src={InstagramIcon} alt="Instagram" className="w-[20px] md:w-[28px] mx-auto" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">
                          <Link target="_blank" className="hover:underline" href={user.instagram.href}>
                            {user.instagram.title}
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Image src={GithubIcon} alt="Github" className="w-[20px] md:w-[28px] mx-auto" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">
                          <Link target="_blank" className="hover:underline" href={user.github.href}>
                            {user.github.title}
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-1 bg-dark-50 p-6 rounded-2xl ">
          <h2 className="text-xl md:text-xl font-normal mb-4">Techstack & Achievement</h2>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-zinc-700">
                      {user.skills.map((skil, i) => (
                        <tr key={i}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <p className="text-xl">{i + 1}.</p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-[16px] font-light">
                            <p className="text-[16px] md:text-[16px]">{skil.skill}</p>
                            <p className="text-[10px] md:text-[12px] truncate">{skil.tech_stack.join(", ")}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-1 bg-dark-50 p-6 rounded-2xl ">
          <h2 className="text-xl md:text-xl mb-4">Experience</h2>
          {user.experience && user.experience.length !== 0 ? (
            <>
              {result.map((e, i) => (
                <div key={i} className="px-6 py-4 whitespace-nowrap border-b border-b-zinc-700">
                  <p className="text-[16px] leading-relaxed truncate">
                    {i + 1}. {e}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <div className="px-6 py-4 whitespace-nowrap border-b border-b-zinc-700">
              <p className="text-[16px] leading-relaxed font-semibold">
                <i>Data Belum Terisi</i>
              </p>
            </div>
          )}
          {user.experience && user.experience.length > maxLength && (
            <button
              type="button"
              onClick={() => setIsVisible(true)}
              className="font-semibold mt-3 ml-6 text-[16px] text-warning-200 border-2 rounded-[12px] border-warning-400 px-4 py-1 hover:ring-2 hover:ring-warning-200 hover:bg-gradient-to-r hover:from-warning-400 hover:to-warning-300 transition-all duration-200 hover:text-surface-50 focus:ring-2 focus:bg-warning-400 focus:text-surface-50 focus:ring-warning-100"
            >
              See details
            </button>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
