import ProjectCard from '@/components/project-card'
import { Code2 } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with Stripe integration, user authentication, and an admin dashboard.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'Prisma'],
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'A powerful data visualization tool for SaaS companies to track metrics and user engagement.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard chart',
    tags: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure and intuitive mobile application for managing personal finances on the go.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative platform for teams to manage tasks, track progress, and communicate effectively.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'kanban board',
    tags: ['Vue.js', 'GraphQL', 'Apollo', 'PostgreSQL', 'Docker'],
  },
]

const PortfolioSection = () => {
  return (
    <section id="portfolio">
        <div className="section-heading">
            <h2>Featured Websites</h2>
            <p>Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.</p>
        </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={project.title} className="animate-on-load" style={{ animationDelay: `${index * 0.2}s` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection
