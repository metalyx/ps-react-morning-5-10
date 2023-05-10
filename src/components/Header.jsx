import React from "react";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="w-full h-[50px] bg-slate-600 absolute left-0 top-0 sm:px-24 px-4 z-10">
      <ul className="flex w-full justify-between items-center h-full">
        <HeaderItem text={"Home"} />
        <HeaderItem text={"About"} />
        <HeaderItem text={"Contacts"} />
        <HeaderItem text={"Products"} />
      </ul>
    </header>
  );
};

export default Header;
