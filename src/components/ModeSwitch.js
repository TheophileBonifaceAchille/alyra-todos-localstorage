import React, { useContext } from "react";
import { ModeContext } from "./../context/ModeContext";

const ModeSwitch = () => {
  const { mode, setMode } = useContext(ModeContext);
  const hanleModeChange = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="activate"
        checked={mode === "dark"}
        onChange={hanleModeChange}
      />
      <label className="form-check-label" htmlFor="activate">
        Mode Sombre
      </label>
    </div>
  );
};

export default ModeSwitch;