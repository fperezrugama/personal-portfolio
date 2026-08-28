import { useEffect, useRef, useState } from "react";
import wavelengthImage from "../assets/wavelength.png";

const projects = [
  {
    title: "Wavelength",
    label: "Collaborative full-stack project",
    description:
      "A multiplayer web version of the party game Wavelength, where teams communicate through clues, discussion, and carefully placed guesses on a hidden spectrum.",
    details:
      "React, Flask, and SQLite come together in a full-stack multiplayer experience with authentication, rooms, chat, scoring, and persistent game state.",
    image: wavelengthImage,
    technologies: ["React", "JavaScript", "Flask", "Python", "SQLite"],
    supportingTechnologies: ["Flask-Login", "SQLAlchemy", "CSS"],
    role:
      "I focused primarily on backend architecture, authentication, database models, multiplayer room logic, game flow, frontend and backend integration, and several social and personalization features.",
    contributions: [
      "Backend architecture and database models",
      "Authentication and protected routes",
      "Multiplayer rooms, scoring, and synchronization",
      "Chat, profiles, reactions, and theme preferences",
    ],
    live: "",
    github: "https://github.com/yumanli1/wavelength.git?utm_source=chatgpt.com",
    featured: true,
  },
];

function ProjectLink({ href, children }) {
  if (!href) {
    return (
      <span
        className="project-button project-button--disabled"
        aria-disabled="true"
        title="A live project link will be added later"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      className="project-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function Projects() {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const featuredProject = projects.find((project) => project.featured);

  useEffect(() => {
    const projectsSection = projectsRef.current;

    if (!projectsSection || !("IntersectionObserver" in window)) {
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
      { threshold: 0.18 }
    );

    observer.observe(projectsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className={`projects${isVisible ? " projects--visible" : ""}`}
    >
      <div className="projects-intro project-reveal project-reveal--intro">
        <p className="section-eyebrow">Selected work</p>
        <h2>Things I have built while following my curiosity.</h2>
        <p className="projects-summary">
          A small collection shaped by coursework, collaboration, and learning
          by making.
        </p>
      </div>

      <article className="featured-project">
        <div className="project-image-wrap project-reveal project-reveal--image">
          <div className="project-image-note">01 / selected project</div>
          <img
            src={featuredProject.image}
            alt="Wavelength login screen and project introduction"
          />
        </div>

        <div className="featured-project-content project-reveal project-reveal--content">
          <p className="project-label">{featuredProject.label}</p>
          <h3>{featuredProject.title}</h3>
          <p className="project-description">{featuredProject.description}</p>
          <p className="project-details">{featuredProject.details}</p>

          <div className="project-technologies" aria-label="Technologies used">
            {featuredProject.technologies.map((technology, index) => (
              <span
                key={technology}
                style={{ "--project-tag-delay": `${index * 55}ms` }}
              >
                {technology}
              </span>
            ))}
            {featuredProject.supportingTechnologies.map((technology) => (
              <span className="project-technology--supporting" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="project-role">
            <p className="project-kicker">My role</p>
            <p>{featuredProject.role}</p>
            <div className="contribution-list">
              {featuredProject.contributions.map((contribution) => (
                <span key={contribution}>{contribution}</span>
              ))}
            </div>
          </div>

          <div className="project-actions">
            <ProjectLink href={featuredProject.live}>View project</ProjectLink>
            <ProjectLink href={featuredProject.github}>
              GitHub repository
            </ProjectLink>
          </div>
        </div>
      </article>

      <div className="projects-future project-reveal project-reveal--future">
        <div>
          <p className="project-kicker">More work</p>
          <h3>More ideas will find their way here.</h3>
        </div>
        <p>
          The collection is intentionally growing, one thoughtful project at a
          time.
        </p>
      </div>
    </section>
  );
}

export default Projects;
