import React from "react";
import Image from "next/image";

// Example image imports (replace with actual paths)
import logo1 from "@/public/images/gracia-scool.svg";
import logo2 from "@/public/images/univ-siliwangi.svg";
import logo3 from "@/public/images/smk-telkom.svg";
import logo4 from "@/public/images/its.svg";
import logo5 from "@/public/images/uht.svg";

export default function FeaturedOn() {
  return (
    <React.Fragment>
      <section id="partner" className="flex flex-col items-center justify-center text-white py-16">
        <h2 className="text-lg text-center mb-2">Our Support</h2>
        <h1 className="text-4xl font-bold text-center mb-8">Featured On</h1>
        <div className="flex flex-wrap justify-center items-center space-x-6 md:space-x-8 lg:space-x-12 mb-8">
          <div className="flex-shrink-0 w-18 md:w-24 lg:w-32">
            <Image src={logo1} alt="Logo 1" layout="responsive" width={125} height={125} />
          </div>
          <div className="flex-shrink-0 w-20 md:w-24 lg:w-32">
            <Image src={logo2} alt="Logo 2" layout="responsive" width={115} height={115} />
          </div>
          <div className="flex-shrink-0 w-24 md:w-32 lg:w-48">
            <Image src={logo3} alt="Logo 3" layout="responsive" width={200} height={200} />
          </div>
          <div className="flex-shrink-0 w-24 md:w-28 lg:w-36">
            <Image src={logo4} alt="Logo 4" layout="responsive" width={145} height={145} />
          </div>
          <div className="flex-shrink-0 w-20 md:w-24 lg:w-32">
            <Image src={logo5} alt="Logo 5" layout="responsive" width={115} height={115} />
          </div>
        </div>
      </section>
      <div className="px-4 md:px-10">
        <p className="text-sm text-center md:text-right text-neutral-400 font-light italic">
          *Featured on events such as exhibitions, demo tests, implementation and competitions
        </p>
      </div>
    </React.Fragment>
  );
}
