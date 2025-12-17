import { ExternalLink } from 'lucide-react'

interface WorkCardProps {
  title: string
  date: string
  role: string
  description: React.ReactNode
  tags: string
  image?: string
  imageSize?: number
  link?: string
}

export function WorkCard({
  title,
  date,
  role,
  description,
  tags,
  image,
  imageSize = 85,
  link,
}: WorkCardProps) {
  return (
    <div className="w-[min(100%,500px)] flex-shrink-0">
      <div className="w-full h-full flex flex-col sm:flex-row bg-light-blue/20 border-2 border-light-blue rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(200,200,200,0.3)] transition-shadow p-8">
        {/* Left side - Image */}
        {image && (
          <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-4">
            <img
              src={image}
              alt={title}
              style={{ width: imageSize }}
              className="mb-4"
            />
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
          </div>
        )}
        
        {/* Right side - Content */}
        <div className="flex-1 flex flex-col text-center sm:text-left">
          <h2 className="font-mono text-2xl">
            {title}
            <span className="block text-sm mt-2">{date}</span>
          </h2>
          <p className="font-mono text-lg text-light-blue mt-2">{role}</p>
          <div className="font-mono text-base sm:text-sm text-light-blue leading-relaxed mt-2">
            {description}
          </div>
          <div className="mt-auto pt-4 flex justify-end">
            <p className="font-mono text-xs text-gray-300">{tags}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
