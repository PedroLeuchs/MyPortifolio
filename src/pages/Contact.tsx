import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import SocialMidia from "../Components/SocialMidia";
import { MdEmail } from "react-icons/md";
import DownloadButton from "../Components/DownloadButton";

export interface Section {
  name: string;
  title: string[];
  text: string[];
  url: string;
}

interface ContactPageProps {
  section: Section;
  indexImg: number;
}

const Contact: React.FC<ContactPageProps> = ({ section }) => {
  const socialMedias = [
    {
      icon: <FaGithub className=" text-5xl" />,
      name: "GitHub",
      linK: "https://github.com/PedroLeuchs",
    },
    {
      icon: <FaInstagram className=" text-5xl" />,
      name: "Instagram",
      linK: "https://www.instagram.com/pedro_leuchs",
    },
    {
      icon: <FaLinkedin className=" text-5xl" />,
      name: "Linkedin",
      linK: "https://www.linkedin.com/in/pedro-henrique-dos-santos-leuchs-899456244/",
    },
  ];

  return (
    <section
      key={section.url}
      id={section.url.substring(1)}
      className="lg:h-[50vh] h-[93.4vh] w-full max-w-screen flex flex-col items-start justify-center text-white text-3xl font-bold transition-all duration-700 ease-in-out transform bg-neutral-800"
    >
      <hr className="w-full border-t-2 drop-shadow-lg-custom border-indigo-500 animate-pulse " />
      {/* footer */}
      <div className="w-full h-full bg-neutral-900 lg:flex-row flex flex-col items-center justify-center gap-5">
        <div className="flex-1/3 lg:h-full lg:w-auto w-full flex flex-col justify-start items-center">
          {/* Photo */}
          <div className="h-2/3 flex flex-col justify-start items-center ">
            <hr className="h-1/4 w-[2px] bg-indigo-500 border-0 animate-pulse drop-shadow-lg-custom" />
            <div className="lg:w-[180px] lg:h-[180px] w-[120px] h-[120px] rounded-full drop-shadow-lg-custom2">
              <img
                className="rounded-full border-indigo-500 border-2 "
                src="./assets/myPhoto.jpg"
                alt=""
              />
            </div>
            <div className="flex items-end gap-1">
              <h1 className="lg:text-3xl md:text-2xl text-xl text-white mt-5">
                {section.title[0]}
              </h1>
              <span className="lg:text-6xl md:text-4xl text-2xl text-indigo-400">
                .
              </span>
            </div>
          </div>
          {/* curriculo */}
          <div className="flex flex-col h-1/3 justify-center">
            <DownloadButton text={section.title[4]} />
          </div>
        </div>
        {/* Sosical Medias */}
        <div className="flex-1/3 lg:h-full lg:w-auto w-full flex flex-col lg:justify-start justify-center items-center">
          <hr className="h-1/4 w-[2px] bg-indigo-500 border-0 animate-pulse drop-shadow-lg-custom lg:flex hidden" />
          <div className="w-full h-1/2 flex flex-col gap-8 justify-center items-center lg:border-2 border-none border-indigo-500/50 rounded-lg">
            <h1 className="lg:text-4xl md:text-3xl text-2xl text-white">
              {section.title[1]}
            </h1>
            <div className="flex w-full h-1/2 lg:gap-4 gap-6 justify-center items-start">
              {socialMedias.map((socialMedia) => (
                <SocialMidia
                  icon={socialMedia.icon}
                  name={socialMedia.name}
                  linK={socialMedia.linK}
                />
              ))}
            </div>
          </div>
          <hr className="h-1/4 w-[2px] bg-indigo-500 border-0 animate-pulse drop-shadow-lg-custom lg:flex hidden" />
        </div>
        {/* Contact me */}
        <div className="flex-1/3 flex flex-col items-start justify-center gap-5 pl-16">
          <div className="flex flex-col gap-1 ">
            <h1 className="lg:text-2xl text-xl text-white">
              {section.title[2]}
            </h1>
            <div className="flex items-center justify-center gap-5 p-4">
              <MdEmail className="text-3xl text-indigo-500" />
              <h1 className="lg:text-lg text-base text-white p-2">
                {section.text[0]}
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="lg:text-2xl text-xl text-white">
              {section.title[3]}
            </h1>
            <div className="flex items-center justify-center gap-5 p-4">
              <FaPhone className="text-3xl text-indigo-500" />
              <h1 className="lg:text-lg text-base text-white p-2">
                {section.text[1]}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-b-2 drop-shadow-lg-custom border-indigo-500 animate-pulse " />
    </section>
  );
};

export default Contact;
