"use client";
import { useKeenSlider } from "keen-slider/react";
import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import Image, { StaticImageData } from "next/image";
import fahrell from "@/public/profile/fahrell.png";
import ryo from "@/public/profile/ryo.png";
import viki from "@/public/profile/viki.png";
import naufal from "@/public/profile/naufal.png";
import haza from "@/public/profile/hazz.png";
import whitegithub from "@/public/icons/github-white.svg";
import whitelinkedin from "@/public/icons/linkedin-white.svg";
import whitewhatsapp from "@/public/icons/whatsapp-white.svg";
import Link from "next/link";
import Arrow from "../utilities/ArrowCarousel";
import { dataUser } from "../data/data";
import { useRouter } from "next/navigation";

interface CardProops {
  IMGUrl: StaticImageData;
  name: string;
  position: string;
  skillSet: string;
  github: string;
  linkedin: string;
  whatsapp: string;
}

export default function Teams() {
  const router = useRouter();
  const Maincard: CardProops[] = [
    {
      IMGUrl: fahrell,
      name: "Fahrell Sandy Zhariif",
      position: "Chief Technology Officer",
      skillSet: "IoT Engineer",
      github: "",
      linkedin: "",
      whatsapp: "",
    },
    {
      IMGUrl: ryo,
      name: "Ryo Haryono Agwyn",
      position: "Chief Marketing Officer",
      skillSet: "UI/UX Designer",
      github: "",
      linkedin: "",
      whatsapp: "",
    },
    {
      IMGUrl: viki,
      name: "Dviki Wahyudi",
      position: "Chief Operational Officer",
      skillSet: "Project Manager ",
      github: "",
      linkedin: "",
      whatsapp: "",
    },
    {
      IMGUrl: naufal,
      name: "Naufal Nabil Ramadhan",
      position: "Chief Information Officer",
      skillSet: "Fullstack Web Developer ",
      github: "",
      linkedin: "",
      whatsapp: "",
    },
    {
      IMGUrl: haza,
      name: "Haza Nasrullah Kuswantoro",
      position: "Chief Financial Officer",
      skillSet: "Mobile Developer",
      github: "",
      linkedin: "",
      whatsapp: "",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "free",
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 30 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 5, spacing: 40 },
      },
    },
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(timer);
  }, [slider]);
  return (
    <React.Fragment>
      <section id="teams" className="h-full w-full bg-dark-200 py-24">
        <div className="flex justify-center items-center gap-x-10">
          <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="1000" className="xl:w-[419px] lg:w-[260px] md:w-[180px] sm:w-[122px] w-[68px] h-[2px] bg-oranges-300"></div>
          <h1 className="font-glancyr text-oranges-300 xl:text-[48px] text-center lg:text-[44px] md:text-[40px] sm:text-[38px] text-[36px] font-normal" data-aos="fade-down" data-aos-duration="500">
            Our Teams
          </h1>
          <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000" className="xl:w-[419px] lg:w-[260px] md:w-[180px] sm:w-[122px] w-[68px] h-[2px] bg-oranges-300"></div>
        </div>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className="mt-[100px] navigation-wrapper relative">
          <main ref={sliderRef} className="keen-slider teams-wrapper">
            {dataUser.map((s, i) => (
              <div
                onClick={() => router.push(`/profile/${s.slug}`)}
                key={i}
                className={`keen-slider__slide number-slide${
                  i + 1
                } relative bg-surface-900 hover:bg-surface-900/50 transition-colors duration-200 w-auto cursor-pointer hover:ring-2 my-2 hover:ring-oranges-300 h-auto rounded-[12px] text-center px-6 py-4`}
              >
                <Image src={s.img} alt={s.fullname} className="w-[96px] h-[96px] rounded-full mx-auto" />
                <h3 className="text-surface-50 font-semibold xl:text-[20px] lg:text-[19px] md:text-[18px] mt-4 mb-2 sm:text-[17px] text-[16px]">{s.fullname}</h3>
                <p className="xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] mb-1 font-light text-surface-50">
                  <i>{s.jabatan}</i>
                </p>
                <p className="xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] font-light text-surface-50">
                  <i>{s.bidang}</i>
                </p>
                <div className="mt-4 bg-dark-100 px-3 py-2 flex gap-x-2 justify-center rounded-[12px] w-fit mx-auto">
                  <Link href={s.github.href} target="_blank">
                    <Image src={whitegithub} alt="github" />
                  </Link>
                  <Link href={s.linkedin.href} target="_blank">
                    <Image src={whitelinkedin} alt="linkedin" />
                  </Link>
                  <Link href={s.whatsapp.href} target="_blank">
                    <Image src={whitewhatsapp} alt="whatsapp" />
                  </Link>
                </div>
              </div>
            ))}
          </main>
          {loaded && slider.current && (
            <>
              <Arrow left onClick={(e: any) => e.stopPropagation() || slider.current?.prev()} disabled={currentSlide === 0} />

              <Arrow onClick={(e: any) => e.stopPropagation() || slider.current?.next()} disabled={currentSlide === slider.current.track.details.slides.length - 1} />
            </>
          )}
        </div>
        {loaded && slider.current && (
          <div className="w-full flex justify-center">
            {...Array.from({ length: slider.current.track.details.length }).map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.current?.moveToIdx(idx);
                  }}
                  className={`w-3 h-3 rounded-full mx-1 mt-1  ${currentSlide === idx ? "active bg-oranges-300" : "bg-surface-600"} `}
                ></button>
              );
            })}
          </div>
        )}
      </section>
    </React.Fragment>
  );
}
