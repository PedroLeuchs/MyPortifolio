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
  ];

  return (
    <section
      key={section.url} // ✅ Agora a key está na Section corretamente
      id={section.url.substring(1)}
      className="min-h-screen h-auto flex items-center justify-center text-white text-3xl font-bold transition-all duration-700 ease-in-out transform bg-neutral-800 pb-20"
    >
      <img
        src="./assets/datail_extra.svg"
        alt="Detalhe"
        className={`h-screen absolute left-44 animate-pulse -z-20${
          indexImg % 2 === 0 ? "rotate-180 " : ""
        } drop-shadow-lg-custom`}
      />

      <div className="w-full h-full flex flex-col items-center justify-center  ">
        <div className="flex lg:flex-wrap flex-nowrap flex-col items-start lg:justify-center justify-start gap-20">
          {cardItems.map((cardItems) => (
            <Card cardItems={cardItems} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experencie;
