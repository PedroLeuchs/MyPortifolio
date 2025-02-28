import Flag from "react-world-flags";
import React, { useState, useEffect } from "react";

interface NavbarProps {
  sections: {
    name: string;
    text: string[];
    url: string;
  }[];
  setLanguage: (language: "en" | "pt") => void;
  language: "en" | "pt";
}

const languages = {
  en: { label: "English", flag: "US" },
  pt: { label: "Português", flag: "BR" },
};

const Navbar: React.FC<NavbarProps> = ({ sections, setLanguage, language }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section.url.substring(1));
        return {
          id: section.url.substring(1),
          offset: element?.offsetTop || 0,
        };
      });

      const currentSection = sectionOffsets.reduce((prev, curr) => {
        return scrollPosition >= curr.offset - 50 ? curr.id : prev;
      }, "home");

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-70 backdrop-blur-[3px] text-white shadow-md z-10 transition-all duration-300 h-16 flex items-center justify-between px-5 ">
      <div className=" w-3/5 h-full ">
        <ul className="w-full h-full flex justify-start">
          {sections.map((section) => (
            <li
              key={section.url}
              className="w-1/6 h-full rounded-md flex items-center justify-center transition-all duration-500"
            >
              <a
                href={section.url}
                className={`hover:text-gray-400 transition-all duration-300 w-full h-full flex items-center justify-center ${
                  activeSection === section.url.substring(1)
                    ? "font-semibold"
                    : ""
                }`}
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Seletor de Idioma */}
      <div className="flex items-center justify-center w-1/6">
        <button
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition-all"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Flag code={languages[language].flag} className="w-4 h-4" />
          <span>{languages[language].label}</span>
        </button>

        {isDropdownOpen && (
          <div className="absolute -bottom-20  w-36 bg-gray-800 shadow-lg rounded-md overflow-hidden">
            {Object.entries(languages).map(([key, { label, flag }]) => (
              <button
                key={key}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition-all"
                onClick={() => {
                  setLanguage(key as "en" | "pt");
                  setIsDropdownOpen(false);
                }}
              >
                <Flag code={flag} className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
