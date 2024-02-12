import { useThemeValue } from "../functions/ThemeContext";

export default function FooterPage() {
  const themeValue = useThemeValue();
  const actualDate = new Date();
  return (
    <footer id={themeValue === false ? "footerPage" : "footerPageNigth"}>
      <div>
        <li>Terminos y condicions</li>
        <li>privacidad</li>
        <li>Acerca de nosotros</li>
      </div>
      <div>
        <li>Mexico</li>
        <li>{`${actualDate.getFullYear()}`}</li>
        <li>Derechos reservados</li>
      </div>
      <div id="lastColumInCenter">
        <li>Development by Enrique Hernandez Montiel</li>
        <li></li>
        <li></li>
      </div>
    </footer>
  );
}
