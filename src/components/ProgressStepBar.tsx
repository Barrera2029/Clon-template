import React from "react";

type Props = { total: number; current: number };

const ProgressStepBar: React.FC<Props> = ({ total, current }) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className= {`h-1.5 w-16 rounded-full ${
            index < current ? "bg-slate-800" : "bg-slate-300"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressStepBar;
