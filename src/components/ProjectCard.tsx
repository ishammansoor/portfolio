
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  link?: string;
}

const ProjectCard = ({ title, description, image, tags, github, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl bg-white h-full min-h-[300px] sm:min-h-[350px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100" />
      
      <div className="relative h-full p-4 sm:p-6 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-0.5 sm:py-1 bg-primary/70 text-white text-xs rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1 sm:mb-2">{title}</h3>
          
          <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
          
          <div className="flex gap-2 sm:gap-3">
            {github && (
              <Button size="sm" variant="secondary" asChild>
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                  <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </Button>
            )}
            {link && (
              <Button size="sm" variant="secondary" asChild>
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Live project">
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
