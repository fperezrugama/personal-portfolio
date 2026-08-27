import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState("pastel");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "pastel" ? "twilight" : "pastel"
    );
  };

  return (
    <div className="app" data-theme={theme}>
      <div className="theme-toggle-container">
        <ThemeToggle
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>

      <main>
        <section className="test-section">
          <p className="eyebrow">
            🌿 Welcome to my digital garden
          </p>

          <h1>Hi, I'm Freysell.</h1>

          <p>
            Building digital experiences where creativity and technology meet.
          </p>

          <div className="color-test">
            <div className="color-card green">Green</div>
            <div className="color-card purple">Purple</div>
            <div className="color-card peach">Peach</div>
            <div className="color-card yellow">Yellow</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
