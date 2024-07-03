import React from "react";

const PageTitle = ({ children }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-3 h-5/6 xl:h-14 bg-brand-primary" />
      <p className="text-white-base text-[40px] xl:text-6xl font-extrabold tracking-wide">
        {children}
      </p>
    </div>
  );
};

export default PageTitle;
