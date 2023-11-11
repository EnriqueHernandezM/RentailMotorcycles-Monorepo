import logoNav from "../images/logoNavBar.png";
import { useChangeTheme, useThemeValue } from "../functions/themeFunctions";

export default function BarNavigation() {
  const typeLigth = useThemeValue();
  const changeTheme = useChangeTheme();
  return (
    <nav id={typeLigth === false ? "navBar" : "navBarNigth"}>
      <ul>
        <li>
          <a className="logoNavBar" href="###">
            Rentail Motorcycles
          </a>
          <img id="logoNavBarImg" src={logoNav} alt="Logo Motorcycle" />
        </li>
        <li>
          <a href="##"> Hola 1</a>
        </li>
        <li>
          <a href="##">Hola 2</a>
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
      <p id="ttt"> {`${typeLigth}`}</p>
    </nav>
  );
}
