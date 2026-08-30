import { useEffect, useRef, useState } from "react";

function Contact() {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const contactSection = contactRef.current;

    if (!contactSection || !("IntersectionObserver" in window)) {
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

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className={`contact${isVisible ? " contact--visible" : ""}`}
    >
      <div className="contact-content">
        <div className="contact-intro contact-reveal">
          <p className="section-eyebrow">Let's connect</p>
          <h2>Find me on the web</h2>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/freysellperez"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link contact-reveal"
          >
            <span className="link-label">LinkedIn</span>
            <span aria-hidden="true" className="link-arrow">↗</span>
          </a>
          <a
            href="https://github.com/fperezrugama"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link contact-reveal"
          >
            <span className="link-label">GitHub</span>
            <span aria-hidden="true" className="link-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
