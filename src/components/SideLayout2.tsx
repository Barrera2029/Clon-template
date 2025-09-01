import React from "react";

const colorPalette = [
  "", "", "bg-orange-300",
  "", "bg-emerald-300", "bg-yellow-200",
  "", "bg-sky-300", "",
  "", "bg-orange-300", "",
  "bg-emerald-300", "bg-yellow-200", "",
  "bg-sky-300", "bg-orange-300", "bg-emerald-300",
  "", "bg-purple-400", "bg-sky-300",
  "bg-emerald-300", "bg-orange-300", "",
  "bg-sky-300", "bg-purple-400", "",
];

const maskPatterns = [
  0, 0, 1,
  0, 1, 1, 
  0, 1, 0, 
  0, 1, 0, 
  1, 1, 0, 
  1, 1, 1, 
  0, 1, 1, 
  1, 1, 0, 
  1, 1, 0,
];

type Props = { className?: string };

const SideLayout2: React.FC<Props> = ({ className = "" }) => {
  return (
    <div className={`grid grid-cols-3 gap-1 ${className}`}>
      {maskPatterns.map((mask, index) => (
        <div
          key={index}
          className={`${
            mask ? colorPalette[index % colorPalette.length] : "opacity-0"
          } 
                      w-8 h-8 md:w-10 md:h-10 rounded-md`}
        />
      ))}
    </div>
  );
};

export default SideLayout2;
