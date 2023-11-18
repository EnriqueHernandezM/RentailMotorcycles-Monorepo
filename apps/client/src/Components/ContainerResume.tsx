import { useThemeValue } from "../functions/ThemeContext";

export default function ContainerResume() {
  const typeLigthValue: boolean = useThemeValue();
  return (
    <div id="containerResume">
      <div id="colorOneContainerResume"></div>
      <div
        id={
          typeLigthValue === false
            ? "containerTextResume"
            : "containerTextResumeNigth"
        }
      >
        <h2> Are you ready </h2>
        <p>
          If yo want proof a motorcy incredible or need to work and trasnspoting{" "}
          <br />
          count on us{" "}
        </p>
      </div>
      <div id="colorTwoContainerResume"></div>
    </div>
  );
}
