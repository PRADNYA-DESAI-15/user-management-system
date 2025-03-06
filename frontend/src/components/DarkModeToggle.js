import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button className="btn btn-secondary mt-2" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
