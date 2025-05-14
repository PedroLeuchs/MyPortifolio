import CarouselModal from "../Components/CarouselModal";
import React from "react";

export interface Section {
  name: string;
  title: string[];
  text: string[];
  url: string;
}

interface ProjectsPageProps {
  section: Section;
  indexImg: number;
}

const AboutPage: React.FC<ProjectsPageProps> = ({ section, indexImg }) => {
  const items = [
    {
      image: "/assets/grupoAnatonelly.png",
      title: "Grupo Anatonelly",
      text: section.text[3],
      link: "https://www.grupoanatonelly.com/",
    },
    {
      image: "/assets/anatonellyTech.png",
      title: "Anatonelly Tech",
      text: section.text[4],
      link: "https://www.anatonellytech.com/",
    },
    {
      image: "/assets/anatonellyLLC.png",
      title: "Anatonelly LLC",
      text: section.text[5],
      link: "https://www.anatonellyllc.com/",
    },
  ];

  const sectionProject = {
    name: section.name,
    title: section.title[0],
    text: section.text,
    url: section.url,
  };

  return (
    <section
      key={section.url}
      id={section.url.substring(1)}
      className="scroll-mt-[9vh] mt-[9vh] h-[91vh] w-full lg:flex-row flex-colflex items-center justify-center text-white text-3xl font-bold transition-all duration-700 ease-in-out transform "
    >
      <img
        src="./assets/datail_extra.svg"
        alt="Detalhe"
        className={`h-screen absolute left-44 animate-pulse -z-20${
          indexImg % 2 === 0 ? "rotate-180 " : ""
        } drop-shadow-lg-custom`}
      />

      <h1 className="absolute top-10 left-0 right-0 text-center lg:text-4xl md:text-3xl text-2xl">
        {section.name}
      </h1>

      <div className="w-full h-full flex flex-col items-center justify-center gap-20">
        <CarouselModal items={items} section={sectionProject} />
      </div>
    </section>
  );
};

export default AboutPage;
