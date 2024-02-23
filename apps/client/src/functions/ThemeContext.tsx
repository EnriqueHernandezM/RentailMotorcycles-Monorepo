import { log } from "console";
import React, { createContext, useState, useContext, useEffect } from "react";

const ContextTypeLigth = createContext<boolean>(false);
const ContextFunctionChangeTheme = createContext<Function>(Function);

export const useThemeValue = () => {
  return useContext(ContextTypeLigth);
};
export const useChangeTheme = () => {
  return useContext(ContextFunctionChangeTheme);
};

export function ContextsThemeContain(props: { children: React.ReactNode }) {
  const [typeLigth, setTypeLigth] = useState<boolean>(false);
  useEffect(() => {
    const getTypeLigtLocalMem = localStorage.getItem("stateThemeLigtType");
    switch (getTypeLigtLocalMem) {
      case null || "false":
        setTypeLigth(false);
        break;
      case "true":
        setTypeLigth(true);
        break;
    }
  }, []);

  const changeStateOfSwichTypeLigth = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTypeLigth(e.target.checked);
    const sendTypeLigt: string = JSON.stringify(e.target.checked);
    localStorage.setItem("stateThemeLigtType", sendTypeLigt);
  };
  return (
    <ContextTypeLigth.Provider value={typeLigth}>
      <ContextFunctionChangeTheme.Provider value={changeStateOfSwichTypeLigth}>
        <div className={typeLigth === false ? "app" : "appNigth"}>
          {props.children}
        </div>
      </ContextFunctionChangeTheme.Provider>
    </ContextTypeLigth.Provider>
  );
}
