import Orbit from "../Components/Orbit";
import React from "react";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import AccordionDemo from "../Components/Accordion";

export interface Section {
  name: string;
  title: string[];
  text: string[];
  url: string;
}

interface AboutPageProps {
  section: Section;
  language: "en" | "pt";
  indexImg: number;
}

const AboutPage: React.FC<AboutPageProps> = ({ section, indexImg }) => {
  const elements = [
    {
      icon: (
        <RiTailwindCssFill className="text-white top-6 absolute text-4xl" />
      ),
      name: "Tailwind CSS",
    },
    {
      icon: <FaReact className="text-white top-6 absolute text-4xl" />,
      name: "React",
    },
    {
      icon: <FaNodeJs className="text-white top-6 absolute text-4xl" />,
      name: "Node.js",
    },
    {
      icon: <FaHtml5 className="text-white top-6 absolute text-4xl" />,
      name: "HTML5",
    },
    {
      icon: <IoLogoCss3 className="text-white top-6 absolute text-4xl" />,
      name: "CSS3",
    },
    {
      icon: <SiJavascript className="text-white top-6 absolute text-4xl" />,
      name: "JavaScript",
    },
    {
      icon: <BiLogoTypescript className="text-white top-6 absolute text-4xl" />,
      name: "TypeScript",
    },
  ];

  return (
    <section
      key={section.url}
      id={section.url.substring(1)}
      className="h-screen flex items-center justify-between text-white text-3xl font-bold transition-all duration-700 ease-in-out transform bg-neutral-800"
    >
      <img
        src="/assets/datail_extra.svg"
        alt="Detalhe"
        className={`h-screen absolute left-44 animate-pulse ${
          indexImg % 2 === 0 ? "rotate-180 " : ""
        } drop-shadow-lg-custom`}
      />
      <div className="w-1/2 h-screen flex flex-col items-end justify-center gap-20">
        <AccordionDemo titles={section.title} texts={section.text} />
      </div>
      <div className="flex items-center justify-center w-1/2 h-screen">
        <Orbit centralText={section.text[3]} elements={elements} />
      </div>
    </section>
  );
};

export default AboutPage;
