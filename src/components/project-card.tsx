import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  imageHint: string
  tags: string[]
  url: string
}

const ProjectCard = ({ title, description, imageUrl, imageHint, tags, url }: ProjectCardProps) => {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="project-card">
        <div className="image-container">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            data-ai-hint={imageHint}
          />
        </div>
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
