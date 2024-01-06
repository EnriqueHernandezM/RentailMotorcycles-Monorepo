import BarNavigation from "./Components/BarNavigation";
import MainHomePage from "./Components/MainHomePage";
import { ContextsThemeConatain } from "./functions/ThemeContext";
import CreateCountForm from "./Components/CreateCountForm";
import { availableRoutes, useRoutCurrent } from "./functions/RoutsContext";
//esto de arriba es parte de ca,biar el enrutwamiento para el loigin
import AdminPanel from "./Components/AdminPanel";
import ConnectCountForm from "./Components/ConnectCountForm";
function App() {
  const routCurrent = useRoutCurrent();
  return (
    <ContextsThemeConatain>
      <div>
        <BarNavigation />
        {routCurrent === availableRoutes.home && <MainHomePage />}
        {routCurrent === availableRoutes.formCreateAccount && (
          <ConnectCountForm />
        )}
        {routCurrent === availableRoutes.formAdmin && <AdminPanel />}
      </div>
    </ContextsThemeConatain>
  );
}

export default App;
