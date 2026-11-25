function ProgramProjectCard({ project }) {
  const {
    title, category, organization, description, features, technologies, links, screenshot,
  } = project;

  const preview = screenshot && (
    <img
      className="program-project-screenshot"
      src={screenshot.src}
      alt={screenshot.alt}
      width={screenshot.width}
      height={screenshot.height}
      loading="lazy"
    />
  );

  return (
    <article className="program-project-card">
      {screenshot && (
        <div className="program-project-preview">
          {screenshot.href ? (
            <a
              className="program-project-preview-link"
              href={screenshot.href}
              aria-label={screenshot.linkLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              {preview}
            </a>
          ) : preview}
        </div>
      )}

      <div className="program-project-content">
        <p className="project-label">{category}</p>
        <h3>{title}</h3>
        <p className="program-project-organization">{organization}</p>
        <p className="project-description">{description}</p>

        {features?.length > 0 && (
          <ul className="program-project-features">
            {features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        )}

        <ul className="project-technologies program-project-technologies" aria-label="Technologies used">
          {technologies.map((technology) => (
            <li key={technology}><span>{technology}</span></li>
          ))}
        </ul>

        <div className="project-actions">
          {links.map(({ label, href, primary }) => (
            <a
              className={`project-button${primary ? " project-button--primary" : ""}`}
              href={href}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProgramProjectCard;
