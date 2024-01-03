import BarNavigation from "./Components/BarNavigation";
import MainHomePage from "./Components/MainHomePage";
import { ContextsThemeConatain } from "./functions/ThemeContext";
import CreateCountForm from "./Components/CreateCountForm";
import { availableRoutes, useRoutCurrent } from "./functions/RoutsContext";
import AdminPanel from "./Components/AdminPanel";

function App() {
  const routCurrent = useRoutCurrent();
  return (
    <ContextsThemeConatain>
      <div>
        <BarNavigation />
        {routCurrent === availableRoutes.home && <MainHomePage />}
        {routCurrent === availableRoutes.formCreateAccount && (
          <CreateCountForm />
        )}
        {routCurrent === availableRoutes.formAdmin && <AdminPanel />}
      </div>
    </ContextsThemeConatain>
  );
}

export default App;
