function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting hero-reveal greeting-reveal">
          Hello, hola, bonjour, <span>👋🏻</span>
        </p>

        <h1 className="hero-reveal title-reveal">
          I'm <span className="hero-name">Freysell.</span>
        </h1>

        <p className="hero-intro hero-reveal intro-reveal">
          I'm a Computer Science and Engineering student exploring the space
          where creativity, technology, and curiosity meet.
        </p>

        <div className="hero-buttons hero-reveal buttons-reveal">
          <a href="#projects" className="primary-button">
            Explore my work
            <span>→</span>
          </a>

          <a href="#about" className="secondary-button">
            Get to know me
          </a>
        </div>
      </div>

      <div className="hero-visual visual-reveal">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="orb orb-three"></div>

        <div className="hero-message">
          <span className="message-symbol">✦</span>
          <p>Still growing, still exploring.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;