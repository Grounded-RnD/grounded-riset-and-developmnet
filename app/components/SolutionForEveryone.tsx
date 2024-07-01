import React from "react";
import Image from "next/image";
import AgroSky from "@/public/logo/agrosky.svg";
import NexaLab from "@/public/logo/nexalab.svg";
import SmartCounselling from "@/public/logo/smart-counselling.svg";
import Smartaca from "@/public/logo/smartaca.svg";
import NexBook from "@/public/logo/nexbook2.png";
import ThreeGlobe from "./ThreeGlobe";

export default function SolutionForEveryone() {
  return (
    <section id="solutionforeveryone" className="xl:h-screen overflow-hidden">
      <div className="min-h-screen bg-dark-200 text-white items-center justify-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-6">
          <div className="flex justify-center items-center mb-10">
            <div className="mx-10 text-center" data-aos="fade-down" data-aos-duration="500">
              <p className="font-bold text-[16px]">Our Newest Product</p>
              <h2 className="xl:text-[48px] lg:text-[44px] md:text-[40px] sm:text-[38px] text-[36px] font-normal mb-8 font-glancyr text-oranges-300">Solutions for Everyone</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-normal">Agriculture & Livestock Sector</h3>
                <div className="mt-7 flex items-center space-x-12">
                  <Image src={Smartaca} alt="Smartaca Logo" className="object-contain w-44 h-auto" />
                  <Image src={AgroSky} alt="AgroSky Logo" className="object-contain w-44 h-auto" />
                </div>
              </div>

              <div>
                <h3 className="mt-20 text-sm font-normal">Health & Education Sector</h3>
                <div className="mt-7 flex items-center space-x-12">
                  <Image src={NexaLab} alt="NexaLab Logo" className="object-contain w-44 h-auto" />
                  <Image src={SmartCounselling} alt="SmartCounselling Logo" className="object-contain w-60 h-auto" />
                </div>
              </div>

              <div>
                <h3 className="mt-20 text-sm font-normal">Blockchain Sector</h3>
                <div className="mt-7 flex items-center space-x-4">
                  <Image src={NexBook} alt="AgroSky Logo" className="object-contain w-44 h-auto" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end relative">
              <div className="absolute left-64 w-fit h-full lg:h-[800px] lg:w-[800px]">
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
