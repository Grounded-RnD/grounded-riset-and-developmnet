import React from "react";
import Image, { StaticImageData } from "next/image";
import WebDev from "@/./public/icons/web-dev.svg";
import WebDesign from "@/./public/icons/web-design.svg";
import DigitalMarketing from "@/./public/icons/digital-marketing.svg";
import MobileDev from "@/./public/icons/mobile-dev.svg";
import DigitalAdvertising from "@/./public/icons/digital advertising.svg";
import IoTDev from "@/./public/icons/iot-dev.svg";

interface ContentProops {
  IMGUrl: StaticImageData;
  title: string;
  desc: string;
}

export default function WhatWeOffer() {
  const content: ContentProops[] = [
    {
      IMGUrl: WebDesign,
      title: "Web Design",
      desc: "Attractive, functional web design increases visitor engagement significantly.",
    },
    {
      IMGUrl: WebDev,
      title: "Web Development",
      desc: "Our solutions ensure smooth, efficient website performance, enhancing user experience.",
    },
    {
      IMGUrl: DigitalMarketing,
      title: "Digital Marketing",
      desc: "Targeted strategies expand market reach and boost sales conversions.",
    },
    {
      IMGUrl: MobileDev,
      title: "Mobile Development",
      desc: "Our mobile apps help your company reach customers easily and provide better services.",
    },
    {
      IMGUrl: DigitalAdvertising,
      title: "Digital Advertising",
      desc: "Our campaigns boost brand visibility and attract potential customers.",
    },
    {
      IMGUrl: IoTDev,
      title: "IoT Development",
      desc: "Innovative IoT solutions optimize operations and provide valuable business data.",
    },
  ];
  return (
    <React.Fragment>
      <section id="services" className="xl:h-screen">
        <div className="min-h-screen bg-dark-200 text-white flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 py-20 md:py-6">
            <div className="flex justify-center items-center mb-10">
              <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="500" className="xl:w-[383px] lg:w-[260px] md:w-[180px] sm:w-[122px] w-[68px] h-[2px] bg-oranges-300"></div>
              <div className="mx-10" data-aos="fade-down" data-aos-duration="500">
                <p className="font-bold text-[16px] text-center">Our Profile</p>
                <h2 className=" xl:text-[48px] lg:text-[44px] md:text-[40px] sm:text-[38px] text-[36px] font-normal text-center mb-8 font-glancyr text-oranges-300">What We Offer</h2>
              </div>
              <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" className="xl:w-[383px] lg:w-[260px] md:w-[180px] sm:w-[122px] w-[68px] h-[2px] bg-oranges-300"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full">
              {content.map((item, i) => (
                <div key={i} data-aos="fade-up" data-aos-duration="500" data-aos-delay={i * 200} className="bg-dark-100 p-6 rounded-2xl flex flex-col border-2 border-neutral-500">
                  <Image src={item.IMGUrl} alt="Web Design" width={64} height={64} className="mb-4" />
                  <h3 className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-surface-500 xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
