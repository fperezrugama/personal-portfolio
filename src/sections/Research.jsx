import { useEffect, useRef, useState } from "react";
import researchPaper from "../assets/Perez_Freysell_Chain_of_Thought_Prompting_in_Large_Language_Models_Mechanisms_Performance_Gains_and_Limitations_of_Reasoning.pdf";

const researchProject = {
  course: "CSE 188",
  courseTitle: "Natural Language Processing",
  university: "University of California, Merced",
  title: "Chain-of-Thought Reasoning Evaluation",
  description:
    "This research investigates how different prompting strategies affect the reasoning performance of Large Language Models.",
  questions: [
    "Does Chain-of-Thought prompting improve reasoning accuracy?",
    "Does self-consistency sampling further improve reliability?",
    "What types of errors do models make under different prompting strategies?",
  ],
  methods: [
    {
      name: "Standard",
      description: "Direct answer with no reasoning.",
    },
    {
      name: "Chain-of-Thought",
      description: "Step-by-step reasoning before answering.",
    },
    {
      name: "Self-Consistency",
      description: "Multiple CoT outputs followed by majority voting.",
    },
  ],
  findings: [
    "Standard prompting performed poorly on multi-step reasoning.",
    "Chain-of-Thought significantly improved accuracy.",
    "Self-consistency improved robustness, but did not always outperform Chain-of-Thought.",
  ],
  technologies: [
    "Python",
    "Large Language Models",
    "Prompting",
    "Chain-of-Thought",
    "Self-Consistency",
    "Ollama",
    "Natural Language Processing",
  ],
  github: "https://github.com/fperezrugama/cot-reasoning-evaluation",
  paper: researchPaper,
  paperTitle: "Chain-of-Thought Prompting in Large Language Models: Mechanisms, Performance Gains, and Limitations of Reasoning",
  author: "Freysell Perez Rugama",
};

function Research() {
  const researchRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const researchSection = researchRef.current;

    if (!researchSection || !("IntersectionObserver" in window)) {
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

    observer.observe(researchSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={researchRef}
      id="research"
      className={`research${isVisible ? " research--visible" : ""}`}
    >
      <div className="research-intro research-reveal research-reveal--intro">
        <p className="section-eyebrow">Research</p>
        <h2>Questions I wanted to understand.</h2>
        <p className="research-summary">
          Explorations in language, reasoning, and the systems behind intelligent technology.
        </p>
      </div>

      <article className="research-project">
        <div className="research-paper-preview research-reveal research-reveal--visual">
          <a
            href={researchProject.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="paper-preview-link"
            title="Open research paper PDF"
          >
            <div className="paper-preview-content">
              <div className="paper-preview-header">
                <div className="paper-badge">RESEARCH PAPER</div>
              </div>
              <div className="paper-preview-title">{researchProject.paperTitle}</div>
              <div className="paper-preview-meta">
                <p>{researchProject.author}</p>
                <p>{researchProject.university}</p>
              </div>
              <div className="paper-preview-footer">
                <span className="paper-icon">📄</span>
              </div>
            </div>
          </a>
        </div>

        <div className="research-content research-reveal research-reveal--content">
          <div className="research-header">
            <p className="research-label">{researchProject.course} / {researchProject.courseTitle}</p>
            <h3>{researchProject.title}</h3>
          </div>

          <p className="research-description">{researchProject.description}</p>

          <div className="research-section">
            <p className="research-kicker">Research Questions</p>
            <ul className="research-questions">
              {researchProject.questions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>

          <div className="research-methods-visual">
            <p className="research-kicker">Methods</p>
            <div className="methods-comparison">
              {researchProject.methods.map((method, index) => (
                <div key={index} className="method-item">
                  <div className="method-label">{method.name}</div>
                  <div className="method-arrow">↓</div>
                  <div className="method-description">{method.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="research-section">
            <p className="research-kicker">What the Experiments Suggested</p>
            <ul className="research-findings">
              {researchProject.findings.map((finding, index) => (
                <li key={index}>{finding}</li>
              ))}
            </ul>
          </div>

          <div className="research-technologies">
            {researchProject.technologies.map((tech, index) => (
              <span
                key={tech}
                style={{ "--research-tag-delay": `${index * 40}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="research-paper-section">
            <div className="research-actions">
              <a
                href={researchProject.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="research-button"
              >
                Read the paper
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={researchProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="research-button research-button--secondary"
              >
                View on GitHub
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Research;
