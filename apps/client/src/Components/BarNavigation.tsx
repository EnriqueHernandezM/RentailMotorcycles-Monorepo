import React, { useState } from "react";
import logoNav from "../images/logoNavBar.png";
export default function BarNavigation(
  { typeLigth }: { typeLigth: boolean },
  {
    changeStateOfSwichTypeLigth,
  }: {
    changeStateOfSwichTypeLigth: (
      e: React.ChangeEvent<HTMLInputElement>
    ) => void;
  }
) {
  /* stateNigthMode: boolean,
  changeStateOfSwichTypeLigth: void */
  return (
    <nav id="navBar">
      <ul>
        <li>
          <a className="logoNavBar" href="">
            Rentail Motorcycles
          </a>
          <img id="logoNavBarImg" src={logoNav} alt="Logo Motorcycle" />
        </li>
        <li>
          <a href="">{`${typeLigth}`}</a>
        </li>
        <li>
          <a href="">Hola 2</a>
        </li>
      </ul>{" "}
      <label id="containerSwitchLigth">
        <input
          type="checkbox"
          onChange={(e) => changeStateOfSwichTypeLigth(e)}
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
