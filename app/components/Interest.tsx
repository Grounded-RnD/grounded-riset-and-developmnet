import React from "react";
import InterestBackground from "@/public/images/interest-background.svg";

export default function Interest() {
  return (
    <React.Fragment>
      <section
        id="join-team"
        className="flex mt-20 font-glancyr items-center justify-center h-screen bg-cover bg-center max-h-[530px]"
        style={{ backgroundImage: `url('/images/interest-background.svg')`, opacity: 0.8 }}
      >
        <div className="text-center py-6 px-12 md:px-96 bg-opacity-80 rounded">
          <h1 className="text-2xl  md:text-5xl font-semibold text-black mb-4">Interested with Grounded?</h1>
          <br />
          <p className="text-base md:text-2xl font-light text-black mb-8">
            We are ready to help you achieve your technology goals. Contact us for more information about our products and services.
          </p>
          <button className="px-6 py-2 font-sans bg-transparent border-2 border-black text-black text-base md:text-2xl font-semibold rounded-xl ">
            Contact Us
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}
