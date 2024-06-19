import React from "react";
import Haza from '@/./public/profile/haza.png';
import WebsiteIcon from '@/./public/icons/website-color.svg';
import InstagramIcon from '@/./public/icons/instagram-color.svg';
import LinkedInIcon from '@/./public/icons/linkedin-color.svg';
import GithubIcon from '@/./public/icons/github-color.svg';
import Image from 'next/image';
import SkillWebFront from '@/./public/skill/web-frontend.svg';
import SkillMobile from '@/./public/skill/android.svg';
import SkillDataScience from '@/./public/skill/data-science.svg';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-dark-50 text-surface-50">
      <header className="bg-dark-400 py-4 px-8 flex justify-between items-center">
        <div className="text-3xl font-bold">grounded.</div>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Our Services</a>
          <a href="#" className="hover:underline">Investor Relation</a>
          <a href="#" className="hover:underline">Partner</a>
          <a href="#" className="hover:underline">Join Team</a>
        </nav>
        <button className="bg-oranges-300 px-4 py-2 rounded text-dark-50">Contact Us</button>
      </header>
      <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="col-span-1 bg-dark-300 p-6 rounded-2xl flex flex-col items-center justify-center">
          <Image src={Haza} alt="Profile" className="rounded-full w-[206px] mx-auto" />
          <h2 className="text-center font-semibold text-[32px] mt-4">Haza Nasrullah K.</h2>
          <i> <p className="text-center text-[24px] opacity-60">Chief Financial Officer<br />Mobile Developer</p></i>
        </section>
        <section className="col-span-2 bg-dark-300 p-6 rounded-2xl">
          {/* mulai tabel y */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-zinc-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-medium ">Full Name</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light">Haza Nasrullah Kuswantoro</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-medium ">Email</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light">haza@grounded.org</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-medium ">Phone</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light">62 8962 3084 881</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-medium ">Addres</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light">Malang City, East Java, Indonesia</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-medium ">Member Since</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light">August 2023</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-medium ">Role</td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light">Co-Founder</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-1 bg-dark-300 p-6 rounded">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-zinc-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><Image src={WebsiteIcon} alt="Website" className="w-[28px] mx-auto" /></td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light">haza.grounded.org</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><Image src={LinkedInIcon} alt="LinkedIn" className="w-[28px] mx-auto" /></td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light">haza_nasrullah</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><Image src={InstagramIcon} alt="Instagram" className="w-[28px] mx-auto" /></td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light">@hazanasrullah</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><Image src={GithubIcon} alt="Github" className="w-[28px] mx-auto" /></td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light">hazz01</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-1 bg-dark-300 p-6 rounded">
          <h2 className="text-2xl font-normal mb-4">Techstack & Achievement</h2>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-zinc-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><Image src={SkillWebFront} alt="Website" className="w-[33px] mx-auto" /></td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light"><p className="text-[16px]">FrontEnd Developer</p><p className="text-[12px]">HTML, CSS, React, Tailwind, and 5+</p></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><Image src={SkillMobile} alt="LinkedIn" className="w-[28px] mx-auto" /></td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light"><p className="text-[16px]">Android 7 Ios Developer</p><p className="text-[12px]">Dart, Flutter, Firebase</p></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><Image src={SkillDataScience} alt="Instagram" className="w-[28px] mx-auto" /></td>
                        <td className="px-6 py-4 whitespace-nowrap text-[24px] font-light"><p className="text-[16px]">Data Science</p><p className="text-[12px]">Orange Data Science</p></td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-1 bg-dark-300 p-6 rounded">
          <h2 className="text-2xl mb-4">Experience</h2>
          <p className="text-[16px]">1. Programmer of MokletDev</p>
        </section>
      </main>
      <footer className="bg-dark-400 py-4 text-center">
        <div>© 2024 Grounded Team</div>
      </footer>
    </div>
  );
};

export default ProfilePage;
