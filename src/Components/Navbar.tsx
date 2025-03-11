import Flag from "react-world-flags";
import React, { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  }, [sections]);

  return (
    <nav className="fixed top-0 left-0 max-w-screen w-full bg-gray-900 bg-opacity-70 backdrop-blur-md text-white shadow-md z-10 transition-all duration-300 h-16 flex items-center lg:justify-between justify-around ">
      {/* Menu Normal (Desktop) */}
      <div className="hidden md:flex w-3/5 h-full">
        <ul className="w-full h-full flex justify-start">
          {sections.map((section) => (
            <li
              key={section.url}
              className="w-1/6 h-full flex items-center justify-center"
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

      {/* Menu Hamburguer (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XMarkIcon className="w-8 h-8 text-white" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 bg-opacity-95 flex flex-col items-center py-4 md:hidden">
          {sections.map((section) => (
            <a
              key={section.url}
              href={section.url}
              className="py-2 text-lg text-white hover:text-gray-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {section.name}
            </a>
          ))}
        </div>
      )}

      {/* Seletor de Idioma */}
      <div className="relative flex items-center justify-center w-2/6">
        <Menu>
          <Menu.Button className="flex w-auto items-center gap-2 bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition-all">
            <Flag code={languages[language].flag} className="w-4 h-4" />
            <span>{languages[language].label}</span>
          </Menu.Button>

          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-50"
          >
            <Menu.Items className="absolute top-12 w-36 bg-gray-800 shadow-lg rounded-full ">
              {Object.entries(languages).map(([key, { label, flag }]) => (
                <Menu.Item key={key}>
                  {({ active }) => (
                    <button
                      className={`w-full flex items-center gap-2 px-4 py-2 ${
                        active ? "bg-gray-700" : "bg-gray-800"
                      } transition-all`}
                      onClick={() => setLanguage(key as "en" | "pt")}
                    >
                      <Flag code={flag} className="w-4 h-4" />
                      <span>{label}</span>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
