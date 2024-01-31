import logoNav from "../images/logoNavBar.png";
import { useChangeTheme, useThemeValue } from "../functions/ThemeContext";
import { availableRoutes, useChangeRout } from "../functions/RoutsContext";

export default function BarNavigation() {
  let typeLigth = useThemeValue();

  const changeTheme = useChangeTheme();
  const changeRout = useChangeRout();
  return (
    <nav id={typeLigth === false ? "navBar" : "navBarNigth"}>
      <ul>
        <li onClick={() => changeRout(availableRoutes.home)}>
          <a className="logoNavBar" href="#">
            Rentail Motorcycles
          </a>
          <img id="logoNavBarImg" src={logoNav} alt="Logo Motorcycle" />
        </li>
        <li onClick={() => changeRout(availableRoutes.formConnectAcount)}>
          <a href="#"> Log in </a>
        </li>
        <li>
          <a onClick={() => changeRout(availableRoutes.formAdmin)} href="#">
            Form Admin
          </a>
        </li>
      </ul>{" "}
      <label id="containerSwitchLigth">
        <input
          type="checkbox"
          onChange={(e) => changeTheme(e)}
          name="siwchTypeLigth"
          id="switchTypeLigth"
        />
        <div className="rail">
          <span className="circle"> </span>
        </div>
      </label>
    </nav>
  );
}
