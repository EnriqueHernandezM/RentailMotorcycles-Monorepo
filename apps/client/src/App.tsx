import React, { useState, createContext } from "react";
import BarNavigation from "./Components/BarNavigation";
import MainHomePage from "./Components/MainHomePage";
import { ContextsConatain } from "./functions/themeFunctions";
function App() {
  return (
    <ContextsConatain>
      <div>
        <BarNavigation />
        <MainHomePage />
      </div>
    </ContextsConatain>
  );
}

export default App;
