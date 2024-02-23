import BarNavigation from "./Components/BarNavigation";
import MainHomePage from "./Components/MainHomePage";
import { ContextsThemeContain } from "./functions/ThemeContext";
import { InputsAssistan } from "./functions/InputsAssistan";

import CreateCountForm from "./Components/CreateCountForm";
import { availableRoutes, useRoutCurrent } from "./functions/RoutsContext";
//esto de arriba es parte de ca,biar el enrutwamiento para el loigin
import AdminPanel from "./Components/AdminPanel";
import ConnectCountForm from "./Components/ConnectCountForm";
import FooterPage from "./Components/FooterPage";
function App() {
  const routCurrent = useRoutCurrent();
  return (
    <ContextsThemeContain>
      <InputsAssistan>
        <div>
          <BarNavigation />
          {routCurrent === availableRoutes.home && <MainHomePage />}
          {routCurrent === availableRoutes.formCreateAccount && (
            <CreateCountForm />
          )}
          {routCurrent === availableRoutes.formConnectAcount && (
            <ConnectCountForm />
          )}
          {routCurrent === availableRoutes.formAdmin && <AdminPanel />}{" "}
          <FooterPage />
        </div>
      </InputsAssistan>
    </ContextsThemeContain>
  );
}

export default App;
