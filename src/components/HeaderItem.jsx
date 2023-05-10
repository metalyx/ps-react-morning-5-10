import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const HeaderItem = ({ text }) => {
  const [_, setCurrentView] = useContext(GlobalContext).view;

  return (
    <li
      onClick={() => setCurrentView(`/${text}`)}
      className="hover:text-blue-100 transition-all font-bold text-lg cursor-pointer text-blue-300"
    >
      {text}
    </li>
  );
};

export default HeaderItem;
