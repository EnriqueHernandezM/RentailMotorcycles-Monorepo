import React, { createContext, useState, useContext } from "react";

const ContextTypeLigth = createContext<boolean>(false);
const ContextFunctionChangeTheme = createContext<Function>(Function);

export const useThemeValue = () => {
  return useContext(ContextTypeLigth);
};
export const useChangeTheme = () => {
  return useContext(ContextFunctionChangeTheme);
};

export function ContextsThemeConatain(props: { children: React.ReactNode }) {
  const [typeLigth, setTypeLigth] = useState<boolean>(false);
  const changeStateOfSwichTypeLigth = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTypeLigth(e.target.checked);
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
