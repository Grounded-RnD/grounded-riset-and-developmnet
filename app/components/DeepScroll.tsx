import React from "react";

export default function DeepScroll() {
  return (
    <React.Fragment>
      <section className="w-full h-full bg-dark-100 pt-24">
        <header className="flex justify-center items-center max-w-full xl:gap-x-24 lg:gap-x-16 md:gap-x-10 sm:gap-x-6 gap-x-2">
          <aside className="relative -mt-6">
            <div data-aos="fade-right" data-aos-delay="600" data-aos-duration="500" className="xl:w-[264px] lg:w-[200px] md:w-[120px] sm:w-[80px] w-[62px] h-[2px] bg-surface-50 absolute right-0"></div>
            <div data-aos="fade-right" data-aos-delay="1200" data-aos-duration="500" className="xl:w-[436px] lg:w-[320px] md:w-[260px] sm:w-[120px] w-[82px] h-[3px] mt-[10px] bg-oranges-300 absolute right-0"></div>
            <div data-aos="fade-right" data-aos-delay="1800" data-aos-duration="500" className="xl:w-[132px] lg:w-[112px] md:w-[82px] sm:w-[60px] w-[36px] h-[3px] mt-[20px] bg-surface-50 absolute right-0"></div>
          </aside>
          <main>
            <h1 className="font-glancyr text-oranges-300 xl:text-[48px] lg:text-[44px] md:text-[40px] sm:text-[38px] text-[36px] font-normal" data-aos="fade-down" data-aos-duration="500">
              Deep Scroll
            </h1>
          </main>
          <aside className="relative -mt-6">
            <div data-aos="fade-left" data-aos-delay="600" data-aos-duration="500" className="xl:w-[264px] lg:w-[200px] md:w-[120px] sm:w-[80px] w-[62px] h-[2px] bg-surface-50 absolute left-0"></div>
            <div data-aos="fade-left" data-aos-delay="1200" data-aos-duration="500" className="xl:w-[436px] lg:w-[320px] md:w-[260px] sm:w-[120px] w-[82px] h-[3px] mt-[10px] bg-oranges-300 absolute left-0"></div>
            <div data-aos="fade-left" data-aos-delay="1800" data-aos-duration="500" className="xl:w-[132px] lg:w-[112px] md:w-[82px] sm:w-[60px] w-[36px] h-[3px] mt-[20px] bg-surface-50 absolute left-0"></div>
          </aside>
        </header>
      </section>
    </React.Fragment>
  );
}
