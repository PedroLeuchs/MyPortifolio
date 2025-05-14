import Orbit from "../Components/Orbit";
import OrbitMobile from "../Components/OrbitMobile";
import React from "react";
import AccordionDemo from "../Components/Accordion";
//icons
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJava,
  FaAngular,
  FaBootstrap,
  FaVuejs,
} from "react-icons/fa";

export interface Section {
  name: string;
  title: string[];
  text: string[];
  url: string;
}

interface AboutPageProps {
  section: Section;
  indexImg: number;
}

const AboutPage: React.FC<AboutPageProps> = ({ section, indexImg }) => {
  const elements = [
    {
      icon: (
        <RiTailwindCssFill className="text-white lg:top-6 bottom-3 absolute lg:text-4xl text-2xl" />
      ),
      name: "Tailwind CSS",
    },
    {
      icon: (
        <FaBootstrap className="text-white lg:top-6 bottom-3 absolute lg:text-4xl text-2xl" />
      ),
      name: "Bootstrap",
    },
    {
      icon: (
        <IoLogoCss3 className="text-white lg:top-6 bottom-3 absolute lg:text-4xl text-2xl" />
      ),
      name: "CSS3",
    },
    {
      icon: (
        <FaHtml5 className="text-white lg:top-6 bottom-3 absolute lg:text-4xl text-2xl" />
      ),
      name: "HTML5",
    },
    {
      icon: (
        <SiJavascript className="text-white lg:top-6 bottom-3 absolute lg:text-4xl text-2xl" />
      ),
      name: "JavaScript",
    },
    {
      icon: (
        <BiLogoTypescript className="text-white lg:top-6 bottom-4 absolute lg:text-4xl text-2xl" />
      ),
      name: "TypeScript",
    },
    {
      icon: (
        <FaReact className="text-white lg:top-6 bottom-3 absolute lg:text-4xl text-2xl" />
      ),
      name: "React",
    },
    {
      icon: (
        <FaVuejs className="text-white lg:top-6 bottom-3 absolute lg:text-4xl text-2xl" />
      ),
      name: "Vue.js",
    },
    {
      icon: (
        <FaAngular className="text-white lg:top-6 bottom-3 absolute lg:text-4xl text-2xl" />
      ),
      name: "Angular",
    },
    {
      icon: (
        <FaNodeJs className="text-white lg:top-6 bottom-3 absolute lg:text-4xl text-2xl" />
      ),
      name: "Node.js",
    },
    {
      icon: (
        <FaJava className="text-white lg:top-6 bottom-3 absolute lg:text-4xl text-2xl" />
      ),
      name: "Java",
    },
  ];
  return (
    <section
      key={section.url}
      id={section.url.substring(1)}
      className="mt-[9vh] scroll-mt-[9vh] lg:h-[91vh] min-h-[91vh] h-auto flex lg:flex-row flex-col items-center justify-start text-white text-3xl font-bold transition-all duration-700 ease-in-out transform bg-neutral-800"
    >
      <img
        src="/assets/datail_extra.svg"
        alt="Detalhe"
        className={`h-screen absolute left-44 animate-pulse -z-20 ${
          indexImg % 2 === 0 ? "rotate-180 " : ""
        } drop-shadow-lg-custom`}
      />

      <h1 className="text-start w-4/5 lg:text-5xl md:text-4xl text-3xl">
        {section.name}
      </h1>

      <div className="lg:w-1/2 w-full h-[50vh] flex flex-col lg:items-end items-center justify-center gap-20 lg:bg-none bg-neutral-800/20 lg:backdrop-blur-none backdrop-blur-sm">
        <AccordionDemo titles={section.title} texts={section.text} />
      </div>
      <div className="lg:w-1/2 w-full h-[50vh] flex items-center justify-center lg:bg-none bg-neutral-800/20 lg:backdrop-blur-none backdrop-blur-sm">
        <div className="lg:flex hidden">
          <Orbit centralText={section.text[3]} elements={elements} />
        </div>
        <div className="lg:hidden flex">
          <OrbitMobile centralText={section.text[3]} elements={elements} />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
