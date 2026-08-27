import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  const [theme, setTheme] = useState("pastel");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "pastel" ? "twilight" : "pastel"
    );
  };

  return (
    <div className="app" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;