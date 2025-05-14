import React, { useEffect, useState } from "react";

export interface Section {
  name: string;
  title: string[];
  text: string[];
  url: string;
}

interface HomePageProps {
  section: Section;
  language: "en" | "pt";
  indexImg: number;
}

const HomePage: React.FC<HomePageProps> = ({ section, language, indexImg }) => {
  const [displayText, setDisplayText] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [displayTextTitle, setDisplayTextTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [indexpt2, setIndexpt2] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const [startTyping2, setStartTyping2] = useState(false);

  // Resetar os estados quando o idioma muda
  useEffect(() => {
    setDisplayText("");
    setDisplayText2("");
    setDisplayTextTitle("");
    setIndex(0);
    setIndex2(0);
    setIndexpt2(0);
    setStartTyping(false);
    setStartTyping2(false);

    const delay = setTimeout(() => {
      setStartTyping(true);
    }, 2500);

    const delay2 = setTimeout(() => {
      setStartTyping2(true);
    }, 3500);

    return () => {
      clearTimeout(delay);
      clearTimeout(delay2);
    };
  }, [language, section]);

  // Animação do título
  useEffect(() => {
    if (index2 < section.title[0].length) {
      const timeout = setTimeout(() => {
        setDisplayTextTitle((prev) => prev + section.title[0].charAt(index2));
        setIndex2(index2 + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [index2, section.title]);

  // Animação do primeiro parágrafo
  useEffect(() => {
    if (startTyping && section.text[0] && index < section.text[0].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + section.text[0].charAt(index));
        setIndex(index + 1);
      }, 20);

      return () => clearTimeout(timeout);
    }
  }, [index, section.text, startTyping]);

  // Animação do segundo parágrafo
  useEffect(() => {
    if (startTyping2 && section.text[1] && indexpt2 < section.text[1].length) {
      const timeout = setTimeout(() => {
        setDisplayText2((prev) => prev + section.text[1].charAt(indexpt2));
        setIndexpt2(indexpt2 + 1);
      }, 20);

      return () => clearTimeout(timeout);
    }
  }, [indexpt2, section.text, startTyping2]);

  return (
    <section
      id={section.url.substring(1)}
      key={section.url}
      className="font-poppins max-w-screen mt-[9vh] scroll-mt-[9vh] lg:h-[91vh] min-h-[91vh] h-auto flex items-center justify-center text-white text-3xl font-bold transition-all duration-700 ease-in-out transform bg-neutral-800"
    >
      <img
        src="/assets/datail_extra.svg"
        alt="Detalhe"
        className={`h-screen absolute left-44 animate-pulse drop-shadow-lg-custom -z-20${
          indexImg % 2 === 0 ? "rotate-180 " : ""
        }`}
      />

      <div className="w-full lg:h-1/3 h-56  flex items-center justify-center backdrop-blur-[10px] bg-neutral-700/50 shadow-neutral-900 shadow-lg">
        <div className="lg:w-1/3 w-full lg:px-0 px-5 h-full flex items-start justify-center flex-col">
          <div className="lg:text-6xl text-4xl font-bold text-white flex text-start items-start justify-start">
            {displayTextTitle}
            <span className="lg:text-6xl md:text-4xl sm:text-2xl text-indigo-600 flex animate-bounce ml-2">
              !
            </span>
          </div>
          <div className="flex w-full items-start justify-start">
            <div className="lg:text-2xl md:text-xl text-lg font-semibold break-words">
              <span className="text-indigo-600">{displayText}</span>
              {displayText2}
              <span id="cursor">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
