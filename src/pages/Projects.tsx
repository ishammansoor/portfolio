
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const projects = [
    {
      title: "VT Hacks 13 (Winner) - FACEAID",
      description: "Led a team of developers in building FaceAID, a real-time AI medical data access app recognized with Best Hack Supporting Diversity & Inclusion at VTHacks 13 (2025) for advancing equitable emergency healthcare technology.",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?q=80&w=2070&auto=format&fit=crop",
      tags: ["AI", "Healthcare", "Real-time Data"],
      category: "AI",
      github: "https://github.com/ishammansoor"
    },
    {
      title: "AIRE (AI Retirement Engineer)",
      description: "Developed during VTHacks, this project uses the Gemini 1.5 Flash generative model to create personalized retirement plans, increasing planning accuracy by 40% compared to traditional systems.",
      image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "Gemini 1.5 Flash", "Prompt Engineering", "API Integration"],
      category: "AI",
      github: "https://github.com/ishammansoor/RetirementAI"
    },
    {
      title: "MathQGen",
      description: "A full-stack AI-powered web application enabling educators to generate customizable, grade-level math problems, featuring a custom LLM pipeline optimized with advanced prompting techniques and real-time PDF generation.",
      image: "https://images.unsplash.com/photo-1434582881033-282a0be020b5?q=80&w=2070&auto=format&fit=crop",
      tags: ["LLM", "OCR", "Firebase", "PDF Generation"],
      category: "AI",
      github: "https://github.com/ishammansoor"
    },
    {
      title: "NLP Emotion Recognition",
      description: "Natural language processing models for emotion recognition and sarcasm detection using advanced ML techniques on Kaggle datasets.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "NLP", "Machine Learning", "TensorFlow"],
      category: "ML",
      github: "https://github.com/ishammansoor/AI-and-Machine-Learning/blob/main/Emotional_Analysis.ipynb"
    },
    {
      title: "ML Face Recognition System",
      description: "Leveraged TensorFlow prebuilt models to create facial recognition, pose detection, and object detection systems with real-time processing capabilities.",
      image: "https://images.unsplash.com/photo-1526378787940-576a539ba69d?q=80&w=2034&auto=format&fit=crop",
      tags: ["Python", "TensorFlow", "Computer Vision", "ML"],
      category: "ML",
      github: "https://github.com/ishammansoor/AI-and-Machine-Learning"
    },
    {
      title: "e-Dirasa Platform",
      description: "Designed and developed a full-stack prototype website for a startup non-profit organization to foster community connections and boost digital member engagement.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2074&auto=format&fit=crop",
      tags: ["JavaScript", "HTML/CSS", "Web Development", "UI/UX"],
      category: "Web",
      github: "https://github.com/ishammansoor"
    },
    {
      title: "Unity Mars Habitat Design",
      description: "Developed 3D models of Mars habitat designs using Unity Engine for NASA research, improving astronaut spatial planning efficiency.",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2069&auto=format&fit=crop",
      tags: ["Unity", "C#", "3D Modeling", "Space Research"],
      category: "3D",
      github: "https://github.com/ishammansoor"
    }
  ];
  
  const categories = ["All", "AI", "ML", "Web", "3D"];
  
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
