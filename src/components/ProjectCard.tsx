import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string
  link?: string
  github?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="w-[min(100%,500px)] flex-shrink-0">
      <div className="w-full h-full flex flex-col bg-light-pink/20 border-2 border-light-pink rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(200,200,200,0.3)] transition-shadow p-8">
        <div className="flex-1 flex flex-col text-left">
          <h2 className="font-mono text-2xl">{title}</h2>
          
          {/* Links */}
          <div className="flex space-x-4 my-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-blue/50 hover:text-light-blue/100 transition-opacity"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-blue/50 hover:text-light-blue/100 transition-opacity"
              >
                <Github size={20} />
              </a>
            )}
          </div>
          
          <p className="font-mono text-base sm:text-sm text-light-blue leading-relaxed">
            {description}
          </p>
          <div className="mt-auto pt-4 flex justify-end">
            <p className="font-mono text-xs text-gray-300">{tags}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
