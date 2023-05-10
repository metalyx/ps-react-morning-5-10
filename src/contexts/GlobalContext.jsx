import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState("/home");
  return (
    <GlobalContext.Provider
      value={{
        view: [currentView, setCurrentView],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
