import { useState } from "react";
import BarNavigation from "./Components/BarNavigation";
import MainHomePage from "./Components/MainHomePage";

function App(): JSX.Element {
  const [typeLigth, setTypeLigth] = useState<boolean>(false);

  const changeStateOfSwichTypeLigth = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTypeLigth(e.target.checked);
  };

  return (
    <div className="App">
      <BarNavigation
        typeLigth={typeLigth}
        changeStateOfSwichTypeLigth={changeStateOfSwichTypeLigth}
      />
      <MainHomePage />
    </div>
  );
}

export default App;
