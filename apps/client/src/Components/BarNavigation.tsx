import React, { useState } from "react";

export default function BarNavigation() {
  const [typeLigth, setTypeLigth] = useState(false);

  const changeStateOfSwichTypeLigth = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTypeLigth(e.target.checked);
  };

  return (
    <nav id="navBar">
      <ul>
        <li>
          <a href="">Hola Logo</a>
        </li>
        <li>
          <a href="">Hola 1</a>
        </li>
        <li>
          <a href="">Hola 2</a>
        </li>
        <li>
          <a href="">Hola 3</a>
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
