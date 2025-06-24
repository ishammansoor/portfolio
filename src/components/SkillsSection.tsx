
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code } from 'lucide-react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++"]
    },
    {
      name: "Web & Mobile",
      skills: ["React", "Node.js", "HTML", "CSS"]
    },
    {
      name: "Data & AI",
      skills: ["TensorFlow", "PyTorch", "NLP", "Machine Learning"]
    },
    {
      name: "Tools & Others",
      skills: ["Git", "Firebase", "MongoDB"]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div ref={ref} className="py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
      >
        <Code className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
        <h2 className="text-xl sm:text-2xl font-display font-bold">Technical Skills</h2>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-display font-bold text-base sm:text-lg mb-3 sm:mb-4 text-primary">{category.name}</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-secondary text-foreground px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
