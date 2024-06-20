import React from "react";
import Image from "next/image";
import Link from "next/link";
import SustainProduct from "@/./public/images/sustainable-technology.png";
import { LinkButton } from "../utilities/Button";

export default function SustainableTechnology() {
  return (
    <React.Fragment>
      <section id="about" className="h-full bg-dark-50">
        <div className="bg-dark text-white xl:px-32 md:px-28 sm:px-10 px-2 py-32 flex flex-col gap-x-4 lg:flex-row items-center justify-center space-y-6">
          <div className="px-6 xl:px-10 w-full">
            <Image src={SustainProduct} alt="AgroSky Drone" className="rounded-lg w-full" data-aos="flip-left" data-aos-duration="500" />
            <p className="text-gray-400 text-xs text-end mt-2" data-aos="fade-left" data-aos-duration="1000">
              One of our products, AgroSky
            </p>
          </div>
          <div className="w-full px-6 mt-10 xl:mt-0">
            <h2 className="xl:text-[34px] lg:text-[32px] md:text-[30px] sm:text-[28px] text-[24px] font-bold text-orange-400 font-glancyr w-full" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000">
              Sustainable Technology
            </h2>
            <p className="mt-4 xl:text-[16px] lg:text-[15px] md:text-[16px] sm:text-[15px] text-[14px] font-normal" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000">
              Grounded was formed to create innovative products that support sustainable goals.
            </p>
            <br />
            <p className="mt-2 xl:text-[16px] lg:text-[15px] md:text-[16px] sm:text-[15px] text-[14px] font-normal" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000">
              We are committed to providing technology solutions that increase efficiency, productivity, and preserve the environment. With a focus on agriculture, education, and other sectors, we strive to contribute to a greener and more
              sustainable future.
            </p>
            <div data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">
              <LinkButton href="#" variant="primary" className="w-fit mt-6">
                Read More
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
