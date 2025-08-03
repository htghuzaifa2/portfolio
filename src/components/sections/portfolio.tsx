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
    <section id="portfolio" className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Code2 className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={project.title} className="fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection
