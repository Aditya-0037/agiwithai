import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  type: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, type, description, image, link }: ProjectProps) => (
  <div className="card project-card">
    <div className="project-img-wrap">
      <Image src={image} alt={`${title} screenshot`} fill style={{ objectFit: 'cover' }} />
    </div>
    <div className="project-content">
      <span className="project-tag">{type}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
        View Project →
      </a>
    </div>
  </div>
);

const projects: ProjectProps[] = [
  {
    title: '0GSKILLS',
    type: 'AI Agents / Infrastructure',
    description:
      'The missing layer between AI agents and 0G apps. Modular SKILL.md guides for 0G Chain — EVM, storage, compute. Agents pull markdown over HTTPS; no install.',
    image: '/projects/0gskills.png',
    link: 'https://www.0gskills.com/',
  },
  {
    title: 'KaggleIngest',
    type: 'SaaS / AI Tools',
    description:
      'Win Kaggle Competitions Faster. Give your LLMs proper context about Kaggle competitions with automated data ingestion and structured context building.',
    image: '/projects/kaggleingest.png',
    link: 'https://www.kaggleingest.com/',
  },
  {
    title: 'A2ZBTC',
    type: 'Education / AI Platform',
    description:
      'Master Bitcoin From A to Z. AI explanations, interactive tools, A-Z encyclopedia, quizzes, and everything you need to go from zero to Bitcoin expert.',
    image: '/projects/a2zbtc.png',
    link: 'https://www.a2zbtc.com/',
  },
];

const Projects = () => (
  <section id="work" className="bg-grey">
    <div className="container">
      <div className="section-title">
        <h2>Featured Work</h2>
        <p>Real products, shipped for real clients. Here&apos;s what we&apos;ve built.</p>
      </div>
      <div className="grid grid-3">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
