import { ExternalLink, Github, Smartphone, Award, Play } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    duration?: string;
    demoUrl?: string;
    githubUrl?: string;
    stats: { metric: string; value: string; label: string }[];
  };
  isSelected: boolean;
  onSelect: () => void;
}

export function ProjectCard({ project, isSelected, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      onClick={onSelect}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full border transition-all duration-300 relative ${
        isSelected
          ? "border-neon-cyan shadow-lg shadow-neon-cyan/20 bg-neon-cyan/5"
          : "border-white/5 hover:border-neon-blue/40"
      }`}
    >
      {/* Banner App Image / Showcase */}
      <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 relative select-none">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {project.duration && (
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] text-white/90 border border-white/10">
            {project.duration}
          </div>
        )}
        
        {/* Device Active Hologram Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
          <div className="flex items-center space-x-2 text-[10px] text-neon-cyan font-bold tracking-wide uppercase">
            <Smartphone className={`w-3.5 h-3.5 ${isSelected ? "animate-bounce" : ""}`} />
            <span>{isSelected ? "Active in Simulator" : "Click to Simulate"}</span>
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg text-white font-display font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-gray-400 mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-white/5 text-gray-300 rounded-full text-[10px] border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics summary list */}
          <div className="grid grid-cols-2 gap-2 py-3 border-t border-b border-white/5 mb-4">
            {project.stats.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[10px] text-zinc-500 uppercase font-semibold">{stat.label}</span>
                <span className="text-sm font-bold text-white font-mono mt-0.5">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-2 select-none">
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Stop selection card click
                className="p-2 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-white/30 transition-all"
                title="View Source on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-white/30 transition-all"
                title="Launch Web App"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className="flex items-center gap-1 text-[11px] text-neon-cyan font-bold tracking-wide uppercase hover:text-white transition-colors cursor-pointer"
          >
            <span>Run Preview</span>
            <Play className="w-3 h-3 fill-current" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}