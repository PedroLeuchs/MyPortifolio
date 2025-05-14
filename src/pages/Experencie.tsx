import Card from "../Components/Card";

export interface Section {
  name: string;
  title: string[];
  text: string[];
  url: string;
}

interface ExperenciePageProps {
  section: Section;
  indexImg: number;
}

const Experencie: React.FC<ExperenciePageProps> = ({ indexImg, section }) => {
  const cardItems = [
    {
      titleCard: section.title[0],
      subTitleCard: section.text[0],
      textCard: section.text[1],
    },
    {
      titleCard: section.title[1],
      subTitleCard: section.text[2],
      textCard: section.text[3],
    },
    {
      titleCard: section.title[2],
      subTitleCard: section.text[4],
      textCard: section.text[5],
    },
  ];

  return (
    <section
      key={section.url}
      id={section.url.substring(1)}
      className="scroll-mt-[9vh] mt-[9vh] lg:h-[91vh] min-h-[91vh] h-auto flex flex-col items-center justify-around text-white text-3xl font-bold transition-all duration-700 ease-in-out transform bg-neutral-800 pb-20"
    >
      <img
        src="./assets/datail_extra.svg"
        alt="Detalhe"
        className={`h-screen absolute left-44 animate-pulse -z-20${
          indexImg % 2 === 0 ? "rotate-180 " : ""
        } drop-shadow-lg-custom`}
      />
      <h1 className="text-start w-4/5 lg:text-5xl md:text-4xl text-3xl">
        {section.name}
      </h1>

      <div className="w-full h-full flex flex-col items-center justify-center mt-20">
        <div className="flex lg:flex-wrap flex-nowrap lg:flex-row flex-col items-start lg:justify-center justify-start gap-20">
          {cardItems.map((cardItems) => (
            <Card cardItems={cardItems} />
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Experencie;
