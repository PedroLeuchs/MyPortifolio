import React from "react";
import "../styles/Card.css";
export interface cardItems {
  titleCard: string;
  subTitleCard: string;
  textCard: string;
}

interface ExperenciePageProps {
  cardItems: cardItems;
}

const Card: React.FC<ExperenciePageProps> = ({ cardItems }) => {
  return (
    <div className="group relative lg:w-[25vw] w-[80vw] h-auto bg-[#191c29] text-[#58c7fa] cursor-pointer rounded-lg p-7 flex flex-col items-start gap-5 transition-all duration-500">
      <h1 className="text-2xl font-semibold">{cardItems.titleCard}</h1>
      <div className="p-2 gap-4 flex flex-col">
        <h2 className="text-sm font-extrabold text-indigo-600">
          {cardItems.subTitleCard}
        </h2>
        <p className=" text-sm font-medium text-white text-justify transition-all duration-500 ease-in-out">
          {cardItems.textCard}
        </p>
      </div>

      {/* Pseudo-elemento com animação de rotação */}
      <div className="absolute transition-all duration-300 top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square blur-3xl bg-gradient-to-r from-[#5ddcff] via-[#3c67e3] to-[#4e00c2] opacity-80 group-hover:opacity-30 z-[-1] animate-spin-gradient"></div>
    </div>
  );
};

export default Card;
