import React from "react";
import Image from "next/image";
import AgroSky from "@/public/logo/agrosky.svg";
import NexaLab from "@/public/logo/nexalab.svg";
import SmartCounselling from "@/public/logo/smart-counselling.svg";
import Smartaca from "@/public/logo/smartaca.svg";
import NexBook from "@/public/logo/nexbook2.png";
import dynamic from "next/dynamic";
import kotak from "@/public/images/kotak_kotak_wkwk.png";
import jamScare from "@/public/project/LogoJamscare.png";
const ThreeGlobe = dynamic(() => import("../components/ThreeGlobe"), {
  ssr: false,
});
export default function SolutionForEveryone() {
  return (
    <section id="solutionforeveryone" className="h-full relative">
      <div className="min-h-screen bg-dark-200 text-white items-center justify-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-6">
          <div className="flex justify-start items-center mb-10">
            <div className="text-start z-10" data-aos="fade-down" data-aos-duration="500">
              <p data-aos="fade-right" data-aos-duration="500" className="font-bold text-[16px]">
                Our Newest Product
              </p>
              <div className="flex items-center gap-x-4  mb-8">
                <h2 data-aos="fade-right" data-aos-duration="500" className="xl:text-[48px] lg:text-[44px] md:text-[40px] sm:text-[38px] text-[36px] font-normal font-glancyr text-oranges-300">
                  Solutions for Everyone
                </h2>
                <div data-aos="fade-right" data-aos-duration="500" className="xl:w-[383px] lg:w-[260px] md:w-[180px] sm:w-[122px] w-[68px] h-[2px] bg-oranges-300"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="z-10">
              <div>
                <h3 data-aos="fade-right" data-aos-duration="500" className="text-sm font-normal">
                  Agriculture & Livestock Sector
                </h3>
                <div className="mt-7 flex flex-wrap items-center justify-start gap-x-12 gap-y-8">
                  <Image data-aos="zoom-in" data-aos-duration="500" src={Smartaca} alt="Smartaca Logo" className="object-contain w-44 h-auto" />
                  <Image data-aos="zoom-in" data-aos-duration="500" src={AgroSky} alt="AgroSky Logo" className="object-contain w-44 h-auto" />
                </div>
              </div>

              <div>
                <h3 data-aos="fade-right" data-aos-duration="500" className="mt-20 text-sm font-normal">
                  Health & Education Sector
                </h3>
                <div className="mt-7 flex flex-wrap justify-start items-center gap-x-12 gap-y-8">
                  <Image data-aos="zoom-in" data-aos-duration="500" src={NexaLab} alt="NexaLab Logo" className="object-contain w-44 h-auto" />
                  <Image data-aos="zoom-in" data-aos-duration="500" src={SmartCounselling} alt="SmartCounselling Logo" className="object-contain w-60 h-auto" />
                  <Image data-aos="zoom-in" data-aos-duration="500" src={jamScare} alt="SmartCounselling Logo" className="object-contain w-44 h-auto" />
                </div>
              </div>

              <div>
                <h3 data-aos="fade-right" data-aos-duration="500" className="mt-20 text-sm font-normal">
                  Blockchain Sector
                </h3>
                <div className="mt-7 flex flex-wrap items-center justify-start gap-x-12 gap-y-8">
                  <Image data-aos="zoom-in" data-aos-duration="500" src={NexBook} alt="AgroSky Logo" className="object-contain w-44 h-auto" />
                </div>
              </div>
            </div>

            <Image data-aos="zoom-in" data-aos-duration="500" src={kotak} alt="opsional" className="absolute z-0 top-0" />

            <div className="flex items-center justify-center lg:justify-end relative" data-aos="fade-left" data-aos-duration="500">
              <div className="absolute left-64 w-fit h-full size-10 lg:h-[800px] lg:w-[800px]">
                <ThreeGlobe />
              </div>
            </div>
          </div>

          <p className="mt-24 text-center text-gray-400 text-sm">*Some products are still prototypes and not yet ready to enter the market.</p>
        </div>
      </div>
    </section>
  );
}
