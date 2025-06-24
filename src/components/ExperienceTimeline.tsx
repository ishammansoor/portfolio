import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Lead Software Engineering Intern",
      company: "Around Entertainment",
      location: "New Jersey",
      period: "Jun 2024 – Oct 2024",
      description: [
        "Led an 8-member development team for a mobile application, overseeing the entire tech stack for both frontend and backend, and enhanced application scalability by 25%.",
        "Optimized API calls utilizing Firebase, Mailchimp, and Mapbox, resulting in a 10% reduction in response times and improved data retrieval efficiency.",
        "Implemented an agile workflow, boosting development cycle efficiency by 25% and ensuring well-structured, documented processes."
      ]
    },
    {
      title: "Research Engineer",
      company: "NASA Research (VASTS)",
      location: "Langley Research Center, VA",
      period: "Jun 2022 (4 weeks)",
      description: [
        "Conducted research on Mars habitat design, utilizing Unity Engine to develop 3D models, improving astronaut spatial planning by 5%."
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
        <Briefcase className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
        <h2 className="text-xl sm:text-2xl font-display font-bold">Work Experience</h2>
      </motion.div>
      
      <div className="ml-1 sm:ml-2">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
