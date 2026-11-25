import ProgramProjectCard from "../components/ProgramProjectCard";
import charityWaterScreenshot from "../assets/career-accelator/charity-water-game.png";

const charityWaterDemo = "https://fperezrugama.github.io/05-charity-water-game-prototype/";

const projects = [
  {
    id: "catch-the-clean-water",
    title: "Catch the Clean Water",
    organization: "charity: water — Global Career Accelerator",
    category: "Web Development / Game Development",
    description:
      "A browser game about clean water access. Players collect clean drops and avoid polluted water before time runs out. The project grew from a prototype into a game styled for charity: water.",
    features: [
      "Easy, Medium, and Hard modes with adaptive milestones, score tracking, and penalties for collecting polluted water.",
      "Background music and sound effects with audio controls, plus victory confetti, replay, and difficulty switching.",
      "Score sharing and links to charity: water’s website and donation resources.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "GitHub Pages"],
    screenshot: {
      src: charityWaterScreenshot,
      alt: "Catch the Clean Water on Medium difficulty, with blue drops in the play area beneath the score and countdown timer.",
      width: 1960,
      height: 1526,
      href: charityWaterDemo,
      linkLabel: "Play Catch the Clean Water (opens in a new tab)",
    },
    links: [
      {
        label: "Play Game",
        href: charityWaterDemo,
        primary: true,
      },
      {
        label: "Source Code",
        href: "https://github.com/fperezrugama/05-charity-water-game-prototype",
      },
    ],
  },
];

function GlobalCareerAccelerator() {
  return (
    <section className="program-projects" id="global-career-accelerator" aria-labelledby="accelerator-title">
      <div className="projects-intro">
        <h2 id="accelerator-title">Global Career Accelerator</h2>
      </div>

      <div className="program-project-grid">
        {projects.map((project) => (
          <ProgramProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default GlobalCareerAccelerator;
