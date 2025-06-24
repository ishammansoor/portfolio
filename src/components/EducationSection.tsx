
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section ref={ref} className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 mb-8"
      >
        <GraduationCap className="text-primary" />
        <h2 className="text-2xl font-display font-bold">Education</h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="glass-card p-6 rounded-lg"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
          <h3 className="text-xl font-display font-bold text-foreground">Virginia Tech</h3>
          <span className="text-accent font-semibold">Expected Fall 2025</span>
        </div>
        
        <p className="text-primary font-medium mb-2">Bachelor of Computer Science</p>
        <div className="flex items-center mb-4">
          <span className="text-muted-foreground text-sm">GPA: 3.84/4.00 (Top 13% of university cohort)</span>
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Coursework</h4>
            <p className="text-sm text-foreground">
              Algorithms and Data Structures, Theory of Computation, Software Engineering and Design, Programming
              Languages & Techniques, Operating Systems, Applied Combinatorics, Intermediate Software Design, Cloud Software
              Development, Probability and Statistics for Engineers, Intro to Artificial Intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">Concentration</h4>
            <p className="text-sm text-foreground">
              Natural Language Processing, Machine Learning and AI
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
