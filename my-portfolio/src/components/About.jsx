import { useEffect, useRef, useState } from "react";

function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const aboutSection = aboutRef.current;

    if (!aboutSection || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`about${isVisible ? " about--visible" : ""}`}
    >
      <div className="about-heading">
        <p className="section-eyebrow about-reveal about-reveal--eyebrow">
          A little about me
        </p>

        <h2 className="about-reveal about-reveal--heading">
          Curious about how things work,
          <span> and where they can go.</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text about-reveal about-reveal--text">
          <p>
            I'm a Computer Science and Engineering student at the University of
            California, Merced. I'm currently exploring areas such as computer
            vision, digital image processing, robotics, and the Internet of
            Things.
          </p>

          <p>
            I enjoy building things that live at the intersection of creativity
            and technology, from web applications and desktop software to
            systems that interact with the physical world.
          </p>

          <p>
            Right now, I am learning about computer vision, digital image processing, robotics, and signal processing for the Internet of Things. 
            I am also interested in learning more about artificial intelligence and machine learning.
            I enjoy exploring different areas of computer science and building my knowledge through new projects and experiences. 
            There is always something new to learn, and I am excited to continue developing my skills and exploring new technologies.
          </p>
        </div>

        <div className="about-card about-reveal about-reveal--card">
          <span className="about-symbol">✦</span>

          <p className="about-card-label">Currently exploring</p>

          <div className="exploration-tags">
            <span>Computer Vision</span>
            <span>Robotics</span>
            <span>AI</span>
            <span>Machine Learning</span>
            <span>IoT</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;