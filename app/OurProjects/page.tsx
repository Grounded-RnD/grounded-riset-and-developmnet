"use client";
import React, { useEffect, useState } from "react";
import Search from "../utilities/Search";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/icons/arrow-left-with-round.svg";
import { projectProops, projects } from "../data/data";
import Navbar from "../components/Navbar";

export default function OurProjects() {
  const [filteredProjects, setFilteredProjects] = useState<projectProops[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  useEffect(() => {
    const filtered = projects.filter((projects) => projects.title?.toString().toLowerCase().includes(searchInput) || projects.type.toString().toLowerCase().includes(searchInput));
    setFilteredProjects(filtered);
  }, [searchInput]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  return (
    <>
      <Navbar />
      <section id="projects" className="h-full w-full bg-dark-100 pt-32 pb-40">
        <main className="xl:px-32 md:px-28 sm:px-10 px-2">
          <div className="flex justify-between items-center">
            <h2 data-aos="fade-right" data-aos-duration="500" className="xl:text-[48px] lg:text-[44px] md:text-[40px] sm:text-[38px] text-[36px] font-normal font-glancyr text-oranges-300">
              Project List
            </h2>
            <form className="md:flex items-center hidden md:max-w-xs lg:max-w-sm xl:max-w-md w-full">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <Search />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  className="bg-dark-50 text-surface-50 text-sm rounded-lg focus:ring-gray-1 focus:border-gray-2 block w-full ps-10 py-2.5 px-4 placeholder:text-surface-300"
                  placeholder="Search Projects"
                  required
                />
              </div>
              <button className="hidden" type="submit"></button>
            </form>
          </div>
          <div className="mt-20 flex flex-wrap gap-6 justify-center items-center">
            {filteredProjects.map((x, i) => (
              <section
                key={i}
                data-aos="fade-right"
                data-aos-delay={100 * i}
                data-aos-duration="500"
                className="xl:w-[412px] lg:w-[400px] h-[440px] md:w-[368px] sm:w-[336px] w-[320px] p-4 border-2 border-surface-400 rounded-[12px] md:row-span-2 relative"
              >
                {x.imgUrl ? <Image src={`${x.imgUrl}`} width={200} height={100} alt="AgroSky" className="w-full object-cover h-[200px] mb-4 rounded-[12px]" /> : <div className="h-[200px] mb-4"></div>}
                <div className="flex flex-wrap gap-2">
                  {x.type.map((ty, index) => (
                    <div key={index} className="px-2 py-1 bg-warning-300 rounded-[4px] w-fit">
                      <p className="xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[8px] text-surface-900 font-semibold">{ty}</p>
                    </div>
                  ))}
                </div>

                <h6 className="xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] text-surface-50 font-semibold mt-4">
                  {x.title} {x.desc ? "|" : ""} {x.desc}
                </h6>
                <div className="w-fit mt-10">
                  <Link href={`${x.link}`} target="_blank" className="flex items-center justify-start mb-2 absolute bottom-4 group">
                    <p className="xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px] group-hover:text-oranges-300 group-hover:font-medium transition-all text-surface-600 font-normal">Read More</p>
                    <Image src={arrow} alt="arrow" className="xl:scale-100 lg:scale-90 md:scale-75 scale-75 group-hover:text-oranges-300" />
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </main>
      </section>
    </>
  );
}
