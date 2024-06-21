import React from "react";
import GroundedLogo from "@/./public/logo/black-white-logo.svg";
import Image from "next/image";
import Link from "next/link";

interface ItemProops {
  title: string;
  href: string;
}

export default function Footer() {
  const Company: ItemProops[] = [
    {
      title: "About Us",
      href: "",
    },
    {
      title: "Team",
      href: "",
    },
    {
      title: "Join Team",
      href: "",
    },
  ];
  const Services: ItemProops[] = [
    {
      title: "Web Design",
      href: "",
    },
    {
      title: "Web Development",
      href: "",
    },
    {
      title: "Digital Marketing",
      href: "",
    },
    {
      title: "Digital Advertising",
      href: "",
    },
    {
      title: "Mobile Development",
      href: "",
    },
    {
      title: "IoT Development",
      href: "",
    },
  ];
  const Startup: ItemProops[] = [
    {
      title: "Product",
      href: "",
    },
    {
      title: "Be a Partner",
      href: "",
    },
    {
      title: "Investor",
      href: "",
    },
    {
      title: "Report",
      href: "",
    },
  ];
  const Resources: ItemProops[] = [
    {
      title: "Riset & Development",
      href: "",
    },
    {
      title: "Documentation",
      href: "",
    },
  ];
  return (
    <React.Fragment>
      <footer className="w-full bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full ">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a href="https://pagedone.io/" className="flex justify-center lg:justify-start">
                <Image src={GroundedLogo} alt="Grounded" width={250} height={300} />
              </a>
              <br />
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] text-white font-medium mb-7">Company</h4>
              <ul className="xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]  transition-all duration-500">
                {Company.map((c, i) => (
                  <li key={i} className="mb-6">
                    <Link href={c.href} className="text-surface-300 hover:text-white">
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] text-white font-medium mb-7">Services</h4>
              <ul className="xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]  transition-all duration-500">
                {Services.map((s, i) => (
                  <li key={i} className="mb-6">
                    <Link href={s.href} className="text-surface-300 hover:text-white">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] text-white font-medium mb-7">Startup</h4>
              <ul className="xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]  transition-all duration-500">
                {Startup.map((s, i) => (
                  <li key={i} className="mb-6">
                    <Link href={s.href} className="text-surface-300 hover:text-white">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] text-white font-medium mb-7">Resources</h4>
              <ul className="xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]  transition-all duration-500">
                {Resources.map((r, i) => (
                  <li key={i} className="mb-6">
                    <Link href={r.href} className=" text-surface-300 hover:text-white">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-7 ">
            <div className="flex items-center justify-center flex-col lg:justify-center lg:flex-row">
              <span className="xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] text-surface-300 items-center justify-center ">
                © 2024 <a href="https://pagedone.io/">Grounded Team</a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
