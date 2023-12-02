import logoNav from "../images/logoNavBar.png";
import { useChangeTheme, useThemeValue } from "../functions/ThemeContext";
import { useChangeRout } from "../functions/RoutsContext";
export default function BarNavigation() {
  let typeLigth = useThemeValue();

  const changeTheme = useChangeTheme();
  const changeRout = useChangeRout();
  return (
    <nav id={typeLigth === false ? "navBar" : "navBarNigth"}>
      <ul>
        <li onClick={() => changeRout("/")}>
          <a className="logoNavBar" href="#">
            Rentail Motorcycles
          </a>
          <img id="logoNavBarImg" src={logoNav} alt="Logo Motorcycle" />
        </li>
        <li onClick={() => changeRout("/form")}>
          <a href="##"> Hola </a>
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
    </nav>
  );
}
