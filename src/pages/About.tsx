
import { motion } from "framer-motion";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ResearchPublications from "@/components/ResearchPublications";
import EducationSection from "@/components/EducationSection";
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="font-display text-4xl font-bold mb-4">About Me</h1>
            <div className="h-1 w-20 bg-accent mx-auto mb-8 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className="rounded-xl overflow-hidden mb-6 aspect-square">
                  <img
                    src="/portfolio/isham.jpg"
                    alt="Isham Kalappurackal Mansoor"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h2 className="font-display text-2xl font-bold mb-2">Isham K. Mansoor</h2>
                <p className="text-primary font-medium mb-4">Software Engineer & AI Enthusiast</p>
                
                <div className="flex space-x-4 mb-6">
                  <a 
                    href="https://github.com/ishammansoor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary p-3 rounded-full text-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/isham-mansoor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary p-3 rounded-full text-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:ishamkmansoor@gmail.com" 
                    className="bg-secondary p-3 rounded-full text-foreground hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <p>Chesapeake, Virginia, 23322</p>
                    <p>(757) 505-5152</p>
                    <p>ishamkmansoor@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-6 rounded-lg mb-10">
                <h2 className="text-2xl font-display font-bold mb-4">Hello there!</h2>
                <div className="space-y-4 text-foreground">
                  <p>
                    I'm Isham Kalappurackal Mansoor, a Computer Science student at Virginia Tech with a passion for creating innovative solutions using AI and modern web technologies.
                  </p>
                  <p>
                    My journey in technology began with a fascination for how software could solve complex problems. This led me to pursue a degree in Computer Science, where I've focused on Natural Language Processing and Machine Learning.
                  </p>
                  <p>
                    Throughout my academic and professional experience, I've had the opportunity to work on diverse projects ranging from mobile applications to AI-powered tools. I've collaborated with talented teams to deliver solutions that make a real difference.
                  </p>
                  <p>
                    I believe in continuous learning and staying at the forefront of technology. When I'm not coding, I enjoy exploring new tech, contributing to open-source projects, and mentoring fellow students.
                  </p>
                </div>
              </div>
              
              <EducationSection />
              <ExperienceTimeline />
              <ResearchPublications />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
