import React from "react";
import SideLayout from "./SideLayout";
import SideLayout2 from "./SideLayout2";

type Props = { children: React.ReactNode };

const LayoutDecoration: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:grid grid-cols-2"
      >
        <div className="flex items-center justify-start ">
          <SideLayout className="-ml-[22px] translate-y-[-250px]" />
        </div>
        <div className="flex items-center justify-end">
          <SideLayout2 className="-mr-[22px] -translate-y-[-250px]" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 pt-8 pb-16">
        {children}
      </div>
    </div>
  );
};

export default LayoutDecoration;