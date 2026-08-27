import ThemeToggle from "./ThemeToggle";

function Navbar({ theme, toggleTheme }) {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        Freysell<span>.</span>
      </a>

      <nav className="navbar-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}

export default Navbar;