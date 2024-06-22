import React from "react";
import InterestBackground from "@/public/images/interest-background.svg";
import Link from "next/link";

export default function Interest() {
  return (
    <React.Fragment>
      <section id="join-team" className="flex pt-10 font-glancyr items-center justify-center h-screen bg-cover bg-center max-h-[530px]" style={{ backgroundImage: `url('/images/interest-background.svg')`, opacity: 0.8 }}>
        <div className="text-center py-6 px-12 lg:px-96 bg-opacity-80 rounded">
          <h1 data-aos="fade-down" data-aos-duration="500" className="text-2xl  md:text-5xl font-semibold text-black mb-4">
            Interested with Grounded?
          </h1>
          <br />
          <p data-aos="fade-down" data-aos-duration="500" className="text-base md:text-2xl font-light text-black mb-8">
            We are ready to help you achieve your technology goals. Contact us for more information about our products and services.
          </p>
          <Link
            data-aos="fade-down"
            data-aos-duration="500"
            href={"/contact"}
            className="px-6 py-2 font-sans bg-transparent border-2 hover:text-surface-50 hover:border-surface-50 focus:ring-2 focus:ring-surface-50 transition-all duration-200 border-black text-black text-base md:text-2xl font-semibold rounded-xl "
          >
            Contact Us
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
}
