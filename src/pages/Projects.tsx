
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const projects = [
    {
      title: "AIRE (Retirement AI)",
      description: "Developed during VTHacks, this project uses the Gemini 1.5 Flash generative model to create personalized retirement plans, increasing planning accuracy by 40% compared to traditional systems.",
      image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?q=80&w=2070&auto=format&fit=crop",
      tags: ["AI", "Gemini 1.5", "Prompt Engineering"],
      category: "AI",
      github: "https://github.com/ishammansoor"
    },
    {
      title: "NLP Emotion Recognition",
      description: "Natural language processing models for emotion recognition, sarcasm detection, and heart attack prediction using Kaggle datasets.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
      tags: ["NLP", "Machine Learning", "Python"],
      category: "NLP",
      github: "https://github.com/ishammansoor"
    },
    {
      title: "ML Face Recognition",
      description: "Leveraged TensorFlow prebuilt models to create facial recognition, pose detection, and object detection projects.",
      image: "https://images.unsplash.com/photo-1526378787940-576a539ba69d?q=80&w=2034&auto=format&fit=crop",
      tags: ["TensorFlow", "ML", "Computer Vision"],
      category: "ML",
      github: "https://github.com/ishammansoor"
    },
    {
      title: "e-Dirasa Website",
      description: "Designed a prototype website for a startup non-profit organization to foster community connections and boost digital member engagement.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2074&auto=format&fit=crop",
      tags: ["Web Development", "HTML/CSS", "JavaScript"],
      category: "Web",
      github: "https://github.com/ishammansoor"
    },
    {
      title: "Mobile App Development",
      description: "Led the development of a mobile application, overseeing the entire tech stack for both frontend and backend, enhancing application scalability by 25%.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
      tags: ["Mobile", "Firebase", "API Integration"],
      category: "Mobile",
      github: "https://github.com/ishammansoor"
    },
    {
      title: "Unity Mars Habitat",
      description: "Developed 3D models of Mars habitat designs using Unity Engine, improving astronaut spatial planning by 5% for NASA research.",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2069&auto=format&fit=crop",
      tags: ["Unity", "3D Modeling", "Space Research"],
      category: "3D",
      github: "https://github.com/ishammansoor"
    }
  ];
  
  const categories = ["All", "AI", "NLP", "ML", "Web", "Mobile", "3D"];
  
  const filteredProjects = filter
    ? projects.filter(project => project.category === filter)
    : projects;
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="font-display text-4xl font-bold mb-4">Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work, personal projects, and contributions.
          </p>
          <div className="h-1 w-20 bg-accent mx-auto mt-8 rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === (category === "All" ? null : category) ? "default" : "outline"}
              className="rounded-full transition-all duration-300"
              onClick={() => setFilter(category === "All" ? null : category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
