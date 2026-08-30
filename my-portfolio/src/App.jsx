import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./components/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Research from "./sections/Research";

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
        <About />
        <Skills />
        <Projects />
        <Research />
      </main>
    </div>
  );
}

export default App;