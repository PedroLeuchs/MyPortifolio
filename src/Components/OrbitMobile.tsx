import React, { useEffect, useState } from "react";

interface OrbitProps {
  centralText: string;
  elements: { icon: React.ReactNode; name: string }[];
}

const Orbit: React.FC<OrbitProps> = ({ centralText, elements }) => {
  const [isClient, setIsClient] = useState(false);
  const radius = 220;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] flex items-center justify-center rounded-full border-2 border-indigo-500 ">
      {/* Texto Central */}
      <div className="absolute text-white text-2xl font-bold">
        {centralText}
      </div>

      {/* Esferas Orbitando */}
      {elements.map((item, index) => {
        const angle = (index / elements.length) * (2 * Math.PI);
        return (
          <div
            key={index}
            className="lg:hidden sphere3dMobile absolute w-20 h-20 bg-indigo-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg p-2"
            style={{
              transform: `rotate(${
                (angle * 180) / Math.PI
              }deg) translate(${radius}px) rotate(${
                -(angle * 180) / Math.PI
              }deg)`,
              animation: `orbitAnimationMobile  ${
                elements.length * 4
              }s linear infinite`,
              animationDelay: `-${
                (index / elements.length) * (elements.length * 4)
              }s`,
            }}
          >
            {item.icon}
            <span className="lg:text-base text-sm text-center w-10/12 font-light text-white absolute top-4">
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Orbit;
