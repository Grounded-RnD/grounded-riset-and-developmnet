import React from "react";
import Image, { StaticImageData } from "next/image";

// Example image imports (replace with actual paths)
import logo1 from "@/public/images/gracia-scool.svg";
import logo2 from "@/public/images/univ-siliwangi.svg";
import logo3 from "@/public/images/smk-telkom.svg";
import logo4 from "@/public/images/its.svg";
import logo5 from "@/public/images/uht.svg";

interface featuredProops {
  title: string;
  IMGUrl: StaticImageData;
}

export default function FeaturedOn() {
  const featured: featuredProops[] = [
    {
      title: "Gracia School",
      IMGUrl: logo1,
    },
    {
      title: "Universitas Siliwangi",
      IMGUrl: logo2,
    },
    {
      title: "SMK Telkom",
      IMGUrl: logo3,
    },
    {
      title: "ITS",
      IMGUrl: logo4,
    },
    {
      title: "UHT",
      IMGUrl: logo5,
    },
  ];
  return (
    <React.Fragment>
      <main className="bg-dark-200 ">
        <section id="partner" className="flex flex-col items-center justify-center text-white py-20">
          <div className="flex justify-center items-center gap-x-10">
            <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="500" className="xl:w-[356px] lg:w-[260px] md:w-[180px] sm:w-[122px] w-[68px] h-[2px] bg-oranges-300"></div>
            <div>
              <p className="font-bold text-[16px] text-center" data-aos="fade-down" data-aos-duration="500">
                Our Support
              </p>
              <h1 className="font-glancyr text-oranges-300 xl:text-[48px] text-center lg:text-[44px] md:text-[40px] sm:text-[38px] text-[36px] font-normal" data-aos="fade-down" data-aos-duration="500">
                Featured On
              </h1>
            </div>
            <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" className="xl:w-[356px] lg:w-[260px] md:w-[180px] sm:w-[122px] w-[68px] h-[2px] bg-oranges-300"></div>
          </div>{" "}
          <div className="flex flex-wrap justify-center items-center space-x-6 md:space-x-8 lg:space-x-12 mb-8 mt-4">
            {featured.map((f, i) => (
              <div key={i} className="flex-shrink-0 w-18 md:w-24 lg:w-32" data-aos="fade-right" data-aos-duration="500" data-aos-delay={i * 200}>
                <Image src={f.IMGUrl} alt={f.title} layout="responsive" width={125} height={125} />
              </div>
            ))}
          </div>
        </section>
        <div className="px-4 md:px-10 pb-10">
          <p data-aos="fade-left" data-aos-duration="500" className="text-sm text-center md:text-right text-neutral-400 font-light italic">
            *Featured on events such as exhibitions, demo tests, implementation and competitions
          </p>
        </div>
      </main>
    </React.Fragment>
  );
}
