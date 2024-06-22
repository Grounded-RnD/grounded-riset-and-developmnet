import React from "react";
import html from "@/public/techStack/html.svg";
import css from "@/public/techStack/css.svg";
import js from "@/public/techStack/js.svg";
import nodejs from "@/public/techStack/nodejs.svg";
import ts from "@/public/techStack/typescript.svg";
import tailwind from "@/public/techStack/tailwindcss.svg";
import flutter from "@/public/techStack/flutter.svg";
import dart from "@/public/techStack/dart.svg";
import cpp from "@/public/techStack/c++.svg";
import nextjs from "@/public/techStack/nextjs2.svg";
import react from "@/public/techStack/reactjs.svg";
import figma from "@/public/techStack/figma.svg";
import firebase from "@/public/techStack/firebase.svg";
import mongodb from "@/public/techStack/mongodb.svg";
import vscode from "@/public/techStack/vscode.svg";
import github from "@/public/techStack/github.svg";
import git from "@/public/techStack/git.svg";
import ilustrator from "@/public/techStack/ai.svg";
import arduinouno from "@/public/techStack/arduino-uno.svg";
import python from "@/public/techStack/python.svg";
import aftereffecte from "@/public/techStack/ae.svg";
import photoshop from "@/public/techStack/ps.svg";
import Image, { StaticImageData } from "next/image";

interface ItemProops {
  title: string;
  IMGUrl: StaticImageData;
}

export default function TechStack() {
  const row1: ItemProops[] = [
    {
      title: "HTML",
      IMGUrl: html,
    },
    {
      title: "CSS",
      IMGUrl: css,
    },
    {
      title: "JavaScript",
      IMGUrl: js,
    },
    {
      title: "Node.js",
      IMGUrl: nodejs,
    },
    {
      title: "TypeScript",
      IMGUrl: ts,
    },
    {
      title: "TailwindCSS",
      IMGUrl: tailwind,
    },
  ];
  const row2: ItemProops[] = [
    {
      title: "Flutter",
      IMGUrl: flutter,
    },
    {
      title: "Dart",
      IMGUrl: dart,
    },
    {
      title: "C++",
      IMGUrl: cpp,
    },
    {
      title: "Next.js",
      IMGUrl: nextjs,
    },
    {
      title: "React.js",
      IMGUrl: react,
    },
    {
      title: "Figma",
      IMGUrl: figma,
    },
  ];
  const row3: ItemProops[] = [
    {
      title: "Firebase",
      IMGUrl: firebase,
    },
    {
      title: "MongoDB",
      IMGUrl: mongodb,
    },
    {
      title: "VSCode",
      IMGUrl: vscode,
    },
    {
      title: "Github",
      IMGUrl: github,
    },
    {
      title: "Git",
      IMGUrl: git,
    },
    {
      title: "Illustrator",
      IMGUrl: ilustrator,
    },
  ];
  const row4: ItemProops[] = [
    {
      title: "Arduino_Uno",
      IMGUrl: arduinouno,
    },
    {
      title: "Python",
      IMGUrl: python,
    },
    {
      title: "After_Effects",
      IMGUrl: aftereffecte,
    },
    {
      title: "Adobe_Photoshop",
      IMGUrl: photoshop,
    },
    {
      title: "JavaScript",
      IMGUrl: js,
    },
    {
      title: "Flutter",
      IMGUrl: flutter,
    },
  ];

  return (
    <React.Fragment>
      <section className="bg-dark-100 pb-20">
        <h3
          data-aos="fade-right"
          data-aos-duration="500"
          className="text-surface-50 font-glancyr font-medium xl:text-[36px] lg:text-[34px] md:text-[32px] sm:text-[30px] text-[28px] max-w-7xl pt-20 xl:pl-48 lg:pl-32 md:pl-12 sm:pl-8 pl-4 pb-2"
        >
          We have used <span className="text-oranges-300">30+ </span>programming langguages, frameworks, and digital tools{" "}
        </h3>
        <div data-aos="fade-up" data-aos-duration="500" className="wrapper overflow-x-scroll lg:overflow-hidden relative flex items-center lg:w-11/12 max-w-full h-[100px] mt-8 lg:mx-auto">
          {row1.map((item, i) => (
            <div key={i} className={`itemLeft item${i + 1} bg-dark-200 flex justify-center mx-2 w-full px-16 lg:w-[280px] py-4 items-center border-2 border-surface-50 rounded-[8px] lg:absolute`}>
              <Image src={item.IMGUrl} alt="html" />
              <p className="text-surface-50 xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] font-normal ml-6">{item.title}</p>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" data-aos-duration="500" className="wrapper overflow-scroll lg:overflow-hidden flex items-center justify-center relative lg:w-11/12 max-w-full h-[100px]  mx-auto">
          {row2.map((item, i) => (
            <div key={i} className={`itemRight item${i + 1} bg-dark-200 flex justify-center mx-2 w-full px-16 lg:w-[280px] py-4 items-center border-2 border-surface-50 rounded-[8px] lg:absolute`}>
              <Image src={item.IMGUrl} alt="html" />
              <p className="text-surface-50 text-[18px] font-normal ml-6">{item.title}</p>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" data-aos-duration="500" className="wrapper overflow-scroll lg:overflow-hidden relative flex items-center lg:w-11/12 max-w-full h-[100px] lg:mx-auto">
          {row3.map((item, i) => (
            <div key={i} className={`itemLeft item${i + 1} bg-dark-200 flex justify-center mx-2 w-full px-16 lg:w-[280px] py-4 items-center border-2 border-surface-50 rounded-[8px] lg:absolute`}>
              <Image src={item.IMGUrl} alt="html" />
              <p className="text-surface-50 text-[18px] font-normal ml-6">{item.title}</p>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" data-aos-duration="500" className="wrapper overflow-scroll lg:overflow-hidden flex items-center justify-center relative lg:w-11/12 max-w-full h-[100px]  mx-auto">
          {row4.map((item, i) => (
            <div key={i} className={`itemRight item${i + 1} bg-dark-200 flex justify-center mx-2 w-full px-16 lg:w-[280px] py-4 items-center border-2 border-surface-50 rounded-[8px] lg:absolute`}>
              <Image src={item.IMGUrl} alt="html" />
              <p className="text-surface-50 text-[18px] font-normal ml-6">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
