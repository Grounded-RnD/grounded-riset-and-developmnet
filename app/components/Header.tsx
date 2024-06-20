import Image from "next/image";
import React from "react";
import arrow from "@/public/icons/arrow-bottom-yellow.svg";
import Link from "next/link";

export default function Header() {
  return (
    <React.Fragment>
      <section id="home" className="h-screen w-full max-w-full" style={{ backgroundImage: "url(/assetJumbotron.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="h-screen lg:pl-20 p-0 w-full bg-dark-50/95 relative">
          <div className="max-w-3xl w-full pt-48 px-4 lg:px-0">
            <h1 className="font-glancyr xl:text-[60px] lg:text-[56px] md:text-[52px] sm:text-[48px] text-[44px] font-normal text-surface-50" data-aos="fade-right" data-aos-duration="1000">
              Grounded
            </h1>
            <div className="h-0.5 bg-surface-50 w-[215px] -mt-2" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000"></div>
            <h2 className="font-glancyr font-medium xl:text-[34px] lg:text-[32px] md:text-[30px] sm:text-[28px] text-[24px] text-surface-50 mt-2" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="1000">
              Till Infinity and Beyond
            </h2>
          </div>
          <div>
            <div className="max-w-xl w-full absolute bottom-24 lg:left-20 px-4 lg:px-0">
              <Link
                href={"#"}
                className="text-surface-50 font-bold xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] block hover:underline text-transition duration-300"
                data-aos="fade-left"
                data-aos-delay="3000"
                data-aos-duration="1000"
              >
                Portfolio.
              </Link>
              <Link
                href={"#"}
                className="text-warning-400 font-bold xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] block hover:underline text-transition duration-300"
                data-aos="fade-right"
                data-aos-delay="3000"
                data-aos-duration="1000"
              >
                WorkSpace.
              </Link>
              <Link
                href={"#"}
                className="text-orange-400 font-bold xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] block hover:underline text-transition duration-300"
                data-aos="fade-left"
                data-aos-delay="3000"
                data-aos-duration="1000"
              >
                Product & Innovate.
              </Link>
            </div>
            <Link href={"#about"} className="rounded-full bg-dark-400 absolute bottom-24 lg:right-36 right-2 p-4 animate-bounce duration-300">
              <Image src={arrow} width={30} alt="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <div className="h-[11px] bg-oranges-300 w-full"></div>
    </React.Fragment>
  );
}
