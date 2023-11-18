import BarNavigation from "./Components/BarNavigation";
import MainHomePage from "./Components/MainHomePage";
import { ContextsThemeConatain } from "./functions/ThemeContext";
import CreateCountForm from "./Components/CreateCountForm";
import { RoutsContext } from "./functions/RoutsContext";
import { useRoutCurrent } from "./functions/RoutsContext";
function App() {
  const routCurrent = useRoutCurrent();
  return (
    <ContextsThemeConatain>
      <div>
        <BarNavigation />
        {routCurrent === true && <MainHomePage />}
        {routCurrent === false && <CreateCountForm />}
      </div>
    </ContextsThemeConatain>
  );
}

export default App;
