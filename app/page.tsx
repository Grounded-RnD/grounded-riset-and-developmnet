import Header from "./components/Header";
import SustainableTechnology from "./components/SustainableTechnology";
import SolutionForEveryone from "./components/SolutionForEveryone";
import WhatWeOffer from "./components/WhatWeOffer";
import DeepScroll from "./components/DeepScroll";
import Project from "./components/Project";
import Teams from "./components/Teams";
import TechStack from "./components/TechStack";
import FeaturedOn from "./components/FeaturedOn";
import Interest from "./components/Interest";

export default function Home() {
  return (
    <>
      <Header />
      <SustainableTechnology />
      <SolutionForEveryone />
      <WhatWeOffer />
      <DeepScroll />
      <Project />
      <Teams />
      <TechStack />
      <FeaturedOn />
      <Interest />
    </>
  );
}
