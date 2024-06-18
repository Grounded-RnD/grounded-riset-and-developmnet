"use client";
import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProops {
  children: ReactNode;
}

export default function InitialAOS({ children }: AOSProops) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
  return <React.Fragment>{children}</React.Fragment>;
}
