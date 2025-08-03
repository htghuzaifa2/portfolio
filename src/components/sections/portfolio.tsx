import ProjectCard from '@/components/project-card'

const projects = [
  {
    title: 'E-Commerce Website - huzi.pk',
    description: 'A modern and performant e-commerce platform built with the latest web technologies, offering a seamless shopping experience.',
    imageUrl: 'https://i.postimg.cc/k4HhM8Cq/huzi-pk.webp',
    imageHint: 'e-commerce website',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Radix UI', 'shadcn/ui', 'Lucide', 'Vercel', 'Cloudflare'],
    url: 'https://huzi.pk',
  },
  {
    title: 'Useful Online Tools for Modern Needs - tools.huzi.pk',
    description: 'Explore a variety of free utility tools for developers and everyday users.',
    imageUrl: 'https://i.postimg.cc/Hn7vrxW5/tools-website.webp',
    imageHint: 'online tools',
    tags: ['HTML', 'CSS', 'JavaScript', 'Google Analytics', 'Cloudflare'],
    url: 'https://tools.huzi.pk',
  },
  {
    title: 'Tech Blog - blogs.huzi.pk',
    description: 'A blog featuring tech guides and other useful articles.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'blogging website',
    tags: ['Blogging', 'Tech Guides', 'Next.js', 'React'],
    url: 'https://blogs.huzi.pk',
  },
]

const PortfolioSection = () => {
  return (
    <section id="portfolio">
        <div className="section-heading">
            <h2>MY PROJECTS</h2>
            <p>Here are some projects I'm proud of. Each represents a challenge I was excited to tackle.</p>
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
