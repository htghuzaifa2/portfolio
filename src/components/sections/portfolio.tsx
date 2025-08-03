import ProjectCard from '@/components/project-card'

const projects = [
  {
    title: 'E-Commerce Website - huzi.pk',
    description: 'A modern and performant e-commerce platform built with the latest web technologies, offering a seamless shopping experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'e-commerce website',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Radix UI', 'shadcn/ui', 'Lucide', 'Vercel', 'Cloudflare'],
    url: 'https://huzi.pk',
  },
]

const PortfolioSection = () => {
  return (
    <section id="portfolio">
        <div className="section-heading">
            <h2>MY PROJECTS</h2>
            <p>Here is a project I'm proud of. It represents a challenge I was excited to tackle.</p>
        </div>

      <div className="portfolio-container">
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
