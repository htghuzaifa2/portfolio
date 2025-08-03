import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string;
  imageHint: string;
  tags: string[]
}

const ProjectCard = ({ title, description, imageUrl, imageHint, tags }: ProjectCardProps) => {
  return (
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
  )
}

export default ProjectCard
