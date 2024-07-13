"use strict";
import fahrell from "@/public/profile/fahrell.png";
import ryo from "@/public/profile/ryo.png";
import viki from "@/public/profile/viki.png";
import naufal from "@/public/profile/naufal.png";
import haza from "@/public/profile/haza.png";
import { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { UserProops } from "@/services/UserProops";

export const dataUser: UserProops[] = [
  {
    fullname: "Fahrell Sandy Zhariif ",
    slug: "Fahrell_Sandy_Zhariif",
    img: fahrell,
    email: "pikeks@grounded.org",
    phone: "+62 812-3186-7768",
    address: "Malang City, Indonesia",
    jabatan: "Chief Technology Officer",
    bidang: "IoT Engineer",
    member_since: "2023-07-01",
    role: "Co-Founder",
    web: {
      title: "pikek.grounded.org",
      href: "https://pikek.grounded.org",
    },
    github: {
      title: "Phiniqq724",
      href: "https://github.com/Phiniqq724",
    },
    instagram: {
      title: "Caesiium_",
      href: "https://www.instagram.com/Caesiium_",
    },
    linkedin: {
      title: "Fahrell Sandy Zhariif",
      href: "https://www.linkedin.com/in/fahrell-sandy-zhariif/",
    },
    whatsapp: {
      title: "+62 812-3186-7768",
      href: "https://wa.me/6281231867768",
    },
    skills: [
      {
        skill: "IoT Engineering",
        tech_stack: ["Arduino Uno", "C++", "Python"],
      },
      {
        skill: "UI/UX Designer",
        tech_stack: ["Figma", "Ilustrator"],
      },
      {
        skill: "Frontend Developer",
        tech_stack: ["TailwindCSS", "Nextjs"],
      },
    ],
    experience: ["Member of Metic Moklet Organization", "Programmer of MokletDev", "Minecraft Server Designer", "Discord Bot Developer", "3D Product Designer", "IoT Engineer for various project"],
  },
  {
    fullname: "Ryo Hariyono Angwyn",
    slug: "Ryo_Hariyono_Angywn",
    img: ryo,
    email: "ryo17@grounded.org",
    phone: "+62 853-3573-3052",
    address: "Malang City, Indonesia",
    jabatan: "Chief Marketing Officer",
    bidang: "UI/UX Designer",
    member_since: "2023-07-01",
    role: "Co-Founder",
    web: {
      title: "ryohariyono.grounded.org",
      href: "https://ryohariyono.grounded.org",
    },
    github: {
      title: "lordbruh0",
      href: "https://github.com/lordbruh0",
    },
    instagram: {
      title: "@r___h__a123",
      href: "https://www.instagram.com/r___h__a123",
    },
    linkedin: {
      title: "Ryo Hariyono Angwyn",
      href: "https://www.linkedin.com/in/ryo-hariyono-angwyn-7122b0312",
    },
    whatsapp: {
      title: "+62 853-3573-3052",
      href: "https://wa.me/6285335733052",
    },
    skills: [
      {
        skill: "UI/UX Designer",
        tech_stack: ["Figma"],
      },
      {
        skill: "Android Developer",
        tech_stack: ["Flutter"],
      },
    ],
    experience: ["Member of the 2nd Year OSIS of SMPK Kosayu 2 Malang"],
  },
  {
    fullname: "Dviki Wahyudi",
    slug: "Dviki_Wahyudi",
    img: viki,
    email: "dviki@grounded.org",
    phone: "+62 812-3362-8941",
    address: "Malang City, Indonesia",
    jabatan: "Chief Operating Officer",
    bidang: "Project Manager",
    member_since: "2023-07-01",
    role: "Co-Founder",
    web: {
      title: "dviki.grounded.org",
      href: "https://dviki.grounded.org",
    },
    github: {
      title: "jyferz33",
      href: "https://github.com/jyferz33",
    },
    instagram: {
      title: "d._vikiwhyd",
      href: "https://www.instagram.com/d._vikiwhyd",
    },
    linkedin: {
      title: "-",
      href: "-",
    },
    whatsapp: {
      title: "+62 812-3362-8941",
      href: "wa.me/6281233628941",
    },
    skills: [
      {
        skill: "Front end Developer",
        tech_stack: ["HTML", "CSS", "Bootstrap"],
      },
      {
        skill: "Project Management",
        tech_stack: ["-"],
      },
    ],
    experience: ["Member of Metic Moklet Organization", "Commision I of MPK Moklet"],
  },
  {
    fullname: "Naufal Nabil Ramadhan",
    slug: "Naufal_Nabil_Ramadhan",
    img: naufal,
    email: "naufalnr@grounded.org ",
    phone: "+62 821-4134-1737",
    address: "Jalan Candi 2A No 373 Klaseman , Karang Besuki , Kec. Sukun , Malang-Jawa Timur, Indonesia",
    jabatan: "Chief Information Officer",
    bidang: "Fullstack Web Developer",
    member_since: "2023-07-01",
    role: "Co-Founder",
    web: {
      title: "dev-naufalnr.grounded.org",
      href: "https://dev-naufalnr.grounded.org",
    },
    github: {
      title: "naufalnrsmitter20",
      href: "https://github.com/naufalnrsmitter20/",
    },
    instagram: {
      title: "@naufalnr.exe",
      href: "https://www.instagram.com/naufalnr.exe",
    },
    linkedin: {
      title: "Naufal Nabil Ramadhan",
      href: "https://www.linkedin.com/in/naufal-nabil-ramadhan-275056286/",
    },
    whatsapp: {
      title: "+62 821-4134-1737",
      href: "https://wa.me/6282141341737",
    },
    skills: [
      {
        skill: "Fullstack Developer",
        tech_stack: ["Nextjs", "TailwindCSS", "Javascript", "Tyescript", "PHP"],
      },
      {
        skill: "Project Management",
        tech_stack: ["Trello", "Github Project", "Notion"],
      },
      {
        skill: "Organization Management",
        tech_stack: ["-"],
      },
    ],
    experience: [
      "Software Engineer of LuminaryStudios",
      "Programmer of MokletDev",
      "Maintainer Manager of Moklet.org",
      "Head of Intra School Organization MTsN 1 Malang City period 2020/2021",
      "Commision II of MPK Moklet",
      "Top 10 National Junior Web Developer",
      "Voulenteer of Event IIBF Malang",
      "Head of Class in MTsN 1 Malang City Period 2021/2022",
      "Member of the leadership of the Malang Muhammadiyah youth branch period 2021/2022",
      "Graduation Committee period 2021/2022",
      "Social Service Committee period 2021/2022",
    ],
  },
  {
    fullname: "Haza Nasrullah",
    slug: "Haza_Nasrullah",
    img: haza,
    email: "haza@grounded.org",
    phone: "+62 896-2308-4881",
    address: "Malang City, Indonesia",
    jabatan: "Chief Financial Officer",
    bidang: "Mobile Developer",
    member_since: "2023-07-01",
    role: "Co-Founder",
    web: {
      title: "haza.grounded.org",
      href: "https://haza.grounded.org",
    },
    github: {
      title: "hazz_01",
      href: "https://github.com/hazz01/",
    },
    instagram: {
      title: "@hazanasrullah",
      href: "https://www.instagram.com/hazanasrullah",
    },
    linkedin: {
      title: "Haza Nasrullah",
      href: "https://www.linkedin.com/in/haza-nasrullah-1195902a4/",
    },
    whatsapp: {
      title: "+62 896-2308-4881",
      href: "https://wa.me/6289623084881",
    },
    skills: [
      {
        skill: "Frontend Developer",
        tech_stack: ["HTML", "TailwindCSS"],
      },
      {
        skill: "Android Developer",
        tech_stack: ["Flutter", "Dart"],
      },
      {
        skill: "Data Science Engineer",
        tech_stack: ["Orange Data Mining", "Python"],
      },
    ],
    experience: [
      "Team Leader for Village Empowerment Program through Technology",
      "Digital Marketing Team Member at a Property Agency",
      "Animator for an Animation Project about Batu City",
      "3D House Designer for Various Housing Project",
      "Featured in the School Magazine",
    ],
  },
];

interface typeOfProject {
  type: "Bussiness" | "Website" | "Blockchain" | "Branding" | "Development" | "Mobile" | "IoT";
}

export interface projectProops {
  imgUrl?: string | StaticImport;
  title: string;
  desc?: string;
  link?: string;
  type: string[];
}

export const projects: projectProops[] = [
  {
    imgUrl: "/project/SmartAca.png",
    title: "SmartAca",
    desc: "Better and More Economical Food Production",
    type: ["Bussiness", "IoT"],
    link: "/comingSoon",
  },
  {
    imgUrl: "/project/agrosky.png",
    title: "AgroSky",
    desc: "Plantation Smart System For Amplify Harvest Gains",
    type: ["IoT"],
    link: "/comingSoon",
  },

  {
    imgUrl: "/project/NexBook.png",
    title: "NexBook",
    desc: "First exploration of blockchain technology",
    type: ["Blockchain", "Website"],
    link: "/comingSoon",
  },
  {
    title: "Branding on Instagram",
    type: ["Branding"],
    link: "https://www.instagram.com/grounded.rnd/",
  },
  {
    imgUrl: "/project/SmartCounselling.png",
    title: "SmartCounselling",
    type: ["Website"],
    link: "https://smart-counseling.vercel.app",
  },
  {
    title: "Velockwork",
    desc: "Example Freelance Project About Questionnaire",
    type: ["Website"],
    link: "",
  },
  {
    imgUrl: "/project/NexaLab.png",
    title: "NexaLab",
    desc: "The Lab of The Future",
    type: ["IoT", "Mobile"],
    link: "/comingSoon",
  },
  {
    imgUrl: "/project/grounded-portfolio.png",
    title: "First Portfolio of Grounded",
    type: ["Website"],
    link: "/",
  },
  {
    imgUrl: "/project/TelkomSociety.png",
    title: "Telkom Society",
    desc: "Project for SMK Telkom Malang",
    type: ["Website"],
    link: "https://telkom-society.vercel.app/",
  },
  {
    imgUrl: "/project/JamScare.png",
    title: "Jamscare",
    desc: "IoT smartwatch to monitor user's heart rate",
    type: ["IoT"],
    link: "/comingSoon",
  },
];
