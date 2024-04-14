import { useThemeValue } from "../functions/ThemeContext";

export default function FooterPage() {
  const themeValue = useThemeValue();
  const actualDate = new Date();
  return (
    <footer id={themeValue === false ? "footerPage" : "footerPageNigth"}>
      <div>
        <li>Terms and conditions</li>
        <li>Privacy</li>
        <li>About us</li>
      </div>
      <div>
        <li>Mexico</li>
        <li>{`${actualDate.getFullYear()}`}</li>
        <li>All rights reserved</li>
      </div>
      <div id="lastColumInCenter">
        <li>Development by Enrique Hernandez Montiel</li>
      </div>
    </footer>
  );
}
