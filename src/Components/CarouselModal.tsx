import { FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Modal from "./Modal";

interface Section {
  name: string;
  title: string;
  text: string[];
  url: string;
}

interface CarouselModalProps {
  items: {
    image: string;
    title: string;
    text: string;
    link: string;
  }[];
  section: Section;
}

const CarouselModal: FC<CarouselModalProps> = ({ items, section }) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-[60%] h-4/5 overflow-hidden flex items-center justify-center relative">
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.length > 0
          ? items.map((item, i) => (
              <div
                key={i}
                className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center bg-neutral-800 rounded-lg p-4"
              >
                <div className="flex flex-col w-2/3 h-[80%] items-center justify-center border border-indigo-500 bg-slate-900 p-10 gap-5 rounded-lg shadow-lg shadow-neutral-700">
                  <h2 className=" text-2xl font-semibold w-full text-start p-3">
                    {item.title}
                  </h2>
                  <img
                    src={item.image}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-[80%] object-cover rounded-lg"
                  />
                  <div className="w-full flex items-center justify-end">
                    <Modal
                      ModalTitle={item.title}
                      ModalDescription={item.text}
                      ModalLink={item.link}
                      ModalImage={item.image}
                      section={section}
                      triggerButton={
                        <button className=" px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg font-semibold ">
                          {section.text[2]}
                        </button>
                      }
                    />
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-[5%] top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md"
      >
        <ChevronLeft size={24} color="black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md"
      >
        <ChevronRight size={24} color="black" />
      </button>
    </div>
  );
};

export default CarouselModal;
