import { useThemeValue } from "../functions/ThemeContext";

export default function ContainerResume() {
  const typeLigthValue: boolean = useThemeValue();
  return (
    <div
      id={
        typeLigthValue === false
          ? "containerTextResume"
          : "containerTextResumeNigth"
      }
    >
      <h2 id="colorOneContainerResume"> Are you ready </h2>
      <br />

      <p>
        If yo want proof a motorcy incredible or need to work , trasnspoting or
        only livin a one adventure.
        <br />
        This site is for you
        <br />
        First create A account with informacion personal and contact
        <br />
        The only hard is take a choice above bike select
        <br />
      </p>
    </div>
  );
}
