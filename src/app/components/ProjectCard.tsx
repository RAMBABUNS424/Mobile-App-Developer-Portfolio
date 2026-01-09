import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  duration?: string;
}

export function ProjectCard({ title, description, image, tags, demoUrl, githubUrl, duration }: ProjectCardProps) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full flex flex-col border border-blue-500/20">
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/30 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {duration && (
          <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-blue-400/30">
            {duration}
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl mb-3 text-gray-100">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        {(demoUrl || githubUrl) && (
          <div className="flex gap-3">
            {demoUrl && (
              <a
                href={demoUrl}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                className="flex items-center gap-2 px-4 py-2 border-2 border-blue-500/30 text-blue-400 rounded-lg hover:border-blue-400 hover:bg-blue-500/10 transition-all text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}