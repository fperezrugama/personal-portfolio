function ThemeToggle({ theme, toggleTheme }) {
  const isTwilight = theme === "twilight";

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        isTwilight
          ? "Switch to pastel garden theme"
          : "Switch to twilight garden theme"
      }
      title={
        isTwilight
          ? "Switch to Pastel Garden"
          : "Switch to Twilight Garden"
      }
    >
      <span className="theme-icon">
        {isTwilight ? "☀" : "☾"}
      </span>

      <span className="theme-label">
        {isTwilight ? "Twilight" : "Pastel"}
      </span>
    </button>
  );
}

export default ThemeToggle;