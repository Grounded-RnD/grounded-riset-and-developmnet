import React from "react";
import { LinkButton } from "../utilities/Button";
import Image from "next/image";
import agrosky from "@/public/project/agrosky.png";
import smartaca from "@/public/project/SmartAca.png";
import arrow from "@/public/icons/arrow-left-with-round.svg";
import Link from "next/link";

export default function Project() {
  return (
    <React.Fragment>
      <section id="projects" className="h-full w-full bg-dark-100 pt-32 pb-40">
        <main className="max-w-full px-4 lg:px-10 xl:flex justify-center lg:gap-x-20">
          <div className="max-w-sm mx-auto md:mx-0">
            <h2 data-aos="fade-right" data-aos-duration="1000" className="font-glancyr text-surface-50 xl:text-[48px] lg:text-[44px] md:text-[40px] sm:text-[38px] text-[36px] text-center md:text-start">
              Some piece of our <span className="text-oranges-300">project</span>
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="font-light xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] text-surface-50 mt-5 mb-8 xl:max-w-full max-w-sm md:pr-20 lg:pr-0 text-center md:text-start"
            >
              These are some of the projects that we have created and are building
            </p>
            <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className="">
              <LinkButton href="#" variant="primary" className="w-fit px-10 mx-auto md:mx-0">
                Show All
              </LinkButton>
            </div>
          </div>
          <div className="max-w-4xl w-fit grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 gap-4 mt-10 xl:mt-0 mx-auto md:mx-0">
            <section data-aos="fade-down" data-aos-delay="1200" data-aos-duration="1000" className="xl:w-[412px] lg:w-[400px] md:w-[368px] sm:w-[336px] w-[320px] p-4 border-2 border-surface-400 rounded-[12px] md:row-span-2 relative">
              <Image src={agrosky} alt="AgroSky" className="w-full object-cover h-[200px] mb-4 rounded-[12px]" />
              <div className="px-2 py-1 bg-warning-300 rounded-[4px] w-fit">
                <p className="xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[8px] text-surface-900 font-semibold">Bussiness</p>
              </div>
              <h6 className="xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] text-surface-50 font-semibold mt-4">AgroSky | Plantation Smart System For Amplify Harvest Gains</h6>
              <div className="w-fit mt-10">
                <Link href={"#"} className="flex items-center justify-start mb-2 absolute bottom-4 group">
                  <p className="xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px] group-hover:text-oranges-300 group-hover:font-medium transition-all text-surface-600 font-normal">Read More</p>
                  <Image src={arrow} alt="arrow" className="xl:scale-100 lg:scale-90 md:scale-75 scale-75 group-hover:text-oranges-300" />
                </Link>
              </div>
            </section>
            <section
              data-aos="fade-down"
              data-aos-delay="1400"
              data-aos-duration="1000"
              className="xl:w-[412px] lg:w-[400px] md:w-[368px] sm:w-[336px] w-[320px] p-4 border-2 border-surface-400 rounded-[12px] md:col-start-1 md:row-start-3 relative"
            >
              <div className="px-2 py-1 bg-warning-300 rounded-[4px] w-fit mt-4">
                <p className="xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[8px] text-surface-900 font-semibold">Branding</p>
              </div>
              <h6 className="xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] text-surface-50 font-semibold mt-4">Creative Branding on Instagram</h6>
              <div className="w-fit mt-10">
                <Link href={"#"} className="flex items-center justify-start mb-2 absolute bottom-4 group">
                  <p className="xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px] group-hover:text-oranges-300 group-hover:font-medium transition-all text-surface-600 font-normal">Read More</p>
                  <Image src={arrow} alt="arrow" className="xl:scale-100 lg:scale-90 md:scale-75 scale-75" />
                </Link>
              </div>
            </section>
            <section
              data-aos="fade-down"
              data-aos-delay="1600"
              data-aos-duration="1000"
              className="xl:w-[412px] lg:w-[400px] md:w-[368px] sm:w-[336px] w-[320px] p-4 border-2 border-surface-400 rounded-[12px] md:col-start-1 md:row-start-4 relative"
            >
              <div className="px-2 py-1 bg-warning-300 rounded-[4px] w-fit mt-4">
                <p className="xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[8px] text-surface-900 font-semibold">Development</p>
              </div>
              <h6 className="xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] text-surface-50 font-semibold mt-4">Automation. Advanced Level</h6>
              <div className="w-fit mt-10">
                <Link href={"#"} className="flex items-center justify-start mb-2 absolute bottom-4 group">
                  <p className="xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px] group-hover:text-oranges-300 group-hover:font-medium transition-all text-surface-600 font-normal">Read More</p>
                  <Image src={arrow} alt="arrow" className="xl:scale-100 lg:scale-90 md:scale-75 scale-75" />
                </Link>
              </div>
            </section>
            <section
              data-aos="fade-down"
              data-aos-delay="1800"
              data-aos-duration="1000"
              className="xl:w-[412px] lg:w-[400px] md:w-[368px] sm:w-[336px] w-[320px] p-4 border-2 border-surface-400 rounded-[12px] md:col-start-2 md:row-start-1 relative"
            >
              <div className="px-2 py-1 bg-warning-300 rounded-[4px] w-fit mt-4">
                <p className="xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[8px] text-surface-900 font-semibold">Blockchain</p>
              </div>
              <h6 className="xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] text-surface-50 font-semibold mt-4">First exploration of Blockchain Technology</h6>
              <div className="w-fit mt-10">
                <Link href={"#"} className="flex items-center justify-start mb-2 absolute bottom-4 group">
                  <p className="xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px] group-hover:text-oranges-300 group-hover:font-medium transition-all text-surface-600 font-normal">Read More</p>
                  <Image src={arrow} alt="arrow" className="xl:scale-100 lg:scale-90 md:scale-75 scale-75" />
                </Link>
              </div>
            </section>
            <section
              data-aos="fade-down"
              data-aos-delay="2000"
              data-aos-duration="1000"
              className="xl:w-[412px] lg:w-[400px] md:w-[368px] sm:w-[336px] w-[320px] p-4 border-2 relative border-surface-400 rounded-[12px] md:row-span-2 md:col-start-2 md:row-start-2"
            >
              <Image src={smartaca} alt="Smartaca" className="w-full object-cover h-[200px] rounded-[12px]" />
              <div className="px-2 py-1 bg-warning-300 rounded-[4px] w-fit mt-4">
                <p className="xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[8px] text-surface-900 font-semibold">Bussiness</p>
              </div>
              <h6 className="xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] text-surface-50 font-semibold mt-4">SmartAca | Better and More Economical Food Production</h6>
              <div className="w-fit mt-10">
                <Link href={"#"} className="flex items-center justify-start mb-2 absolute bottom-4 group">
                  <p className="xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px] group-hover:text-oranges-300 group-hover:font-medium transition-all text-surface-600 font-normal">Read More</p>
                  <Image src={arrow} alt="arrow" className="xl:scale-100 lg:scale-90 md:scale-75 scale-75" />
                </Link>
              </div>
            </section>
            <section data-aos="fade-down" data-aos-delay="2200" data-aos-duration="1000" className="xl:w-[412px] lg:w-[400px] md:w-[368px] sm:w-[336px] w-[320px] p-4 border-2 border-surface-400 rounded-[12px] md:row-start-4 relative">
              <div className="px-2 py-1 bg-warning-300 rounded-[4px] w-fit mt-4">
                <p className="xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[8px] text-surface-900 font-semibold">Website</p>
              </div>
              <h6 className="xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] text-surface-50 font-semibold mt-4">First Portfolio of Grounded</h6>
              <div className="w-fit mt-10">
                <Link href={"#"} className="flex items-center justify-start mb-2 absolute bottom-4 group">
                  <p className="xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px] group-hover:text-oranges-300 group-hover:font-medium transition-all text-surface-600 font-normal">Read More</p>
                  <Image src={arrow} alt="arrow" className="xl:scale-100 lg:scale-90 md:scale-75 scale-75" />
                </Link>
              </div>
            </section>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}
