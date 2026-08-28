import { useEffect, useRef, useState } from "react";
import {
	FaCode,
	FaCss3Alt,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaJava,
	FaPython,
	FaReact,
} from "react-icons/fa";
import {
	SiCplusplus,
	SiFlask,
	SiJavascript,
	SiVscodium,
} from "react-icons/si";

const technologies = [
	{ name: "JavaScript", icon: SiJavascript, tone: "peach" },
	{ name: "Python", icon: FaPython, tone: "green" },
	{ name: "React", icon: FaReact, tone: "purple", featured: true },
	{ name: "C++", icon: SiCplusplus, tone: "peach" },
	{ name: "Java", icon: FaJava, tone: "green" },
	{ name: "HTML", icon: FaHtml5, tone: "purple" },
	{ name: "CSS", icon: FaCss3Alt, tone: "peach" },
];

const developmentTools = [
	{ name: "Flask", icon: SiFlask },
	{ name: "REST APIs", icon: FaCode },
	{ name: "Git", icon: FaGitAlt },
	{ name: "GitHub", icon: FaGithub },
	{ name: "VS Code", icon: SiVscodium },
];

const foundations = [
	"Data Structures",
	"Algorithm Design",
	"Discrete Mathematics",
	"Linear Algebra",
	"Differential Equations",
	"Numerical Methods",
	"Boolean Algebra",
	"Digital Circuits",
	"Debugging",
	"Problem Solving",
];

const exploring = [
	"Computer Vision",
	"Digital Image Processing",
	"Robotics",
	"Signal Processing",
	"Internet of Things",
	"Artificial Intelligence",
	"Machine Learning",
	"Natural Language Processing",
	"Human-Computer Interaction",
];

function Skills() {
	const skillsRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const skillsSection = skillsRef.current;

		if (!skillsSection || !("IntersectionObserver" in window)) {
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

		observer.observe(skillsSection);

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={skillsRef}
			id="skills"
			className={`skills${isVisible ? " skills--visible" : ""}`}
		>
			<div className="skills-intro skills-reveal skills-reveal--intro">
				<p className="section-eyebrow">Skills &amp; exploration</p>
				<h2>The tools I use, and the questions I keep following.</h2>
				<p className="skills-summary">
					A growing toolkit shaped by building projects, strengthening the
					fundamentals, and making room for ideas that are still unfolding.
				</p>
			</div>

			<div className="skills-toolkit skills-reveal skills-reveal--toolkit">
				<div className="skills-toolkit-header">
					<div>
						<p className="skills-kicker">In my toolkit</p>
						<h3>Languages and tools I build with</h3>
					</div>
					<span className="skills-count">12 tools</span>
				</div>

				<div className="technology-layout">
					<div className="technology-grid">
						{technologies.map(({ name, icon: Icon, tone, featured }, index) => (
							<div
								className={`technology-card technology-card--${tone}${
									featured ? " technology-card--featured" : ""
								}`}
								style={{ "--card-delay": `${index * 55}ms` }}
								key={name}
							>
								<Icon aria-hidden="true" />
								<span>{name}</span>
							</div>
						))}
					</div>

					<div className="development-tools">
						<p className="skills-kicker">Development tools</p>
						<div className="development-tool-list">
							{developmentTools.map(({ name, icon: Icon }) => (
								<div className="development-tool" key={name}>
									<Icon aria-hidden="true" />
									<span>{name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="skills-lower-grid">
				<div className="foundation-panel skills-reveal skills-reveal--foundation">
					<p className="skills-kicker">Core foundations</p>
					<h3>The thinking underneath the work.</h3>
					<div className="foundation-tags">
						{foundations.map((foundation) => (
							<span key={foundation}>{foundation}</span>
						))}
					</div>
				</div>

				<div className="exploration-panel skills-reveal skills-reveal--exploration">
					<div className="exploration-heading">
						<span className="exploration-symbol" aria-hidden="true">
							✦
						</span>
						<div>
							<p className="skills-kicker">Currently exploring</p>
							<h3>Making space for what comes next.</h3>
						</div>
					</div>
					<p className="exploration-summary">
						Active areas of learning where I am expanding my technical range
						through study and hands-on projects.
					</p>
					<div className="exploration-topics">
						{exploring.map((topic, index) => (
							<span
								style={{ "--topic-delay": `${index * 45}ms` }}
								key={topic}
							>
								{topic}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
