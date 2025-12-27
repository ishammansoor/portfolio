import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Calendar, MapPin } from "lucide-react";

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  index: number;
}

const TimelineItem = ({ title, company, location, period, description, index }: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.1 * index }}
      className="flex gap-2 sm:gap-4"
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary" />
        <div className="w-0.5 h-full bg-border" />
      </div>
      
      <div className="pb-8 sm:pb-10 w-full">
        <div className="glass-card p-3 sm:p-6 rounded-lg">
          <div className="flex flex-col gap-2 mb-3 sm:mb-4">
            <h3 className="text-base sm:text-xl font-display font-bold text-foreground">
              {title}
              <span className="block sm:inline sm:mx-2 text-muted-foreground text-sm sm:text-base">@</span>
              <span className="text-primary text-sm sm:text-base">{company}</span>
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar size={12} className="mr-1 sm:mr-1" />
                <span>{period}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={12} className="mr-1 sm:mr-1" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          
          <ul className="space-y-1 sm:space-y-2">
            {description.map((item, i) => (
              <li key={i} className="text-xs sm:text-sm text-foreground flex">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ResearchExperience = () => {
  const experiences = [
    {
      title: "Machine Learning Researcher",
      company: "Virginia Tech",
      location: "Blacksburg, VA",
      period: "Dec 2024 – Present",
      description: [
        "Explored energy-efficient AI strategies for resource-constrained systems including IoT devices and wearable healthcare technologies, conducting detailed analyses of pruning and distillation techniques using Google Colab.",
        "Optimized model efficiency and reduced resource consumption by monitoring CPU usage to evaluate energy conservation methods, demonstrating significant resource savings and providing insights into energy-aware AI solutions for real-world applications."
      ]
    },
    {
      title: "Undergraduate Student Researcher",
      company: "Virginia Tech",
      location: "Blacksburg, VA",
      period: "Jan 2024 – May 2025",
      description: [
        "Developed MathQGen, a full-stack AI-powered web application enabling educators to generate customizable, grade-level math problems, featuring a custom LLM pipeline optimized with advanced prompting techniques and real-time PDF generation.",
        "Designed and integrated LLM requests; engineered few-shot prompting strategies to ensure accurate question generation.",
        "Built custom OCR functionality for image-based input, managed secure Firebase Firestore integration with structured database storage, and implemented dynamic template filtering with client-side PDF rendering for flexible exports."
      ]
    }
  ];
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <div ref={ref} className="py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
      >
        <FlaskConical className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
        <h2 className="text-xl sm:text-2xl font-display font-bold">Research Experience</h2>
      </motion.div>
      
      <div className="ml-1 sm:ml-2">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ResearchExperience;
