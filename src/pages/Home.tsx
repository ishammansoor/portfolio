
import HeroSection from "@/components/HeroSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredProjects = [
    {
      title: "AIRE (Retirement AI)",
      description: "Developed during VTHacks, this project uses the Gemini 1.5 Flash generative model to create personalized retirement plans, increasing planning accuracy by 40% compared to traditional systems.",
      image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?q=80&w=2070&auto=format&fit=crop",
      tags: ["AI", "Gemini 1.5", "Prompt Engineering"],
      github: "https://github.com/ishammansoor"
    },
    {
      title: "NLP Emotion Recognition",
      description: "Natural language processing models for emotion recognition, sarcasm detection, and heart attack prediction using Kaggle datasets.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
      tags: ["NLP", "Machine Learning", "Python"],
      github: "https://github.com/ishammansoor"
    },
    {
      title: "ML Face Recognition",
      description: "Leveraged TensorFlow prebuilt models to create facial recognition, pose detection, and object detection projects.",
      image: "https://images.unsplash.com/photo-1526378787940-576a539ba69d?q=80&w=2034&auto=format&fit=crop",
      tags: ["TensorFlow", "ML", "Computer Vision"],
      github: "https://github.com/ishammansoor"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <ExperienceTimeline />
        
        <div className="py-12 sm:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 md:mb-0"
            >
              <h2 className="text-xl sm:text-2xl font-display font-bold">Featured Projects</h2>
              <p className="text-muted-foreground text-sm sm:text-base">Some of my recent work</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button asChild variant="outline" className="group text-sm">
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
        
        <SkillsSection />
      </div>
    </div>
  );
};

export default Home;
