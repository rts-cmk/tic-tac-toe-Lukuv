import { useState } from "react";
import "./Settings.sass";

function Settings({
  open,
  setSettingsOpen,
}: {
  open: boolean;
  setSettingsOpen: (open: boolean) => void;
}) {
  const [backgroundColor, setBackgroundColor] = useState("#333333");
  const [fontColor, setFontColor] = useState("#e4e4e4");
  const [lineColor, setLineColor] = useState("#800080");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Apply styles to the <body>
    document.body.style.backgroundColor = backgroundColor;

    document.querySelectorAll(".headerH1").forEach((el) => {
      (el as HTMLElement).style.color = `${fontColor}`;
    });
    document.querySelectorAll(".bottom-border").forEach((el) => {
      (el as HTMLElement).style.borderBottom = `5px solid ${lineColor}`;
    });
    document.querySelectorAll(".right-border").forEach((el) => {
      (el as HTMLElement).style.borderRight = `5px solid ${lineColor}`;
    });
    setSettingsOpen(false);
  };

  return (
    <div
      id="settingsTap"
      className={`settingsTap ${open ? "settingsTapOpen" : ""}`}
    >
      <form onSubmit={handleSubmit}>
        <label>
          Background Color:
          <input
            name="bagColor"
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Text Color:
          <input
            name="fontColor"
            type="color"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Line Color:
          <input
            name="lineColor"
            type="color"
            value={lineColor}
            onChange={(e) => setLineColor(e.target.value)}
          />
        </label>
        <input className="Submit" type="submit" value="Apply" />
      </form>
    </div>
  );
}

export default Settings;
