import React from "react";
import Image from "next/image";
import WebDev from "@/./public/icons/web-dev.svg";
import WebDesign from "@/./public/icons/web-design.svg";
import DigitalMarketing from "@/./public/icons/digital-marketing.svg";
import MobileDev from "@/./public/icons/mobile-dev.svg";
import DigitalAdvertising from "@/./public/icons/digital advertising.svg";
import IoTDev from "@/./public/icons/iot-dev.svg";

export default function WhatWeOffer() {
  return (
    <React.Fragment>
      <section id="services" className="xl:h-screen">

        <div className="min-h-screen bg-dark-200 text-white flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 py-20 md:py-6">
            <div className="flex justify-center items-center mb-10">
              <div className="xl:w-[383px] lg:w-[260px] md:w-[180px] sm:w-[122px] w-[68px] h-[2px] bg-oranges-300"></div>
              <div className="mx-10">
                <p className="font-bold text-[16px] text-center">Our Profile</p>
                <h2 className=" xl:text-[48px] lg:text-[44px] md:text-[40px] sm:text-[38px] text-[36px] font-normal text-center mb-8 font-glancyr text-oranges-300">What We Offer</h2>
              </div>
              <div className="xl:w-[383px] lg:w-[260px] md:w-[180px] sm:w-[122px] w-[68px] h-[2px] bg-oranges-300"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full">
              <div className="bg-dark-100 p-6 rounded-2xl flex flex-col border-2 border-neutral-500">
                <Image src={WebDesign} alt="Web Design" width={64} height={64} className="mb-4" />
                <h3 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold mb-2">Web Design</h3>
                <p className="text-surface-500 xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px]">Attractive, functional web design increases visitor engagement significantly.</p>
              </div>

              <div className="bg-dark-100 p-6 rounded-2xl flex flex-col border-2 border-neutral-500">
                <Image src={WebDev} alt="Web Development" width={64} height={64} className="mb-4" />
                <h3 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold mb-2">Web Development</h3>
                <p className="text-surface-500 xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px]">Our solutions ensure smooth, efficient website performance, enhancing user experience.</p>
              </div>

              <div className="bg-dark-100 p-6 rounded-2xl flex flex-col border-2 border-neutral-500">
                <Image src={DigitalMarketing} alt="Digital Marketing" width={64} height={64} className="mb-4" />
                <h3 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold mb-2">Digital Marketing</h3>
                <p className="text-surface-500 xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px]">Targeted strategies expand market reach and boost sales conversions.</p>
              </div>

              <div className="bg-dark-100 p-6 rounded-2xl flex flex-col border-2 border-neutral-500">
                <Image src={MobileDev} alt="Mobile Development" width={64} height={64} className="mb-4" />
                <h3 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold mb-2">Mobile Development</h3>
                <p className="text-surface-500 xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px]">Our mobile apps help your company reach customers easily and provide better services.</p>
              </div>

              <div className="bg-dark-100 p-6 rounded-2xl flex flex-col border-2 border-neutral-500">
                <Image src={DigitalAdvertising} alt="Digital Advertising" width={64} height={64} className="mb-4" />
                <h3 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold mb-2">Digital Advertising</h3>
                <p className="text-surface-500 xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px]">Our campaigns boost brand visibility and attract potential customers.</p>
              </div>

              <div className="bg-dark-100 p-6 rounded-lg flex flex-col border-2 border-neutral-500">
                <Image src={IoTDev} alt="IoT Development" width={64} height={64} className="mb-4" />
                <h3 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold mb-2">IoT Development</h3>
                <p className="text-surface-500 xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px]">Innovative IoT solutions optimize operations and provide valuable business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
