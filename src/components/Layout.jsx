import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Layout = ({ children }) => {
  const [currentView] = useContext(GlobalContext).view;

  return (
    <div className="w-full sm:px-24 px-4 relative top-[50px] z-0">
      {currentView}
      {children}
    </div>
  );
};

export default Layout;
