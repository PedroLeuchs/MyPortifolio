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
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
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
            className="sphere3d absolute w-20 h-20 bg-indigo-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg p-2"
            style={{
              transform: `rotate(${
                (angle * 180) / Math.PI
              }deg) translate(${radius}px) rotate(${
                -(angle * 180) / Math.PI
              }deg)`,
              animation: `orbitAnimation ${
                elements.length * 4
              }s linear infinite`,
              animationDelay: `-${
                (index / elements.length) * (elements.length * 4)
              }s`,
            }}
          >
            {item.icon}
            <span className="text-base text-center font-light text-white absolute bottom-8">
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Orbit;
